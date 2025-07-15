<script setup>
useSeoMeta({
  title: "個人資料 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "個人資料 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

// 表單欄位
const name = ref("Mokumaru");
const gender = ref("女性");
const birthDate = ref("2000/01/10");
const email = ref("mokumaru@mail.com");
const phone = ref("09-1234-5678");
const address = ref("高雄市三民區九如一路 87 號");

// Modal 控制
const isChangePasswordOpen = ref(false);
function closeModal() {
  isChangePasswordOpen.value = false;
}
</script>

<template>
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container-md">
      <CommonMemberNav />
      <div class="rounded-3xl bg-white p-6 shadow-shadow md:p-12">
        <div class="mb-20 flex flex-col gap-4 md:mb-12 md:flex-row md:gap-6">
          <aside class="max-w-[300px] flex-1">
            <h1 class="text-t2-sm !font-medium md:text-t2">個人資料</h1>
          </aside>
          <main class="flex flex-1 flex-col gap-4 md:gap-6">
            <!-- 個人頭像 -->
            <div class="flex items-end gap-4">
              <img
                src="/public/images/member/avatar.webp"
                alt="個人頭像"
                class="rounded-full border border-neutral-300"
              />
              <button
                type="button"
                class="flex items-center rounded-2xl border border-neutral-200 bg-white p-3 transition duration-300 hover:bg-neutral-200 md:gap-1 md:px-5"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                >
                  <path
                    d="M9.167 13.333V6.542L7 8.708 5.834 7.5 10 3.333 14.167 7.5 13 8.708l-2.166-2.166v6.791zM5 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15v-2.5H5V15h10v-2.5h1.667V15q0 .687-.49 1.177-.489.49-1.177.49z"
                    fill="currentColor"
                  />
                </svg>
                更新頭貼
              </button>
            </div>
            <!-- 姓名欄位 -->
            <div class="relative">
              <input
                v-model="name"
                type="text"
                id="name"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-6 focus:outline-none"
              />
              <label
                for="name"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >姓名</label
              >
            </div>
            <!-- 性別選項 -->
            <div>
              <p class="mb-2">性別</p>
              <div class="flex gap-4 px-2 md:gap-6">
                <label class="inline-flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="女性"
                    v-model="gender"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>女性</span>
                </label>
                <label class="inline-flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="男性"
                    v-model="gender"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>男性</span>
                </label>
                <label class="inline-flex cursor-pointer items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value="不願透露"
                    v-model="gender"
                    class="form-radio size-5 accent-primary"
                  />
                  <span>不願透露</span>
                </label>
              </div>
            </div>
            <!-- 生日欄位 -->
            <div class="relative">
              <input
                v-model="birthDate"
                type="text"
                id="birthDate"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-6 focus:outline-none"
              />
              <label
                for="birthDate"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >生日</label
              >
            </div>
            <!-- 修改密碼 -->
            <div>
              <p class="mb-2">密碼</p>
              <AtomButton
                text="修改密碼"
                hasIcon
                isOutlined
                @click.prevent="isChangePasswordOpen = true"
              />
            </div>
            <!-- 信箱欄位 -->
            <div class="relative">
              <input
                v-model="email"
                type="email"
                id="email"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-6 focus:outline-none"
              />
              <label
                for="email"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >信箱</label
              >
              <p class="px-2 text-body-sm text-neutral-600">
                盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信
              </p>
            </div>
            <!-- 聯絡電話 -->
            <div class="relative">
              <input
                v-model="phone"
                type="tel"
                id="phone"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-6 focus:outline-none"
              />
              <label
                for="phone"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >聯絡電話</label
              >
            </div>
            <!-- 通訊地址 -->
            <div class="relative">
              <input
                v-model="address"
                type="text"
                id="address"
                placeholder=" "
                class="peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-6 focus:outline-none"
              />
              <label
                for="address"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >通訊地址</label
              >
            </div>
          </main>
        </div>
        <!-- 按鈕 -->
        <div
          class="flex flex-col-reverse justify-center gap-4 md:flex-row md:gap-6"
        >
          <AtomButton
            text="重新填寫"
            hasIcon
            isOutlined
            class="w-full md:w-auto"
          />
          <AtomButton text="儲存更新" hasIcon class="w-full md:w-auto" />
        </div>
      </div>
    </div>
  </section>

  <!-- 修改密碼 Modal -->
  <CommonMemberChangePassword
    :open="isChangePasswordOpen"
    :onClose="closeModal"
  />
</template>
