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
</template>
