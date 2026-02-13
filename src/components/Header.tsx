/**
 * Header 컴포넌트 — 보고서 상단 헤더
 *
 * 수정 포인트:
 * - 보고서 제목: h1 태그 내 텍스트
 * - 보고서 부제목(날짜, 부서 등): subtitle div 내 텍스트
 * - 전사 실판매출 합계: total-revenue 영역 숫자
 */
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>F&amp;F Corporation — 전사 브랜드 경영 요약</h1>
        <div className="subtitle">
          2026년 1월 실적 | CEO 보고용 | 경영관리팀 FP&amp;A | 보고일: 2026.02.13
        </div>
      </div>
      <div className="header-right">
        <div className="total-revenue">
          80,058
          <span style={{ fontSize: "14px", fontWeight: 400, opacity: 0.6 }}>
            {" "}백만
          </span>
        </div>
        <div className="total-label">
          전사 실판매출 합계 (5개 브랜드 · 사입제외)
        </div>
      </div>
    </div>
  );
}
