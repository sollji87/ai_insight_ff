/**
 * generate-pdf.js — A4 사이즈 PDF 생성 스크립트
 *
 * 사용법:
 *   1. npm run dev  (로컬 서버 먼저 실행)
 *   2. node generate-pdf.js
 *
 * 출력 기본값: fnf_mar2026_report.pdf
 *
 * 수정 포인트:
 *   - REPORT_PATH: 대상 경로 (기본: /mar-2026)
 *   - REPORT_BASENAME: 출력 파일명 prefix (기본: fnf_mar2026_report)
 *   - margin: 여백 (상하좌우)
 */

const puppeteer = require("puppeteer");
const path = require("path");

const REPORT_PATH = process.env.REPORT_PATH || "/mar-2026";
const REPORT_BASENAME = process.env.REPORT_BASENAME || "fnf_mar2026_report";
const TARGET_URL = `http://localhost:3000${REPORT_PATH}`;
const OUTPUT_FILE = path.join(__dirname, `${REPORT_BASENAME}.pdf`);

async function generatePdf() {
  console.log("🚀 PDF 생성 시작...");
  console.log(`   대상 URL: ${TARGET_URL}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 페이지 로드 (네트워크 idle 상태까지 대기)
  await page.goto(TARGET_URL, { waitUntil: "networkidle0", timeout: 30000 });

  // 폰트 로딩 완료 대기
  await page.evaluateHandle("document.fonts.ready");

  // A4 PDF 생성
  await page.pdf({
    path: OUTPUT_FILE,
    format: "A4",
    printBackground: true,
    margin: {
      top: "10mm",
      bottom: "10mm",
      left: "8mm",
      right: "8mm",
    },
  });

  await browser.close();
  console.log(`✅ PDF 생성 완료: ${OUTPUT_FILE}`);
}

generatePdf().catch((error) => {
  console.error("❌ PDF 생성 실패:", error.message);
  process.exit(1);
});
