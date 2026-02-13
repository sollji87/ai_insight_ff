/**
 * Footer 컴포넌트 — 보고서 하단 정보
 *
 * 수정 포인트:
 * - 부서명, 기밀등급 등: 왼쪽 span
 * - 데이터 기준일: 오른쪽 span
 */
export default function Footer() {
  return (
    <div className="footer">
      <span>F&amp;F Corporation | 경영관리팀 FP&amp;A | Confidential</span>
      <span>데이터 기준: 2026년 1월 실적(사입제외) | 2026.02.13</span>
    </div>
  );
}
