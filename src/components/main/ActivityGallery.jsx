import { useEffect, useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import g1 from '../../assets/gallery/gallery-1.jpg'
import g2 from '../../assets/gallery/gallery-2.jpg'
import g3 from '../../assets/gallery/gallery-3.jpg'
import g4 from '../../assets/gallery/gallery-4.jpg'
import g5 from '../../assets/gallery/gallery-5.jpg'
import g6 from '../../assets/gallery/gallery-6.jpg'
import './MainSections.css'

// 사진 목록 — 문자열(경로) 또는 { src, crop }. crop은 Figma에서 사진을 확대·이동해 쓴 경우의 위치(카드 대비 %).
const PHOTOS = [
  {
    src: g1,
    crop: { left: '-11.44%', top: '-11.23%', width: '122.89%', height: '151.14%' },
  },
  g2,
  g3,
  g4,
  g5,
  g6,
]
const VISIBLE = 6 // 1440 영역에 걸치는 카드 수: 온전한 4장 + 좌우 60px씩 잘린 2장 (Figma 기준)
const INTERVAL = 3000 // 한 칸 이동 간격(ms)

/**
 * TOPPER 에서는: 300×431 사진 카드(간격 24px)를 1440 영역에 4개씩(좌우 끝은 잘려 페이드) 보여주고,
 * 일정 시간마다 한 칸씩 왼쪽으로 이동한다. 끝에 닿으면 앞쪽 카드를 이어 붙여 끊김 없이 반복한다.
 * 동작 줄이기 설정 시 자동 이동 없음.
 */
export default function ActivityGallery({ photos = PHOTOS }) {
  const count = photos.length
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  // 뒤에 앞쪽 VISIBLE장을 복제해 이어 붙인다 (index === count 가 되면 0으로 순간 이동)
  const items = [...photos, ...photos.slice(0, VISIBLE)]

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || count < VISIBLE) return
    const id = setInterval(() => {
      setAnimate(true)
      setIndex((i) => i + 1)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [count])

  const handleTransitionEnd = () => {
    if (index >= count) {
      setAnimate(false)
      setIndex(0)
      // 순간 이동 후 다음 프레임부터 다시 애니메이션 허용
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    }
  }

  return (
    <section className="main-section gallery-section">
      <SectionTitle
        className="main-title"
        title="TOPPER 에서는"
        description="다양한 활동과 활발한 교류를 통해 서로 가까워지고, 함께 즐거운 추억을 만들어갑니다."
      />
      <div className="gallery">
        <ul
          className="gallery__track"
          style={{
            // 첫 카드가 x=-240에서 시작(Figma) → 온전한 카드는 x=84부터 4장
            transform: `translateX(calc(-240px - ${index} * 324px))`,
            transition: animate ? undefined : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((photo, i) => {
            const { src, crop } = typeof photo === 'string' ? { src: photo } : photo
            return (
              <li className="gallery__card" key={i} aria-hidden={i >= count}>
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  className={crop ? 'is-cropped' : undefined}
                  style={crop}
                />
              </li>
            )
          })}
        </ul>
        <div className="gallery__fade gallery__fade--left" />
        <div className="gallery__fade gallery__fade--right" />
      </div>
    </section>
  )
}
