import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'
import plusIcon from '../../assets/faq/plus.svg'
import minusIcon from '../../assets/faq/minus.svg'
import replyIcon from '../../assets/faq/reply.svg'
import { FAQS } from './faqData'
import './MainSections.css'

/**
 * 자주 묻는 질문: 아코디언. 질문을 누르면 답변이 펼쳐지고 + / − 아이콘이 바뀐다.
 * 한 번에 하나만 펼쳐지며, 열린 질문을 다시 누르면 닫힌다.
 *
 * @param {{question: string, answer: string}[]} [faqs]
 * @param {string} [moreHref] - "더 질문하러 가기" 링크 (없으면 버튼만 표시)
 * @param {number} [defaultOpen=2] - 처음 펼쳐둘 질문 번호(0부터, -1이면 모두 닫힘). Figma는 3번째가 펼쳐진 상태.
 */
export default function FaqAccordion({ faqs = FAQS, moreHref, defaultOpen = 2 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <section className="main-section faq">
      <div className="faq__header">
        <SectionTitle className="main-title" title="자주 묻는 질문" />
        <Button variant="text" theme="dark" href={moreHref} className="faq__more">
          더 질문하러 가기
        </Button>
      </div>
      <ul className="faq__list">
        {faqs.map((f, i) => {
          const open = i === openIndex
          return (
            <li className={`faq__item${open ? ' is-open' : ''}`} key={i}>
              <h3 className="faq__q">
                <button
                  type="button"
                  className="faq__q-btn"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className="faq__q-text">{f.question}</span>
                  <span className="faq__toggle" aria-hidden="true">
                    <img src={open ? minusIcon : plusIcon} alt="" />
                  </span>
                </button>
              </h3>
              <div className="faq__a" id={`faq-answer-${i}`} role="region">
                <div className="faq__a-clip">
                  <div className="faq__a-body">
                    <span className="faq__reply" aria-hidden="true">
                      <img src={replyIcon} alt="" />
                    </span>
                    <p className="faq__a-text">{f.answer}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
