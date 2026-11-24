import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavigationBar from '../components/common/NavigationBar'
import Footer from '../components/common/Footer'
import { applyFitScale } from '../utils/fitScale'

/**
 * 모든 페이지에 공통으로 적용되는 틀: NavigationBar + 페이지 내용 + Footer.
 * 페이지 내용은 <Outlet />에 렌더링된다.
 * 1440px 폭이 필요한 섹션은 페이지 안에서 <Container>로 감싼다.
 */
export default function Layout() {
  const { pathname } = useLocation()

  // 화면 폭이 1920보다 작으면 전체를 비례 축소한다 (네비게이션 바 겹침 방지)
  useEffect(() => {
    applyFitScale()
    window.addEventListener('resize', applyFitScale)
    return () => window.removeEventListener('resize', applyFitScale)
  }, [])

  // 페이지를 이동하면 맨 위에서 시작한다.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
