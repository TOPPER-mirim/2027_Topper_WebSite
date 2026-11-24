import './Button.css'

/**
 * 공통 버튼. href가 있으면 <a>, 없으면 <button>으로 렌더링한다.
 *
 * @param {'arrow'|'text'} [variant='arrow']
 *   - arrow: 밑줄 + 화살표(↗) — Hero의 "ask" 버튼 (Frame 228)
 *   - text : 텍스트만 — Hero의 "Instargram" 버튼 (Frame 230)
 * @param {'light'|'dark'} [theme='light']
 *   - light: 흰색 글씨 (어두운 배경 위)
 *   - dark : 검정 글씨 (밝은 배경 위)
 * @param {string} [href] - 링크 주소 (외부 링크면 새 탭으로 열림)
 * @param {function} [onClick] - 클릭 핸들러
 * @param {string} [className] - 추가 클래스
 * @param {React.ReactNode} children - 버튼 텍스트
 */
export default function Button({
  variant = 'arrow',
  theme = 'light',
  href,
  onClick,
  className = '',
  children,
  ...rest
}) {
  const classes =
    `btn btn--${variant} btn--${theme} ${className}`.trim()

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {(variant === 'arrow' || variant === 'reveal') && <span className="btn__icon" aria-hidden="true" />}
    </>
  )

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
