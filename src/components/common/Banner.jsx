import Button from './Button'
import shape1 from '../../assets/banner/banner-shape-1.png'
import shape2 from '../../assets/banner/banner-shape-2.png'
import './Banner.css'

const COLORS = {
  blue50: 'var(--color-blue-50)',
  blue100: 'var(--color-blue-100)',
  blue300: 'var(--color-blue-300)',
  blue500: 'var(--color-blue-500)',
}

// Figma 좌표계 기준 장식 막대: [left, top, 박스 너비, 박스 높이, 회전(deg), 막대 두께, 색]
// 박스는 회전 후의 바운딩 박스이므로 중심점에 막대를 놓고 회전시킨다.
const BARS_BACK = [
  [32, 254, 84.745, 77.193, -138.59, 14.736, COLORS.blue500],
  [909.76, 365.22, 100.108, 42.244, -163.68, 14.736, COLORS.blue500],
]
const BARS_MID = [
  [426.2, 26.61, 98.645, 48.309, -159.51, 14.21, COLORS.blue500],
  [1022.96, -30.5, 86.582, 74.068, -140.92, 14.21, COLORS.blue100],
  [1352, 193, 87.681, 72.574, -142.15, 14.21, COLORS.blue300],
]
const BARS_FRONT = [
  [947.7, 174.39, 50.437, 98.093, -68.13, 14.21, COLORS.blue50],
  [874.54, -40.77, 62.76, 93.967, -60, 14.736, COLORS.blue500],
  [215.03, 307.2, 98.77, 47.791, 159.85, 14.21, COLORS.blue300],
  [696.91, -87.36, 74.648, 86.138, -129.57, 14.21, COLORS.blue300],
  [187.65, 0.46, 86.582, 74.068, -140.92, 14.21, COLORS.blue100],
  [401.93, 362.64, 86.582, 74.068, -140.92, 14.21, COLORS.blue100],
]

function Bars({ items }) {
  return items.map(([left, top, w, h, rotate, thickness, color], i) => (
    <span
      key={i}
      className="banner__bar"
      style={{
        left: left + w / 2,
        top: top + h / 2,
        height: thickness,
        background: color,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    />
  ))
}

/**
 * "TOPPER 더 알아보러 가기" 배너 (1440×359).
 * 3D 배경 + 장식 막대 + 버튼으로 구성된다.
 *
 * @param {string} [title='TOPPER 더 알아보러 가기'] - 배너 문구
 * @param {string} [buttonText='Instargram'] - 버튼 텍스트
 * @param {string} [buttonHref] - 버튼 링크 (없으면 <button>으로 렌더링)
 * @param {function} [onButtonClick] - 버튼 클릭 핸들러
 * @param {string} [className] - 추가 클래스
 */
export default function Banner({
  title = 'TOPPER 더 알아보러 가기',
  buttonText = 'Instargram',
  buttonHref,
  onButtonClick,
  className = '',
}) {
  return (
    <section className={`banner ${className}`.trim()}>
      <Bars items={BARS_BACK} />
      <img className="banner__shape banner__shape--2" src={shape2} alt="" />
      <Bars items={BARS_MID} />
      <img className="banner__shape banner__shape--1" src={shape1} alt="" />
      <Bars items={BARS_FRONT} />

      <h2 className="banner__title">{title}</h2>
      <Button
        className="banner__button"
        variant="text"
        href={buttonHref}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </section>
  )
}
