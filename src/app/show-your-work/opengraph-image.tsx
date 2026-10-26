import { renderCard } from "../_og/card";

export const alt = "Show your work | Shipping with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderCard("Show your work");
}
