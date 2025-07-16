<script setup>
const isLoggedIn = ref(false);

onMounted(async () => {
  await nextTick();
  // 取 sessionStorage isLoggedIn 值
  isLoggedIn.value = sessionStorage.getItem("isLoggedIn") === "true";
});
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-neutral-300 bg-white px-3 py-3.5 md:p-3"
  >
    <div class="mx-auto flex max-w-container items-center justify-between">
      <NuxtLink to="/"
        ><img src="/logo.svg" alt="網站logo" class="w-[92px] md:w-[124px]"
      /></NuxtLink>
      <nav class="hidden md:block">
        <ul class="flex gap-3">
          <li>
            <NuxtLink
              to="/plans"
              class="block px-6 py-2 transition duration-300 hover:text-primary"
              :class="$route.path === '/plans' ? 'text-primary' : ''"
              >服務方案</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="block px-6 py-2 transition duration-300 hover:text-primary"
              :class="$route.path === '/about' ? 'text-primary' : ''"
              >關於職旅</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block px-6 py-2 transition duration-300 hover:text-primary"
              :class="$route.path === '/contact' ? 'text-primary' : ''"
              >聯絡我們</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div class="flex gap-3">
        <!-- 已登入狀態 -->
        <NuxtLink
          v-if="isLoggedIn"
          to="/my-account"
          class="group flex items-center gap-2"
        >
          <img
            src="/public/images/member/avatar.webp"
            alt="個人頭像"
            class="size-[44px] rounded-full border border-neutral-300"
          />
          <span
            class="!font-medium transition duration-300 group-hover:text-primary"
            >Mokumaru
          </span>
        </NuxtLink>
        <!-- 未登入狀態 -->
        <AtomButton
          v-else
          text="登入/註冊"
          isOutlined
          class="px-4 py-2 md:px-6"
        />
        <!-- 手機版選單開關 -->
        <button type="button" class="block p-2.5 md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18v-1.5h18V18zm0-5.25v-1.5h18v1.5zM3 7.5V6h18v1.5z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
