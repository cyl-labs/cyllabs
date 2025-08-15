async function fetchAndParseSitemap(sitemapUrl: string): Promise<string[]> {
  try {
    const response = await fetch(sitemapUrl);
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${sitemapUrl} - ${response.statusText}`);
      return [];
    }
    const sitemapXml = await response.text();
    const locRegex = /<loc>(.*?)<\/loc>/g;
    const matches = sitemapXml.match(locRegex) || [];
    return matches.map(match => match.replace(/<\/?loc>/g, ''));
  } catch (error) {
    console.error(`Error fetching or parsing sitemap: ${sitemapUrl}`, error);
    return [];
  }
}

export async function getSitemap(baseUrl: string): Promise<string[]> {
  const rootSitemapUrl = `${baseUrl}/sitemap.xml`;
  const allUrls = new Set<string>();

  const urls = await fetchAndParseSitemap(rootSitemapUrl);

  const sitemapUrls = urls.filter(url => url.endsWith('.xml'));
  const pageUrls = urls.filter(url => !url.endsWith('.xml'));

  pageUrls.forEach(url => allUrls.add(url));

  for (const sitemapUrl of sitemapUrls) {
    const nestedUrls = await fetchAndParseSitemap(sitemapUrl);
    nestedUrls.forEach(url => allUrls.add(url));
  }

  // If the root sitemap has no .xml files, it might be a flat sitemap.
  if (sitemapUrls.length === 0 && pageUrls.length > 0) {
    return pageUrls;
  }

  return Array.from(allUrls);
}