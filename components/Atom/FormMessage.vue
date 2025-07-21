<script setup>
/**
 * 表單訊息顯示元件
 * - 用於顯示錯誤或預設說明訊息
 * - 支援只有錯誤時才顯示，或預設狀態下顯示一般訊息，有錯時切換成錯誤訊息
 */

const props = defineProps({
  /**
   * 錯誤訊息內容
   * @type {String}
   */
  error: {
    type: String,
    default: "",
  },
  /**
   * 預設訊息內容
   * @type {String}
   * @description 有傳此值時，平常顯示預設訊息，有錯誤時切換為錯誤訊息
   */
  defaultMsg: {
    type: String,
    default: "",
  },
  /**
   * 元素 id（用於無障礙 label 關聯）
   * @type {String}
   */
  id: {
    type: String,
    default: "",
  },
  /**
   * 額外自訂 class
   * @type {String}
   */
  className: {
    type: String,
    default: "",
  },
});
const { error, defaultMsg, id, className } = toRefs(props);

/**
 * 是否顯示訊息元件
 * - 若 defaultMsg 有值則永遠顯示
 * - 若沒傳 defaultMsg 則只有 error 有值時顯示
 */
const isVisible = computed(() => {
  return defaultMsg.value ? true : !!error.value;
});

/**
 * 判斷目前是否為錯誤狀態
 */
const isError = computed(() => !!error.value);

/**
 * 訊息內容
 * - 有錯誤優先顯示錯誤訊息
 * - 沒有錯誤顯示預設訊息
 */
const message = computed(() => {
  return error.value || defaultMsg.value;
});

/**
 * 動態產生 class
 * - 錯誤時顯示紅色底與字體、icon，且有間距
 * - 沒錯誤時顯示預設 neutral 文字色
 */
const msgClass = computed(() => {
  if (isError.value) {
    return [
      "mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger",
      className.value,
    ];
  }
  return ["px-2 text-body-sm text-neutral-600", className.value];
});
</script>

<template>
  <!--
    表單訊息顯示元件
    - 支援單純錯誤顯示模式（只在有錯時出現）
    - 或預設訊息+錯誤切換模式
  -->
  <p v-if="isVisible" :id="id" :class="msgClass">
    <!-- 錯誤狀態才顯示 icon -->
    <img
      v-if="isError"
      src="/icons/error-icon.svg"
      alt="錯誤 icon"
      class="text-danger"
    />
    {{ message }}
  </p>
</template>
