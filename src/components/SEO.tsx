import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO(): JSX.Element {
  const { site } = useStaticQuery(query);

  const { title, siteUrl, description } = site.siteMetadata;

  return (
    <Helmet>
      <html lang="en" />

      <link rel="preconnect" href="https://typekit.com" />
      <link rel="preconnect" href="https://use.typekit.net" />
      <link rel="preconnect" href="https://p.typekit.net" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />

      <link rel="stylesheet" href="https://use.typekit.net/tij0cln.css" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;
