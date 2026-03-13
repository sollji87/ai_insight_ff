import MonthSwitcher from "@/components/MonthSwitcher";
import { ReportData } from "@/lib/reportData";

type ReportViewProps = {
  report: ReportData;
};

export default function ReportView({ report }: ReportViewProps) {
  return (
    <div className="report">
      <MonthSwitcher activeKey={report.key} />

      <div className="header">
        <div className="header-left">
          <h1>F&amp;F Corporation — 전사 브랜드 경영 요약</h1>
          <div className="subtitle">{report.subtitle}</div>
        </div>
        <div className="header-right">
          <div className="total-revenue">
            {report.totalRevenue}
            <span style={{ fontSize: "14px", fontWeight: 400, opacity: 0.6 }}>
              {" "}백만
            </span>
          </div>
          <div className="total-label">{report.totalLabel}</div>
        </div>
      </div>

      <div className="content">
        <div className="kpi-strip">
          {report.kpis.map((item, index) => (
            <div key={`${report.key}-kpi-${index}`} className="kpi-item">
              <div className="kpi-value">{item.value}</div>
              <div className="kpi-label">{item.label}</div>
              <div className={`kpi-change ${item.tone}`}>{item.change}</div>
            </div>
          ))}
        </div>

        <div className="section-title">
          <span className="icon">📊</span> {report.brandSectionTitle}
        </div>
        <div className="brand-grid">
          {report.brands.map((brand) => (
            <div key={`${report.key}-${brand.name}`} className={`brand-card ${brand.accentClass}`}>
              <div className="brand-name">{brand.name}</div>
              <div className="brand-revenue">{brand.revenue}</div>
              <div className="brand-unit">{brand.unit}</div>
              <div className="brand-metrics">
                {brand.metrics.map((metric, index) => (
                  <div key={`${brand.name}-metric-${index}`} className="metric-row">
                    <span className="label">{metric.label}</span>
                    <span className={`value ${metric.tone}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="two-col">
          <div>
            <div className="section-title">
              <span className="icon">🚨</span> 전사 Critical Risk
            </div>
            {report.risks.map((risk, index) => (
              <div
                key={`${report.key}-risk-${index}`}
                className="risk-card"
                style={{ marginBottom: index === report.risks.length - 1 ? undefined : "8px" }}
              >
                <h4>{risk.title}</h4>
                <ul className="card-list">
                  {risk.items.map((item, itemIndex) => (
                    <li key={`${report.key}-risk-${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="section-title">
              <span className="icon">✅</span> 전사 Positive Signal
            </div>
            {report.opportunities.map((opportunity, index) => (
              <div
                key={`${report.key}-opp-${index}`}
                className="opp-card"
                style={{ marginBottom: index === report.opportunities.length - 1 ? undefined : "8px" }}
              >
                <h4>{opportunity.title}</h4>
                <ul className="card-list">
                  {opportunity.items.map((item, itemIndex) => (
                    <li key={`${report.key}-opp-${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="kpi-compare-print-break">
          <div className="section-title">
            <span className="icon">📋</span> 브랜드별 주요 KPI 비교
          </div>
          <table className="data-table">
            <thead>
              <tr>
                {report.table.columns.map((column) => (
                  <th key={`${report.key}-column-${column}`}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {report.table.rows.map((row, rowIndex) => (
                <tr key={`${report.key}-row-${rowIndex}`} className={row.rowClassName}>
                  <td>{row.label}</td>
                  {row.cells.map((cell, cellIndex) => {
                    const className = cell.badgeTone
                      ? `badge badge-${cell.badgeTone}`
                      : cell.tone || "";

                    return (
                      <td key={`${report.key}-row-${rowIndex}-cell-${cellIndex}`}>
                        {className ? <span className={className}>{cell.content}</span> : cell.content}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-title">
          <span className="icon">🎯</span> CEO 전략 제안 — 즉시 / 단기 / 중기
        </div>
        <div className="three-col">
          {report.recommendations.map((recommendation, index) => (
            <div key={`${report.key}-rec-${index}`} className="action-card">
              <h4>{recommendation.title}</h4>
              <ul className="card-list">
                {recommendation.items.map((item, itemIndex) => (
                  <li key={`${report.key}-rec-${index}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ceo-msg">
          <div className="msg-title">📣 경영진 핵심 메시지</div>
          {report.ceoMessage}
        </div>
      </div>

      <div className="footer">
        <span>F&amp;F Corporation | 경영관리팀 FP&amp;A | Confidential</span>
        <span>{report.footerLabel}</span>
      </div>
    </div>
  );
}
