<script setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

useSeoMeta({
  title: "聯絡我們 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "聯絡我們 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

// 必填欄位的驗證規則
const schema = yup.object({
  // 基本資料相關欄位的驗證規則
  name: yup
    .string()
    .required("請填寫姓名")
    .min(2, "姓名最少兩個字")
    .max(10, "姓名最多十個字")
    .typeError("姓名必須是字串"),
  email: yup.string().required("請填寫信箱").email("請填寫正確的信箱格式"),
  phone: yup
    .string()
    .required("請填寫聯絡電話")
    .matches(/^\d+$/, "電話只能輸入數字")
    .matches(/^09\d{8}$/, "請輸入正確的手機號碼格式 (09 開頭，共 10 碼)"),
  careerStatus: yup.string().required("請選擇目前職業/工作身分"),
  // 諮詢需求相關欄位的驗證規則
  consultTopics: yup
    .array()
    .min(1, "請選取至少一個諮詢主題")
    .required("請選取至少一個諮詢主題"),
  wantedProfession: yup.string().required("請選擇期望諮詢的專家"),
  currentChallenge: yup.string().required("請告訴我們您目前面臨的主要挑戰"),
  yourGoal: yup.string().required("請告訴我們您期望達成的目標"),
});

// 使用 vee-validate 套件初始化表單，綁定 schema 與初始值
const { handleSubmit, errors, validate } = useForm({
  validationSchema: schema,
  initialValues: {
    consultTopics: [],
    wantedProfession: "",
    currentChallenge: "",
    yourGoal: "",
  },
});

// 送出時的處理：驗證、捲動到最上方有錯誤的欄位
const onSubmit = handleSubmit(async (values, { errors }) => {
  // 通過驗證才會進來這裡
  // ...送出資料
});

// 滾動到第一個有錯誤的欄位，搭配「平滑捲動」效果，讓使用者知道要修正哪一欄
const scrollToFirstError = async () => {
  await validate(); // 執行驗證
  const errorKeys = Object.keys(errors.value);
  if (errorKeys.length > 0) {
    // 找到第一個有錯的欄位
    const firstErrorField = document.getElementById(errorKeys[0]);
    if (firstErrorField) {
      // 捲動到該欄位並 focus
      firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      firstErrorField.focus?.();
    }
  }
};

// ---- 基本資料相關欄位、變數、方法 ----
const {
  value: nameField,
  errorMessage: nameError,
  handleBlur: nameBlur,
} = useField("name");
const {
  value: emailField,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField("email");
const {
  value: phoneField,
  errorMessage: phoneError,
  handleBlur: phoneBlur,
} = useField("phone");
const { value: careerStatusField, errorMessage: careerStatusError } =
  useField("careerStatus");

// 控制「目前職業/工作身分」下拉選單顯示/隱藏
const showCareerStatusDropdown = ref(false);

// 點選某個職業選項後，寫回值並收起下拉
function selectedCareerStatus(status) {
  careerStatusField.value = status;
  showCareerStatusDropdown.value = false;
}

// ---- 諮詢需求相關欄位 ----
const { value: consultTopics, errorMessage: consultTopicsError } =
  useField("consultTopics");
// 諮詢主題的選項列表，UI 用
const topics = [
  "職涯探索與方向",
  "接案與技能變現",
  "品牌與內容經營",
  "遠端工作與數位游牧",
  "收入與時間管理",
  "其他（請填寫下題）",
];

const { value: wantedProfessionField, errorMessage: wantedProfessionError } =
  useField("wantedProfession");
const {
  value: currentChallengeField,
  errorMessage: currentChallengeError,
  handleBlur: currentChallengeBlur,
} = useField("currentChallenge");
const {
  value: yourGoalField,
  errorMessage: yourGoalError,
  handleBlur: yourGoalBlur,
} = useField("yourGoal");

// 控制「期望諮詢的專家」下拉選單顯示/隱藏
const showWantedProfessionDropdown = ref(false);

// 選擇諮詢專家後寫值＋收起下拉
function selectedWantedProfession(pro) {
  wantedProfessionField.value = pro;
  showWantedProfessionDropdown.value = false;
}

// ---- 聯絡偏好相關欄位 ----
const contactMethod = ref("信箱");
const contactTime = ref([]);
const contactDate = ref("");
const howDidYouKnowUs = ref([]);
const message = ref("");
const agreeChecks = ref([]);

const MAX_KNOW_US = 3; // 如何得知我們，最多可勾選數

// 當「如何得知我們」超過上限時，自動移除最後一個選項，避免超標
function handleKnowUsChange() {
  if (howDidYouKnowUs.value.length > MAX_KNOW_US) {
    howDidYouKnowUs.value.pop();
  }
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
      <main
        class="relative rounded-2xl bg-white p-6 shadow-shadow md:rounded-3xl md:p-12"
      >
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
            class="top-[100px] flex flex-1 flex-row justify-between gap-2 md:sticky md:max-w-[300px] md:flex-col md:gap-3 md:self-start"
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
            <div>
              <div class="relative">
                <input
                  v-model="nameField"
                  type="text"
                  id="name"
                  placeholder=" "
                  class="peer block w-full rounded-lg border bg-white px-3 pb-2.5 pt-[26px] transition focus:outline-none"
                  :class="
                    nameError
                      ? 'focus:shadow-focus-error border-danger'
                      : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                  "
                  @blur="nameBlur"
                  :aria-invalid="!!nameError"
                  :aria-describedby="nameError ? 'name-error' : undefined"
                />
                <label
                  for="name"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >姓名</label
                >
              </div>
              <!-- 錯誤訊息 -->
              <p
                v-if="nameError"
                id="name-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ nameError }}
              </p>
            </div>
            <!-- 信箱 -->
            <div>
              <div class="relative">
                <input
                  v-model="emailField"
                  type="email"
                  id="email"
                  placeholder=" "
                  class="peer block w-full rounded-lg border bg-white px-3 pb-2.5 pt-[26px] transition focus:outline-none"
                  :class="
                    emailError
                      ? 'focus:shadow-focus-error border-danger'
                      : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                  "
                  @blur="emailBlur"
                  :aria-invalid="!!emailError"
                  :aria-describedby="emailError ? 'email-error' : undefined"
                />
                <label
                  for="email"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >信箱</label
                >
              </div>
              <!-- 一般訊息 or 錯誤訊息 -->
              <p
                id="email-error"
                class="px-2"
                :class="
                  emailError
                    ? 'mt-1 flex items-center gap-1 bg-danger-100 text-body-xs text-danger'
                    : 'text-body-sm text-neutral-600'
                "
              >
                <img
                  v-if="emailError"
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{
                  emailError
                    ? emailError
                    : "盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信"
                }}
              </p>
            </div>
            <!-- 聯絡電話 -->
            <div>
              <div class="relative">
                <input
                  v-model="phoneField"
                  type="tel"
                  id="phone"
                  placeholder=" "
                  class="peer block w-full rounded-lg border bg-white px-3 pb-2.5 pt-[26px] transition focus:outline-none"
                  :class="
                    phoneError
                      ? 'focus:shadow-focus-error border-danger'
                      : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                  "
                  @blur="phoneBlur"
                  :aria-invalid="!!phoneError"
                  :aria-describedby="phoneError ? 'phone-error' : undefined"
                />
                <label
                  for="phone"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >聯絡電話</label
                >
              </div>
              <!-- 一般訊息 or 錯誤訊息 -->
              <p
                id="phone-error"
                class="px-2"
                :class="
                  phoneError
                    ? 'mt-1 flex items-center gap-1 bg-danger-100 text-body-xs text-danger'
                    : 'text-body-sm text-neutral-600'
                "
              >
                <img
                  v-if="phoneError"
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{
                  phoneError
                    ? phoneError
                    : "我們不會以電話主動聯繫您，告知您要至ATM操作轉帳"
                }}
              </p>
            </div>
            <!-- 目前職業/工作身分 -->
            <div class="relative" id="careerStatus">
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-4 text-body-md"
                :class="
                  careerStatusError ? 'border-danger' : 'border-neutral-300'
                "
                @click="showCareerStatusDropdown = !showCareerStatusDropdown"
              >
                {{ careerStatusField || "目前職業/工作身分" }}
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
                class="absolute right-0 top-16 z-30 w-full rounded-xl bg-white py-2 shadow-shadow"
              >
                <ul>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatusField === '全職上班族',
                    }"
                    @click="selectedCareerStatus('全職上班族')"
                  >
                    全職上班族
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatusField === '兼職工作者',
                    }"
                    @click="selectedCareerStatus('兼職工作者')"
                  >
                    兼職工作者
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200':
                        careerStatusField === '自由工作者/接案者',
                    }"
                    @click="selectedCareerStatus('自由工作者/接案者')"
                  >
                    自由工作者/接案者
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatusField === '數位遊牧者',
                    }"
                    @click="selectedCareerStatus('數位遊牧者')"
                  >
                    數位遊牧者
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatusField === '創業者/企業主',
                    }"
                    @click="selectedCareerStatus('創業者/企業主')"
                  >
                    創業者/企業主
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatusField === '待業中',
                    }"
                    @click="selectedCareerStatus('待業中')"
                  >
                    待業中
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': careerStatusField === '其他',
                    }"
                    @click="selectedCareerStatus('其他')"
                  >
                    其他
                  </li>
                </ul>
              </div>
              <!-- 錯誤訊息 -->
              <p
                v-if="careerStatusError"
                id="careerStatus-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ careerStatusError }}
              </p>
            </div>
          </div>
        </section>
        <!-- 諮詢需求 -->
        <section
          class="mb-6 flex flex-col gap-4 border-b border-neutral-300 pb-6 md:mb-12 md:flex-row md:gap-6 md:pb-12"
        >
          <aside
            class="top-[100px] flex flex-1 flex-row justify-between gap-2 md:sticky md:max-w-[300px] md:flex-col md:gap-3 md:self-start"
          >
            <h2 class="text-t2-sm !font-medium md:text-t2">諮詢需求</h2>
            <p class="flex items-center gap-1 text-neutral-600">
              欄位皆為<span
                class="whitespace-nowrap rounded-xl bg-danger px-2 py-1 text-body-sm !font-medium leading-[1.2] text-white"
                >必填</span
              >
            </p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 諮詢主題 -->
            <div id="consultTopics">
              <p class="mb-2">諮詢主題</p>
              <div
                class="mb-2 flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label
                  v-for="topic in topics"
                  :key="topic"
                  class="flex cursor-pointer items-center gap-1"
                >
                  <input
                    type="checkbox"
                    :value="topic"
                    v-model="consultTopics"
                    class="custom-checkbox"
                  />
                  <span>{{ topic }}</span>
                </label>
              </div>
              <!-- 一般訊息 or 錯誤訊息 -->
              <p
                id="consultTopics-error"
                class="px-2"
                :class="
                  consultTopicsError
                    ? 'mt-1 flex items-center gap-1 bg-danger-100 text-body-xs text-danger'
                    : 'text-body-sm text-neutral-600'
                "
              >
                <img
                  v-if="consultTopicsError"
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{
                  consultTopicsError
                    ? consultTopicsError
                    : "可複選，讓我們更了解你的狀況，安排最適合的顧問與建議。"
                }}
              </p>
            </div>
            <!-- 期望諮詢的專家 -->
            <div class="relative" id="wantedProfession">
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-4 text-body-md"
                :class="
                  wantedProfessionError ? 'border-danger' : 'border-neutral-300'
                "
                @click="
                  showWantedProfessionDropdown = !showWantedProfessionDropdown
                "
                :aria-describedby="
                  wantedProfessionError ? 'wantedProfession-error' : undefined
                "
                :aria-invalid="!!wantedProfessionError"
              >
                {{ wantedProfessionField || "期望諮詢的專家" }}
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
                v-if="showWantedProfessionDropdown"
                class="absolute right-0 top-16 z-30 w-full rounded-xl bg-white py-2 shadow-shadow"
              >
                <ul>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': wantedProfessionField === '專家1',
                    }"
                    @click="selectedWantedProfession('專家1')"
                  >
                    專家1
                  </li>
                  <li
                    class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                    :class="{
                      'bg-neutral-200': wantedProfessionField === '專家2',
                    }"
                    @click="selectedWantedProfession('專家2')"
                  >
                    專家2
                  </li>
                </ul>
              </div>
              <!-- 錯誤訊息 -->
              <p
                v-if="wantedProfessionError"
                id="careerStatus-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ wantedProfessionError }}
              </p>
            </div>
            <!-- 您目前面臨的主要挑戰 -->
            <div class="relative" id="currentChallenge">
              <textarea
                v-model="currentChallengeField"
                class="peer w-full resize-none rounded-lg border bg-white px-3 pb-2.5 pt-[26px] transition focus:outline-none"
                :class="
                  currentChallengeError
                    ? 'focus:shadow-focus-error border-danger'
                    : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                "
                placeholder=" "
                rows="5"
                maxlength="300"
                :aria-invalid="!!currentChallengeError"
                :aria-describedby="
                  currentChallengeError ? 'currentChallenge-error' : undefined
                "
                @blur="currentChallengeBlur"
              ></textarea>
              <label
                for="currentChallenge"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >您目前面臨的主要挑戰
              </label>
              <!-- 錯誤訊息 -->
              <p
                v-if="currentChallengeError"
                id="currentChallenge-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ currentChallengeError }}
              </p>
            </div>
            <!-- 期望達成的目標 -->
            <div class="relative" id="yourGoal">
              <textarea
                v-model="yourGoalField"
                class="peer w-full resize-none rounded-lg border bg-white px-3 pb-2.5 pt-[26px] transition focus:outline-none"
                :class="
                  yourGoalError
                    ? 'focus:shadow-focus-error border-danger'
                    : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                "
                placeholder=" "
                rows="5"
                maxlength="300"
                :aria-invalid="!!yourGoalError"
                :aria-describedby="yourGoalError ? 'yourGoal-error' : undefined"
                @blur="yourGoalBlur"
              ></textarea>
              <label
                for="yourGoal"
                class="pointer-events-none absolute left-3 top-1 z-10 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >期望達成的目標
              </label>
              <!-- 錯誤訊息 -->
              <p
                v-if="yourGoalError"
                id="yourGoal-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ yourGoalError }}
              </p>
            </div>
          </div>
        </section>
        <!-- 聯絡偏好 -->
        <section class="mb-6 flex flex-col gap-4 md:mb-12 md:flex-row md:gap-6">
          <aside
            class="top-[100px] flex flex-1 flex-row justify-between gap-2 md:sticky md:max-w-[300px] md:flex-col md:gap-3 md:self-start"
          >
            <h2 class="text-t2-sm !font-medium md:text-t2">聯絡偏好</h2>
            <p class="text-neutral-600">欄位皆為選填</p>
          </aside>
          <div class="flex-1 space-y-4 md:space-y-6">
            <!-- 偏好聯絡方式 -->
            <div>
              <p class="mb-2">偏好聯絡方式</p>
              <div class="flex gap-4 px-2 text-body-sm md:gap-6">
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="信箱"
                    v-model="contactMethod"
                    class="size-5 accent-primary"
                  />
                  <span>信箱</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="電話"
                    v-model="contactMethod"
                    class="size-5 accent-primary"
                  />
                  <span>電話</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="LINE"
                    v-model="contactMethod"
                    class="size-5 accent-primary"
                  />
                  <span>LINE</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Discord"
                    v-model="contactMethod"
                    class="size-5 accent-primary"
                  />
                  <span>Discord</span>
                </label>
              </div>
            </div>
            <!-- 偏好聯絡時段 -->
            <div>
              <p class="mb-2">偏好聯絡時段</p>
              <div
                class="mb-2 flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="contactTime"
                    value="平日上午(9:00-12:00)"
                    v-model="contactTime"
                    class="custom-checkbox"
                  />
                  <span>平日上午(9:00-12:00)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="contactTime"
                    value="平日下午(13:00-17:00)"
                    v-model="contactTime"
                    class="custom-checkbox"
                  />
                  <span>平日下午(13:00-17:00)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="contactTime"
                    value="平日晚上(18:00-21:00)"
                    v-model="contactTime"
                    class="custom-checkbox"
                  />
                  <span>平日晚上(18:00-21:00)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="contactTime"
                    value="週末上午(9:00-12:00)"
                    v-model="contactTime"
                    class="custom-checkbox"
                  />
                  <span>週末上午(9:00-12:00)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="contactTime"
                    value="週末下午(13:00-17:00)"
                    v-model="contactTime"
                    class="custom-checkbox"
                  />
                  <span>週末下午(13:00-17:00)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    name="contactTime"
                    value="週末晚上(18:00-21:00)"
                    v-model="contactTime"
                    class="custom-checkbox"
                  />
                  <span>週末晚上(18:00-21:00)</span>
                </label>
              </div>
              <p class="px-2 text-body-sm text-neutral-600">
                建議您可以勾選 2 個時段以上
              </p>
            </div>
            <!-- 預約諮詢時間 -->
            <div class="relative">
              <input
                v-model="contactDate"
                type="date"
                id="contactDate"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:shadow-focus focus:outline-none"
              />
              <label
                for="contactDate"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >預約諮詢時間</label
              >
            </div>
            <!-- 如何得知我們 -->
            <div>
              <p class="mb-2">如何得知我們</p>
              <div
                class="mb-2 flex flex-wrap gap-x-4 gap-y-2 text-body-sm md:gap-x-6 md:px-2"
              >
                <label
                  v-for="item in [
                    'Google 搜尋',
                    'Instagram',
                    'Facebook',
                    'Threads',
                    'YouTube',
                    'Podcast / 節目推薦',
                    '朋友或同事推薦',
                    '曾參加職旅活動 / 工作坊',
                    '職涯顧問介紹',
                    '其他（請填寫下題）',
                  ]"
                  :key="item"
                  class="flex cursor-pointer items-center gap-1"
                >
                  <input
                    type="checkbox"
                    :value="item"
                    v-model="howDidYouKnowUs"
                    class="custom-checkbox"
                    @change="handleKnowUsChange()"
                  />
                  <span>{{ item }}</span>
                </label>
              </div>
              <p class="px-2 text-body-sm text-neutral-600">最多勾選 3 個</p>
            </div>
            <!-- 有什麼其他想告訴我們的事情嗎？ -->
            <div class="relative">
              <textarea
                v-model="message"
                id="message"
                class="peer w-full resize-none rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:shadow-focus focus:outline-none"
                placeholder=" "
                rows="5"
                maxlength="300"
              ></textarea>
              <label
                for="message"
                class="pointer-events-none absolute left-3 top-1 z-10 block w-[calc(100%-24px)] overflow-hidden text-ellipsis whitespace-nowrap text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-1 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >有什麼其他想告訴我們的事情嗎？（最多300字）
              </label>
            </div>
            <!-- 勾選同意 -->
            <div class="space-y-2 text-body-sm">
              <label class="flex cursor-pointer items-center gap-1">
                <input
                  type="checkbox"
                  name="agreeChecks"
                  value="我願意接收職旅最新資訊和專業內容"
                  v-model="agreeChecks"
                  class="custom-checkbox"
                />
                <span>我願意接收職旅最新資訊和專業內容</span>
              </label>
              <label class="flex cursor-pointer items-center gap-1">
                <input
                  type="checkbox"
                  name="agreeChecks"
                  value="我同意服務條款和隱私政策"
                  v-model="agreeChecks"
                  class="custom-checkbox"
                />
                <span class="flex gap-1">
                  我同意
                  <NuxtLink
                    to="/terms-and-conditions"
                    target="_blank"
                    class="text-primary underline"
                    >服務條款
                  </NuxtLink>
                  和
                  <NuxtLink
                    to="/privacy-policy"
                    target="_blank"
                    class="text-primary underline"
                    >隱私政策
                  </NuxtLink>
                </span>
              </label>
            </div>
          </div>
        </section>
        <!-- 按鈕 -->
        <div
          class="flex flex-col-reverse justify-center gap-4 md:flex-row md:gap-6"
        >
          <AtomButton
            text="重新填寫"
            hasIcon
            isOutlined
            class="w-full md:w-auto"
          />
          <AtomButton
            text="確認送出"
            hasIcon
            class="w-full md:w-auto"
            @click="scrollToFirstError"
          />
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/css/custom-checkbox.css";
</style>
