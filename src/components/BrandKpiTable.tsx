/**
 * BrandKpiTable 컴포넌트 — 브랜드별 주요 KPI 비교 테이블
 *
 * 수정 포인트:
 * - 테이블 수치: 각 td 내부 텍스트/숫자 직접 수정
 * - 배지 색상: badge-green(성장), badge-red(부진), badge-amber(주의), badge-blue(합계)
 * - 행 추가/삭제: tbody 내 tr 추가/삭제
 */
export default function BrandKpiTable() {
  return (
    <>
      <div className="section-title">
        <span className="icon">📋</span> 브랜드별 주요 KPI 비교
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>브랜드</th>
            <th>실판매출</th>
            <th>YoY</th>
            <th>영업이익</th>
            <th>OPM</th>
            <th>직접이익률</th>
            <th>할인율</th>
            <th>25F 판매율</th>
            <th>신발재고(주)</th>
            <th>자사몰이익률</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🏔️ DISCOVERY</td>
            <td>40,811</td>
            <td>
              <span className="badge badge-green">104%</span>
            </td>
            <td>5,209</td>
            <td>14.0%</td>
            <td>26.1%</td>
            <td>23.2%</td>
            <td>
              <span className="badge badge-amber">44.2%</span>
            </td>
            <td>51.4주</td>
            <td>59.0%</td>
          </tr>
          <tr>
            <td>⚾ MLB</td>
            <td>29,200</td>
            <td>
              <span className="badge badge-green">111%</span>
            </td>
            <td>3,811</td>
            <td>13.8%</td>
            <td>27.1%</td>
            <td>7.3%</td>
            <td>
              <span className="badge badge-amber">49.6%</span>
            </td>
            <td>55.3주</td>
            <td>62.3%</td>
          </tr>
          <tr>
            <td>⚾ MLB KIDS</td>
            <td>5,746</td>
            <td>
              <span className="badge badge-amber">98%</span>
            </td>
            <td>
              <span className="down">-764</span>
            </td>
            <td>
              <span className="down">-12.8%</span>
            </td>
            <td>3.9%</td>
            <td>7.7%</td>
            <td>
              <span className="badge badge-red">41.1%</span>
            </td>
            <td>
              <span className="down">133.0주</span>
            </td>
            <td>54.3%</td>
          </tr>
          <tr>
            <td>🧥 DUVETICA</td>
            <td>3,833</td>
            <td>
              <span className="badge badge-green">165%</span>
            </td>
            <td>
              <span className="up">473</span>
            </td>
            <td>
              <span className="up">13.6%</span>
            </td>
            <td>
              <span className="up">34.1%</span>
            </td>
            <td>24.4%</td>
            <td>
              <span className="badge badge-green">47.7%</span>
            </td>
            <td>29.1주</td>
            <td>
              <span className="up">69.0%</span>
            </td>
          </tr>
          <tr>
            <td>🎾 S.TACCHINI</td>
            <td>468</td>
            <td>
              <span className="badge badge-green">108%</span>
            </td>
            <td>
              <span className="down">-914</span>
            </td>
            <td>
              <span className="down">-214.9%</span>
            </td>
            <td>
              <span className="down">-55.6%</span>
            </td>
            <td>
              <span className="down">35.7%</span>
            </td>
            <td>
              <span className="badge badge-red">30.4%</span>
            </td>
            <td>—</td>
            <td>46.2%</td>
          </tr>
          <tr className="total-row">
            <td>전사 합계</td>
            <td>80,058</td>
            <td>
              <span className="badge badge-blue">110%</span>
            </td>
            <td>7,815</td>
            <td>9.8%</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
