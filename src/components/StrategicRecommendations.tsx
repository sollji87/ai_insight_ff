/**
 * StrategicRecommendations 컴포넌트 — CEO 전략 제안 (즉시/단기/중기)
 *
 * 수정 포인트:
 * - 각 action-card 내부 h4(제목), card-list li(세부 항목) 직접 수정
 * - 기간 구분: 즉시(2월 내), 단기(Q1), 중기(2026 연간)
 */
export default function StrategicRecommendations() {
  return (
    <>
      <div className="section-title">
        <span className="icon">🎯</span> CEO 전략 제안 — 즉시 / 단기 / 중기
      </div>
      <div className="three-col">
        {/* ── 즉시 실행 ── */}
        <div className="action-card">
          <h4>⚡ 즉시 실행 (2월 내)</h4>
          <ul className="card-list">
            <li>
              <b>전사 신발 재고 TF 구성</b> — MLB 55주→40주, KIDS 133주→80주,
              브랜드별 소진 로드맵 수립
            </li>
            <li>
              <b>ST 영업비 긴급 절감(-20%)</b> — 광고비·샘플비 컷, 월 678→540백만
              목표
            </li>
            <li>
              <b>KIDS 스타필드 3개점 구조조정</b> — 일산/수원/운정 즉시
              폐점(연 228백만 절감)
            </li>
            <li>
              <b>25FW 전사 Final Sale</b> — 2/15~28 동시 프로모션, 판매율 +10%p
              목표
            </li>
            <li>
              <b>제휴몰 할인 긴급 통제</b> — KIDS 30%→20%, ST 53%→50% 이하
            </li>
          </ul>
        </div>

        {/* ── 단기 전략 ── */}
        <div className="action-card">
          <h4>🎯 단기 전략 (Q1)</h4>
          <ul className="card-list">
            <li>
              <b>자사몰 비중 전사 확대</b> — 전 브랜드 이익률 46~69%, 비중 확대가
              수익성 직결
            </li>
            <li>
              <b>MLB 플래그쉽 확대</b> — 북촌 3/20 오픈(월 1.2억), 도산 준비,
              할인율 Q1 6% 이하
            </li>
            <li>
              <b>DX 대리점 할인율 정상화</b> — 18.1%→12% 이하, 역성장 92% 회복
            </li>
            <li>
              <b>KIDS 가방 카테고리 집중</b> — 26N 책가방 신학기 시즌(2~3월)
              극대화
            </li>
            <li>
              <b>DV MEN 라인 비중 확대</b> — 23%→30%, 성별 포트폴리오 균형
            </li>
            <li>
              <b>ST 한남 플래그쉽 BEP</b> — 3개월 내 손익분기, 할인율 19.6%→15%
              이하
            </li>
          </ul>
        </div>

        {/* ── 중기 성장 ── */}
        <div className="action-card">
          <h4>🏆 중기 성장 (2026 연간)</h4>
          <ul className="card-list">
            <li>
              <b>채널 포트폴리오 리밸런싱</b> — 면세 의존도 축소, 온라인·플래그쉽
              고수익 채널 비중 확대
            </li>
            <li>
              <b>원가율 전사 관리 체계</b> — TAG 대비 원가 격차 모니터링, 26SS
              원가 목표 설정
            </li>
            <li>
              <b>ST 존속 여부 판단</b> — 1Q 흑자전환 실패 시 사업 전략 전면
              재검토
            </li>
            <li>
              <b>DV 사계절 브랜드 전환</b> — 다운 의존도 83.7%→60%, SS 라인업
              확대
            </li>
            <li>
              <b>MLB 2.0 인테리어 가속</b> — 14%→38%(26), 브랜드 리뉴얼 체험
              강화
            </li>
            <li>
              <b>DX 저수익 매장 구조조정</b> — 11개점 클로징(연 800백만 절감)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
