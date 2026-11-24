import SectionTitle from "../common/SectionTitle";
import { ACTIVITY_CARDS } from "./activityData";
import "./MainSections.css";

/**
 * TOPPER의 주요 활동: Study / Project / Contest 카드 3개(466×470, 간격 20px).
 * 3D 배경 + 장식 막대 + 가운데 제목 + 아래 설명. 호버 시 배경/막대가 살짝 움직인다.
 */
export default function ActivityCards({ cards = ACTIVITY_CARDS }) {
  return (
    <section className="main-section">
      <SectionTitle
        className="main-title"
        title="TOPPER의 주요 활동"
        description="공부부터 프로젝트, 대회까지 다양한 활동을 함께하며 새로운 것을 배우고, 직접 도전해 보는 경험을 쌓아갑니다."
      />
      <div className="activity">
        {cards.map((c) => (
          <article className="activity__card" key={c.key}>
            <div className="activity__visual" style={{ background: c.bg }}>
              <div className="activity__layers">
                {c.layers.map((l, i) => (
                  <div
                    key={i}
                    className="activity__box"
                    style={{
                      left: l.box[0],
                      top: l.box[1],
                      width: l.box[2],
                      height: l.box[3],
                    }}
                  >
                    <img
                      src={l.src}
                      alt=""
                      style={{
                        width: l.w,
                        height: l.h,
                        transform: `rotate(${l.rot}deg)`,
                        mixBlendMode: l.blend,
                        opacity: l.opacity,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="activity__bars">
                {c.bars.map((b, i) => (
                  <div
                    key={i}
                    className="activity__box"
                    style={{ left: b.l, top: b.t, width: b.bw, height: b.bh }}
                  >
                    <span
                      style={{
                        width: b.len,
                        height: b.thick,
                        background: b.color,
                        transform: `${b.flip ? "scaleY(-1) " : ""}rotate(${b.rot}deg)`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <h3 className="activity__name" style={{ color: c.titleColor }}>
                {c.title}
              </h3>
            </div>
            <p className="activity__desc">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
