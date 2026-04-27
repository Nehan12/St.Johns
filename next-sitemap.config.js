/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://heritagecare.lk',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}