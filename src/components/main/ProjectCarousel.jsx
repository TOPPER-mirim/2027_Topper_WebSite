import { useEffect, useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import arrowRight from '../../assets/icons/arrow-right.svg'
import { PROJECTS } from './projectsData'
import './MainSections.css'

const COPIES = 5 // 무한 반복용으로 목록을 5번 이어 붙이고 가운데 구간에서 움직인다
const STEP = 646 // 카드 622 + 간격 24
const SNAP_DELAY = 560 // 이동 애니메이션(0.5s)이 끝난 뒤 순간 이동

/**
 * TOPPER의 프로젝트: 622×350 썸네일 카드 캐러셀.
 * 좌우 50×50 버튼으로 한 칸씩 이동하며(끝에서 반대쪽으로 순환), 좌우 끝은 흰색으로 페이드된다.
 * 카드 위치는 Figma 1920 기준(첫 카드 x=3)으로 화면 가운데에 정렬된다.
 *
 * @param {{name: string, thumbnail: string, link?: string}[]} [projects]
 */
export default function ProjectCarousel({ projects = PROJECTS }) {
  const n = projects.length
  const [index, setIndex] = useState(2 * n)
  const [animate, setAnimate] = useState(true)

  const items = Array.from({ length: COPIES }, () => projects).flat()

  const move = (delta) => {
    setAnimate(true)
    setIndex((i) => i + delta)
  }

  // 가운데 구간을 벗어나면 같은 모양의 자리로 애니메이션 없이 되돌린다.
  useEffect(() => {
    if (n === 0 || (index >= n && index < 3 * n)) return
    const id = setTimeout(() => {
      setAnimate(false)
      setIndex((i) => (i >= 3 * n ? i - n : i + n))
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    }, SNAP_DELAY)
    return () => clearTimeout(id)
  }, [index, n])

  if (n === 0) return null

  return (
    <section className="main-section projects-section">
      <SectionTitle className="main-title" title="TOPPER의 프로젝트" />
      <div className="projects">
        <ul
          className="projects__track"
          style={{
            transform: `translateX(${-index * STEP}px)`,
            transition: animate ? undefined : 'none',
          }}
        >
          {items.map((p, i) => {
            const Tag = p.link ? 'a' : 'div'
            const linkProps = p.link
              ? { href: p.link, target: '_blank', rel: 'noreferrer noopener' }
              : {}
            return (
              <li className="projects__item" key={i} aria-hidden={i % n !== index % n}>
                <Tag className="projects__card" {...linkProps}>
                  <img src={p.thumbnail} alt={p.name} draggable="false" />
                </Tag>
              </li>
            )
          })}
        </ul>
        <div className="projects__fade projects__fade--left" />
        <div className="projects__fade projects__fade--right" />
        <button
          type="button"
          className="projects__btn projects__btn--prev"
          aria-label="이전 프로젝트"
          onClick={() => move(-1)}
        >
          <img src={arrowRight} alt="" />
        </button>
        <button
          type="button"
          className="projects__btn projects__btn--next"
          aria-label="다음 프로젝트"
          onClick={() => move(1)}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  )
}
