module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "Austin Codes", // Navigation and Site Title
  siteTitleAlt: "Austin Codes", // Alternative Site title for SEO
  siteTitleManifest: "AustinCodes",
  siteUrl: "https://blog.austincloveless.codes", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteHeadline: "Writing and publishing content", // Headline for schema.org JSONLD
  siteBanner: "/social/banner.jpg", // Your image for og:image tag. You can find it in the /static folder
  favicon: "src/favicon.png", // Your image for favicons. You can find it in the /src folder
  siteDescription:
    "Austin Codes with a focus on typography. Gatsby Starter powered by MDX.", // Your site description
  author: "Austin", // Author for schemaORGJSONLD
  siteLogo: "/social/avatar.jpeg", // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogSiteName: "austin", // Facebook Site Name - Optional
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#3498DB",
  backgroundColor: "#2b2e3c"
};
