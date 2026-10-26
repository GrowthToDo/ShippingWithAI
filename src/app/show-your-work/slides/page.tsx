import { pageMeta } from "../../_og/meta";
import Deck from "./deck";

// Slide deck behind the guest outreach video: Gautham screen-shares this
// while recording the 90-second pitch sent to prospective guests. The
// script lives in the GemoInc Working Doc. Same content as /show-your-work.
export const metadata = pageMeta("Show your work: slides");

export default function Slides() {
  return <Deck />;
}
