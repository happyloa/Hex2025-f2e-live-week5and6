<script setup lang="ts">
import { memberNavigation } from "~/constants/navigation";

// 由共用設定帶入會員導覽，確保各頁面一致且易於維護。
const route = useRoute();

const isActiveMemberNav = (activeMatch: string, exact?: boolean) => {
  return exact ? route.path === activeMatch : route.path.includes(activeMatch);
};
</script>

<template>
  <nav class="mb-4 whitespace-nowrap md:mb-6">
    <ul class="flex justify-center gap-4 px-2 md:gap-6">
      <li v-for="item in memberNavigation" :key="item.path">
        <NuxtLink
          :to="item.path"
          class="flex items-center rounded-xl border border-neutral-200 p-3 transition duration-300 hover:bg-neutral-200 md:gap-1 md:rounded-2xl md:px-5"
          :class="
            isActiveMemberNav(item.activeMatch ?? item.path, item.exact)
              ? 'bg-neutral-200'
              : 'bg-white'
          "
        >
          <svg
            v-if="item.iconPath"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
          >
            <path :d="item.iconPath" fill="currentColor" />
          </svg>
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
