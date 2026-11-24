// 시안은 1920px 기준이다. 화면 폭이 1920보다 작으면 페이지 전체를 폭에 비례해 줄인다.
export const DESIGN_WIDTH = 1920

/** 현재 적용 중인 축소 비율 (1 = 축소 없음). Layout이 resize마다 갱신한다. */
export function getFitScale() {
  return parseFloat(document.documentElement.dataset.fitScale) || 1
}

/**
 * 화면(스크롤바 제외) 폭에 맞춰 <html>에 zoom을 적용한다.
 * 축소 중에는 CSS 기준 폭이 정확히 1920px이 되므로 --page-w 를 1920px로 고정한다.
 * (zoom 안에서는 100vw 도 함께 줄어들어 전체 폭 섹션이 어긋나기 때문)
 */
export function applyFitScale() {
  const root = document.documentElement
  // 이전 zoom 영향을 빼고 실제 화면 폭을 잰다.
  root.style.zoom = ''
  const scale = Math.min(1, root.clientWidth / DESIGN_WIDTH)

  if (scale < 1) {
    root.style.zoom = String(scale)
    root.style.setProperty('--page-w', `${DESIGN_WIDTH}px`)
  } else {
    root.style.removeProperty('--page-w')
  }
  root.dataset.fitScale = String(scale)
  window.dispatchEvent(new Event('topper:fit'))
}
