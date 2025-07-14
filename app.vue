<script setup>
onMounted(() => {
  // 檢查 sessionStorage 裡是否有 isLoggedIn
  if (sessionStorage.getItem("isLoggedIn") === null) {
    // 沒有就初始化為 'false'
    sessionStorage.setItem("isLoggedIn", "false");
  }
});
</script>

<template>
  <div
    class="text-body-md text-neutral selection:bg-secondary-400 selection:text-white"
  >
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>
