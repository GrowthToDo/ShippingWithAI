import { renderCard } from "../_og/card";

export const alt = "Here's how it works | Shipping with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderCard("Here's how it works");
}
