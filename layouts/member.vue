<script setup>
// 進到使用這個 layout 的頁面時，自動把 sessionStorage.isLoggedIn 設成 'true'
// 這樣做是為了模擬已登入狀態，因為只有登入以後才可能進到會員專屬頁面（個人資料、預約紀錄、職旅計畫）
onMounted(() => {
  sessionStorage.setItem("isLoggedIn", "true");
});
</script>

<template>
  <slot />
</template>
