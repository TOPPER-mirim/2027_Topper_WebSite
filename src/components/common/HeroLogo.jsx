import {
  LOGO_FONT_SIZE,
  LOGO_BASELINE,
  LOGO_GLYPHS,
} from './heroLogoGlyphs'

const SCALE = LOGO_FONT_SIZE / 1000 // 폰트 단위(1000 upm) → px
const WIDTH = 1379.17
const HEIGHT = 366

// 글씨가 올라오는 동안(1.2s) 시작해서, 틈이 가운데에서 좌우로 길어진다.
const GROW_BEGIN = '0.9s'
const GROW_DUR = '1s'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Hero의 "TOPPER" 로고.
 * 폰트(창원단감아삭체)의 글자 윤곽선을 SVG로 옮겨서, O/P/P/R 안쪽의 곡선 틈이
 * 새로 그려질 때 가운데에서 좌우로 길어지게 한다.
 * 글자 윤곽선 데이터는 heroLogoGlyphs.js (폰트에서 자동 생성).
 */
export default function HeroLogo({ className = '' }) {
  const animate = !prefersReducedMotion()

  return (
    <h1 className={className} aria-label="TOPPER">
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        aria-hidden="true"
        focusable="false"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {LOGO_GLYPHS.map((g, i) => {
          const grows = animate && g.collapsed
          return (
            <g
              key={i}
              transform={`translate(${g.x} ${LOGO_BASELINE}) scale(${SCALE} ${-SCALE})`}
            >
              {/* 애니메이션 시작 전에는 틈이 가운데로 모인 모양, 끝나면 원래 모양 */}
              <path d={grows ? g.collapsed : g.d} fill="currentColor">
                {grows && (
                  <animate
                    attributeName="d"
                    dur={GROW_DUR}
                    begin={GROW_BEGIN}
                    from={g.collapsed}
                    to={g.d}
                    fill="freeze"
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.22 1 0.36 1"
                  />
                )}
              </path>
            </g>
          )
        })}
      </svg>
    </h1>
  )
}
