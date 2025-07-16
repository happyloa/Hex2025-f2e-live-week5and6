<script setup lang="ts">
defineProps({
  /**
   * 是否顯示
   * @type {Boolean}
   */
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (e: "update:show", value: boolean): void;
}>();

const close = () => {
  emit("update:show", false);
};

/* ---------- 路由變動就自動關 ---------- */
const route = useRoute();
watch(route, () => close());
</script>

<template>
  <Teleport to="body">
    <!-- Transition 做淡入淡出 -->
    <Transition name="fade">
      <nav
        v-if="show"
        class="fixed inset-0 z-50 flex flex-col justify-between gap-6 bg-white px-6 pb-6 pt-[84px] md:hidden"
      >
        <button
          class="absolute right-6 top-6 p-2.5"
          aria-label="關閉導覽選單"
          @click="close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6z"
              fill="currentColor"
            />
          </svg>
        </button>

        <slot />
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
