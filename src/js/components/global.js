export function isResp767() {
  let windowWidth = $(document).width();

  if (windowWidth < 768) return true;
  return false;
}
export function isResp1129() {
  let windowWidth = $(document).width();

  if (windowWidth < 1130) return true;
  return false;
}
