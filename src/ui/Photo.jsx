import { photos, publicAsset } from "../assets";

const srcSet = (name, widths, ext) =>
  widths.map((w) => `${publicAsset(`assets/photos/${name}-${w}.${ext}`)} ${w}w`).join(", ");

export function Photo({
  name,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  loading = "lazy",
  fetchPriority,
  style,
}) {
  const meta = photos[name];
  const widths = meta.widths;
  const largest = widths.at(-1);
  return (
    <picture className={className} style={style}>
      <source type="image/avif" srcSet={srcSet(name, widths, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(name, widths, "webp")} sizes={sizes} />
      <img
        src={publicAsset(`assets/photos/${name}-${largest}.jpg`)}
        srcSet={srcSet(name, widths, "jpg")}
        sizes={sizes}
        alt={alt}
        width={meta.w}
        height={meta.h}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  );
}
