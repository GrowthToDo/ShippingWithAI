import type { Metadata } from "next";

// Page title for the tab and the link preview. The card itself comes from the
// route's opengraph-image.tsx.
export const pageMeta = (title: string): Metadata => ({
  title: `${title} | Shipping with AI`,
  openGraph: { title: `${title} | Shipping with AI`, siteName: "Shipping with AI", type: "website" },
});
