import Button from './Button'
import triangleBack from '../../assets/footer/footer-triangle-back.svg'
import triangleFront from '../../assets/footer/footer-triangle-front.png'
import './Footer.css'

// 무한 반복용: 같은 묶음(UNITS_PER_HALF개)을 두 번 이어 붙이고 절반만큼 이동시킨다.
const UNITS_PER_HALF = 2

function BigUnit() {
  return (
    <div className="footer__unit">
      <span className="footer__big-text">TOPPER 26</span>
      <span className="footer__shape">
        <img className="footer__shape-back" src={triangleBack} alt="" />
        <img className="footer__shape-front" src={triangleFront} alt="" />
      </span>
    </div>
  )
}

/**
 * 공통 Footer (높이 476px, 가로는 화면 전체).
 * 상단 링크 버튼 2개 + 하단 "TOPPER 26" 큰 타이포가 삼각형과 함께 계속 흘러간다.
 * 링크는 1920px 기준 좌표로 배치되며 화면 가운데에 정렬된다.
 * 동작 줄이기 설정 시 흐름은 정지한다.
 *
 * @param {string} [askHref] - "ask" 링크
 * @param {string} [instagramHref] - "Instargram" 링크
 * @param {string} [className] - 추가 클래스
 */
export default function Footer({ askHref, instagramHref, className = '' }) {
  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer__stage">
        <div className="footer__links">
          <Button variant="text" href={askHref}>
            ask
          </Button>
          <Button variant="text" href={instagramHref}>
            Instargram
          </Button>
        </div>
      </div>

      <div className="footer__marquee" aria-hidden="true">
        <div className="footer__track">
          {Array.from({ length: UNITS_PER_HALF * 2 }, (_, i) => (
            <BigUnit key={i} />
          ))}
        </div>
      </div>
    </footer>
  )
}
