import photos from "./photos.json";

export const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

/** Photo manifest written by scripts/images.mjs: { name: { w, h, widths } } */
export { photos };
