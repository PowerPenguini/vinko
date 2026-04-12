import { publicAsset } from "../assets";

export function Wordmark() {
  return (
    <a
      href="#top"
      className="inline-flex h-[clamp(4rem,8vw,5.8rem)] w-[clamp(4rem,8vw,5.8rem)] items-center justify-center overflow-hidden rounded-full bg-bone shadow-[0_16px_46px_rgba(0,0,0,0.24)]"
      aria-label="Vinko strona główna"
    >
      <img src={publicAsset("assets/vinko-logo.svg")} alt="Vinko z Beczki" className="block h-full w-full object-cover" />
    </a>
  );
}
