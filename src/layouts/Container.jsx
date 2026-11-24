import './Container.css'

/**
 * 1440px 중앙 정렬 컨테이너. 섹션 내용을 감싸는 데 쓴다.
 * (Hero, Footer처럼 배경이 화면 전체를 채우는 컴포넌트는 감싸지 않는다.)
 *
 * @param {string} [as='div'] - 렌더링할 태그 (예: 'section')
 * @param {string} [className] - 추가 클래스
 */
export default function Container({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
