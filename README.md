# F&F 2026.01 Report Webapp Handoff

## 1) Project summary
- Stack: Next.js 16, React 19, TypeScript
- Local dev URL: `http://localhost:3000`
- PDF/HTML export scripts:
  - `node generate-pdf.js`
  - `node generate-html.js`

## 2) Current finalized data reflected in UI
- KPI table order:
  - 전사 합계
  - MLB
  - MLB KIDS
  - DISCOVERY
  - DUVETICA
  - S.TACCHINI
- 전사 합계(현재 반영값):
  - 직접이익률 `24.6%`
  - 할인율 `17.2%`
  - 25F 판매율 `45.0%`
  - 신발재고(주) `57.5주`
  - 자사몰이익률 `59.7%`
- MLB 자사몰이익률: `60.5%`
- S.TACCHINI 신발재고(주): `146.3주` (red style)
- 경영진 핵심 메시지 문구:
  - `두 자릿수 성장` -> `전년 동월 대비 8% 성장`

## 3) Print/PDF settings (important)
- `브랜드별 주요 KPI 비교` 섹션은 PDF에서 2페이지 시작:
  - `src/components/BrandKpiTable.tsx`
  - `src/app/globals.css` (`.kpi-compare-print-break`)
- 인쇄 시 마지막 배경이 회색으로 보이지 않도록 print background 강제 white 적용:
  - `src/app/globals.css` (`@media print` -> `html, body { background: white !important; }`)

## 4) Where to start next time
1. Pull latest and run local server.
```bash
git pull
npm install
npm run dev
```
2. Verify key sections first:
   - KPI table values/order
   - 경영진 핵심 메시지
   - Positive Signal #3 brand rate line
3. Generate deliverables:
```bash
node generate-pdf.js
node generate-html.js
```
4. Open generated files and check:
   - `fnf_jan2026_report.pdf`
   - `fnf_jan2026_report.html`

## 5) Deployment notes
- Git push to `origin/main` is used as deploy trigger workflow in practice.
- Vercel CLI direct deploy may fail without valid token:
  - `Error: The specified token is not valid. Use vercel login to generate a new token.`
- If manual Vercel deploy is needed:
```bash
npx vercel login
npx vercel --prod
```

## 6) Current workspace state to handle
- Generated artifacts are currently untracked by git:
  - `fnf_jan2026_report.pdf`
  - `fnf_jan2026_report.html`
- Decide per release whether to:
  - keep them as artifacts only (recommended), or
  - track them in git explicitly.
