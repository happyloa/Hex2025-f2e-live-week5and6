<script setup>
import { CommonAboutPartnerCard } from "#components";

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
  <section class="overflow-x-hidden py-12 md:py-20">
    <main class="mx-auto max-w-container space-y-6 text-center md:space-y-12">
      <!-- 標題 -->
      <div class="px-3">
        <h2 class="mb-4 text-t4-sm md:mb-6 md:text-t4">精實的職旅夥伴</h2>
        <p class="text-body-lg-sm text-neutral-600 md:text-body-lg">
          我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。
        </p>
      </div>
      <!-- 夥伴輪播 -->
      <ClientOnly>
        <swiper-container
          class="xl:w-screen"
          :breakpoints="{
            1536: {
              slidesPerView: 5.65,
            },
            1280: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 3.65,
            },
            768: {
              slidesPerView: 2.6,
            },
            480: {
              slidesPerView: 2.3,
            },
            0: {
              slidesPerView: 1.1,
            },
          }"
          space-between="0"
          :autoplay="{
            delay: 5000,
          }"
          :loop="true"
        >
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-1.webp"
              title="數位遊牧先驅"
              name="陳志遠 Ethan Chen"
              :tags="['# 遠端工作策略', '# 數位遊牧生活設計']"
            />
          </swiper-slide>
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-2.webp"
              title="個人品牌策略專家"
              name="林曉彤 Clara Lin"
              :tags="['# 個人品牌建立', '# 內容行銷策略', '# 故事行銷']"
            />
          </swiper-slide>
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-3.webp"
              title="財務自由規劃顧問"
              name="王建明 Marcus"
              :tags="['# 稅務優化', '# 被動收入建立', '# 現金流管理']"
            />
          </swiper-slide>
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-4.webp"
              title="創意接案與多元收入專家"
              name="張雅琳 Ariel"
              :tags="['# 創意變現策略', '# 線上課程開發']"
            />
          </swiper-slide>
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-5.webp"
              title="遠端工作技術顧問"
              name="李俊宏 Kevin Lee"
              :tags="['# 專案管理自動化', '# 虛擬團隊管理']"
            />
          </swiper-slide>
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-6.webp"
              title="創意接案與多元收入專家"
              name="張雅琳 Ariel"
              :tags="['# 創意變現策略', '# 線上課程開發']"
            />
          </swiper-slide>
          <swiper-slide class="p-3">
            <CommonAboutPartnerCard
              img="/images/about/mentor-7.webp"
              title="財務自由規劃顧問"
              name="王建明 Marcus"
              :tags="['# 稅務優化', '# 被動收入建立', '# 現金流管理']"
            />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <!-- 團隊承諾 -->
      <article class="px-3">
        <div
          class="justify-items-center rounded-2xl bg-primary px-6 pb-6 pt-4 text-white shadow-shadow md:rounded-3xl md:px-12 md:pb-12 md:pt-6"
        >
          <!-- <h3
          class="md:text-t text-t-sm relative z-0 mb-4 rounded-xl border-2 border-primary bg-white px-5 py-3 text-primary md:mb-6"
        >
          <span class="relative z-20">團隊承諾</span>
          <div
            class="absolute -bottom-2 left-1/2 z-10 size-7 -translate-x-1/2 rotate-45 bg-white"
          ></div>
        </h3> -->
          <img
            src="/images/about/commitment.svg"
            alt="團隊承諾"
            class="mb-4 md:mb-6"
          />
          <p class="mx-auto mb-6 max-w-[800px] md:mb-12">
            我們不只是顧問，更是你職業轉型路上的夥伴與同行者。我們深知轉型過程中的不確定與恐懼，也經歷過停滯不前的困境。正因如此，我們更懂得如何陪你走過這段旅程，不只指引方向，更與你並肩同行。
          </p>
          <picture class="block justify-items-center">
            <source
              media="(max-width: 768px)"
              srcset="/images/about/text-mb.svg"
            />
            <img src="/images/about/text-pc.svg" alt="手寫文字" />
          </picture>
        </div>
      </article>
    </main>
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
