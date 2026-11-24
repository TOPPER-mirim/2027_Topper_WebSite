import Hero from '../components/common/Hero'
import PreviewSlider from '../components/main/PreviewSlider'
import ActivityGallery from '../components/main/ActivityGallery'
import ActivityCards from '../components/main/ActivityCards'

// Main 페이지: 각 섹션은 팀원들이 이 파일에 추가한다.
export default function Main() {
  return (
    <>
      <Hero />
      <PreviewSlider />
      <ActivityGallery />
      <ActivityCards />
    </>
  )
}
