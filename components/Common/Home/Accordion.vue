<script setup>
const props = defineProps({
  /**
   * 標題文字
   * @type {String}
   */
  title: {
    type: String,
    default: "標題文字",
  },
  /**
   * 內容文字
   * @type {String}
   */
  content: {
    type: String,
    default: "內容文字",
  },
  /**
   * 是否開啟
   * @type {Boolean}
   */
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <details
    :open="isOpen"
    class="rounded-xl border border-neutral-300 bg-white p-6 shadow-shadow"
  >
    <!-- summary 用來觸發收合 -->
    <summary
      class="flex cursor-pointer list-none items-center justify-between gap-2"
      :class="isOpen ? 'border-b border-dashed pb-4' : 'p-0'"
      @click.prevent="emit('toggle')"
    >
      <!-- 標題 -->
      <h3
        class="flex gap-2 text-body-lg-sm !font-bold text-neutral-600 md:text-body-lg"
      >
        <span class="inter | md:text-t text-t-sm">Q.</span>{{ title }}
      </h3>

      <!-- 箭頭 -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transition"
        :class="isOpen ? '-rotate-90 text-primary' : 'text-neutral'"
      >
        <path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6z" fill="currentColor" />
      </svg>
    </summary>

    <!-- 內容區 -->
    <p v-show="isOpen" class="flex gap-2 pt-4 text-body-sm">
      <span class="inter | md:text-t text-t-sm text-primary">A.</span>
      {{ content }}
    </p>
  </details>
</template>
