import type { Metadata } from "next";
import "./globals.css";

/**
 * 루트 레이아웃
 * - lang="ko" 설정
 * - Noto Sans KR 폰트 (Google Fonts CDN)
 * - 보고서 제목 메타데이터
 *
 * 수정 포인트: title, description 변경 시 아래 metadata 객체 수정
 */

export const metadata: Metadata = {
  title: "F&F Corporation | 전사 브랜드 경영 요약보고서",
  description:
    "F&F 전사 브랜드(MLB, DISCOVERY, MLB KIDS, DUVETICA, S.TACCHINI) 월간 실적 CEO 보고용 경영 요약",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
