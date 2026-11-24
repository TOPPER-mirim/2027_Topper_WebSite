import './SectionTitle.css'

/**
 * 섹션 제목(62px) + 설명(32px) 조합.
 * description이 없으면 설명 영역은 렌더링하지 않는다.
 *
 * @param {string} title - 제목 (필수)
 * @param {string} [description] - 설명 텍스트 (선택)
 * @param {'left'|'center'} [align='left'] - 텍스트 정렬
 * @param {string} [className] - 추가 클래스
 */
export default function SectionTitle({
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-title section-title--${align} ${className}`.trim()}>
      <h2 className="section-title__title">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  )
}
