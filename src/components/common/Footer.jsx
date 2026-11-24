import Button from './Button'
import footerShape from '../../assets/footer/footer-shape.png'
import './Footer.css'

/**
 * 공통 Footer (높이 476px, 가로는 화면 전체).
 * 상단 링크 버튼 2개 + 하단 "TOPPER 26" 큰 타이포.
 * 내용은 1920px 기준 좌표로 배치되며 화면 가운데에 정렬된다.
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

        <div className="footer__big footer__big--1" aria-hidden="true">
          <span className="footer__big-text">TOPPER 26</span>
          <img className="footer__big-shape" src={footerShape} alt="" />
        </div>
        <div className="footer__big footer__big--2" aria-hidden="true">
          <span className="footer__big-text">TOPPER 26</span>
          <img className="footer__big-shape" src={footerShape} alt="" />
        </div>
      </div>
    </footer>
  )
}
