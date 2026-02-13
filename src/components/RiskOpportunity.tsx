/**
 * RiskOpportunity 컴포넌트 — 전사 Critical Risk & Positive Signal
 *
 * 수정 포인트:
 * - 리스크 항목: risk-card 내부 h4(제목), card-list li(상세 내용)
 * - 기회 항목: opp-card 내부 h4(제목), card-list li(상세 내용)
 * - 항목 추가/삭제: li 태그 추가/삭제
 */
export default function RiskOpportunity() {
  return (
    <div className="two-col">
      {/* ── Critical Risk ── */}
      <div>
        <div className="section-title">
          <span className="icon">🚨</span> 전사 Critical Risk
        </div>

        <div className="risk-card" style={{ marginBottom: "8px" }}>
          <h4>1. 신발 재고 전사 위기</h4>
          <ul className="card-list">
            <li>
              <b>MLB 55.3주(13개월)</b> — 기말 1,133억, +5.2주 증가, 26SS 입고
              여력 제약
            </li>
            <li>
              <b>MLB KIDS 133주(2.5년)</b> — 당월 58억 선입고 포함, 구조적 과잉
            </li>
            <li>
              <b>ST ACC 181주</b> — 과시즌 재고 161억(50.3%), 소진 불투명
            </li>
            <li>전사 신발·ACC 재고 정상화 TF 구성 시급</li>
          </ul>
        </div>

        <div className="risk-card" style={{ marginBottom: "8px" }}>
          <h4>2. 적자 브랜드 합산 △1,678백만 — 전사 이익 잠식</h4>
          <ul className="card-list">
            <li>
              <b>ST 영업적자 -914백만</b> — 영업비(678백만)가 매출(468백만) 초과,
              비정상 구조
            </li>
            <li>
              <b>MLB KIDS -764백만</b> — 적자 지속(전년비 171백만 축소), 스타필드
              3개점 구조적 적자(-19백만/월)
            </li>
            <li>
              2개 브랜드 합산 적자가 DUVETICA 시즌 이익 수준 잠식
            </li>
          </ul>
        </div>

        <div className="risk-card" style={{ marginBottom: "8px" }}>
          <h4>3. 할인율 상승 &amp; 25FW 판매율 부진</h4>
          <ul className="card-list">
            <li>
              ST 35.7%(+11.4%p), MLB 7.3%(+2.6%p), KIDS 7.7%(+2.0%p) 상승 추세
            </li>
            <li>
              DX 대리점 할인율 18.1%(+5.5%p) 급등, 제휴몰 KIDS 30% 붕괴
            </li>
            <li>
              25FW 판매율: MLB 49.6%(-5.7%p), DX 44.2%(-5.2%p), KIDS
              41.1%(-2.7%p), ST 30.4%
            </li>
          </ul>
        </div>

        <div className="risk-card">
          <h4>4. 원가율 구조적 상승</h4>
          <ul className="card-list">
            <li>
              DX 25FW 원가율 24.0%(+2.2%p, 원부자재비 주도), KIDS 25.5%(+1.6%p,
              공임 주도)
            </li>
            <li>
              TAG 인상 &lt; 원가 상승 → 마진 압박 전사적 확산, 전사 원가관리 체계
              필요
            </li>
          </ul>
        </div>
      </div>

      {/* ── Positive Signal ── */}
      <div>
        <div className="section-title">
          <span className="icon">✅</span> 전사 Positive Signal
        </div>

        <div className="opp-card" style={{ marginBottom: "8px" }}>
          <h4>1. DUVETICA 흑자전환 — 턴어라운드 성공</h4>
          <ul className="card-list">
            <li>
              영업이익 +473백만(전년 -5백만), FW누적 18억(전년비 +56억)
            </li>
            <li>
              할인율 46.1%→24.4%(-21.7%p) 정가 판매력 극적 강화
            </li>
            <li>
              백화점 +252%, 자사몰 +365%(이익률 69.0%), 25F 판매율
              47.7%(+8.6%p)
            </li>
          </ul>
        </div>

        <div className="opp-card" style={{ marginBottom: "8px" }}>
          <h4>2. MLB 수익성 중심 체질 전환</h4>
          <ul className="card-list">
            <li>
              영업이익률 13.8%(+4.2%p), 직접이익 +26%(매출 +11%의 2.4배 성장)
            </li>
            <li>
              면세 의존도 36.4%→30.2% 전략적 축소, 채널 다변화 성공
            </li>
            <li>
              플래그쉽 +139%(성수점 월 7억), RF +45%, 제휴몰 +27% 신성장 채널
            </li>
          </ul>
        </div>

        <div className="opp-card" style={{ marginBottom: "8px" }}>
          <h4>3. 자사몰 전 브랜드 최고 수익 채널 확인</h4>
          <ul className="card-list">
            <li>
              DV 69.0% / MLB 62.3% / DX 59.0% / KIDS 54.3% / ST 46.2%
            </li>
            <li>
              유통수수료 0% 구조로 수익성 압도적 우위 — 비중 확대가 전사 이익률
              직결
            </li>
          </ul>
        </div>

        <div className="opp-card" style={{ marginBottom: "8px" }}>
          <h4>4. MLB KIDS 가방 폭발 성장 + 효율화</h4>
          <ul className="card-list">
            <li>
              가방 YoY +151%, 매출 2,452백만(비중 42.7%), 직접이익 300백만, 재고주수
              19.4주 건전
            </li>
            <li>
              크로스백 +2,788%, 백팩 +1,900% — 카테고리 리더십 확보
            </li>
            <li>적자폭 171백만 축소, 인원 46명(-10명) 효율화 성과</li>
          </ul>
        </div>

        <div className="opp-card">
          <h4>5. 면세·직영 등 고성장 채널</h4>
          <ul className="card-list">
            <li>
              DISCOVERY 면세 +57%(2,901백만), 직영 +37%(+2개점)
            </li>
            <li>
              ST 외형 +8%(직영 +55%, 제휴몰 +46%, 아울렛 +71%)
            </li>
            <li>전사 매장 -25개 구조조정에도 점당매출 전 브랜드 상승</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
