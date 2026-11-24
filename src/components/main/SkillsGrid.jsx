import SectionTitle from '../common/SectionTitle'
import { SKILLS } from './skillsData'
import './MainSections.css'

/**
 * TOPPER의 기술들: 250×250 로고 타일 5열 그리드 (가로 간격 24px, 세로 32px).
 * 배경색(#f3f8ff)은 화면 전체 폭으로 깔린다.
 *
 * @param {{name: string, src: string, w: number, h: number, fit?: string, crop?: object}[]} [skills]
 */
export default function SkillsGrid({ skills = SKILLS }) {
  return (
    <section className="skills">
      <div className="main-section skills__inner">
        <SectionTitle className="main-title" title="TOPPER의 기술들" />
        <ul className="skills__grid">
          {skills.map((s) => (
            <li className="skills__tile" key={s.name}>
              <span className="skills__logo" style={{ width: s.w, height: s.h }}>
                <img
                  src={s.src}
                  alt={s.name}
                  draggable="false"
                  style={{ objectFit: s.fit ?? 'cover', ...s.crop }}
                  className={s.crop ? 'is-cropped' : undefined}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
