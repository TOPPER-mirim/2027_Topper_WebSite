import Hero from '../components/common/Hero'
import Banner from '../components/common/Banner'
import Container from '../layouts/Container'

// About us 페이지: 각 섹션은 팀원들이 이 파일에 추가한다.
export default function About() {
  return (
    <>
      <Hero />
      {/* TODO: TOPPER 에서는, 프로젝트, 자주 묻는 질문 등 섹션 */}
      <Container as="section">
        <Banner />
      </Container>
    </>
  )
}
