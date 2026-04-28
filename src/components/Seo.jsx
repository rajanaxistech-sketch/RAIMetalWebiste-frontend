import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Rai Metals";
const DEFAULT_IMAGE = "/uploads/Logo1.jpeg";

function Seo({
  title,
  description,
  keywords,
  robots = "index, follow",
  canonicalPath,
  ogType = "website",
  image = DEFAULT_IMAGE,
}) {
  const location = useLocation();
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const pathname = canonicalPath || location.pathname;
  const canonicalUrl = `${origin}${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${origin}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${origin}${image}`} />
    </Helmet>
  );
}

export default Seo;
