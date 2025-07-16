<script setup>
useSeoMeta({
  title: "聯絡我們 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "聯絡我們 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

// 基本資料相關欄位、變數、方法
const name = ref("");
const email = ref("");
const phone = ref("");
const careerStatus = ref("");

const showCareerStatusDropdown = ref(false);

function selectedCareerStatus(status) {
  careerStatus.value = status;
  showCareerStatusDropdown.value = false;
}
</script>

<template>
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container-md">
      <!-- 標題區塊 -->
      <section class="mb-6 text-center md:mb-12">
        <h1 class="mb-4 text-t4-sm md:mb-6 md:text-t4">聯絡我們</h1>
        <p class="text-body-lg-sm text-neutral-600 md:text-body-lg">
          每一封郵件，我們都會親自回覆。每一通電話，都是新可能的開始。
        </p>
      </section>
      <!-- 表單區塊 -->
      <div class="relative rounded-3xl bg-white p-6 shadow-shadow md:p-12">
        <img
          src="/images/contact/form-top.svg"
          alt="表單裝飾圖片"
          class="absolute -top-[137px] right-10 z-10 hidden lg:block"
        />
        <!-- 基本資料 -->
        <section
          class="mb-6 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:mb-12 md:flex-row md:gap-6 md:pb-12"
        >
          <aside
            class="top-[100px] flex max-w-[300px] flex-1 flex-row justify-between gap-2 md:sticky md:flex-col md:gap-3 md:self-start"
          >
            <h2 class="text-t2-sm !font-medium md:text-t2">基本資料</h2>
            <p class="flex items-center gap-1 text-neutral-600">
              欄位皆為<span
                class="whitespace-nowrap rounded-xl bg-danger px-2 py-1 text-body-sm !font-medium leading-[1.2] text-white"
                >必填</span
              >
            </p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 姓名 -->
            <div class="relative">
              <input
                v-model="name"
                type="text"
                id="name"
                placeholder=" "
                class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
              />
              <label
                for="name"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >姓名</label
              >
            </div>
            <!-- 信箱 -->
            <div>
              <div class="relative">
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder=" "
                  class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                />
                <label
                  for="email"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >信箱</label
                >
              </div>
              <p class="px-2 text-body-sm text-neutral-600">
                盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信
              </p>
            </div>
            <!-- 聯絡電話 -->
            <div>
              <div class="relative">
                <input
                  v-model="phone"
                  type="tel"
                  id="phone"
                  placeholder=" "
                  class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                />
                <label
                  for="phone"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >聯絡電話</label
                >
              </div>
              <p class="px-2 text-body-sm text-neutral-600">
                我們不會以電話主動聯繫您，告知您要至ATM操作轉帳
              </p>
            </div>
            <!-- 目前職業/工作身分 -->
            <div class="relative">
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-300 px-3 py-4 text-body-md"
                @click="showCareerStatusDropdown = !showCareerStatusDropdown"
              >
                {{ careerStatus !== "" ? careerStatus : "目前職業/工作身分" }}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m10 12.812-5-5 1.167-1.166L10 10.479l3.833-3.833L15 7.812z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <div
                v-if="showCareerStatusDropdown"
                class="absolute right-0 top-16 z-50 w-full rounded-xl bg-white py-2 shadow-shadow"
              >
                <ul>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': careerStatus === '全職上班族' }"
                    @click="selectedCareerStatus('全職上班族')"
                  >
                    全職上班族
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': careerStatus === '兼職工作者' }"
                    @click="selectedCareerStatus('兼職工作者')"
                  >
                    兼職工作者
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatus === '自由工作者/接案者',
                    }"
                    @click="selectedCareerStatus('自由工作者/接案者')"
                  >
                    自由工作者/接案者
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': careerStatus === '數位遊牧者' }"
                    @click="selectedCareerStatus('數位遊牧者')"
                  >
                    數位遊牧者
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatus === '創業者/企業主',
                    }"
                    @click="selectedCareerStatus('創業者/企業主')"
                  >
                    創業者/企業主
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatus === '待業中',
                    }"
                    @click="selectedCareerStatus('待業中')"
                  >
                    待業中
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatus === '其他',
                    }"
                    @click="selectedCareerStatus('其他')"
                  >
                    其他
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
