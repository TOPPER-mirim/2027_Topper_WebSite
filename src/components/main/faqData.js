// 자주 묻는 질문 — 질문을 추가/삭제하려면 이 배열만 수정한다. (answer의 \n은 줄바꿈)
// TODO: 1, 2, 4번 답변은 Figma에 없어서 임시 문구 — 실제 답변으로 교체 필요
const PENDING = '답변을 준비 중입니다.'

export const FAQS = [
  { question: '면접 형식이 어떻게 되나요?', answer: PENDING },
  { question: '토퍼 면접 잘 보는 꿀팁이 있을까요?', answer: PENDING },
  {
    question: '코딩 잘 못하는데 괜찮을까요?',
    answer:
      '아직 1학년인 것을 감안하기에 당장의 개발 실력보다는 ‘배우려는 의지’와 ‘소통 능력’을 가장 높게 평가합니다.\n열심히 하겠다는 열정을 가지고 있다면 충분히 가능합니다 : )',
  },
  { question: '동아리 내 분위기가 어떤가요?', answer: PENDING },
]
