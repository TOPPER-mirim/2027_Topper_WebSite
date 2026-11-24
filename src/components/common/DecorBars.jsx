import './DecorBars.css'

/**
 * 장식용 막대 모음 (Hero, Banner 공통).
 * items 각 항목: [left, top, 박스너비, 박스높이, 회전(deg), 막대길이, 막대두께, 색]
 * 박스는 Figma에서 회전 후의 바운딩 박스이므로, 그 중심에 막대를 놓고 회전시킨다.
 *
 * @param {Array} items - 막대 목록
 * @param {boolean} [animate=false] - true면 막대가 천천히 떠다닌다.
 *   (OS의 "동작 줄이기" 설정이 켜져 있으면 움직이지 않는다)
 */
export default function DecorBars({ items, animate = false }) {
  return items.map(([left, top, w, h, rotate, length, thickness, color], i) => (
    <span
      key={i}
      className={`decor-bar${animate ? ' decor-bar--float' : ''}`}
      style={{
        left: left + w / 2,
        top: top + h / 2,
        width: length,
        height: thickness,
        background: color,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        ...(animate && floatVars(i, left)),
      }}
    />
  ))
}

// 막대마다 움직임이 달라 보이도록, 순서(i)와 위치로 고정된 값을 만든다. (렌더마다 바뀌지 않음)
function floatVars(i, seed) {
  const n = i + Math.round(seed)
  return {
    '--float-x': `${((n * 37) % 5 - 2) * 10}px`,
    '--float-y': `${((n * 53) % 5 - 2) * 12}px`,
    '--float-dur': `${5 + ((n * 7) % 4)}s`,
    '--float-delay': `-${((n * 13) % 50) / 10}s`,
  }
}
