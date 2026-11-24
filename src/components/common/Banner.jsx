import Button from './Button'
import DecorBars from './DecorBars'
import { BAR_COLORS as C } from './barColors'
import shape1 from '../../assets/shapes/shape-1.png'
import shape2 from '../../assets/shapes/shape-2.png'
import './Banner.css'

// [left, top, 박스너비, 박스높이, 회전, 길이, 두께, 색] — Figma 좌표 기준
const BARS_BACK = [
  [32, 254, 84.745, 77.193, -138.59, 99.996, 14.736, C.blue500],
  [909.76, 365.22, 100.108, 42.244, -163.68, 99.996, 14.736, C.blue500],
]
const BARS_MID = [
  [426.2, 26.61, 98.645, 48.309, -159.51, 99.996, 14.21, C.blue500],
  [1022.96, -30.5, 86.582, 74.068, -140.92, 99.996, 14.21, C.blue100],
  [1352, 193, 87.681, 72.574, -142.15, 99.996, 14.21, C.blue300],
]
const BARS_FRONT = [
  [947.7, 174.39, 50.437, 98.093, -68.13, 99.996, 14.21, C.blue50],
  [874.54, -40.77, 62.76, 93.967, -60, 99.996, 14.736, C.blue500],
  [215.03, 307.2, 98.77, 47.791, 159.85, 99.996, 14.21, C.blue300],
  [696.91, -87.36, 74.648, 86.138, -129.57, 99.996, 14.21, C.blue300],
  [187.65, 0.46, 86.582, 74.068, -140.92, 99.996, 14.21, C.blue100],
  [401.93, 362.64, 86.582, 74.068, -140.92, 99.996, 14.21, C.blue100],
]

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
      <DecorBars items={BARS_BACK} />
      <img className="banner__shape banner__shape--2" src={shape2} alt="" />
      <DecorBars items={BARS_MID} />
      <img className="banner__shape banner__shape--1" src={shape1} alt="" />
      <DecorBars items={BARS_FRONT} />

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
