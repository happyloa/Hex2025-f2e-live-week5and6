<script setup>
useSeoMeta({
  title: "關於職旅 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "關於職旅 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});
</script>

<template>
  <!-- Banner -->
  <section
    class="bg-[url('/images/banner-bg.webp')] bg-center px-3 py-12 md:py-20 lg:bg-[url('/images/banner-bg-pc.webp')] lg:bg-cover lg:bg-no-repeat"
  >
    <div class="relative mx-auto max-w-container text-center">
      <h1 class="mb-6 text-t5-sm md:mb-12 md:text-t5">關於職旅</h1>
      <p
        class="mx-auto max-w-[800px] text-body-lg-sm text-neutral-600 md:text-body-lg"
      >
        職旅 WorkWay
        匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢。
      </p>
      <p
        class="mx-auto max-w-[800px] text-body-lg-sm text-neutral-600 md:text-body-lg"
      >
        無論你是剛開始探索期，還是已在轉型路上遇到瓶頸，我們都能提供適合你的專業指導。
      </p>
      <img
        src="/images/banner-person.svg"
        alt="裝飾人物"
        class="absolute -bottom-[88px] right-32 z-10 hidden lg:block"
      />
    </div>
  </section>
  <!-- 精實的職旅夥伴 -->
  <section class="px-3 py-12 md:py-20">
    <main class="mx-auto max-w-container"></main>
  </section>
  <!-- 公司資訊 -->
  <section class="relative bg-neutral-100 px-3 py-12 md:py-20">
    <!-- 內容區塊 -->
    <div class="mx-auto max-w-container">
      <h2 class="mb-6 text-center text-t4-sm md:mb-12 md:text-t4">公司資訊</h2>
      <div
        class="relative z-10 rounded-2xl bg-white p-6 shadow-shadow md:rounded-3xl md:p-12"
      >
        <ul class="mb-6 md:mb-12">
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              公司位置
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">
              110台北市信義區信義路五段7號
            </p>
          </li>
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              負責人
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">張世明</p>
          </li>
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              聯絡專線
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">02-2758-6600</p>
          </li>
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              營業時間
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">
              週一至週五 10:00～18:00（國定假日休息）
            </p>
          </li>
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              電子郵件
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">
              contact@workway.tw
            </p>
          </li>
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              成立時間
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">2023 年 6 月</p>
          </li>
          <li
            class="flex items-start border-b border-neutral-300 md:items-center"
          >
            <h3 class="min-w-[120px] p-4 font-bold text-neutral-600 md:p-6">
              統一編號
            </h3>
            <p class="py-4 pr-4 font-medium md:py-6 md:pr-6">83149276</p>
          </li>
        </ul>
        <!-- 嵌入地圖 -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4298.992479218153!2d121.5673055064592!3d25.03382412389047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1752751305410!5m2!1szh-TW!2stw"
          style="border: 0"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="h-[200px] w-full md:h-[400px]"
        ></iframe>
      </div>
    </div>
    <!-- 白色區塊 -->
    <div
      class="absolute bottom-0 left-0 hidden h-[280px] w-full bg-white md:block"
    ></div>
  </section>
  <CommonCTA />
</template>
