import {
  LOGO_FONT_SIZE,
  LOGO_BASELINE,
  LOGO_GLYPHS,
} from './heroLogoGlyphs'

const SCALE = LOGO_FONT_SIZE / 1000 // 폰트 단위(1000 upm) → px
const WIDTH = 1379.17
const HEIGHT = 366

// 글씨가 올라온 뒤(1.2s) 시작해서, 웃는 모양으로 변했다가 원래 모양으로 돌아온다.
const SMILE_BEGIN = '1.4s'
const SMILE_DUR = '1.6s'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Hero의 "TOPPER" 로고.
 * 폰트(창원단감아삭체)의 글자 윤곽선을 SVG로 옮겨서, O/P/P/R 안쪽의 곡선 틈이
 * 새로 그려질 때 "씨익 웃는" 모양으로 움직이게 한다.
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
        {LOGO_GLYPHS.map((g, i) => (
          <g
            key={i}
            transform={`translate(${g.x} ${LOGO_BASELINE}) scale(${SCALE} ${-SCALE})`}
          >
            <path d={g.d} fill="currentColor">
              {animate && g.smile && (
                <animate
                  attributeName="d"
                  dur={SMILE_DUR}
                  begin={SMILE_BEGIN}
                  values={`${g.d};${g.smile};${g.d}`}
                  keyTimes="0;0.45;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
                />
              )}
            </path>
          </g>
        ))}
      </svg>
    </h1>
  )
}
