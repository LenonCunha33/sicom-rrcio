import type { Configuration, RuleSetRule } from "webpack";

const nextConfig = {
  webpack(config: Configuration) {
    // Pega a regra existente para SVG
    const fileLoaderRule = config.module?.rules?.find(
      (rule: RuleSetRule | any) => rule.test instanceof RegExp && rule.test.test(".svg")
    );

    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      config.module?.rules?.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [
              ...(typeof fileLoaderRule.resourceQuery === "object" &&
              "not" in fileLoaderRule.resourceQuery &&
              Array.isArray(fileLoaderRule.resourceQuery.not)
                ? fileLoaderRule.resourceQuery.not
                : []),
              /url/,
            ],
          },
          use: ["@svgr/webpack"],
        }
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
