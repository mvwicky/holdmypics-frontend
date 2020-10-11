const colorPattern = "(([a-fA-F0-9]{3})|([a-fA-F0-9]{6}))|rand";

export const ALL_FORMATS = ["jpg", "jpeg", "gif", "png", "webp"] as const;
export const ALL_FONTS = [
  "Overpass",
  "Fira Mono",
  "Fira Sans",
  "Roboto",
] as const;

export const COLOR_PROPS = {
  type: "text",
  pattern: colorPattern,
  spellcheck: false,
  minlength: 3,
  required: true,
} as const;
