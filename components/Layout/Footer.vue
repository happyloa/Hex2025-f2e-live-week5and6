<template>
  <footer class="gradient-border-top | bg-neutral-100 px-3 py-6 md:py-12">
    <div
      class="mx-auto flex max-w-container flex-col items-center justify-between gap-2 lg:flex-row"
    >
      <nav>
        <ul class="flex flex-wrap justify-center gap-y-2 whitespace-nowrap">
          <li>
            <NuxtLink
              to="/plans"
              class="block rounded-2xl px-4 py-2 transition duration-300 hover:bg-neutral-200 md:px-6"
              :class="$route.path === '/plans' ? 'bg-neutral-200' : ''"
              >服務方案</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="block rounded-2xl px-4 py-2 transition duration-300 hover:bg-neutral-200 md:px-6"
              :class="$route.path === '/about' ? 'bg-neutral-200' : ''"
              >關於職旅</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block rounded-2xl px-4 py-2 transition duration-300 hover:bg-neutral-200 md:px-6"
              :class="$route.path === '/contact' ? 'bg-neutral-200' : ''"
              >聯絡我們</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/privacy-policy"
              class="block rounded-2xl px-4 py-2 transition duration-300 hover:bg-neutral-200 md:px-6"
              :class="$route.path === '/privacy-policy' ? 'bg-neutral-200' : ''"
              >隱私權政策</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/terms-and-conditions"
              class="block rounded-2xl px-4 py-2 transition duration-300 hover:bg-neutral-200 md:px-6"
              :class="
                $route.path === '/terms-and-conditions' ? 'bg-neutral-200' : ''
              "
              >用戶條款</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <p class="text-center text-body-sm text-neutral-600">
        Copyright © 2025 職旅 workway. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* 漸層上邊框設定 */
.gradient-border-top {
  position: relative;
}

.gradient-border-top::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, #d1d9e1, transparent);
  pointer-events: none;
  z-index: 10;
}
</style>
