<script setup>
useSeoMeta({
  title: "職旅計畫 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "職旅計畫 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

definePageMeta({
  layout: "member",
});

// 職旅計劃概況相關欄位、變數、方法
const careerStatus = ref("全職上班族");
const industry = ref("");
const jobTenure = ref("");
const monthlyIncome = ref("3 萬以下");
const careerSummary = ref("");
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

// 職涯規劃相關欄位
const shortTermGoal = ref("");
const mediumAndLongTermGoal = ref("");
const idealWorkMode = ref("固定辦公室工作");
const desiredIncome = ref("");
const encounteredCareerChallenge = ref([]);
const desiredAssistanceAndResources = ref([]);
const interestedServices = ref([]);

// 專業技能區塊相關欄位
const coreProfessions = ref([]);
const backgroundAndStrengths = ref("");
const professionalSkills = ref("");
const languageSkills = ref("");
const certifications = ref("");

// 教育背景相關欄位
const educationBackground = ref("");
const professionalTrainings = ref("");
</script>

<template>
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container-md">
      <CommonMemberNav />
      <div class="rounded-3xl bg-white p-6 shadow-shadow md:p-12">
        <!-- 職旅計劃概況 -->
        <section
          class="mb-6 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:mb-12 md:flex-row md:gap-6 md:pb-12"
        >
          <aside
            class="top-[100px] flex max-w-[300px] flex-1 flex-row justify-between gap-2 md:sticky md:flex-col md:gap-3 md:self-start"
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
                    class="size-5 accent-primary"
                  />
                  <span>全職上班族</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="兼職工作者"
                    v-model="careerStatus"
                    class="size-5 accent-primary"
                  />
                  <span>兼職工作者</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="自由工作者/接案者"
                    v-model="careerStatus"
                    class="size-5 accent-primary"
                  />
                  <span>自由工作者/接案者</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="數位遊牧者"
                    v-model="careerStatus"
                    class="size-5 accent-primary"
                  />
                  <span>數位遊牧者</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="創業者/企業主"
                    v-model="careerStatus"
                    class="size-5 accent-primary"
                  />
                  <span>創業者/企業主</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="待業中"
                    v-model="careerStatus"
                    class="size-5 accent-primary"
                  />
                  <span>待業中</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="careerStatus"
                    value="其他"
                    v-model="careerStatus"
                    class="size-5 accent-primary"
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
                class="absolute right-0 top-16 z-30 w-full rounded-xl bg-white py-2 shadow-shadow"
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
                class="absolute right-0 top-16 z-30 w-full rounded-xl bg-white py-2 shadow-shadow"
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
                    class="size-5 accent-primary"
                  />
                  <span>3 萬以下</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="3-5 萬"
                    v-model="monthlyIncome"
                    class="size-5 accent-primary"
                  />
                  <span>3-5 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="5-8 萬"
                    v-model="monthlyIncome"
                    class="size-5 accent-primary"
                  />
                  <span>5-8 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="8-12 萬"
                    v-model="monthlyIncome"
                    class="size-5 accent-primary"
                  />
                  <span>8-12 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="12-20 萬"
                    v-model="monthlyIncome"
                    class="size-5 accent-primary"
                  />
                  <span>12-20 萬</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value="20 萬以上"
                    v-model="monthlyIncome"
                    class="size-5 accent-primary"
                  />
                  <span>20 萬以上</span>
                </label>
              </div>
            </div>
            <!-- 職業摘要 -->
            <div class="relative">
              <textarea
                v-model="careerSummary"
                id="careerSummary"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="careerSummary"
                class="pointer-events-none absolute left-3 top-1 z-10 block w-[calc(100%-24px)] overflow-hidden text-ellipsis whitespace-nowrap text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >職業摘要（簡短描述您的專業背景和核心競爭力最多 300 字）
              </label>
            </div>
            <!-- 作品案例展示 -->
            <div class="relative">
              <input
                v-model="workCase"
                type="text"
                id="workCase"
                placeholder=" "
                class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
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
        <!-- 職涯規劃 -->
        <section
          class="mb-6 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:mb-12 md:flex-row md:gap-6 md:pb-12"
        >
          <aside
            class="top-[100px] flex max-w-[300px] flex-1 flex-row justify-between gap-2 md:sticky md:flex-col md:gap-3 md:self-start"
          >
            <h2 class="text-t2-sm !font-medium md:text-t2">職涯規劃</h2>
            <p class="flex items-center gap-1 text-neutral-600">
              欄位皆為<span
                class="whitespace-nowrap rounded-xl bg-danger px-2 py-1 text-body-sm !font-medium leading-[1.2] text-white"
                >必填</span
              >
            </p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 1 年短期職涯目標 -->
            <div class="relative">
              <textarea
                v-model="shortTermGoal"
                id="shortTermGoal"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="shortTermGoal"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >1 年短期職涯目標（最多 300 字）
              </label>
            </div>
            <!-- 1-3 年中長期職涯願景 -->
            <div class="relative">
              <textarea
                v-model="mediumAndLongTermGoal"
                id="mediumAndLongTermGoal"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="mediumAndLongTermGoal"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >1-3 年中長期職涯願景（最多 300 字）
              </label>
            </div>
            <!-- 理想工作模式 -->
            <div>
              <p class="mb-2">理想工作模式</p>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 px-2 text-body-sm md:gap-x-6"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="idealWorkMode"
                    value="固定辦公室工作"
                    v-model="idealWorkMode"
                    class="size-5 accent-primary"
                  />
                  <span>固定辦公室工作</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="idealWorkMode"
                    value="混合式工作(辦公室+遠端)"
                    v-model="idealWorkMode"
                    class="size-5 accent-primary"
                  />
                  <span>混合式工作(辦公室+遠端)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="idealWorkMode"
                    value="完全遠端工作(固定地點)"
                    v-model="idealWorkMode"
                    class="size-5 accent-primary"
                  />
                  <span>完全遠端工作(固定地點)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="idealWorkMode"
                    value="數位遊牧(邊工作邊旅行)"
                    v-model="idealWorkMode"
                    class="size-5 accent-primary"
                  />
                  <span>數位遊牧(邊工作邊旅行)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="idealWorkMode"
                    value="其他(請說明)"
                    v-model="idealWorkMode"
                    class="size-5 accent-primary"
                  />
                  <span>其他(請說明)</span>
                </label>
              </div>
            </div>
            <!-- 目標薪資/收入 -->
            <div class="relative">
              <input
                v-model="desiredIncome"
                type="text"
                id="desiredIncome"
                placeholder=" "
                class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
              />
              <label
                for="desiredIncome"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >目標薪資/收入</label
              >
            </div>
            <!-- 目前面臨的職涯挑戰 -->
            <div>
              <p class="mb-2">目前面臨的職涯挑戰</p>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="方向不明確"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>方向不明確</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="技能需要提升"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>技能需要提升</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="收入不穩定"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>收入不穩定</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="客戶開發困難"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>客戶開發困難</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="時間管理問題"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>時間管理問題</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="工作生活失衡"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>工作生活失衡</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="缺乏人脈資源"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>缺乏人脈資源</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="encounteredCareerChallenge"
                    value="其他(請說明)"
                    v-model="encounteredCareerChallenge"
                    class="custom-checkbox"
                  />
                  <span>其他(請說明)</span>
                </label>
              </div>
            </div>
            <!-- 期望獲得的協助與資源 -->
            <div>
              <p class="mb-2">期望獲得的協助與資源</p>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="職涯方向指導"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>職涯方向指導</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="專業技能提升建議"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>專業技能提升建議</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="個人品牌建立"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>個人品牌建立</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="接案策略與定價"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>接案策略與定價</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="客戶開發方法"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>客戶開發方法</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="財務規劃"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>財務規劃</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="時間管理系統"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>時間管理系統</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="工作生活平衡"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>工作生活平衡</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="desiredAssistanceAndResources"
                    value="其他(請說明)"
                    v-model="desiredAssistanceAndResources"
                    class="custom-checkbox"
                  />
                  <span>其他(請說明)</span>
                </label>
              </div>
            </div>
            <!-- 感興趣的服務方案 -->
            <div>
              <p class="mb-2">感興趣的服務方案</p>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="interestedServices"
                    value="探索定位"
                    v-model="interestedServices"
                    class="custom-checkbox"
                  />
                  <span>探索定位</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="interestedServices"
                    value="客製化方案"
                    v-model="interestedServices"
                    class="custom-checkbox"
                  />
                  <span>客製化方案</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="interestedServices"
                    value="實戰指導"
                    v-model="interestedServices"
                    class="custom-checkbox"
                  />
                  <span>實戰指導</span>
                </label>
              </div>
            </div>
          </div>
        </section>
        <!-- 專業技能區塊 -->
        <section
          class="mb-6 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:mb-12 md:flex-row md:gap-6 md:pb-12"
        >
          <aside
            class="top-[100px] flex max-w-[300px] flex-1 flex-row justify-between gap-2 md:sticky md:flex-col md:gap-3 md:self-start"
          >
            <h2 class="text-t2-sm !font-medium md:text-t2">專業技能區塊</h2>
            <p class="text-neutral-600">欄位皆為選填</p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 核心專業領域 -->
            <div>
              <p class="mb-2">核心專業領域</p>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="設計/創意"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>設計/創意</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="科技/程式開發"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>科技/程式開發</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="行銷/公關"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>行銷/公關</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="內容創作/寫作"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>內容創作/寫作</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="顧問/諮詢"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>顧問/諮詢</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="商業/管理"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>商業/管理</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="財務/會計"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>財務/會計</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="教育/培訓"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>教育/培訓</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="法律/合規"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>法律/合規</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="coreProfessions"
                    value="健康/醫療"
                    v-model="coreProfessions"
                    class="custom-checkbox"
                  />
                  <span>健康/醫療</span>
                </label>
              </div>
            </div>
            <!-- 專業背景和核心競爭力 -->
            <div class="relative">
              <textarea
                v-model="backgroundAndStrengths"
                id="backgroundAndStrengths"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="backgroundAndStrengths"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >專業背景和核心競爭力（最多300字）
              </label>
            </div>
            <!-- 專業技能 -->
            <div class="relative">
              <textarea
                v-model="professionalSkills"
                id="professionalSkills"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="professionalSkills"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >專業技能（最多300字）
              </label>
            </div>
            <!-- 語文能力 -->
            <div class="relative">
              <textarea
                v-model="languageSkills"
                id="languageSkills"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="languageSkills"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >語文能力（最多300字）
              </label>
            </div>
            <!-- 資格證照 -->
            <div class="relative">
              <textarea
                v-model="certifications"
                id="certifications"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              >
              </textarea>
              <label
                for="certifications"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >資格證照（最多300字）
              </label>
            </div>
          </div>
        </section>
        <!-- 教育背景 -->
        <section class="mb-6 flex flex-col gap-4 md:mb-12 md:flex-row md:gap-6">
          <aside
            class="top-[100px] flex max-w-[300px] flex-1 flex-row justify-between gap-2 md:sticky md:flex-col md:gap-3 md:self-start"
          >
            <h2 class="text-t2-sm !font-medium md:text-t2">教育背景</h2>
            <p class="text-neutral-600">欄位皆為選填</p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 學歷背景 -->
            <div class="relative">
              <textarea
                v-model="educationBackground"
                id="educationBackground"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="500"
              >
              </textarea>
              <label
                for="educationBackground"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >學歷背景（最多500字）
              </label>
            </div>
            <!-- 專業培訓與工作坊 -->
            <div class="relative">
              <textarea
                v-model="professionalTrainings"
                id="professionalTrainings"
                class="focus:shadow-focus peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="500"
              >
              </textarea>
              <label
                for="professionalTrainings"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >專業培訓與工作坊（最多500字）
              </label>
            </div>
          </div>
        </section>
        <!-- 按鈕 -->
        <div
          class="flex flex-col-reverse justify-center gap-4 md:flex-row md:gap-6"
        >
          <AtomButton
            text="匯出 PDF"
            hasIcon
            isOutlined
            class="w-full md:w-auto"
          />
          <AtomButton text="儲存更新" hasIcon class="w-full md:w-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/css/custom-checkbox.css";
</style>
