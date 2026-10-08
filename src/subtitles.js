export function parseSubtitleData(input) {
  return {
    raw: input,
    parsed: Array.isArray(input) ? input : [input],
  };
}
