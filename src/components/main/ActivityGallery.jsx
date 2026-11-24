import SectionTitle from '../common/SectionTitle'
import g1 from '../../assets/gallery/gallery-1.jpg'
import g2 from '../../assets/gallery/gallery-2.jpg'
import g3 from '../../assets/gallery/gallery-3.jpg'
import g4 from '../../assets/gallery/gallery-4.jpg'
import g5 from '../../assets/gallery/gallery-5.jpg'
import g6 from '../../assets/gallery/gallery-6.jpg'
import './MainSections.css'

const PHOTOS = [g1, g2, g3, g4, g5, g6]

/**
 * TOPPER 에서는: 300×431 사진 카드(간격 24px)가 가로로 흐르는 marquee.
 * 두 벌을 이어 붙여 끊김 없이 반복하며, 좌우 끝은 흰색으로 페이드된다.
 * 호버 시 일시정지, 동작 줄이기 설정 시 정지.
 */
export default function ActivityGallery({ photos = PHOTOS }) {
  return (
    <section className="main-section">
      <SectionTitle
        className="main-title"
        title="TOPPER 에서는"
        description="다양한 활동과 활발한 교류를 통해 서로 가까워지고, 함께 즐거운 추억을 만들어갑니다."
      />
      <div className="gallery">
        <div className="gallery__track">
          {[0, 1].map((copy) => (
            <ul className="gallery__list" key={copy} aria-hidden={copy === 1}>
              {photos.map((src, i) => (
                <li className="gallery__card" key={i}>
                  <img src={src} alt="" draggable="false" />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="gallery__fade gallery__fade--left" />
        <div className="gallery__fade gallery__fade--right" />
      </div>
    </section>
  )
}
