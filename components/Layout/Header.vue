<script setup lang="ts">
import type { NavigationItem } from "~/constants/navigation";
import { primaryNavigation } from "~/constants/navigation";

// Nuxt Router 與 Route 便於導向與檢查目前路徑。
const router = useRouter();
const route = useRoute();

// 集中管理登入狀態，避免各元件各自讀寫 sessionStorage。
const { isLoggedIn, initializeSessionFlag, updateLoginState } = useSessionAuth();

// 控制手機版導覽選單開關
const showMobileNav = ref(false);

// Modal 控制（登入/註冊彈窗開關）
const isLoginModalOpen = ref(false);
const isRegisterModalOpen = ref(false);
function closeLoginModal() {
  isLoginModalOpen.value = false;
}
function closeRegisterModal() {
  isRegisterModalOpen.value = false;
}

/**
 * 根據 NavigationItem 計算是否為當前路徑，用於桌面與手機版導覽的 active 樣式。
 */
const isActiveNav = (item: NavigationItem) => {
  const activeTarget = item.activeMatch ?? item.path;
  return item.exact ? route.path === activeTarget : route.path.includes(activeTarget);
};

// 登入或註冊成功後，寫回登入狀態並導向會員中心
function handleLoginSuccess() {
  updateLoginState(true);
  router.push("/my-account");
}
function handleRegisterSuccess() {
  updateLoginState(true);
  router.push("/my-account");
}

// 切換顯示註冊/登入 Modal
function handleShowRegister() {
  isLoginModalOpen.value = false;
  isRegisterModalOpen.value = true;
}
function handleShowLogin() {
  isRegisterModalOpen.value = false;
  isLoginModalOpen.value = true;
}

onMounted(async () => {
  await nextTick();
  // 初始化與同步 sessionStorage 的登入狀態，避免刷新後 UI 與狀態不一致。
  initializeSessionFlag();
});
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-neutral-300 bg-white px-3 py-3.5 md:p-3"
  >
    <div class="mx-auto flex max-w-container items-center justify-between">
      <NuxtLink to="/"
        ><img src="/logo.svg" alt="網站logo" class="w-[92px] md:w-[124px]"
      /></NuxtLink>
      <nav class="hidden md:block">
        <ul class="flex gap-3">
          <li v-for="item in primaryNavigation" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="block px-6 py-2 transition duration-300 hover:text-primary"
              :class="isActiveNav(item) ? 'text-primary' : ''"
              >{{ item.label }}</NuxtLink
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
          @click="isLoginModalOpen = true"
        />
        <!-- 手機版選單開關 -->
        <button
          type="button"
          class="block p-2.5 md:hidden"
          aria-label="開啟手機選單"
          @click="showMobileNav = true"
        >
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

  <!-- 手機版 Modal 導覽選單 -->
  <LayoutMobileNav v-model:show="showMobileNav">
    <ul class="space-y-6 text-center">
      <li v-for="item in primaryNavigation" :key="item.path">
        <NuxtLink
          :to="item.path"
          class="block p-4"
          :class="isActiveNav(item) ? 'bg-neutral-200' : ''"
          >{{ item.label }}</NuxtLink
        >
      </li>
    </ul>
    <AtomButton
      v-if="!isLoggedIn"
      text="登入/註冊"
      size="lg"
      class="mt-auto w-full"
      @click="
        isLoginModalOpen = true;
        showMobileNav = false;
      "
    />
  </LayoutMobileNav>

  <!-- 登入 Modal -->
  <LayoutMemberLoginModal
    :open="isLoginModalOpen"
    :onClose="closeLoginModal"
    @login-success="handleLoginSuccess"
    @show-register="handleShowRegister"
  />
  <!-- 註冊 Modal -->
  <LayoutMemberRegisterModal
    :open="isRegisterModalOpen"
    :onClose="closeRegisterModal"
    @register-success="handleRegisterSuccess"
    @show-login="handleShowLogin"
  />
</template>
