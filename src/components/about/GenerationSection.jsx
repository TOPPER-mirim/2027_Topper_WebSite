import Container from '../../layouts/Container'
import GenerationTitle from './GenerationTitle'
import LeaderSection from './LeaderSection'
import MemberCard from './MemberCard'
import { getGenerationTitle } from '../../data/generations'
import './GenerationSection.css'

/**
 * 한 기수의 소개 섹션.
 * leaders가 있으면 상단에 LeaderSection을 먼저 보여주고, 그 아래 멤버 4열 그리드.
 *
 * @param {{generation: number, leaders?: object[], members: object[]}} data
 *   - src/data/generations.js의 기수 객체 하나
 * @param {string} [className] - 추가 클래스
 */
export default function GenerationSection({ data, className = '' }) {
  const { generation, leaders, members } = data
  const title = getGenerationTitle(generation)

  return (
    <Container
      as="section"
      className={`generation-section ${className}`.trim()}
      aria-label={title}
    >
      {leaders?.length > 0 && <LeaderSection title={title} leaders={leaders} />}

      <div className="generation-section__members">
        <GenerationTitle>{title}</GenerationTitle>
        <div className="generation-section__grid">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              photo={member.photo}
              caption={`토퍼 ${generation}기 ${member.department}`}
              name={member.name}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
