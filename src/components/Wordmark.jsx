import { publicAsset } from "../assets";

export function Wordmark() {
  return (
    <a href="#top" className="wordmark" aria-label="Vinko — strona główna">
      <img src={publicAsset("assets/vinko-logo.svg")} alt="" />
    </a>
  );
}
