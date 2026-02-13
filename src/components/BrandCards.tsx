/**
 * BrandCards 컴포넌트 — 브랜드별 핵심 실적 카드 5개
 *
 * 수정 포인트:
 * - 각 브랜드 카드의 매출(brand-revenue), 매장수(brand-unit), 메트릭(metric-row) 수치 직접 수정
 * - 브랜드 추가/삭제 시 brand-grid 그리드 컬럼 수도 globals.css에서 조정
 * - 색상 클래스: up(녹색), down(적색), warn(황색), neutral(회색)
 */
export default function BrandCards() {
  return (
    <>
      <div className="section-title">
        <span className="icon">📊</span> 브랜드별 핵심 실적 (2026년 1월)
      </div>
      <div className="brand-grid">
        {/* ── MLB ── */}
        <div className="brand-card mlb">
          <div className="brand-name">⚾ MLB</div>
          <div className="brand-revenue">29,200</div>
          <div className="brand-unit">백만원 · 매장 150개(-12)</div>
          <div className="brand-metrics">
            <div className="metric-row">
              <span className="label">YoY</span>
              <span className="value up">111%</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익</span>
              <span className="value up">3,811백만</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익률</span>
              <span className="value up">13.8% (+4.2%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">직접이익률</span>
              <span className="value up">27.1% (+2.8%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">할인율</span>
              <span className="value warn">7.3% (+2.6%p)↑</span>
            </div>
            <div className="metric-row">
              <span className="label">점당매출</span>
              <span className="value up">173백만 (118%)</span>
            </div>
          </div>
        </div>

        {/* ── DISCOVERY ── */}
        <div className="brand-card dsc">
          <div className="brand-name">🏔️ DISCOVERY</div>
          <div className="brand-revenue">40,811</div>
          <div className="brand-unit">백만원 · 매장 267개(-8)</div>
          <div className="brand-metrics">
            <div className="metric-row">
              <span className="label">YoY</span>
              <span className="value up">104%</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익</span>
              <span className="value neutral">5,209백만</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익률</span>
              <span className="value neutral">14.0% (-1.5%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">직접이익률</span>
              <span className="value warn">26.1% (-2.8%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">할인율</span>
              <span className="value neutral">23.2% (-0.1%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">점당매출</span>
              <span className="value up">124백만 (104%)</span>
            </div>
          </div>
        </div>

        {/* ── MLB KIDS ── */}
        <div className="brand-card mlbk">
          <div className="brand-name">⚾ MLB KIDS</div>
          <div className="brand-revenue">5,746</div>
          <div className="brand-unit">백만원 · 매장 66개(-3) · 인원 46명(-10)</div>
          <div className="brand-metrics">
            <div className="metric-row">
              <span className="label">YoY</span>
              <span className="value warn">98% (사입제외 105%)</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익</span>
              <span className="value down">
                -764백만 (가방사입 적자 307백만 제외 시, 457백만 )
              </span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익률</span>
              <span className="value down">-12.8%</span>
            </div>
            <div className="metric-row">
              <span className="label">직접이익률</span>
              <span className="value neutral">3.9% (+1.0%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">할인율</span>
              <span className="value warn">7.7% (+2.0%p)↑</span>
            </div>
            <div className="metric-row">
              <span className="label">점당매출</span>
              <span className="value up">63백만 (113%)</span>
            </div>
          </div>
        </div>

        {/* ── DUVETICA ── */}
        <div className="brand-card dv">
          <div className="brand-name">🧥 DUVETICA</div>
          <div className="brand-revenue">3,833</div>
          <div className="brand-unit">백만원 · 매장 30개(+5) · 인원 22명</div>
          <div className="brand-metrics">
            <div className="metric-row">
              <span className="label">YoY</span>
              <span className="value up">165%</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익</span>
              <span className="value up">473백만 흑자전환!</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익률</span>
              <span className="value up">13.6%</span>
            </div>
            <div className="metric-row">
              <span className="label">직접이익률</span>
              <span className="value up">34.1% (+10.7%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">할인율</span>
              <span className="value up">24.4% (-21.7%p)↓↓</span>
            </div>
            <div className="metric-row">
              <span className="label">점당매출</span>
              <span className="value up">101백만 (142%)</span>
            </div>
          </div>
        </div>

        {/* ── SERGIO TACCHINI ── */}
        <div className="brand-card st">
          <div className="brand-name">🎾 SERGIO TACCHINI</div>
          <div className="brand-revenue">468</div>
          <div className="brand-unit">백만원 · 매장 11개(-4)</div>
          <div className="brand-metrics">
            <div className="metric-row">
              <span className="label">YoY</span>
              <span className="value up">108%</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익</span>
              <span className="value down">-914백만 적자확대</span>
            </div>
            <div className="metric-row">
              <span className="label">영업이익률</span>
              <span className="value down">-214.9%</span>
            </div>
            <div className="metric-row">
              <span className="label">직접이익률</span>
              <span className="value down">-55.6% (-27.9%p)</span>
            </div>
            <div className="metric-row">
              <span className="label">할인율</span>
              <span className="value down">35.7% (+11.4%p)↑↑</span>
            </div>
            <div className="metric-row">
              <span className="label">점당매출</span>
              <span className="value up">26백만 (173%)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
