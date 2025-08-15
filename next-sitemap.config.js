/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cyllabs.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/api', '/preview'] },
      ],
      additionalSitemaps: [
        'https://cyllabs.com/sitemap-images.xml', // ✅ only image sitemap
      ],
    },
    exclude: ['/api/*', '/preview'],
  };
  