<script setup>
useSeoMeta({
  title: "職旅計畫 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "職旅計畫 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

// 職旅計劃概況相關欄位、變數、方法
const careerStatus = ref("全職上班族");
const industry = ref("");
const jobTenure = ref("");
const monthlyIncome = ref("3 萬以下");
const careerSummary = ref(
  "職業摘要（簡短描述您的專業背景和核心競爭力最多 300 字）",
);
const workCase = ref("");

const showIndustriesDropdown = ref(false);
const showJobTenureDropdown = ref(false);

function selectedIndustry(ind) {
  industry.value = ind;
  showIndustriesDropdown.value = false;
}
function selectedJobTenure(period) {
  jobTenure.value = period;
  showJobTenureDropdown.value = false;
}
</script>

<template>
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container-md">
      <CommonMemberNav />
      <div class="rounded-3xl bg-white p-6 shadow-shadow md:p-12">
        <section
          class="mb-6 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:mb-12 md:flex-row md:gap-6 md:pb-12"
        >
          <aside
            class="flex max-w-[300px] flex-1 flex-row justify-between gap-2 md:flex-col md:gap-3 md:self-start"
          >
            <h1 class="text-t2-sm !font-medium md:text-t2">職旅計劃概況</h1>
            <p class="flex items-center gap-1 text-neutral-600">
              欄位皆為<span
                class="whitespace-nowrap rounded-xl bg-danger px-2 py-1 text-body-sm !font-medium leading-[1.2] text-white"
                >必填</span
              >
            </p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 目前職業狀態 -->
            <div>
              <p class="mb-2">目前職業狀態</p>
              <div class="flex flex-wrap gap-x-4 gap-y-2 px-2 md:gap-x-6">
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="全職上班族"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>全職上班族</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="兼職工作者"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>兼職工作者</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="自由工作者/接案者"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>自由工作者/接案者</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="數位遊牧者"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>數位遊牧者</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="創業者/企業主"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>創業者/企業主</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="待業中"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>待業中</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="其他"
                    v-model="careerStatus"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>其他</span>
                </label>
              </div>
            </div>
            <!-- 工作產業 -->
            <div class="relative">
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-300 px-3 py-4 text-body-md"
                @click="showIndustriesDropdown = !showIndustriesDropdown"
              >
                {{ industry !== "" ? industry : "工作產業" }}
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
                v-if="showIndustriesDropdown"
                class="absolute right-0 top-16 z-50 w-full rounded-xl bg-white py-2 shadow-shadow"
              >
                <ul>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '科技' }"
                    @click="selectedIndustry('科技')"
                  >
                    科技
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '媒體' }"
                    @click="selectedIndustry('媒體')"
                  >
                    媒體
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '教育' }"
                    @click="selectedIndustry('教育')"
                  >
                    教育
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '金融' }"
                    @click="selectedIndustry('金融')"
                  >
                    金融
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '醫療健康' }"
                    @click="selectedIndustry('醫療健康')"
                  >
                    醫療健康
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '零售製造' }"
                    @click="selectedIndustry('零售製造')"
                  >
                    零售製造
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '服務業' }"
                    @click="selectedIndustry('服務業')"
                  >
                    服務業
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '藝術創意' }"
                    @click="selectedIndustry('藝術創意')"
                  >
                    藝術創意
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': industry === '非營利組織' }"
                    @click="selectedIndustry('非營利組織')"
                  >
                    非營利組織
                  </li>
                </ul>
              </div>
            </div>
            <!-- 工作年資 -->
            <div class="relative">
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-300 px-3 py-4 text-body-md"
                @click="showJobTenureDropdown = !showJobTenureDropdown"
              >
                {{ jobTenure !== "" ? jobTenure : "工作年資" }}
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
                v-if="showJobTenureDropdown"
                class="absolute right-0 top-16 z-50 w-full rounded-xl bg-white py-2 shadow-shadow"
              >
                <ul>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': jobTenure === '1 年以下' }"
                    @click="selectedJobTenure('1 年以下')"
                  >
                    1 年以下
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': jobTenure === '1-3 年' }"
                    @click="selectedJobTenure('1-3 年')"
                  >
                    1-3 年
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': jobTenure === '3-5 年' }"
                    @click="selectedJobTenure('3-5 年')"
                  >
                    3-5 年
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': jobTenure === '5-10 年' }"
                    @click="selectedJobTenure('5-10 年')"
                  >
                    5-10 年
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{ 'bg-neutral-200': jobTenure === '10 年以上' }"
                    @click="selectedJobTenure('10 年以上')"
                  >
                    10 年以上
                  </li>
                </ul>
              </div>
            </div>
            <!-- 月收入區間 -->
            <div>
              <p class="mb-2">月收入區間</p>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 px-2 text-body-sm md:gap-x-6"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="3 萬以下"
                    v-model="monthlyIncome"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>3 萬以下</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="3-5 萬"
                    v-model="monthlyIncome"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>3-5 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="5-8 萬"
                    v-model="monthlyIncome"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>5-8 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="8-12 萬"
                    v-model="monthlyIncome"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>8-12 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="12-20 萬"
                    v-model="monthlyIncome"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>12-20 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="20 萬以上"
                    v-model="monthlyIncome"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>20 萬以上</span>
                </label>
              </div>
            </div>
            <!-- 職業摘要 -->
            <textarea
              v-model="careerSummary"
              id="careerSummary"
              class="w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 py-4 focus:outline-none"
              rows="5"
              maxlength="300"
            >
            </textarea>
            <!-- 作品案例展示 -->
            <div class="relative">
              <input
                v-model="workCase"
                type="text"
                id="workCase"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-6 focus:outline-none"
              />
              <label
                for="workCase"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >作品案例展示</label
              >
            </div>
            <!-- 附件檔案 -->
            <div>
              <p class="mb-2">附件檔案</p>
              <button
                type="button"
                class="flex items-center rounded-2xl border border-neutral-200 bg-white p-3 transition duration-300 hover:bg-neutral-200 md:gap-1 md:px-5"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                >
                  <path
                    d="M9.167 13.333V6.542L7 8.708 5.834 7.5 10 3.333 14.167 7.5 13 8.708l-2.166-2.166v6.791zM5 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15v-2.5H5V15h10v-2.5h1.667V15q0 .687-.49 1.177-.489.49-1.177.49z"
                    fill="currentColor"
                  />
                </svg>
                上傳檔案
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
