/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cyllabs.com',
  generateRobotsTxt: true, 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api', '/preview'],
      },
    ],
    additionalSitemaps: [
      'https://cyllabs.com/sitemap.xml',
      'https://cyllabs.com/sitemap-images.xml',
    ],
  },
  exclude: ['/api/*', '/preview'],
  // (Optional) If you have dynamic routes, you can configure them here
  // For example, if you have a blog at /blog/[slug]
  //
  // transform: async (config, path) => {
  //   // Get the last modified date for the page
  //   // This is just an example, you'll need to implement your own logic
  //   const lastmod = new Date().toISOString();
  //
  //   return {
  //     loc: path, // => this will be exported as http(s)://<siteUrl>/<path>
  //     changefreq: 'daily',
  //     priority: 0.7,
  //     lastmod: lastmod,
  //   };
  // },
};