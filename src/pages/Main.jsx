import Hero from '../components/common/Hero'
import PreviewSlider from '../components/main/PreviewSlider'
import ActivityGallery from '../components/main/ActivityGallery'
import ActivityCards from '../components/main/ActivityCards'
import ProjectCarousel from '../components/main/ProjectCarousel'
import FaqAccordion from '../components/main/FaqAccordion'
import SkillsGrid from '../components/main/SkillsGrid'

// Main 페이지: 각 섹션은 팀원들이 이 파일에 추가한다.
export default function Main() {
  return (
    <>
      <Hero />
      <PreviewSlider />
      <ActivityGallery />
      <ActivityCards />
      <ProjectCarousel />
      <FaqAccordion />
      <SkillsGrid />
    </>
  )
}
