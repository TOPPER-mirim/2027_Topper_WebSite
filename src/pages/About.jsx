import Hero from '../components/common/Hero'
import Banner from '../components/common/Banner'
import Container from '../layouts/Container'
import GenerationSection from '../components/about/GenerationSection'
import { GENERATIONS } from '../data/generations'
import './About.css'

// About us 페이지: Hero → 최신 기수 → Banner → 이전 기수들 → (Footer는 Layout)
// 기수 추가/수정은 src/data/generations.js 에서만 하면 된다.
export default function About() {
  const [latest, ...previous] = GENERATIONS

  return (
    <div className="about">
      <Hero />

      {latest && <GenerationSection data={latest} className="about__latest" />}

      <Container as="section" className="about__banner">
        <Banner />
      </Container>

      <div className="about__previous">
        {previous.map((generation) => (
          <GenerationSection key={generation.generation} data={generation} />
        ))}
      </div>
    </div>
  )
}
