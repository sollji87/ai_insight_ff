import { ReportData } from "@/lib/reportTypes";

export const februaryReport: ReportData = {
  key: "feb-2026",
  monthLabel: "26.02",
  title: "F&F Corporation | 2026년 2월 전사 브랜드 경영 요약보고서",
  description:
    "F&F 전사 브랜드(MLB, DISCOVERY, MLB KIDS, DUVETICA, S.TACCHINI) 2026년 2월 실적 CEO 보고용 경영 요약",
  subtitle: "2026년 2월 실적 | CEO 보고용 | 경영관리팀 FP&A | 보고일: 2026.03.16",
  totalRevenue: "67,776",
  totalLabel: "전사 실판매출 합계 (5개 브랜드 · 사입제외)",
  kpis: [
    {
      value: "67,776",
      label: "전사 실판매출 (백만원)",
      change: "▲ YoY 105% · 전월비 -12,282",
      tone: "up",
    },
    {
      value: "4,179",
      label: "전사 영업이익 (백만원)",
      change: "OPM 6.2%",
      tone: "neutral",
    },
    {
      value: "2 / 5",
      label: "흑자 브랜드",
      change: "MLB · DISC 흑자",
      tone: "neutral",
    },
    {
      value: (
        <>
          524<span style={{ fontSize: "12px" }}>개</span>
        </>
      ),
      label: "전사 매장수",
      change: "전년비 -20개",
      tone: "neutral",
    },
    {
      value: "△1,385",
      label: "적자 브랜드 합산 (백만)",
      change: "KIDS△138+DV△314+ST△933",
      tone: "down",
    },
  ],
  brandSectionTitle: "브랜드별 핵심 실적 (2026년 2월)",
  brands: [
    {
      accentClass: "mlb",
      name: "⚾ MLB",
      revenue: "28,356",
      unit: "백만원 · 매장 150개(-10)",
      metrics: [
        { label: "YoY", value: "110%", tone: "up" },
        { label: "영업이익", value: "3,861백만 (+43%)", tone: "up" },
        { label: "영업이익률", value: "13.6% (+3.4%p)", tone: "up" },
        { label: "직접이익률", value: "28.6% (+4.3%p)", tone: "up" },
        { label: "할인율", value: "5.3% (+0.1%p 안정)", tone: "up" },
        { label: "점당매출", value: "173백만 (118%)", tone: "up" },
        { label: "25F판매율", value: "51.4% (-5.4%p)", tone: "down" },
      ],
    },
    {
      accentClass: "dsc",
      name: "🏔️ DISCOVERY",
      revenue: "29,664",
      unit: "백만원 · 매장 265개(-10)",
      metrics: [
        { label: "YoY", value: "97%", tone: "down" },
        { label: "영업이익", value: "1,703백만 (-9%)", tone: "neutral" },
        { label: "영업이익률", value: "6.1% (-0.5%p)", tone: "down" },
        { label: "직접이익률", value: "21.4% (-1.4%p)", tone: "down" },
        { label: "할인율", value: "24.5% (±0%p)", tone: "neutral" },
        { label: "점당매출", value: "95백만 (103%)", tone: "up" },
        { label: "25F판매율", value: "48.5% (-5.3%p)", tone: "down" },
      ],
    },
    {
      accentClass: "mlbk",
      name: "⚾ MLB KIDS",
      revenue: "7,226",
      unit: "백만원 · 매장 66개(-3) · 인원 46명",
      metrics: [
        { label: "YoY", value: "123% (사입제외 127%)", tone: "up" },
        { label: "영업이익", value: "-138백만 (적자축소!)", tone: "warn" },
        { label: "영업이익률", value: "-1.8% (+5.8%p)", tone: "warn" },
        { label: "직접이익률", value: "12.7%", tone: "up" },
        { label: "할인율", value: "10.9%", tone: "warn" },
        { label: "점당매출", value: "78백만 (139%)", tone: "up" },
        { label: "25F판매율", value: "42.8% (-2.7%p)", tone: "down" },
      ],
    },
    {
      accentClass: "dv",
      name: "🧥 DUVETICA",
      revenue: "2,172",
      unit: "백만원 · 매장 30개(+4)",
      metrics: [
        { label: "YoY", value: "126%", tone: "up" },
        { label: "영업이익", value: "-314백만 (비수기)", tone: "down" },
        { label: "누적OPM", value: "2.9% 흑자유지!", tone: "up" },
        { label: "직접이익률", value: "25.5% (+5.9%p)", tone: "up" },
        { label: "할인율", value: "28.9% (-13.8%p)", tone: "up" },
        { label: "점당매출", value: "59백만 (+18%)", tone: "up" },
        { label: "25F판매율", value: "50.3% (+5.1%p)", tone: "up" },
      ],
    },
    {
      accentClass: "st",
      name: "🎾 SERGIO TACCHINI",
      revenue: "358",
      unit: "백만원 · 매장 13개(-1)",
      metrics: [
        { label: "YoY", value: "66%", tone: "down" },
        { label: "영업이익", value: "-933백만", tone: "down" },
        { label: "영업이익률", value: "-286.5%", tone: "down" },
        { label: "직접이익률", value: "-84.5%", tone: "down" },
        { label: "할인율", value: "36.5%", tone: "down" },
        { label: "점당매출", value: "16백만", tone: "down" },
        { label: "25F판매율", value: "31.2% (+6.4%p)", tone: "up" },
      ],
    },
  ],
  risks: [
    {
      title: "1. ST 비수기 적자 지속 — S/S 시즌 반등이 관건",
      items: [
        <>
          매출 358백만(YoY 66%), 영업적자 <b>-933백만</b>(F/W 비수기 저점)
        </>,
        "전년 2월 평가감 일시반영(1,148백만) 제외 시 실질 적자 소폭 확대",
        "제휴몰(-55%)·자사몰(-54%) 온라인 매출 이탈이 핵심 과제",
        "한남 26SS 전환 76%, 면세 S/S 시즌(3~7월 월평균 1.8억) 반등 기대",
      ],
    },
    {
      title: "2. DISCOVERY 역성장 97% — 핵심 3채널 동반 부진",
      items: [
        "백화점(-4%)·대리점(-6%)·제휴몰(-17%) 합산비중 59.3% 동반 역성장",
        <>
          <b>신발 YoY -34.6%</b>(약 -12.2억), 자사몰 -24%, OPM 6.1%(-0.5%p)
        </>,
        "원가율 24.7%(+1.2%p) 상승 지속 → 마진 압박 구조화 우려",
      ],
    },
    {
      title: "3. MLB 가방 재고 급증 & FW 다운 재고 과잉",
      items: [
        "가방 재고주수 36.3주(전년 20.1주, +16.2주), 할인율 13.7%(+9.8%p) 급등",
        <>
          25FW 기말재고 426억(YoY 117%), <b>다운자켓 236억(185%)</b> 과잉 심각
        </>,
        "크로스백·숄더백 면세/대리점 단체 수요 감소가 가방 부진 주도",
      ],
    },
    {
      title: "4. KIDS 제휴몰 할인율 급등 & DJ 판매율 부진",
      items: [
        "제휴몰 할인율 25.9%(+16.1%p), 매출 +9%에도 직접이익 -5% 역행",
        "25FW DJ 판매율 40.1%(전년 53.7%, △13.6%p), 재고 106억(159%)",
        "신발 재고 45.8주(전월 133주→개선 중이나 여전히 과잉)",
      ],
    },
  ],
  opportunities: [
    {
      title: "1. MLB 수익성 레버리지 극대화",
      items: [
        <>
          영업이익 3,861백만(<b>YoY +43%</b>), OPM 13.6%(+3.4%p)
        </>,
        <>
          직접이익 증가율(+26%)이 매출(+10%)의 <b>2.6배</b> → 레버리지 강화
        </>,
        "플래그쉽 +135%(직접이익 508%↑), 대리점 +19.2%, RF +36%",
        "면세 이익률 31.5%(+2.7%p) 질적 전환, 할인율 5.3% 안정",
      ],
    },
    {
      title: "2. KIDS 적자폭 대폭 축소 — 흑자전환 가시권",
      items: [
        <>
          영업적자 -138백만(전년 -480 → <b>342백만 축소</b>, OPM -7.6%→-1.8%)
        </>,
        "가방 +161%(2,572백만), 점당매출 78백만(YoY 139%), 인당매출 +46%",
        "직접이익률 12.7%(1월 3.9%→대폭 개선), 효율화 성과 가시화",
      ],
    },
    {
      title: "3. DUVETICA 연누적 흑자 유지(+159백만)",
      items: [
        <>
          당월 비수기 적자(-314)에도 연누적 영업이익 <b>+159백만(전년 -573→+732 개선)</b>
        </>,
        <>
          할인율 28.9%(전년 42.7%, <b>-13.8%p</b>), 연누적 26.1%(-18.6%p)
        </>,
        "백화점 +66.8% 신규 출점 효과, 직영점 +82%, 자사몰 +82%",
      ],
    },
    {
      title: "4. DX 직영점·아울렛 성장 & 26S 봄시즌 기대",
      items: [
        "직영점 +148%(명동점 신규 286백만 기여), 아울렛 +9%",
        <>
          <b>26S 아우터 +49.6%</b> 폭발적 성장 → 봄 본격 성수기 연결
        </>,
        "자사몰 이익률 57.0% 전 채널 최고 유지",
      ],
    },
    {
      title: "5. ST 26SS 시즌 긍정 시그널",
      items: [
        <>
          차기시즌(26SS) 의류 109백만(<b>+46%</b>), 아울렛 +97% 고성장
        </>,
        "한남 플래그십 26SS 전환 76%(면세 60% 대비 가장 빠른 전환)",
        "면세점 S/S 시즌 폭발력(3~7월 월평균 1.8억), 스커트·폴로 킬러아이템",
        "25F 판매율 31.2%(+6.4%p) 전년비 개선, 한남↔면세 시즌 보완 전략 가동",
      ],
    },
  ],
  table: {
    columns: ["브랜드", "실판매출", "YoY", "영업이익", "OPM", "직접이익률", "할인율", "매장수", "점당매출"],
    rows: [
      {
        label: "🏔️ DISCOVERY",
        cells: [
          { content: "29,664" },
          { content: "97%", badgeTone: "red" },
          { content: "1,703" },
          { content: "6.1%" },
          { content: "21.4%" },
          { content: "24.5%" },
          { content: "265(-10)" },
          { content: "95" },
        ],
      },
      {
        label: "⚾ MLB",
        cells: [
          { content: "28,356" },
          { content: "110%", badgeTone: "green" },
          { content: "3,861" },
          { content: "13.6%", tone: "up" },
          { content: "28.6%", tone: "up" },
          { content: "5.3%", tone: "up" },
          { content: "150(-10)" },
          { content: "173" },
        ],
      },
      {
        label: "⚾ MLB KIDS",
        cells: [
          { content: "7,226" },
          { content: "123%", badgeTone: "green" },
          { content: "-138", tone: "down" },
          { content: "-1.8%", tone: "warn" },
          { content: "12.7%" },
          { content: "10.9%" },
          { content: "66(-3)" },
          { content: "78" },
        ],
      },
      {
        label: "🧥 DUVETICA",
        cells: [
          { content: "2,172" },
          { content: "126%", badgeTone: "green" },
          { content: "-314", tone: "down" },
          { content: "-15.9%", tone: "down" },
          { content: "25.5%", tone: "up" },
          { content: "28.9%" },
          { content: "30(+4)" },
          { content: "59" },
        ],
      },
      {
        label: "🎾 S.TACCHINI",
        cells: [
          { content: "358" },
          { content: "66%", badgeTone: "red" },
          { content: "-933", tone: "down" },
          { content: "-286.5%", tone: "down" },
          { content: "-84.5%", tone: "down" },
          { content: "36.5%", tone: "down" },
          { content: "13(-1)" },
          { content: "16" },
        ],
      },
      {
        label: "전사 합계",
        rowClassName: "total-row",
        cells: [
          { content: "67,776" },
          { content: "105%", badgeTone: "blue" },
          { content: "4,179" },
          { content: "6.2%" },
          { content: "22.6%" },
          { content: "15.4%" },
          { content: "524(-20)" },
          { content: "129" },
        ],
      },
    ],
  },
  recommendations: [
    {
      title: "⚡ 즉시 실행 (3월 내)",
      items: [
        <>
          <b>ST 26SS 시즌 반등 집중</b> — 한남·면세·온라인 채널 간 시너지 강화, 스커트·폴로 킬러아이템 중심 운영
        </>,
        <>
          <b>MLB 가방 재고 긴급 소진</b> — 크로스백 아울렛 이관, 저회전 SKU 정리, 재고주수 36→25주 목표
        </>,
        <>
          <b>DX 신발 긴급 대응</b> — YoY -34.6% 급감, 3월 신규 출시 또는 히트 스타일 리오더
        </>,
        <>
          <b>KIDS 제휴몰 할인 통제</b> — 25.9%→15% 이하, 네이버 26.7% 할인 캡 설정
        </>,
        <>
          <b>DX 대리점 할인율 정상화</b> — 17.1%→13% 이하, 프로모션 사전 승인제 도입
        </>,
      ],
    },
    {
      title: "🎯 단기 전략 (Q1)",
      items: [
        <>
          <b>MLB 플래그쉽 확대 가속</b> — 북촌 오픈, 도산 준비, 비중 8.3%→12% 목표
        </>,
        <>
          <b>DX 26S 봄시즌 선점</b> — 아우터 +49.6% 모멘텀, 바람막이·경량 아우터 전면 배치
        </>,
        <>
          <b>KIDS 가방 단체→개인 전환</b> — 크로스백 20억 단체 의존 탈피, 개인 소비 채널 확대
        </>,
        <>
          <b>DV 26SS 시즌 관리</b> — 발주액 220억(+90%), 판매율 목표 60%, 25개 매장 운영
        </>,
        <>
          <b>DX 자사몰 역성장 만회</b> — YoY -24%, 트래픽·전환율 KPI 월별 트래킹
        </>,
        <>
          <b>MLB 롯데ON 수수료 재협상</b> — 34.4%(+5.8%p) 제휴몰 최고 → 긴급 재협상
        </>,
      ],
    },
    {
      title: "🏆 중기 성장 (2026 연간)",
      items: [
        <>
          <b>ST S/S 시즌 성과 기반 하반기 전략 수립</b> — 26SS 발주 68억(판매율 50% 목표), 면세 S/S 레버리지 극대화 후 점검
        </>,
        <>
          <b>채널 포트폴리오 리밸런싱</b> — 온라인·플래그쉽 고수익 채널 비중 확대, 면세 의존도 축소
        </>,
        <>
          <b>원가율 전사 관리 체계</b> — DX 24.7%, KIDS 25.5% 상승 대응, 26SS 원가 목표 설정
        </>,
        <>
          <b>DV 사계절 브랜드 전환</b> — 다운 편중도 61%→50%, 비다운 라인업 강화
        </>,
        <>
          <b>MLB 2.0 리뉴얼 가속</b> — 연간 OPM 15%, 2027년 매출 2,000억 목표
        </>,
        <>
          <b>DX 저수익 매장 구조조정</b> — 비효율 매장 클로징(연 800백만 절감)
        </>,
      ],
    },
  ],
  ceoMessage: (
    <>
      2026년 2월, 전사 실판매출 <b>678억(YoY 105%)</b>으로 성장을 유지하며 영업이익 <b>42억(OPM 6.2%)</b>을 기록했습니다. 비수기 진입에 따른 전월비 실적 하락은 시즌 특성이나, <b>DISCOVERY 역성장(97%)</b>과 <b>ST 실질 적자 확대</b>는 구조적 과제입니다.
      <br />
      <br />
      <b>MLB가 전사 이익의 92%를 견인</b>(3,861/4,179백만)하며 유일한 수익 엔진 역할을 하고 있습니다. OPM 13.6%(+3.4%p), 이익 레버리지 2.6배는 수익 중심 체질 전환의 명확한 증거입니다.
      <br />
      <br />
      <b>KIDS의 적자폭 대폭 축소(-480→-138, +342백만)</b>와 <b>DUVETICA 연누적 흑자 유지(+159백만)</b>는 고무적이며, ST는 F/W 비수기 적자가 크지만 한남 26SS 전환 76%와 면세 S/S 시즌 반등 기대감이 확인되어 3~5월 성과를 주시해야 합니다.
      <br />
      <br />
      <b>&quot;MLB로 공격, KIDS·DV는 흑자 정착, DX는 봄 반등, ST는 S/S 시즌 반등 집중&quot;</b> — 이것이 1분기 마무리의 핵심 방향입니다.
    </>
  ),
  footerLabel: "데이터 기준: 2026년 2월 실적(사입제외) | 2026.03.16",
};
