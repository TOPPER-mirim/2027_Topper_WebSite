import GenerationTitle from './GenerationTitle'
import MemberCard, { MemberLabel } from './MemberCard'
import './LeaderSection.css'

/**
 * 기수 상단의 부장/차장 소개.
 * 왼쪽: 기수 타이틀 + 리더 이름들 / 오른쪽: 리더 사진 카드들
 *
 * @param {string} title - 기수 타이틀
 * @param {{role: string, department: string, name: string, photo?: string}[]} leaders
 */
export default function LeaderSection({ title, leaders }) {
  return (
    <div className="leader-section">
      <div className="leader-section__info">
        <GenerationTitle>{title}</GenerationTitle>
        <div className="leader-section__names">
          {leaders.map((leader) => (
            <MemberLabel
              key={leader.name}
              caption={`${leader.role} · ${leader.department}`}
              name={leader.name}
            />
          ))}
        </div>
      </div>

      <div className="leader-section__photos">
        {leaders.map((leader) => (
          // 이름은 왼쪽에 이미 표시되므로 사진 카드에는 alt로만 넘긴다.
          <MemberCard key={leader.name} photo={leader.photo} alt={leader.name} />
        ))}
      </div>
    </div>
  )
}
