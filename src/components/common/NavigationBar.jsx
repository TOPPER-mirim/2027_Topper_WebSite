import { NavLink } from 'react-router-dom'
import './NavigationBar.css'

const DEFAULT_ITEMS = [
  { to: '/', label: 'Introduce' },
  { to: '/about', label: 'About us' },
]

/**
 * 화면 오른쪽에 고정되는 네비게이션.
 * 현재 페이지는 파란 왼쪽 선과 진한 파랑 글씨로 표시된다. (react-router NavLink 사용)
 * <BrowserRouter> 안에서 렌더링해야 한다.
 *
 * @param {{to: string, label: string}[]} [items] - 메뉴 목록 (기본: Introduce `/`, About us `/about`)
 * @param {string} [className] - 추가 클래스
 */
export default function NavigationBar({ items = DEFAULT_ITEMS, className = '' }) {
  return (
    <nav className={`nav ${className}`.trim()} aria-label="주요 메뉴">
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
