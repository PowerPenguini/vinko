import { publicAsset } from "../assets";

function sourceSet(name, widths, extension) {
  return widths
    .map((width) => `${publicAsset(`assets/editorial/${name}-${width}.${extension}`)} ${width}w`)
    .join(", ");
}

export function ResponsiveImage({
  name,
  widths,
  alt,
  width,
  height,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  imageClassName,
  loading = "lazy",
  fetchPriority,
  formats = ["avif", "webp"],
}) {
  const fallbackWidth = widths.at(-1);

  return (
    <picture className={className}>
      {formats.map((format) => (
        <source
          key={format}
          type={`image/${format}`}
          srcSet={sourceSet(name, widths, format)}
          sizes={sizes}
        />
      ))}
      <img
        src={publicAsset(`assets/editorial/${name}-${fallbackWidth}.jpg`)}
        srcSet={sourceSet(name, widths, "jpg")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={imageClassName}
      />
    </picture>
  );
}
