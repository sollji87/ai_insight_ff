import { ReportData } from "@/lib/reportTypes";

export const marchReport: ReportData = {
  key: "mar-2026",
  monthLabel: "26.03",
  title: "F&F Corporation | 2026년 3월 전사 브랜드 경영 요약보고서",
  description:
    "F&F 전사 브랜드(MLB, DISCOVERY, MLB KIDS, DUVETICA, S.TACCHINI) 2026년 3월 실적 CEO 보고용 경영 요약",
  subtitle: "2026년 3월 실적 | CEO 보고용 | 경영관리팀 FP&A | 보고일: 2026.04.17",
  totalRevenue: "69,676",
  totalLabel: "전사 실판매출 합계 (5개 브랜드 · 사입제외)",
  kpis: [
    {
      value: "69,676",
      label: "전사 실판매출 (백만원)",
      change: "▲ YoY 102% · 전월비 +1,900",
      tone: "up",
    },
    {
      value: "3,013",
      label: "전사 영업이익 (백만원)",
      change: "OPM 4.3%",
      tone: "neutral",
    },
    {
      value: "1 / 5",
      label: "흑자 브랜드",
      change: "MLB 단독 흑자 · DX 적자전환",
      tone: "down",
    },
    {
      value: (
        <>
          513<span style={{ fontSize: "12px" }}>개</span>
        </>
      ),
      label: "전사 매장수",
      change: "전년비 -27개",
      tone: "neutral",
    },
    {
      value: "△3,248",
      label: "적자 브랜드 합산 (백만)",
      change: "DX△1,712+KIDS△230+DV△580+ST△726",
      tone: "down",
    },
  ],
  brandSectionTitle: "브랜드별 핵심 실적 (2026년 3월)",
  brands: [
    {
      accentClass: "mlb",
      name: "⚾ MLB",
      revenue: "35,912",
      unit: "백만원 · 매장 151개(-10)",
      metrics: [
        { label: "YoY", value: "108%", tone: "up" },
        { label: "영업이익", value: "6,261백만 (+18%)", tone: "up" },
        { label: "영업이익률", value: "17.7% (+1.7%p)", tone: "up" },
        { label: "할인율", value: "4.3% (-0.5%p)", tone: "up" },
        { label: "점당매출", value: "218백만 (114%)", tone: "up" },
        { label: "기말재고", value: "3,285억 (103%)", tone: "neutral" },
        { label: "ACC재고주수", value: "23.1주 (+1.0주)", tone: "neutral" },
        { label: "26S MU", value: "5.70 (+0.32)", tone: "up" },
        { label: "26S판매율", value: "18.8% (-1.6%p)", tone: "down" },
      ],
    },
    {
      accentClass: "dsc",
      name: "🏔️ DISCOVERY",
      revenue: "23,082",
      unit: "백만원 · 매장 262개(-11)",
      metrics: [
        { label: "YoY", value: "88%", tone: "down" },
        { label: "영업이익", value: "-1,712백만 (적자전환!)", tone: "down" },
        { label: "영업이익률", value: "-7.8% (-8.2%p)", tone: "down" },
        { label: "할인율", value: "24.2% (+0.6%p)", tone: "down" },
        { label: "점당매출", value: "75백만 (91%)", tone: "down" },
        { label: "기말재고", value: "5,443억 (102%)", tone: "neutral" },
        { label: "ACC재고주수", value: "48.5주 (+8.1주)", tone: "down" },
        { label: "26S MU", value: "4.34 (-0.27)", tone: "down" },
        { label: "26S판매율", value: "7.6% (+0.1%p)", tone: "up" },
      ],
    },
    {
      accentClass: "mlbk",
      name: "⚾ MLB KIDS",
      revenue: "8,167",
      unit: "백만원 · 매장 66개(-2)",
      metrics: [
        { label: "YoY", value: "125% (수량 +48%)", tone: "up" },
        { label: "영업이익", value: "-230백만 (적자지속)", tone: "warn" },
        { label: "영업이익률", value: "-2.6%", tone: "warn" },
        { label: "할인율", value: "8.8% (+2.8%p)", tone: "warn" },
        { label: "점당매출", value: "90백만 (143%)", tone: "up" },
        { label: "기말재고", value: "1,075억 (100%)", tone: "neutral" },
        { label: "ACC재고주수", value: "26.1주 (-28.2주)", tone: "up" },
        { label: "26S MU", value: "4.18 (-0.07)", tone: "down" },
        { label: "26S판매율", value: "19.4% (+0.3%p)", tone: "up" },
      ],
    },
    {
      accentClass: "dv",
      name: "🧥 DUVETICA",
      revenue: "1,857",
      unit: "백만원 · 매장 26개(+1)",
      metrics: [
        { label: "YoY", value: "121%", tone: "up" },
        { label: "영업이익", value: "-580백만 (적자축소 +50)", tone: "warn" },
        { label: "영업이익률", value: "-31.2%", tone: "down" },
        { label: "할인율", value: "31.9% (-11.8%p)", tone: "up" },
        { label: "점당매출", value: "57백만 (+18%)", tone: "up" },
        { label: "기말재고", value: "569억 (+34%)", tone: "down" },
        { label: "ACC재고주수", value: "184주 (+143주)", tone: "down" },
        { label: "26S MU", value: "5.29 (-0.06)", tone: "down" },
        { label: "26S판매율", value: "11.6% (-1.2%p)", tone: "down" },
      ],
    },
    {
      accentClass: "st",
      name: "🎾 SERGIO TACCHINI",
      revenue: "658",
      unit: "백만원 · 매장 9개(-5)",
      metrics: [
        { label: "YoY", value: "80% (+15%p↑)", tone: "warn" },
        { label: "영업이익", value: "-726백만 (적자축소 +230)", tone: "warn" },
        { label: "영업이익률", value: "-120.9%", tone: "down" },
        { label: "할인율", value: "28.2% (-12.5%p)", tone: "up" },
        { label: "점당매출", value: "49백만 (154%)", tone: "up" },
        { label: "기말재고", value: "324억 (90%)", tone: "up" },
        { label: "ACC재고주수", value: "160주 (+95주)", tone: "down" },
        { label: "26S MU", value: "3.68 (-0.28)", tone: "down" },
        { label: "26S판매율", value: "9.2% (+3.2%p)", tone: "up" },
      ],
    },
  ],
  risks: [
    {
      title: "1. DISCOVERY 적자전환 — 전 채널 동반 역성장 구조화",
      items: [
        <>
          매출 230억(YoY 88%), <b>영업적자 -1,712백만(OPM -7.8%, 전년 +0.4%)</b> — 적자전환 충격
        </>,
        "백화점(-8%)·대리점(-16%)·아울렛(-11%) 핵심 3채널 동반 역성장, 자사몰 -27%",
        <>
          2월 97% → 3월 88% <b>-9%p 추가 악화</b>, 4월 예상 87%로 미달 확실
        </>,
        "25FW 과시즌 재고 누적(22F 1,979억 수준) + 중국 341억 — 신규 소진 정책 필요",
      ],
    },
    {
      title: "2. MLB 운동화 재고 위기 확산",
      items: [
        <>
          운동화 YoY 58%(-42%), 재고주수 43.4주 → <b>82주 급등</b> (2월 대비 +39주)
        </>,
        "가방은 하락폭 축소(YoY 71%) 긍정 신호이나 재고 245억 여전히 부담",
        <>
          모자 편중도 41%→<b>54% 심화</b>, 하반기 비수기 변동성 리스크 확대
        </>,
      ],
    },
    {
      title: "3. DUVETICA 재고 증가 & 정상매출 성장 둔화",
      items: [
        <>
          기말재고 569억(전년 426억, <b>+34%</b>), 26S 재고 전년비 193%
        </>,
        "시즌마감 후 100억 초과 재고 예측 — 당시즌 발주 확대 영향",
        "정상상품 YoY 190% 성장하나 이월상품 둔화(1Q 102%)로 장기 목표 미달",
      ],
    },
    {
      title: "4. KIDS 신발 재고 & 할인율 상승",
      items: [
        <>
          신발 재고주수 <b>WOI_4WK 35주</b>, 판매 -10%로 해소 더딤
        </>,
        "할인율 8.8%(+2.8%p) 상승, 제휴몰 20.8% vs 자사몰 21.3% 채널간 격차 축소",
        "영업적자 지속(-230백만) — 흑자전환 2Q 과제로 연기",
      ],
    },
  ],
  opportunities: [
    {
      title: "1. MLB 수익성 추가 개선 — 전사 유일 흑자 엔진",
      items: [
        <>
          OPM <b>17.7%(+1.7%p)</b> — 2월 13.6% 대비 추가 개선, 영업이익 63억(+18%)
        </>,
        <>
          <b>볼캡 YoY 154%</b> 성수기 극대화, RF +51% 가속, 제휴몰 +38% 반등
        </>,
        "플래그쉽 이익률 45.9%(성수 +206%, 명동중앙 +46%), 할인율 4.3%(-0.5%p)",
        "4월 추세 YoY 120%(+10%p), 1Q 누적 OPM 15.6%",
      ],
    },
    {
      title: "2. KIDS 신학기 가방 폭발 성장 (+425%)",
      items: [
        <>
          매출 82억(YoY 125%), <b>가방 YoY 425%</b>(전년 558 → 2,371백만) 신학기 효과
        </>,
        "백화점 YoY 138%, 점당매출 90백만(YoY 143%), 인당매출 YoY 158%",
        "직접이익률 10.2% 개선, 26S 판매율 19.2% 진행 중",
      ],
    },
    {
      title: "3. ST 바닥 탈출 — 낙폭 축소 & 면세 극적 반등",
      items: [
        <>
          2월 65% → 3월 80% <b>+15%p 낙폭 축소</b>, 할인율 28.2%(-12.5%p) 대폭 개선
        </>,
        <>
          <b>면세점 YoY 133%(+74%p)</b> 극적 반등, 26SS 아우터 +145% 폭발
        </>,
        "한남 플래그십 61백만 기여(신상 92% 비중), 자사몰 이익률 49.1%",
        "4월 추세 YoY 96%로 전년 수준 거의 회복",
      ],
    },
    {
      title: "4. DV 할인율 대폭 개선 & 제휴몰 반등",
      items: [
        <>
          할인율 <b>31.9%(-11.8%p)</b> 대폭 개선 — 백화점 11.8%(-24.3%p) 정가판매력 극대화
        </>,
        <>
          제휴몰 -21% → +17% <b>반등 성공(+38%p)</b>, 백화점 +44% 고성장 유지
        </>,
        "직접이익률 11.8%(+2.4%p), 적자폭 +50백만 축소 (-630→-580)",
      ],
    },
    {
      title: "5. 전사 점당매출 성장 — 효율화 성과",
      items: [
        "MLB 218백만(+14%), KIDS 90백만(+43%), DV 57백만(+18%), ST 49백만(+54%)",
        "전사 매장 513개(-27) 구조조정에도 4개 브랜드 점당매출 두 자릿수 성장",
      ],
    },
  ],
  table: {
    columns: ["브랜드", "실판매출", "YoY", "영업이익", "OPM", "할인율", "기말재고", "ACC주수", "26S MU", "점당매출"],
    rows: [
      {
        label: "⚾ MLB",
        cells: [
          { content: "35,912" },
          { content: "108%", badgeTone: "green" },
          { content: "6,261" },
          { content: "17.7%", tone: "up" },
          { content: "4.3%", tone: "up" },
          { content: "3,285억" },
          { content: "23.1주" },
          { content: "5.70", tone: "up" },
          { content: "218" },
        ],
      },
      {
        label: "🏔️ DISCOVERY",
        cells: [
          { content: "23,082" },
          { content: "88%", badgeTone: "red" },
          { content: "-1,712", tone: "down" },
          { content: "-7.8%", tone: "down" },
          { content: "24.2%" },
          { content: "5,443억" },
          { content: "48.5주", tone: "down" },
          { content: "4.34", tone: "down" },
          { content: "75" },
        ],
      },
      {
        label: "⚾ MLB KIDS",
        cells: [
          { content: "8,167" },
          { content: "125%", badgeTone: "green" },
          { content: "-230", tone: "warn" },
          { content: "-2.6%", tone: "warn" },
          { content: "8.8%" },
          { content: "1,075억" },
          { content: "26.1주", tone: "up" },
          { content: "4.18" },
          { content: "90" },
        ],
      },
      {
        label: "🧥 DUVETICA",
        cells: [
          { content: "1,857" },
          { content: "121%", badgeTone: "green" },
          { content: "-580", tone: "warn" },
          { content: "-31.2%", tone: "down" },
          { content: "31.9%", tone: "up" },
          { content: "569억", tone: "down" },
          { content: "184주", tone: "down" },
          { content: "5.29", tone: "down" },
          { content: "57" },
        ],
      },
      {
        label: "🎾 S.TACCHINI",
        cells: [
          { content: "658" },
          { content: "80%", badgeTone: "amber" },
          { content: "-726", tone: "warn" },
          { content: "-120.9%", tone: "down" },
          { content: "28.2%", tone: "up" },
          { content: "324억", tone: "up" },
          { content: "160주", tone: "down" },
          { content: "3.68", tone: "down" },
          { content: "49" },
        ],
      },
      {
        label: "전사 합계",
        rowClassName: "total-row",
        cells: [
          { content: "69,676" },
          { content: "102%", badgeTone: "blue" },
          { content: "3,013" },
          { content: "4.3%" },
          { content: "13.5%" },
          { content: "10,696억" },
          { content: "28.2주" },
          { content: "5.04" },
          { content: "136" },
        ],
      },
    ],
  },
  recommendations: [
    {
      title: "⚡ 즉시 실행 (4월 내)",
      items: [
        <>
          <b>DX 25S 1년차 과시즌 재고 소진 집중</b> — SS 이월의류 재고 1,189억 中 1년차 소진율 <b>61% 예상(전년 48%, +13%p)</b>, 상반기 재고 회전율 제고
        </>,
        <>
          <b>DX 저수익 매장 구조조정 가속</b> — 비효율 매장 클로징 로드맵 수립, 영업손실 차단
        </>,
        <>
          <b>MLB 운동화 재고 긴급 대응</b> — 재고주수 82주 소진 TF, 캔버스화 편중(신발 내 61%) 완화
        </>,
        <>
          <b>DV 26S 재고 선제 관리</b> — 시즌마감 후 100억 초과 예측, 프로모션 계획 4월 확정
        </>,
        <>
          <b>ST 면세·자사몰 가속</b> — 면세 +133% / 자사몰 +71% 모멘텀 유지, 한남 신상 비중 확대
        </>,
      ],
    },
    {
      title: "🎯 단기 전략 (2Q)",
      items: [
        <>
          <b>MLB 볼캡 성수기 극대화</b> — YoY 154% 모멘텀을 4~6월까지 유지, 신규 플래그쉽 오픈 가속
        </>,
        <>
          <b>DX 신발 카테고리 리빌드</b> — -34%→-23% 낙폭 축소 확인, 26SS 히트 스타일 리오더
        </>,
        <>
          <b>KIDS 흑자전환 재도전</b> — 가방 +425% 모멘텀 활용, 신발 재고(35주) 소진 병행
        </>,
        <>
          <b>DV 이월/정상 투트랙 전략</b> — 정상상품 +190% 유지, 바람막이 FW 간절기 전환
        </>,
        <>
          <b>ST 직영점 적자 관리</b> — -86백만 심층 적자 채널 점검, 4~5월 매출 반등 확정
        </>,
        <>
          <b>전사 자사몰 수익화</b> — 이익률 40~65% 확대, 제휴몰 수수료 구조 재협상
        </>,
      ],
    },
    {
      title: "🏆 중기 성장 (2026 연간)",
      items: [
        <>
          <b>DX 구조 전환 시급</b> — 적자전환은 단일월 이슈 넘어 구조적 — 채널·원가·재고 전면 재설계
        </>,
        <>
          <b>MLB 2.0 리뉴얼 가속</b> — 17.7% OPM 유지, 2027년 매출 2,000억 목표 재확인
        </>,
        <>
          <b>ST S/S 시즌 성과 판단</b> — 4~7월 면세 S/S 레버리지 결과 기반 하반기 전략 수립
        </>,
        <>
          <b>DV 사계절 브랜드 전환</b> — 다운 편중 완화, 비다운 라인업 강화, 29CM 등 채널 다각화
        </>,
        <>
          <b>KIDS 가방 카테고리 리더십</b> — 신학기 모멘텀을 가을까지 이어 가을 시즌 물량 선확보
        </>,
        <>
          <b>전사 원가율 관리 체계</b> — 가중 원가율 상승 대응, 26FW 원가 목표 재설정
        </>,
      ],
    },
  ],
  ceoMessage: (
    <>
      2026년 3월, 전사 실판매출 <b>697억(YoY 102%)</b>으로 소폭 성장하며 영업이익 <b>30억(OPM 4.3%)</b>을 기록했습니다. 다만 <b>DISCOVERY 적자전환(-1,712백만)</b>이라는 중대한 변화가 발생해 1분기 마감 시점에서 구조적 경고가 명확해졌습니다.
      <br />
      <br />
      <b>MLB는 OPM 17.7%(+1.7%p)로 수익성을 추가 개선</b>하며 전사 영업이익 63억을 단독으로 견인했습니다. 볼캡 +154%·RF +51%·플래그쉽 이익률 45.9%는 체질 전환이 실적으로 입증되고 있음을 보여줍니다.
      <br />
      <br />
      <b>KIDS는 가방 +425% 신학기 모멘텀으로 YoY 125%</b> 고성장 지속, <b>DV는 할인율 -11.8%p 대폭 개선</b>, <b>ST는 YoY 65%→80% 바닥 탈출 신호</b>를 확인했습니다. 다만 DX는 2월 97%→3월 88%로 하락이 가속되고 과시즌 재고 누적까지 겹쳐 <b>채널·원가·재고 전면 재설계</b>가 필요한 시점입니다.
      <br />
      <br />
      <b>&quot;MLB 성수기 극대화, DX 구조 전환 착수, KIDS·ST 모멘텀 유지, DV 재고 관리&quot;</b> — 1분기 마감 후 2분기 반등의 핵심 방향입니다.
    </>
  ),
  footerLabel: "데이터 기준: 2026년 3월 실적(사입제외) | 2026.04.17",
};
