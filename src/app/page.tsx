/**
 * 메인 페이지 — 모든 보고서 섹션 컴포넌트 조합
 *
 * 수정 포인트:
 * - 섹션 순서 변경: 아래 컴포넌트 순서만 바꾸면 됨
 * - 섹션 추가/삭제: import & JSX에서 추가/삭제
 */
import Header from "@/components/Header";
import KpiStrip from "@/components/KpiStrip";
import BrandCards from "@/components/BrandCards";
import RiskOpportunity from "@/components/RiskOpportunity";
import BrandKpiTable from "@/components/BrandKpiTable";
import StrategicRecommendations from "@/components/StrategicRecommendations";
import CeoMessage from "@/components/CeoMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="report">
      {/* 보고서 헤더 */}
      <Header />

      <div className="content">
        {/* 전사 핵심 KPI */}
        <KpiStrip />

        {/* 브랜드별 핵심 실적 카드 */}
        <BrandCards />

        {/* 전사 리스크 & 기회 */}
        <RiskOpportunity />

        {/* 브랜드별 KPI 비교 테이블 */}
        <BrandKpiTable />

        {/* CEO 전략 제안 */}
        <StrategicRecommendations />

        {/* 경영진 핵심 메시지 */}
        <CeoMessage />
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
