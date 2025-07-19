<script setup>
useSeoMeta({
  title: "首頁 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "首頁 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

const qaList = [
  {
    title: "一對一諮詢是怎麼進行的？需要準備什麼嗎？",
    content:
      "諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。",
  },
  {
    title: "自由職涯真的可以養活自己嗎？你們怎麼協助？",
    content:
      "自由職涯可以養活自己，但需要有策略與持續調整。WorkWay 顧問會根據你的專業、興趣、可投入時間，設計客製化的變現路徑，例如自由接案、產品化服務、遠端職位申請等，同時協助你管理初期財務風險，避免因壓力過大中途放棄。",
  },
  {
    title: "職旅 WorkWay 的收費方式是怎麼計算的？",
    content:
      "我們提供單次諮詢、短期方案（例如 3 次輔導包）、或專案長期陪跑計畫。每種方案都標示清楚金額與包含內容，無強制綁約或推銷額外商品。選擇前，我們也會依照你的需求與預算一起討論最適合的安排。",
  },
  {
    title: "如果諮詢後發現不適合，會有退款保障嗎？",
    content:
      "WorkWay 對每一位學員負責。如果你在第一次完整諮詢結束後，覺得方向不符合期待，可在 3 日內申請退款。我們也提供一次更換顧問的機會，確保你找到最適合自己的陪伴者。",
  },
  {
    title: "我現在還不確定自己要什麼，也可以預約諮詢嗎？",
    content:
      "很多人來找 WorkWay 時，其實也處於迷惘期。我們的一對一諮詢設計，就是從理解你的人生目標、價值觀與現實條件開始，逐步協助你釐清想要的生活方式與可能路徑。你不需要有答案，只需要願意開始對話。",
  },
];

// 預設展開第 1 個
const openedIndex = ref(0);

// 點擊時切換展開目標（如果點同一個則收合）
function handleToggle(idx) {
  openedIndex.value = openedIndex.value === idx ? -1 : idx;
}
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden px-3 py-12 md:py-20">
    <!-- 標題 -->
    <div class="relative z-10 mx-auto mb-10 max-w-[815px]">
      <h1 class="mb-6 text-center text-t5-sm md:text-display">
        一起陪伴、探索<br />還有你那些未完成的夢
      </h1>
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p
          class="text-center text-body-lg-sm text-neutral-600 md:text-start md:text-body-lg"
        >
          自由工作很美，也很難。<br />我們用 1 對 1
          陪伴，陪你從第一步開始，直到夢想變成日常
        </p>
        <AtomButton to="/plans" size="lg" text="開始你的職旅" hasIcon />
      </div>
    </div>
    <!-- 圖片 -->
    <div class="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:px-3">
      <img
        src="/images/home/hero-1.webp"
        alt="hero圖片1"
        class="hidden md:block"
      />
      <div class="hidden space-y-6 md:block">
        <img src="/images/home/hero-2.webp" alt="hero圖片2" />
        <img src="/images/home/hero-3.webp" alt="hero圖片3" />
      </div>
      <img src="/images/home/hero-4.webp" alt="hero圖片4" />
    </div>
    <!-- 裝飾球球 -->
    <img
      src="/images/home/gradient-ball.webp"
      alt="裝飾球球"
      class="absolute left-1/2 top-10 z-0 aspect-square w-[560px] -translate-x-1/2 md:w-[800px]"
    />
  </section>
  <!-- 為什麼選擇職旅 -->
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container space-y-6 md:space-y-12">
      <!-- 標題 -->
      <div class="justify-items-center text-center">
        <img src="/images/home/why-workway.svg" alt="為什麼？" class="mb-1" />
        <h2 class="text-t5-sm md:text-t5">選擇職旅 WorkWay</h2>
      </div>
      <!-- 卡片 -->
      <ul class="relative grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <!-- 裝飾圖片 -->
        <img
          src="/images/home/adv-deco.svg"
          alt="裝飾圖片"
          class="absolute -top-[174px] right-0 hidden lg:block"
        />
        <li class="group relative overflow-y-hidden rounded-2xl md:rounded-3xl">
          <!-- 覆蓋文字 -->
          <div
            class="absolute inset-0 translate-y-full content-center bg-neutral/50 p-6 text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-white">
              我們的顧問都是親身走過這條路的專家，不是紙上談兵的理論家。你所學到的每一個建議，都是經過無數次嘗試與錯誤後萃取的精華。
            </p>
          </div>
          <article>
            <img src="/images/home/adv-1.webp" alt="實戰經驗" />
          </article>
          <!-- 標籤 -->
          <span
            class="absolute bottom-0 left-0 flex items-center gap-2 rounded-tr-xl bg-neutral-100 px-6 py-3 text-t2-sm text-neutral-600 md:text-t2"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7 18.5q-2.4-.125-4.05-1.85T6 12.5Q6 10 7.75 8.25T12 6.5q2.425 0 4.15 1.65T18 12.2l-2.1-.625a3.94 3.94 0 0 0-1.4-2.212Q13.425 8.5 12 8.5q-1.65 0-2.825 1.175T8 12.5q0 1.425.863 2.5a3.94 3.94 0 0 0 2.212 1.4zm1.2 3.95q-.225.05-.45.05H12a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12.5q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2.5q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12.5v.45q0 .225-.05.45L20 12.8v-.3q0-3.35-2.325-5.675T12 4.5 6.325 6.825 4 12.5t2.325 5.675T12 20.5h.3zm7.625.55-4.275-4.275L15 22.5l-3-10 10 3-3.775 1.25 4.275 4.275z"
                fill="#4A69E8"
              />
            </svg>
            實戰經驗
          </span>
        </li>
        <li class="group relative overflow-y-hidden rounded-2xl md:rounded-3xl">
          <!-- 覆蓋文字 -->
          <div
            class="absolute inset-0 translate-y-full content-center bg-neutral/50 p-6 text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-white">
              從心態調整到實際操作，從品牌建立到財務規劃，我們提供你轉型路上需要的每一塊拼圖，讓不確定感不再阻礙你的決定。
            </p>
          </div>
          <article>
            <img src="/images/home/adv-2.webp" alt="全方位支持" />
          </article>
          <!-- 標籤 -->
          <span
            class="absolute bottom-0 left-0 flex items-center gap-2 rounded-tr-xl bg-neutral-100 px-6 py-3 text-t2-sm text-neutral-600 md:text-t2"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7 18.5q-2.4-.125-4.05-1.85T6 12.5Q6 10 7.75 8.25T12 6.5q2.425 0 4.15 1.65T18 12.2l-2.1-.625a3.94 3.94 0 0 0-1.4-2.212Q13.425 8.5 12 8.5q-1.65 0-2.825 1.175T8 12.5q0 1.425.863 2.5a3.94 3.94 0 0 0 2.212 1.4zm1.2 3.95q-.225.05-.45.05H12a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12.5q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2.5q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12.5v.45q0 .225-.05.45L20 12.8v-.3q0-3.35-2.325-5.675T12 4.5 6.325 6.825 4 12.5t2.325 5.675T12 20.5h.3zm7.625.55-4.275-4.275L15 22.5l-3-10 10 3-3.775 1.25 4.275 4.275z"
                fill="#4A69E8"
              />
            </svg>
            全方位支持
          </span>
        </li>
        <li class="group relative overflow-y-hidden rounded-2xl md:rounded-3xl">
          <!-- 覆蓋文字 -->
          <div
            class="absolute inset-0 translate-y-full content-center bg-neutral/50 p-6 text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-white">
              加入職旅不只是獲得諮詢，更是連結到一群志同道合的夥伴。在這裡，你的疑惑有人解答，你的成就有人分享，你的旅程不再孤單。
            </p>
          </div>
          <article>
            <img src="/images/home/adv-3.webp" alt="社群力量" />
          </article>
          <!-- 標籤 -->
          <span
            class="absolute bottom-0 left-0 flex items-center gap-2 rounded-tr-xl bg-neutral-100 px-6 py-3 text-t2-sm text-neutral-600 md:text-t2"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7 18.5q-2.4-.125-4.05-1.85T6 12.5Q6 10 7.75 8.25T12 6.5q2.425 0 4.15 1.65T18 12.2l-2.1-.625a3.94 3.94 0 0 0-1.4-2.212Q13.425 8.5 12 8.5q-1.65 0-2.825 1.175T8 12.5q0 1.425.863 2.5a3.94 3.94 0 0 0 2.212 1.4zm1.2 3.95q-.225.05-.45.05H12a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12.5q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2.5q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12.5v.45q0 .225-.05.45L20 12.8v-.3q0-3.35-2.325-5.675T12 4.5 6.325 6.825 4 12.5t2.325 5.675T12 20.5h.3zm7.625.55-4.275-4.275L15 22.5l-3-10 10 3-3.775 1.25 4.275 4.275z"
                fill="#4A69E8"
              />
            </svg>
            社群力量
          </span>
        </li>
      </ul>
      <!-- 底下文字 -->
      <div class="flex items-center gap-4 md:gap-6">
        <p class="shrink-0 font-medium text-neutral-600">
          不是套模板的建議，而是為你量身打造的陪伴！
        </p>
        <hr class="w-full border-neutral-300" />
      </div>
    </div>
  </section>
  <!-- 遇見你的職涯夥伴 -->
  <section class="relative overflow-hidden px-3 py-12 md:py-20">
    <!-- 裝飾球球 -->
    <img
      src="/images/home/gradient-ball.webp"
      alt="裝飾球球"
      class="absolute -bottom-[160px] -right-[160px] z-0 aspect-square size-[400px] lg:-right-[180px] lg:top-[140px] lg:size-[800px]"
    />
    <!-- 內容 -->
    <div
      class="relative z-10 mx-auto flex max-w-container flex-col items-start gap-6 lg:flex-row"
    >
      <img
        src="/images/home/team.webp"
        alt="職涯夥伴"
        class="rounded-xl lg:max-w-[636px]"
      />
      <div class="flex-1 space-y-4 lg:max-w-[636px] lg:space-y-6 lg:px-3">
        <h2 class="text-t5-sm lg:text-t5">遇見你的職涯夥伴</h2>
        <p class="text-body-lg-sm text-neutral-600 lg:text-body-lg">
          每位顧問都有獨特專長，更重要的是：
        </p>
        <blockquote class="inline-block bg-neutral-100 p-2">
          <p class="text-t2-sm text-primary lg:text-t2">
            “ 他們都曾面對你正在經歷的挑戰 ”
          </p>
        </blockquote>
        <p class="text-body-lg-sm text-neutral-600 lg:text-body-lg">
          職旅 WorkWay
          匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。我們的顧問不只教授理論，更分享親身經歷的挑戰與解決之道。
        </p>
        <p class="text-body-lg-sm text-neutral-600 lg:text-body-lg">
          我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。
        </p>
        <AtomButton to="/about" text="了解更多職旅夥伴" hasIcon />
      </div>
    </div>
  </section>
  <!-- 服務流程 -->
  <section class="bg-primary px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container text-center">
      <!-- 標題 -->
      <div class="mb-6 text-white md:mb-12">
        <h2 class="mb-4 text-t5-sm md:mb-6 md:text-t5">服務流程</h2>
        <p class="text-body-lg-sm md:text-body-lg">簡單四步，踏上你的職旅</p>
      </div>
      <!-- 電腦版 -->
      <ol class="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
        <li>
          <CommonHomeServiceCard
            img="/images/home/service-1.svg"
            step="1"
            title="免費註冊會員"
            desc="透過網站左上角按鈕，立即註冊免費會員，與我們開始建立連結。"
          />
        </li>
        <li>
          <CommonHomeServiceCard
            img="/images/home/service-2.svg"
            step="2"
            title="填寫職旅計劃"
            desc="了解你的技能、熱情與市場需求的交會點，找出屬於你的獨特定位。"
          />
        </li>
        <li>
          <CommonHomeServiceCard
            img="/images/home/service-3.svg"
            step="3"
            title="初次諮詢"
            desc="依據你的目標與現況，給予最直接的建議，建立清晰的轉型思路。"
          />
        </li>
        <li>
          <CommonHomeServiceCard
            img="/images/home/service-4.svg"
            step="4"
            title="實戰指導"
            desc="專家一對一指導，從品牌建立到客戶開發，每一步都有明確方向。"
          />
        </li>
      </ol>
      <!-- 手機版 -->
      <ClientOnly>
        <swiper-container
          class="block md:hidden"
          slides-per-view="1.2"
          space-between="16"
          :autoplay="{
            delay: 5000,
          }"
        >
          <swiper-slide>
            <CommonHomeServiceCard
              img="/images/home/service-1.svg"
              step="1"
              title="免費註冊會員"
              desc="透過網站左上角按鈕，立即註冊免費會員，與我們開始建立連結。"
            />
          </swiper-slide>
          <swiper-slide>
            <CommonHomeServiceCard
              img="/images/home/service-2.svg"
              step="2"
              title="填寫職旅計劃"
              desc="了解你的技能、熱情與市場需求的交會點，找出屬於你的獨特定位。"
            />
          </swiper-slide>
          <swiper-slide>
            <CommonHomeServiceCard
              img="/images/home/service-3.svg"
              step="3"
              title="初次諮詢"
              desc="依據你的目標與現況，給予最直接的建議，建立清晰的轉型思路。"
            />
          </swiper-slide>
          <swiper-slide>
            <CommonHomeServiceCard
              img="/images/home/service-4.svg"
              step="4"
              title="實戰指導"
              desc="專家一對一指導，從品牌建立到客戶開發，每一步都有明確方向。"
            />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
  <!-- 你可能有些困惑... -->
  <section class="bg-[url('/images/home/bg-grid.webp')] px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container">
      <!-- 標題 -->
      <div class="mb-6 justify-items-center text-center md:mb-12">
        <img src="/images/home/qa-title.svg" alt="\ Q&A /" class="mb-1" />
        <h2 class="text-t5-sm md:text-t5">你可能有些困惑...</h2>
      </div>
      <!-- QA 內容 -->
      <div class="flex items-end justify-between gap-6">
        <img src="/images/home/qa.svg" alt="裝飾圖片" class="hidden md:block" />
        <!-- QA 手風琴 -->
        <ul class="max-w-[746px] flex-1 space-y-4 md:space-y-6">
          <li v-for="(qa, idx) in qaList" :key="qa.title">
            <CommonHomeAccordion
              :title="qa.title"
              :content="qa.content"
              :isOpen="openedIndex === idx"
              @toggle="handleToggle(idx)"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <CommonCTA />
</template>
