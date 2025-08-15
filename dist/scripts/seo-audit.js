"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const sitemap_1 = require("./sitemap");
const BASE_URL = process.argv[2] || 'http://localhost:3000';
async function auditPage(browser, url) {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const issues = [];
    const title = await page.title();
    if (!title) {
        issues.push('Missing title');
    }
    const description = await page.$eval('meta[name="description"]', (el) => el.content);
    if (!description) {
        issues.push('Missing meta description');
    }
    const canonical = await page.$eval('link[rel="canonical"]', (el) => el.href);
    if (!canonical) {
        issues.push('Missing canonical URL');
    }
    else {
        const response = await fetch(canonical);
        if (response.status !== 200) {
            issues.push(`Canonical URL (${canonical}) returned status ${response.status}`);
        }
    }
    const ogImage = await page.$eval('meta[property="og:image"]', (el) => el.content);
    if (!ogImage) {
        issues.push('Missing Open Graph image');
    }
    const images = await page.$$eval('img', (imgs) => imgs.map((img) => ({
        src: img.src,
        alt: img.alt,
    })));
    images.forEach((img) => {
        if (!img.alt) {
            issues.push(`Missing alt text for image: ${img.src}`);
        }
    });
    await page.close();
    return { url, issues };
}
async function main() {
    const sitemap = await (0, sitemap_1.getSitemap)(BASE_URL);
    const browser = await puppeteer_1.default.launch();
    const results = [];
    for (const url of sitemap) {
        const result = await auditPage(browser, url);
        results.push(result);
    }
    await browser.close();
    let hasErrors = false;
    results.forEach((result) => {
        if (result.issues.length > 0) {
            hasErrors = true;
            console.log(`\nIssues for ${result.url}:`);
            result.issues.forEach((issue) => {
                console.log(`- ${issue}`);
            });
        }
    });
    if (hasErrors) {
        process.exit(1);
    }
    else {
        console.log('\nSEO audit passed!');
    }
}
main();
