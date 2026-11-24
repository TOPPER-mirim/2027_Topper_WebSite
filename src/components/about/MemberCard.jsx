import './MemberCard.css'

/**
 * 멤버 프로필 카드 (345×365 사진 + 소속 + 이름).
 * photo가 없으면 회색 placeholder를 보여준다.
 *
 * @param {string} [photo] - 사진 경로
 * @param {string} [caption] - 이름 위 작은 텍스트 (예: "토퍼 4기 소프트웨어과")
 * @param {string} [name] - 이름. 없으면 사진만 렌더링한다 (리더 사진 카드).
 * @param {string} [alt] - 사진 대체 텍스트 (기본값: name)
 * @param {string} [className] - 추가 클래스
 */
export default function MemberCard({
  photo,
  caption,
  name,
  alt = name ?? '',
  className = '',
}) {
  return (
    <figure className={`member-card ${className}`.trim()}>
      <div className="member-card__photo">
        {photo && <img src={photo} alt={alt} loading="lazy" decoding="async" />}
      </div>
      {name && (
        <figcaption>
          <MemberLabel caption={caption} name={name} />
        </figcaption>
      )}
    </figure>
  )
}

/** 소속(16px) + 이름(24px) 텍스트 묶음. LeaderSection에서도 사용한다. */
export function MemberLabel({ caption, name }) {
  return (
    <div className="member-label">
      {caption && <p className="member-label__caption">{caption}</p>}
      <p className="member-label__name">{name}</p>
    </div>
  )
}
