<script setup>
import { NuxtLink } from "#components";

const props = defineProps({
  /**
   * 按鈕尺寸
   * @type {'md' | 'lg'}
   */
  size: {
    type: String,
    default: "md",
  },
  /**
   * 是否為 outline 版本
   * @type {Boolean}
   */
  isOutlined: {
    type: Boolean,
    default: false,
  },
  /**
   * 按鈕文字
   * @type {String}
   */
  text: {
    type: String,
    default: "透過 text prop 來傳入文字",
  },
  /**
   * 是否有 icon
   * @type {Boolean}
   */
  hasIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * 連結
   * @type {String}
   */
  to: {
    type: String,
    default: "#",
  },
  target: {
    type: String,
    default: "_self",
  },
});
const { size, isOutlined, text, hasIcon, to, target } = toRefs(props);

/**
 * 動態產生按鈕 class
 */
const btnClass = computed(() => {
  let paddingClass, colorClass, textClass;

  if (size.value === "md") {
    paddingClass = hasIcon.value ? "py-3 pl-5 pr-3" : "p-3 md:px-5";
    colorClass = isOutlined.value
      ? "border border-neutral-300 hover:bg-neutral-200"
      : "bg-neutral text-white hover:bg-secondary hover:text-neutral";
  } else {
    // size = lg
    paddingClass = hasIcon.value
      ? "py-2 pl-3 pr-2 md:py-3 md:pl-5 md:pr-3"
      : "py-2 px-5 md:py-3 md:px-5";
    colorClass = isOutlined.value
      ? "border border-neutral-300 hover:bg-neutral-200"
      : "bg-secondary hover:bg-primary text-neutral hover:text-white";
    textClass = "md:text-t2 text-t2-sm";
  }
  return [paddingClass, colorClass, textClass];
});

// icon 大小處理
const iconSizeClass = computed(() => {
  return size.value === "lg" ? "size-7" : "size-5";
});

// 判斷是否為連結
const isLink = computed(() => !!to.value && to.value !== "#");
const component = computed(() => (isLink.value ? NuxtLink : "button"));
</script>

<template>
  <component
    :is="component"
    v-bind="isLink ? { to, target } : { type: 'button' }"
    class="flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl transition md:rounded-2xl"
    :class="btnClass"
  >
    {{ text }}
    <svg
      v-if="hasIcon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="iconSizeClass"
    >
      <path
        d="m8.667 5 5 5-5 5L7.5 13.833 11.333 10 7.5 6.167z"
        fill="currentColor"
      />
    </svg>
  </component>
</template>
