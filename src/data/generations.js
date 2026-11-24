import gen5Member1 from '../assets/members/gen5-member-1.webp'
import gen5Member2 from '../assets/members/gen5-member-2.webp'
import gen5Member3 from '../assets/members/gen5-member-3.webp'
import gen5Member4 from '../assets/members/gen5-member-4.webp'
import gen4Leader1 from '../assets/members/gen4-leader-1.webp'
import gen4Leader2 from '../assets/members/gen4-leader-2.webp'
import gen4Member1 from '../assets/members/gen4-member-1.webp'
import gen4Member2 from '../assets/members/gen4-member-2.webp'
import gen4Member3 from '../assets/members/gen4-member-3.webp'
import gen4Member4 from '../assets/members/gen4-member-4.webp'
import gen3Leader1 from '../assets/members/gen3-leader-1.webp'
import gen3Leader2 from '../assets/members/gen3-leader-2.webp'
import gen3Member1 from '../assets/members/gen3-member-1.webp'
import gen3Member2 from '../assets/members/gen3-member-2.webp'
import gen3Member3 from '../assets/members/gen3-member-3.webp'
import gen3Member4 from '../assets/members/gen3-member-4.webp'

/**
 * About us 페이지의 기수별 멤버 데이터.
 * 최신 기수를 맨 앞에 둔다. (첫 번째 기수 다음에 Banner가 들어간다.)
 *
 * 새 기수 추가 방법:
 *   1. 사진을 src/assets/members/에 webp로 넣고 위에서 import 한다.
 *      (345×365 비율, 2배 크기인 690×730 권장)
 *   2. 아래 배열 맨 앞에 기수 객체를 추가한다.
 *
 * 필드:
 *   generation  기수 번호 (숫자) — 타이틀 "TOPPER Nth Generation"이 자동으로 만들어진다.
 *   leaders     부장/차장 목록 (선택). 없으면 리더 영역을 렌더링하지 않는다.
 *               { role: '부장', department: '소프트웨어과', name, photo }
 *   members     멤버 목록. { department: '소프트웨어과', name, photo }
 *               photo가 없으면 회색 placeholder가 표시된다.
 */
export const GENERATIONS = [
  {
    generation: 5,
    members: [
      { department: '소프트웨어과', name: '고희경', photo: gen5Member1 },
      { department: '소프트웨어과', name: '김서은', photo: gen5Member2 },
      { department: '소프트웨어과', name: '박소연', photo: gen5Member3 },
      { department: '소프트웨어과', name: '여서정', photo: gen5Member4 },
    ],
  },
  {
    generation: 4,
    leaders: [
      { role: '부장', department: '소프트웨어과', name: '오세영', photo: gen4Leader1 },
      { role: '차장', department: '소프트웨어과', name: '조유진', photo: gen4Leader2 },
    ],
    members: [
      { department: '소프트웨어과', name: '노윤서', photo: gen4Member1 },
      { department: '소프트웨어과', name: '홍재나', photo: gen4Member2 },
      { department: '디자인과', name: '조은지', photo: gen4Member3 },
      { department: '디자인과', name: '최서현', photo: gen4Member4 },
    ],
  },
  {
    generation: 3,
    leaders: [
      { role: '부장', department: '소프트웨어과', name: '한지연', photo: gen3Leader1 },
      { role: '차장', department: '디자인과', name: '박솔하', photo: gen3Leader2 },
    ],
    members: [
      { department: '소프트웨어과', name: '김이레', photo: gen3Member1 },
      { department: '소프트웨어과', name: '윤성연', photo: gen3Member2 },
      { department: '소프트웨어과', name: '이세현', photo: gen3Member3 },
      { department: '소프트웨어과', name: '송민채', photo: gen3Member4 },
    ],
  },
]

/** 3 → "3rd", 4 → "4th", 11 → "11th" */
function toOrdinal(n) {
  const mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`
  const suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th'
  return `${n}${suffix}`
}

/** 기수 번호 → "TOPPER 5th Generation" */
export function getGenerationTitle(generation) {
  return `TOPPER ${toOrdinal(generation)} Generation`
}
