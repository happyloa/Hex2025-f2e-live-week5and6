<script setup>
// 透過共享的 composable 在入口就初始化登入狀態，避免各頁面重複寫入 sessionStorage。
const { initializeSessionFlag } = useSessionAuth();

onMounted(() => {
  initializeSessionFlag();
});
</script>

<template>
  <div
    class="bg-white text-body-md-sm text-neutral selection:bg-secondary-400 selection:text-white md:text-body-md"
  >
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <LayoutHeader />
      <NuxtPage />
      <LayoutFooter />
    </NuxtLayout>
  </div>
  <img
    src="/images/member/login.webp"
    alt="登入 Modal 背景預先載入"
    class="hidden"
  />
  <img
    src="/images/member/register.webp"
    alt="註冊 Modal 背景預先載入"
    class="hidden"
  />
  <img src="/icons/error-icon.svg" alt="預先載入錯誤 icon" class="hidden" />
</template>
