import Hero from '../components/common/Hero'
import Banner from '../components/common/Banner'
import Container from '../layouts/Container'

// Main 페이지: 각 섹션은 팀원들이 이 파일에 추가한다.
export default function Main() {
  return (
    <>
      <Hero />
      {/* TODO: TOPPER 미리보기, 주요 활동 등 섹션 */}
      <Container as="section">
        <Banner />
      </Container>
    </>
  )
}
