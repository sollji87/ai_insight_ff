/**
 * KpiStrip 컴포넌트 — 전사 핵심 KPI 5개 카드
 *
 * 수정 포인트:
 * - 각 KPI 값(kpi-value), 라벨(kpi-label), 변동(kpi-change) 텍스트 직접 수정
 * - KPI 항목 추가/삭제 시 kpi-strip 그리드 컬럼 수도 globals.css에서 조정
 */
export default function KpiStrip() {
  return (
    <div className="kpi-strip">
      <div className="kpi-item">
        <div className="kpi-value">80,058</div>
        <div className="kpi-label">전사 실판매출 (백만원)</div>
        <div className="kpi-change up">▲ YoY 108% · +6,141</div>
      </div>
      <div className="kpi-item">
        <div className="kpi-value">7,815</div>
        <div className="kpi-label">전사 영업이익 (백만원)</div>
        <div className="kpi-change up">▲ OPM 9.8%</div>
      </div>
      <div className="kpi-item">
        <div className="kpi-value">3 / 5</div>
        <div className="kpi-label">흑자 브랜드</div>
        <div className="kpi-change neutral">MLB, DX, DV 흑자</div>
      </div>
      <div className="kpi-item">
        <div className="kpi-value">
          586<span style={{ fontSize: "12px" }}>개</span>
        </div>
        <div className="kpi-label">전사 매장수</div>
        <div className="kpi-change neutral">전년비 -25개 구조조정</div>
      </div>
      <div className="kpi-item">
        <div className="kpi-value">△1,678</div>
        <div className="kpi-label">적자 브랜드 합산 (백만)</div>
        <div className="kpi-change down">KIDS △764 + ST △914</div>
      </div>
    </div>
  );
}
