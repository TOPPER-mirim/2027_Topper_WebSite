import Button from './Button'
import DecorBars from './DecorBars'
import HeroLogo from './HeroLogo'
import { BAR_COLORS as C } from './barColors'
import shape1 from '../../assets/shapes/shape-1.png'
import shape2 from '../../assets/shapes/shape-2.png'
import './Hero.css'

// [left, top, 박스너비, 박스높이, 회전, 길이, 두께, 색] — Figma 좌표(1920×1080) 기준
const BARS_BACK = [
  [79.11, 856.94, 161.022, 146.671, -138.59, 190, 28, C.blue500],
  [1508.91, 840.9, 190.212, 80.267, -163.68, 190, 28, C.blue500],
]
const BARS_MID = [
  [590.12, 197.51, 187.433, 91.791, -159.51, 190, 27, C.blue500],
  [1724, 89, 164.512, 140.735, -140.92, 190, 27, C.blue100],
  [1065, 943, 187.67, 90.807, 159.85, 190, 27, C.blue300],
]
const BARS_FRONT = [
  [1581, 478.3, 95.834, 186.383, -68.13, 190, 27, C.blue50],
]
const BARS_TOP = [
  [1442, 69.48, 119.249, 178.545, -60, 190, 28, C.blue500],
  [188.89, 730.66, 187.67, 90.807, 159.85, 190, 27, C.blue300],
  [1104.48, -19.03, 141.837, 163.668, -129.57, 190, 27, C.blue300],
  [136.86, 147.82, 164.512, 140.735, -140.92, 190, 27, C.blue100],
  [544, 836, 164.512, 140.735, -140.92, 190, 27, C.blue100],
]

/**
 * 메인 Hero (높이 1080px, 가로는 화면 전체).
 * 3D 배경 + TOPPER 로고 타이포 + 소개 문구 + 버튼 2개 + 장식 막대.
 * 장식 막대는 천천히 떠다니며(동작 줄이기 설정 시 정지), 1920px 기준 좌표로 배치되어 화면 가운데에 정렬된다.
 *
 * @param {string} [description] - 소개 문구 (\n으로 줄바꿈)
 * @param {string} [askHref] - "ask" 버튼 링크
 * @param {string} [instagramHref] - "Instargram" 버튼 링크
 * @param {string} [className] - 추가 클래스
 */
export default function Hero({
  description = '토퍼는 전공 분야의 기술을 깊이 있게 탐구하고\n아이디어를 실제 서비스로 구현하며 실무 역량을 키워가는 전공 동아리입니다.',
  askHref,
  instagramHref,
  className = '',
}) {
  return (
    <section className={`hero ${className}`.trim()}>
      <div className="hero__stage">
        <DecorBars items={BARS_BACK} animate />
        <img className="hero__shape hero__shape--2" src={shape2} alt="" />
        <DecorBars items={BARS_MID} animate />
        <img className="hero__shape hero__shape--1" src={shape1} alt="" />
        <DecorBars items={BARS_FRONT} animate />

        <HeroLogo className="hero__logo" />
        <p className="hero__desc">{description}</p>
        <div className="hero__buttons">
          <Button variant="arrow" href={askHref}>
            ask
          </Button>
          <Button variant="text" href={instagramHref}>
            Instargram
          </Button>
        </div>

        <DecorBars items={BARS_TOP} animate />
      </div>
    </section>
  )
}
