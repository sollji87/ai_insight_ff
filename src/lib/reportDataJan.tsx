import { ReportData } from "@/lib/reportTypes";

export const januaryReport: ReportData = {
  key: "jan-2026",
  monthLabel: "26.01",
  title: "F&F Corporation | 2026년 1월 전사 브랜드 경영 요약보고서",
  description:
    "F&F 전사 브랜드(MLB, DISCOVERY, MLB KIDS, DUVETICA, S.TACCHINI) 2026년 1월 실적 CEO 보고용 경영 요약",
  subtitle: "2026년 1월 실적 | CEO 보고용 | 경영관리팀 FP&A | 보고일: 2026.02.13",
  totalRevenue: "80,058",
  totalLabel: "전사 실판매출 합계 (5개 브랜드 · 사입제외)",
  kpis: [
    {
      value: "80,058",
      label: "전사 실판매출 (백만원)",
      change: "▲ YoY 108% · +6,141",
      tone: "up",
    },
    {
      value: "7,815",
      label: "전사 영업이익 (백만원)",
      change: "▲ OPM 9.8%",
      tone: "up",
    },
    {
      value: "3 / 5",
      label: "흑자 브랜드",
      change: "MLB, DX, DV 흑자",
      tone: "neutral",
    },
    {
      value: (
        <>
          586<span style={{ fontSize: "12px" }}>개</span>
        </>
      ),
      label: "전사 매장수",
      change: "전년비 -25개 구조조정",
      tone: "neutral",
    },
    {
      value: "△1,678",
      label: "적자 브랜드 합산 (백만)",
      change: "KIDS △764 + ST △914",
      tone: "down",
    },
  ],
  brandSectionTitle: "브랜드별 핵심 실적 (2026년 1월)",
  brands: [
    {
      accentClass: "mlb",
      name: "⚾ MLB",
      revenue: "29,200",
      unit: "백만원 · 매장 150개(-12)",
      metrics: [
        { label: "YoY", value: "111%", tone: "up" },
        { label: "영업이익", value: "3,811백만", tone: "up" },
        { label: "영업이익률", value: "13.8% (+4.2%p)", tone: "up" },
        { label: "할인율", value: "7.3% (+2.6%p)↑", tone: "warn" },
        { label: "점당매출", value: "173백만 (118%)", tone: "up" },
        { label: "기말재고", value: "3,451.8억 (107.0%)", tone: "down" },
        { label: "ACC재고주수", value: "34주 (-2.6주)", tone: "up" },
        { label: "25F M/U", value: "5.16 (+0.01)", tone: "up" },
        { label: "25F판매율", value: "49.6% (-5.7%p)", tone: "down" },
      ],
    },
    {
      accentClass: "dsc",
      name: "🏔️ DISCOVERY",
      revenue: "40,811",
      unit: "백만원 · 매장 267개(-8)",
      metrics: [
        { label: "YoY", value: "104%", tone: "up" },
        { label: "영업이익", value: "5,209백만", tone: "neutral" },
        { label: "영업이익률", value: "14.0% (-1.5%p)", tone: "neutral" },
        { label: "할인율", value: "23.2% (-0.1%p)", tone: "neutral" },
        { label: "점당매출", value: "124백만 (104%)", tone: "up" },
        { label: "기말재고", value: "5,164.8억 (101.0%)", tone: "neutral" },
        { label: "ACC재고주수", value: "41.9주 (-5.3주)", tone: "up" },
        { label: "25F M/U", value: "4.20 (-0.34)", tone: "down" },
        { label: "25F판매율", value: "44.2% (-5.2%p)", tone: "down" },
      ],
    },
    {
      accentClass: "mlbk",
      name: "⚾ MLB KIDS",
      revenue: "5,746",
      unit: "백만원 · 매장 66개(-3) · 인원 46명(-10)",
      metrics: [
        { label: "YoY", value: "98% (사입제외 105%)", tone: "warn" },
        { label: "영업이익", value: "-764백만", tone: "down" },
        { label: "영업이익률", value: "-12.8%", tone: "down" },
        { label: "할인율", value: "7.7% (+2.0%p)↑", tone: "warn" },
        { label: "점당매출", value: "63백만 (113%)", tone: "up" },
        { label: "기말재고", value: "1,144.7억 (102.0%)", tone: "neutral" },
        { label: "ACC재고주수", value: "26.5주 (+0.7주)", tone: "neutral" },
        { label: "25F M/U", value: "3.87 (-0.19)", tone: "down" },
        { label: "25F판매율", value: "41.1% (-2.7%p)", tone: "down" },
        { label: "가방사입제외", value: "영업적자 -457백만", tone: "down" },
      ],
    },
    {
      accentClass: "dv",
      name: "🧥 DUVETICA",
      revenue: "3,833",
      unit: "백만원 · 매장 30개(+5) · 인원 22명",
      metrics: [
        { label: "YoY", value: "165%", tone: "up" },
        { label: "영업이익", value: "473백만 흑자전환!", tone: "up" },
        { label: "영업이익률", value: "13.6%", tone: "up" },
        { label: "할인율", value: "24.4% (-21.7%p)↓↓", tone: "up" },
        { label: "점당매출", value: "101백만 (142%)", tone: "up" },
        { label: "기말재고", value: "500.1억 (122.0%)", tone: "down" },
        { label: "ACC재고주수", value: "64.8주 (+2.6주)", tone: "down" },
        { label: "25F M/U", value: "5.92 (+0.73)", tone: "up" },
        { label: "25F판매율", value: "47.7% (+8.6%p)", tone: "up" },
      ],
    },
    {
      accentClass: "st",
      name: "🎾 SERGIO TACCHINI",
      revenue: "468",
      unit: "백만원 · 매장 11개(-4)",
      metrics: [
        { label: "YoY", value: "108%", tone: "up" },
        { label: "영업이익", value: "-914백만 적자확대", tone: "down" },
        { label: "영업이익률", value: "-214.9%", tone: "down" },
        { label: "할인율", value: "35.7% (+11.4%p)↑↑", tone: "down" },
        { label: "점당매출", value: "26백만 (173%)", tone: "up" },
        { label: "기말재고", value: "321.0억 (96.0%)", tone: "up" },
        { label: "ACC재고주수", value: "181.8주 (-54.8주)", tone: "up" },
        { label: "25F M/U", value: "3.67 (+0.02)", tone: "up" },
        { label: "25F판매율", value: "30.4% (+7.1%p)", tone: "up" },
      ],
    },
  ],
  risks: [
    {
      title: "1. 신발 재고 전사 위기",
      items: [
        <>
          <b>MLB 55.3주(13개월)</b> — 기말 1,133억, +5.2주 증가, 26SS 입고 여력 제약
        </>,
        <>
          <b>MLB KIDS 133주(2.5년)</b> — 당월 58억 선입고 포함, 구조적 과잉
        </>,
        <>
          <b>ST ACC 181주</b> — 과시즌 재고 161억(50.3%), 소진 불투명
        </>,
        "전사 신발·ACC 재고 정상화 TF 구성 시급",
      ],
    },
    {
      title: "2. 적자 브랜드 합산 △1,678백만 — 전사 이익 잠식",
      items: [
        <>
          <b>ST 영업적자 -914백만</b> — 영업비(678백만)가 매출(468백만) 초과, 비정상 구조
        </>,
        <>
          <b>MLB KIDS -764백만</b> — 적자 지속(전년비 171백만 축소), 스타필드 3개점 구조적 적자(-19백만/월)
        </>,
        "2개 브랜드 합산 적자가 DUVETICA 시즌 이익 수준 잠식",
      ],
    },
    {
      title: "3. 할인율 상승 & 25FW 판매율 부진",
      items: [
        "ST 35.7%(+11.4%p), MLB 7.3%(+2.6%p), KIDS 7.7%(+2.0%p) 상승 추세",
        "DX 대리점 할인율 18.1%(+5.5%p) 급등, 제휴몰 KIDS 30% 붕괴",
        "25FW 판매율: MLB 49.6%(-5.7%p), DX 44.2%(-5.2%p), KIDS 41.1%(-2.7%p), ST 30.4%",
      ],
    },
    {
      title: "4. 원가율 구조적 상승",
      items: [
        "DX 25FW 원가율 24.0%(+2.2%p, 원부자재비 주도), KIDS 25.5%(+1.6%p, 공임 주도)",
        "TAG 인상 < 원가 상승 → 마진 압박 전사적 확산, 전사 원가관리 체계 필요",
      ],
    },
  ],
  opportunities: [
    {
      title: "1. DUVETICA 흑자전환 — 턴어라운드 성공",
      items: [
        "영업이익 +473백만(전년 -5백만), FW누적 18억(전년비 +56억)",
        "할인율 46.1%→24.4%(-21.7%p) 정가 판매력 극적 강화",
        "백화점 +252%, 자사몰 +365%(이익률 69.0%), 25F 판매율 47.7%(+8.6%p)",
      ],
    },
    {
      title: "2. MLB 수익성 중심 체질 전환",
      items: [
        "영업이익률 13.8%(+4.2%p), 직접이익 +26%(매출 +11%의 2.4배 성장)",
        "면세 의존도 36.4%→30.2% 전략적 축소, 채널 다변화 성공",
        "플래그쉽 +139%(성수점 월 7억), RF +45%, 제휴몰 +27% 신성장 채널",
      ],
    },
    {
      title: "3. 자사몰 전 브랜드 최고 수익 채널 확인",
      items: [
        "DV 69.0% / MLB 60.5% / DX 59.0% / KIDS 54.3% / ST 46.2%",
        "유통수수료 0% 구조로 수익성 압도적 우위 — 비중 확대가 전사 이익률 직결",
      ],
    },
    {
      title: "4. MLB KIDS 가방 폭발 성장 + 효율화",
      items: [
        "가방 YoY +151%, 매출 2,452백만(비중 42.7%), 직접이익 300백만, 재고주수 19.4주 건전",
        "크로스백 +2,788%, 백팩 +1,900% — 카테고리 리더십 확보",
        "적자폭 171백만 축소, 인원 46명(-10명) 효율화 성과",
      ],
    },
    {
      title: "5. 면세·직영 등 고성장 채널",
      items: [
        "DISCOVERY 면세 +57%(2,901백만), 직영 +37%(+2개점)",
        "ST 외형 +8%(직영 +55%, 제휴몰 +46%, 아울렛 +71%)",
        "전사 매장 -25개 구조조정에도 점당매출 전 브랜드 상승",
      ],
    },
  ],
  table: {
    columns: ["브랜드", "실판매출", "YoY", "영업이익", "OPM", "할인율", "기말재고", "ACC주수", "25F M/U", "점당매출"],
    rows: [
      {
        label: "⚾ MLB",
        cells: [
          { content: "29,200" },
          { content: "111%", badgeTone: "green" },
          { content: "3,811" },
          { content: "13.8%" },
          { content: "7.3%" },
          { content: "3,451.8억", tone: "down" },
          { content: "34주", tone: "up" },
          { content: "5.16", tone: "up" },
          { content: "173" },
        ],
      },
      {
        label: "⚾ MLB KIDS",
        cells: [
          { content: "5,746" },
          { content: "98%", badgeTone: "amber" },
          { content: "-764", tone: "down" },
          { content: "-12.8%", tone: "down" },
          { content: "7.7%" },
          { content: "1,144.7억" },
          { content: "26.5주" },
          { content: "3.87", tone: "down" },
          { content: "63" },
        ],
      },
      {
        label: "🏔️ DISCOVERY",
        cells: [
          { content: "40,811" },
          { content: "104%", badgeTone: "green" },
          { content: "5,209" },
          { content: "14.0%" },
          { content: "23.2%" },
          { content: "5,164.8억" },
          { content: "41.9주", tone: "up" },
          { content: "4.20", tone: "down" },
          { content: "124" },
        ],
      },
      {
        label: "🧥 DUVETICA",
        cells: [
          { content: "3,833" },
          { content: "165%", badgeTone: "green" },
          { content: "473", tone: "up" },
          { content: "13.6%", tone: "up" },
          { content: "24.4%" },
          { content: "500.1억", tone: "down" },
          { content: "64.8주", tone: "down" },
          { content: "5.92", tone: "up" },
          { content: "101" },
        ],
      },
      {
        label: "🎾 S.TACCHINI",
        cells: [
          { content: "468" },
          { content: "108%", badgeTone: "green" },
          { content: "-914", tone: "down" },
          { content: "-214.9%", tone: "down" },
          { content: "35.7%", tone: "down" },
          { content: "321.0억", tone: "up" },
          { content: "181.8주", tone: "up" },
          { content: "3.67", tone: "up" },
          { content: "26" },
        ],
      },
      {
        label: "전사 합계",
        rowClassName: "total-row",
        cells: [
          { content: "80,058" },
          { content: "108%", badgeTone: "blue" },
          { content: "7,815" },
          { content: "9.8%" },
          { content: "17.2%" },
          { content: "10,582.4억" },
          { content: "35.2주" },
          { content: "4.61" },
          { content: "137" },
        ],
      },
    ],
  },
  recommendations: [
    {
      title: "⚡ 즉시 실행 (2월 내)",
      items: [
        <>
          <b>전사 신발 재고 TF 구성</b> — MLB 55주→40주, KIDS 133주→80주, 브랜드별 소진 로드맵 수립
        </>,
        <>
          <b>ST 영업비 긴급 절감(-20%)</b> — 광고비·샘플비 컷, 월 678→540백만 목표
        </>,
        <>
          <b>KIDS 스타필드 3개점 구조조정</b> — 일산/수원/운정 즉시 폐점(연 228백만 절감)
        </>,
        <>
          <b>25FW 전사 Final Sale</b> — 2/15~28 동시 프로모션, 판매율 +10%p 목표
        </>,
        <>
          <b>제휴몰 할인 긴급 통제</b> — KIDS 30%→20%, ST 53%→50% 이하
        </>,
      ],
    },
    {
      title: "🎯 단기 전략 (Q1)",
      items: [
        <>
          <b>자사몰 비중 전사 확대</b> — 전 브랜드 이익률 46~69%, 비중 확대가 수익성 직결
        </>,
        <>
          <b>MLB 플래그쉽 확대</b> — 북촌 3/20 오픈(월 1.2억), 도산 준비, 할인율 Q1 6% 이하
        </>,
        <>
          <b>DX 대리점 할인율 정상화</b> — 18.1%→12% 이하, 역성장 92% 회복
        </>,
        <>
          <b>KIDS 가방 카테고리 집중</b> — 26N 책가방 신학기 시즌(2~3월) 극대화
        </>,
        <>
          <b>DV MEN 라인 비중 확대</b> — 23%→30%, 성별 포트폴리오 균형
        </>,
        <>
          <b>ST 한남 플래그쉽 BEP</b> — 3개월 내 손익분기, 할인율 19.6%→15% 이하
        </>,
      ],
    },
    {
      title: "🏆 중기 성장 (2026 연간)",
      items: [
        <>
          <b>채널 포트폴리오 리밸런싱</b> — 면세 의존도 축소, 온라인·플래그쉽 고수익 채널 비중 확대
        </>,
        <>
          <b>원가율 전사 관리 체계</b> — TAG 대비 원가 격차 모니터링, 26SS 원가 목표 설정
        </>,
        <>
          <b>ST 존속 여부 판단</b> — 1Q 흑자전환 실패 시 사업 전략 전면 재검토
        </>,
        <>
          <b>DV 사계절 브랜드 전환</b> — 다운 의존도 83.7%→60%, SS 라인업 확대
        </>,
        <>
          <b>MLB 2.0 인테리어 가속</b> — 14%→38%(26), 브랜드 리뉴얼 체험 강화
        </>,
        <>
          <b>DX 저수익 매장 구조조정</b> — 11개점 클로징(연 800백만 절감)
        </>,
      ],
    },
  ],
  ceoMessage: (
    <>
      2026년 1월, 전사 실판매출 <b>801억(YoY 108%)</b>으로 전년 동월 대비 8% 성장하며 영업이익 <b>78억(OPM 9.8%)</b>을 기록했습니다.{" "}
      <b>MLB·DISCOVERY·DUVETICA 3개 브랜드가 흑자를 견인</b>하며, 특히 DUVETICA의 흑자전환(+478백만)은 할인율 21.7%p 개선이라는 구조적 성과에 기반한 진정한 턴어라운드입니다.
      <br />
      <br />
      다만, <b>KIDS·ST 2개 브랜드 합산 적자 △17억</b>과 <b>전사 신발 재고 위기</b>(MLB 55주, KIDS 133주)는 1분기 내 반드시 해결해야 할 최우선 과제입니다. ST는 영업비가 매출을 초과하는 비정상 구조로, 1분기 흑자전환 실패 시 사업 전략 전면 재검토가 불가피합니다.
      <br />
      <br />
      전 브랜드 공통으로 <b>자사몰 고수익 구조(이익률 46~69%)</b>가 재확인된 만큼, 자사몰 비중 확대를 통한 채널 포트폴리오 최적화가 2026년 수익성 개선의 핵심 레버입니다.{" "}
      <b>&quot;흑자 브랜드로 공격, 적자 브랜드는 구조조정, 자사몰로 수익화&quot;</b> — 이것이 2026년의 방향입니다.
    </>
  ),
  footerLabel: "데이터 기준: 2026년 1월 실적(사입제외) | 2026.02.13",
};
