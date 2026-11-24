import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import arrowRight from '../../assets/icons/arrow-right.svg'
import preview1 from '../../assets/preview/preview-1.jpg'
import gallery5 from '../../assets/gallery/gallery-5.jpg'
import gallery3 from '../../assets/gallery/gallery-3.jpg'
import './MainSections.css'

// Figma에는 첫 슬라이드 이미지만 있음 — 나머지는 임시 사진, 실제 사진으로 교체 필요.
const DEFAULT_SLIDES = [
  { src: preview1, alt: 'TOPPER 부원 단체 사진' },
  { src: gallery5, alt: 'TOPPER 활동 사진' },
  { src: gallery3, alt: 'TOPPER 활동 사진' },
]

/**
 * TOPPER 미리보기: 1440×603 이미지 슬라이더 + 이전/다음 버튼.
 * 처음/마지막 슬라이드에서는 반대쪽으로 순환(반복)한다.
 *
 * @param {{src: string, alt?: string}[]} [slides]
 */
export default function PreviewSlider({ slides = DEFAULT_SLIDES }) {
  const [index, setIndex] = useState(0)
  const count = slides.length
  const go = (delta) => setIndex((i) => (i + delta + count) % count)

  return (
    <section className="main-section">
      <SectionTitle
        className="main-title"
        title="TOPPER 미리보기"
        description="소프트웨어과, 디자인과 학생들이 모여 서로의 역량을 쌓아가고 경험을 만듭니다."
      />
      <div className="preview">
        <div className="preview__frame">
          <ul
            className="preview__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <li className="preview__slide" key={i} aria-hidden={i !== index}>
                <img src={s.src} alt={s.alt ?? ''} draggable="false" />
              </li>
            ))}
          </ul>
          <div className="preview__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`preview__dot${i === index ? ' is-active' : ''}`}
                aria-label={`${i + 1}번째 슬라이드`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="preview__buttons">
          <button
            type="button"
            className="preview__btn preview__btn--prev"
            aria-label="이전 슬라이드"
            onClick={() => go(-1)}
          >
            <img src={arrowRight} alt="" />
          </button>
          <button
            type="button"
            className="preview__btn"
            aria-label="다음 슬라이드"
            onClick={() => go(1)}
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}
