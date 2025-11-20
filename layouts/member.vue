<script setup>
// 使用共享登入狀態，讓所有會員頁面進場時都保持「已登入」的模擬狀態。
const { updateLoginState } = useSessionAuth();

onMounted(() => {
  // 會員頁面才能被看見，因此直接同步為 true 方便切版展示。
  updateLoginState(true);
});
</script>

<template>
  <slot />
</template>
