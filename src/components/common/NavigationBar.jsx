import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getFitScale } from '../../utils/fitScale'
import './NavigationBar.css'

// Figma: Hero(1080px) 바로 아래 107px 지점(Y 1187)에서 나타나 이후 화면에 고정된다.
const FOLLOW_OFFSET = 107

const DEFAULT_ITEMS = [
  { to: '/', label: 'Introduce' },
  { to: '/about', label: 'About us' },
]

/**
 * 화면 오른쪽에 고정되는 네비게이션.
 * 페이지에 Hero(.hero)가 있으면 Hero 구간에서는 보이지 않고, Hero 아래 107px 지점에서 나타나
 * 스크롤하면 화면 위에서 107px 위치에 고정되어 따라다닌다. Hero가 없으면 세로 가운데에 고정.
 * 현재 페이지는 파란 왼쪽 선과 진한 파랑 글씨로 표시된다. (react-router NavLink 사용)
 * <BrowserRouter> 안에서 렌더링해야 한다.
 *
 * @param {{to: string, label: string}[]} [items] - 메뉴 목록 (기본: Introduce `/`, About us `/about`)
 * @param {string} [className] - 추가 클래스
 */
export default function NavigationBar({ items = DEFAULT_ITEMS, className = '' }) {
  const ref = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const nav = ref.current
    const update = () => {
      const hero = document.querySelector('.hero')
      if (!hero) {
        nav.classList.remove('nav--follow')
        nav.style.top = ''
        return
      }
      nav.classList.add('nav--follow')
      // 화면 폭에 맞춰 축소(zoom) 중이면 getBoundingClientRect 값은 화면 px 이므로 CSS px 로 환산한다.
      const heroBottom = hero.getBoundingClientRect().bottom / getFitScale()
      nav.style.top = `${Math.max(FOLLOW_OFFSET, heroBottom + FOLLOW_OFFSET)}px`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    window.addEventListener('topper:fit', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('topper:fit', update)
    }
  }, [pathname])

  return (
    <nav ref={ref} className={`nav ${className}`.trim()} aria-label="주요 메뉴">
      {items.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `nav__item${isActive ? ' nav__item--active' : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
