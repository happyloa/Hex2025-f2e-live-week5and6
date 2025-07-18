<script setup>
useSeoMeta({
  title: "首頁 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "首頁 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});
</script>

<template>
  <!-- 你可能有些困惑... -->
  <section
    class="bg-[url('/images/home/bg-grid.webp')] px-3 py-12 md:py-20"
  >
    <div class="mx-auto max-w-container">
      <!-- 標題 -->
      <div class="mb-6 justify-items-center text-center md:mb-12">
        <img src="/images/home/qa-title.svg" alt="\ Q&A /" class="mb-1" />
        <h2 class="text-t5-sm md:text-t5">你可能有些困惑...</h2>
      </div>
      <!-- QA 內容 -->
      <div class="flex items-end justify-between gap-6">
        <img src="/images/home/qa.svg" alt="裝飾圖片" class="hidden md:block" />
        <ul class="max-w-[746px] flex-1 space-y-4 md:space-y-6">
          <li>
            <CommonHomeAccordion
              defaultOpen
              title="一對一諮詢是怎麼進行的？需要準備什麼嗎？"
              content="諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。"
            />
          </li>
          <li>
            <CommonHomeAccordion
              title="自由職涯真的可以養活自己嗎？你們怎麼協助？"
              content="自由職涯可以養活自己，但需要有策略與持續調整。WorkWay 顧問會根據你的專業、興趣、可投入時間，設計客製化的變現路徑，例如自由接案、產品化服務、遠端職位申請等，同時協助你管理初期財務風險，避免因壓力過大中途放棄。"
            />
          </li>
          <li>
            <CommonHomeAccordion
              title="職旅 WorkWay 的收費方式是怎麼計算的？"
              content="我們提供單次諮詢、短期方案（例如 3 次輔導包）、或專案長期陪跑計畫。每種方案都標示清楚金額與包含內容，無強制綁約或推銷額外商品。選擇前，我們也會依照你的需求與預算一起討論最適合的安排。"
            />
          </li>
          <li>
            <CommonHomeAccordion
              title="如果諮詢後發現不適合，會有退款保障嗎？"
              content="WorkWay 對每一位學員負責。如果你在第一次完整諮詢結束後，覺得方向不符合期待，可在 3 日內申請退款。我們也提供一次更換顧問的機會，確保你找到最適合自己的陪伴者。"
            />
          </li>
          <li>
            <CommonHomeAccordion
              title="我現在還不確定自己要什麼，也可以預約諮詢嗎？"
              content="很多人來找 WorkWay 時，其實也處於迷惘期。我們的一對一諮詢設計，就是從理解你的人生目標、價值觀與現實條件開始，逐步協助你釐清想要的生活方式與可能路徑。你不需要有答案，只需要願意開始對話。"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <CommonCTA />
</template>
