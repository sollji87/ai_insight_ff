/**
 * generate-html.js — 독립 HTML 파일 추출 스크립트
 *
 * 사용법:
 *   1. npm run dev  (로컬 서버 먼저 실행)
 *   2. node generate-html.js
 *
 * 출력: fnf_jan2026_report.html
 *   - 모든 CSS가 인라인 <style>로 포함됨
 *   - 서버 없이 브라우저에서 바로 열 수 있음
 *
 * 수정 포인트:
 *   - TARGET_URL: 로컬 서버 주소 (포트 변경 시 수정)
 *   - OUTPUT_FILE: 출력 HTML 파일명
 */

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const TARGET_URL = "http://localhost:3000";
const OUTPUT_FILE = path.join(__dirname, "fnf_jan2026_report.html");

async function generateHtml() {
  console.log("🚀 HTML 추출 시작...");
  console.log(`   대상 URL: ${TARGET_URL}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 페이지 로드
  await page.goto(TARGET_URL, { waitUntil: "networkidle0", timeout: 30000 });

  // 폰트 로딩 완료 대기
  await page.evaluateHandle("document.fonts.ready");

  // 페이지 내부에서 모든 CSS를 인라인 스타일로 수집
  const htmlContent = await page.evaluate(() => {
    // 모든 stylesheet의 CSS 규칙을 수집
    let allCss = "";
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          allCss += rule.cssText + "\n";
        }
      } catch (e) {
        // 외부 스타일시트(CORS)는 link 태그에서 href를 가져옴
        if (sheet.href) {
          // Google Fonts 등은 link 태그로 유지
        }
      }
    }

    // 외부 폰트 링크 수집
    const fontLinks = [];
    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      if (link.href && link.href.includes("fonts.googleapis.com")) {
        fontLinks.push(link.href);
      }
    });

    // body의 HTML 가져오기
    const bodyHtml = document.body.innerHTML;
    const lang = document.documentElement.lang || "ko";
    const title = document.title;

    return { allCss, bodyHtml, fontLinks, lang, title };
  });

  // 독립 HTML 파일 조합
  const fontLinkTags = htmlContent.fontLinks
    .map((href) => `<link href="${href}" rel="stylesheet">`)
    .join("\n  ");

  const standaloneHtml = `<!DOCTYPE html>
<html lang="${htmlContent.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${htmlContent.title}</title>
${fontLinkTags}
<style>
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    @page { size: A4; margin: 10mm 8mm; }
  }
  ${htmlContent.allCss}
</style>
</head>
<body>
${htmlContent.bodyHtml}
</body>
</html>`;

  fs.writeFileSync(OUTPUT_FILE, standaloneHtml, "utf-8");

  await browser.close();
  console.log(`✅ HTML 추출 완료: ${OUTPUT_FILE}`);
  console.log(`   파일 크기: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
}

generateHtml().catch((error) => {
  console.error("❌ HTML 추출 실패:", error.message);
  process.exit(1);
});
