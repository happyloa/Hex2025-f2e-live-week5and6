<script setup>
useSeoMeta({
  title: "服務方案 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "服務方案 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});
</script>

<template>
  <!-- Banner -->
  <section
    class="bg-[url('/images/banner-bg.webp')] bg-center px-3 py-12 md:py-20 lg:bg-[url('/images/banner-bg-pc.webp')] lg:bg-cover lg:bg-no-repeat"
  >
    <div class="relative mx-auto max-w-container text-center">
      <h1 class="mb-6 text-t5-sm md:mb-12 md:text-t5">服務方案</h1>
      <p
        class="mx-auto max-w-[800px] text-body-lg-sm text-neutral-600 md:text-body-lg"
      >
        我們最全面的服務方案，為您提供從評估、規劃到實踐的完整支持。不再擔心轉型過程中的各種挑戰，我們的專家團隊將全程陪伴，確保您順利實現職業自由。
      </p>
      <img
        src="/images/banner-person.svg"
        alt="裝飾人物"
        class="absolute -bottom-[88px] right-32 z-10 hidden lg:block"
      />
    </div>
  </section>
  <!-- 職涯轉型全程計畫 -->
  <section class="px-3 py-12 md:py-20">
    <main class="mx-auto max-w-container">
      <!-- 標題文字 -->
      <div class="mb-6 justify-items-center text-center md:mb-12">
        <img src="/icons/plans/plans.svg" alt="職涯轉型全程計畫" class="mb-1" />
        <h2 class="mb-4 text-t4-sm md:mb-6 md:text-t4">職涯轉型全程計畫</h2>
        <p class="text-body-lg-sm text-neutral-600 md:text-body-lg">
          從企業到自由，無縫轉型之旅
        </p>
      </div>
      <!-- 計畫卡片 -->
      <ul class="space-y-4 md:space-y-6">
        <!-- 全面方案 -->
        <li class="relative">
          <!-- HOT 標籤 -->
          <span
            class="inter | absolute left-0 top-0 rounded-br-2xl rounded-tl-2xl bg-secondary px-4 py-2 text-body-sm font-bold md:rounded-br-3xl md:rounded-tl-3xl"
            >HOT
          </span>
          <article
            class="flex items-start gap-6 rounded-2xl border-2 border-secondary p-6 pt-12 shadow-shadow md:rounded-3xl md:p-12"
          >
            <div class="flex-1">
              <p class="mb-2 font-medium text-primary">全面方案</p>
              <h3 class="mb-2 text-t2-sm !font-medium md:text-t2">
                職涯轉型全程計畫
              </h3>
              <p class="mb-2">
                針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。
              </p>
              <ul class="mb-4 space-y-1 md:mb-6">
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />深度職能轉換評估與規劃
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />跨領域技能遷移策略
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />新領域人脈建立指導
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />長期職涯發展藍圖
                </li>
              </ul>
              <!-- 對象/價格區塊 -->
              <mark
                class="mb-4 block space-y-2 rounded-xl bg-neutral-100 p-4 md:mb-6 md:p-6"
              >
                <p class="flex items-center">
                  <span class="whitespace-nowrap">適合對象：</span>
                  <span class="font-bold"
                    >從企業職場轉型為自由工作者 / 數位遊牧者的專業人士
                  </span>
                </p>
                <p>
                  優惠價格：<span
                    class="inter | md:text-t text-t-sm text-primary"
                    >NT$ 120,000
                  </span>
                </p>
              </mark>
              <AtomButton text="我有興趣" hasIcon />
            </div>
            <img
              src="/images/plans/plan-1.svg"
              alt="計畫方案1"
              class="hidden w-[300px] md:block"
            />
          </article>
        </li>
        <!-- 加速方案 -->
        <li>
          <article
            class="flex items-start gap-6 rounded-2xl p-6 shadow-shadow md:rounded-3xl md:p-12"
          >
            <div class="flex-1">
              <p class="mb-2 font-medium text-primary">加速方案</p>
              <h3 class="mb-2 text-t2-sm !font-medium md:text-t2">
                自由工作加速計畫
              </h3>
              <p class="mb-2">
                為已確定要轉型但需要全面規劃的專業人士設計。六次深度諮詢，從心態調整到實際操作，全方位為您的轉型做好準備。
              </p>
              <ul class="mb-4 space-y-1 md:mb-6">
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />詳細的市場機會分析
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />個人優勢定位與差異化策略
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />完整的轉型時間表與里程碑
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />轉型期間的心理健康維護策略
                </li>
              </ul>
              <!-- 對象/價格區塊 -->
              <mark
                class="mb-4 block space-y-2 rounded-xl bg-neutral-100 p-4 md:mb-6 md:p-6"
              >
                <p class="flex items-center">
                  <span class="whitespace-nowrap">適合對象：</span>
                  <span class="font-bold"
                    >已經開始自由工作但想提升效能和收入的專業人士
                  </span>
                </p>
                <p>
                  優惠價格：<span
                    class="inter | md:text-t text-t-sm text-primary"
                    >NT$ 80,000
                  </span>
                </p>
              </mark>
              <AtomButton text="我有興趣" hasIcon />
            </div>
            <img
              src="/images/plans/plan-2.svg"
              alt="計畫方案2"
              class="hidden w-[300px] md:block"
            />
          </article>
        </li>
        <!-- 遊牧方案 -->
        <li>
          <article
            class="flex items-start gap-6 rounded-2xl p-6 shadow-shadow md:rounded-3xl md:p-12"
          >
            <div class="flex-1">
              <p class="mb-2 font-medium text-primary">遊牧方案</p>
              <h3 class="mb-2 text-t2-sm !font-medium md:text-t2">
                數位遊牧生活計畫
              </h3>
              <p class="mb-2">
                針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。
              </p>
              <ul class="mb-4 space-y-1 md:mb-6">
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />深度職能轉換評估與規劃
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />新領域人脈建立指導
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />跨領域技能遷移策略
                </li>
                <li class="flex items-center gap-2">
                  <img
                    src="/icons/plans/list-dot.svg"
                    alt="列表裝飾"
                  />長期職涯發展藍圖
                </li>
              </ul>
              <!-- 對象/價格區塊 -->
              <mark
                class="mb-4 block space-y-2 rounded-xl bg-neutral-100 p-4 md:mb-6 md:p-6"
              >
                <p class="flex items-center">
                  <span class="whitespace-nowrap">適合對象：</span>
                  <span class="font-bold"
                    >希望同時擁有工作自由和地域自由的專業人士
                  </span>
                </p>
                <p>
                  優惠價格：<span
                    class="inter | md:text-t text-t-sm text-primary"
                    >NT$ 60,000
                  </span>
                </p>
              </mark>
              <AtomButton text="我有興趣" hasIcon />
            </div>
            <img
              src="/images/plans/plan-3.svg"
              alt="計畫方案3"
              class="hidden w-[300px] md:block"
            />
          </article>
        </li>
      </ul>
    </main>
  </section>
  <!-- 基礎諮詢服務 -->
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container">
      <!-- 標題文字 -->
      <div class="mb-6 justify-items-center text-center md:mb-12">
        <img src="/icons/plans/basics.svg" alt="基礎諮詢服務" class="mb-1" />
        <h2 class="mb-4 text-t4-sm md:mb-6 md:text-t4">基礎諮詢服務</h2>
        <p class="text-body-lg-sm text-neutral-600 md:text-body-lg">
          我們提供第一次免費諮詢，一起建立信任的橋樑
        </p>
      </div>
      <!-- 服務卡片 -->
      <ul class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <!-- 職涯探索評估 -->
        <li>
          <article
            class="justify-items-center space-y-4 rounded-2xl bg-white p-6 shadow-shadow md:space-y-6 md:rounded-3xl"
          >
            <img
              src="/images/plans/service-1.svg"
              alt="服務1"
              class="size-[120px] md:size-40"
            />
            <div class="space-y-2 text-center">
              <h3 class="text-t2-sm md:text-t2">職涯探索評估</h3>
              <p class="text-neutral-600">3 次一對一諮詢，了解可能性和適配性</p>
              <p class="inter | md:text-t text-t-sm text-primary">NT$ 3,800</p>
            </div>
            <AtomButton text="我有興趣" hasIcon />
          </article>
        </li>
        <!-- 職涯轉型規劃 -->
        <li class="relative">
          <!-- HOT 標籤 -->
          <span
            class="inter | absolute left-0 top-0 rounded-br-2xl rounded-tl-2xl bg-secondary px-4 py-2 text-body-sm font-bold md:rounded-br-3xl md:rounded-tl-3xl"
            >HOT
          </span>
          <article
            class="justify-items-center space-y-4 rounded-2xl border-2 border-secondary bg-white p-6 shadow-shadow md:space-y-6 md:rounded-3xl"
          >
            <img
              src="/images/plans/service-2.svg"
              alt="服務2"
              class="size-[120px] md:size-40"
            />
            <div class="space-y-2 text-center">
              <h3 class="text-t2-sm md:text-t2">職涯轉型規劃</h3>
              <p class="text-neutral-600">6 次深度諮詢，建立完整轉型藍圖</p>
              <p class="inter | md:text-t text-t-sm text-primary">NT$ 12,000</p>
            </div>
            <AtomButton text="我有興趣" hasIcon />
          </article>
        </li>
        <!-- 專業定位與品牌建立 -->
        <li>
          <article
            class="justify-items-center space-y-4 rounded-2xl bg-white p-6 shadow-shadow md:space-y-6 md:rounded-3xl"
          >
            <img
              src="/images/plans/service-3.svg"
              alt="服務3"
              class="size-[120px] md:size-40"
            />
            <div class="space-y-2 text-center">
              <h3 class="text-t2-sm md:text-t2">專業定位與品牌建立</h3>
              <p class="text-neutral-600">
                4 次專業諮詢，確立市場定位與差異化策略
              </p>
              <p class="inter | md:text-t text-t-sm text-primary">NT$ 8,800</p>
            </div>
            <AtomButton text="我有興趣" hasIcon />
          </article>
        </li>
      </ul>
    </div>
  </section>
  <!-- 持續支持方案 -->
  <section class="relative bg-neutral-100 px-3 py-12 md:py-20">
    <!-- 內容區塊 -->
    <div class="relative z-10 mx-auto max-w-container-sm">
      <!-- 標題文字 -->
      <div class="mb-6 justify-items-center text-center md:mb-12">
        <img src="/icons/plans/support.svg" alt="持續支持方案" class="mb-1" />
        <h2 class="mb-4 text-t4-sm md:mb-6 md:text-t4">持續支持方案</h2>
      </div>
      <!-- 內容 -->
      <div
        class="relative justify-items-center rounded-2xl border-2 border-secondary bg-secondary-100 p-6 text-center shadow-shadow md:rounded-3xl md:p-12"
      >
        <div class="relative z-10 mb-12">
          <h3 class="mb-2 text-t2-sm !font-medium md:text-t2">職旅會員計畫</h3>
          <p>享有長期社群支持與資源服務</p>
        </div>
        <div class="relative z-10 mb-12 flex items-center gap-2">
          <span class="inter | md:text-t text-t-sm text-primary"
            >NT$ 9,800
          </span>
          /年
          <span class="font-medium">( NT$1,200 /月)</span>
        </div>
        <AtomButton text="我有興趣" hasIcon />
        <img
          src="/images/plans/subscribe-1.svg"
          alt="插圖1"
          class="absolute bottom-0 left-6 z-10 hidden md:block"
        />
        <img
          src="/images/plans/subscribe-2.svg"
          alt="插圖2"
          class="absolute bottom-0 right-6 z-10 hidden md:block"
        />
        <img
          src="/images/plans/subscribe-3.svg"
          alt="插圖3"
          class="absolute right-0 top-0 z-0 rounded-tr-2xl md:rounded-tr-3xl"
        />
      </div>
    </div>
    <!-- 白色區塊 -->
    <div
      class="absolute bottom-0 left-0 h-[179px] w-full bg-white md:h-[332px]"
    ></div>
  </section>
  <CommonCTA />
</template>
