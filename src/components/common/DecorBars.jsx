import './DecorBars.css'

/**
 * 장식용 막대 모음 (Hero, Banner 공통).
 * items 각 항목: [left, top, 박스너비, 박스높이, 회전(deg), 막대길이, 막대두께, 색]
 * 박스는 Figma에서 회전 후의 바운딩 박스이므로, 그 중심에 막대를 놓고 회전시킨다.
 */
export default function DecorBars({ items }) {
  return items.map(([left, top, w, h, rotate, length, thickness, color], i) => (
    <span
      key={i}
      className="decor-bar"
      style={{
        left: left + w / 2,
        top: top + h / 2,
        width: length,
        height: thickness,
        background: color,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    />
  ))
}
