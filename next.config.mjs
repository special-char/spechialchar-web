import BuilderDevTools from "@builder.io/dev-tools/next"

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  {
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      )
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                typescript: true,
                ext: "tsx",
              },
            },
          ],
        }
      )
      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i
      return config
    },
    // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    images: {
      // domains: ["cdn.builder.io"],
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
        },
        {
          protocol: "https",
          hostname: "minio.thespecialcharacter.com",
        },

        {
          protocol: "https",
          hostname: "cdn.builder.io",
        },
      ],
    },
  }
)

export default nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
//   images: {
//     domains: ["cdn.builder.io"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.builder.io",
//       },
//     ],
//     // dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// };

// export default nextConfig;
