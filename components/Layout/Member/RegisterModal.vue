<script setup>
const props = defineProps({
  open: Boolean, // 控制 Modal 開關
  onClose: Function, // 關閉時觸發
});

const emit = defineEmits(["register-success", "show-login"]);

const account = ref("");
const password = ref("");
const passwordAgain = ref("");
const agreeTerms = ref([]);

const showPassword = ref(false);

function handleRegister() {
  emit("register-success");
}

function handleShowLogin() {
  emit("show-login");
}
</script>

<template>
  <ClientOnly>
    <Transition name="fade">
      <section
        v-if="open"
        class="fixed inset-0 z-50 content-center justify-items-center"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-neutral/50" @click="onClose"></div>
        <!-- Modal 內容 -->
        <div class="relative z-10 flex w-full shadow-shadow lg:max-w-[1200px]">
          <main
            class="relative h-screen flex-1 bg-white p-6 text-center lg:h-auto lg:max-w-[500px] lg:rounded-l-3xl lg:p-12"
          >
            <!-- 關閉按鈕 -->
            <button
              class="absolute right-3 top-9 p-2.5 text-neutral transition duration-300 hover:text-primary lg:right-6 lg:top-6"
              @click="onClose"
              aria-label="關閉"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
              >
                <path
                  d="M6.4 19.5 5 18.1l5.6-5.6L5 6.9l1.4-1.4 5.6 5.6 5.6-5.6L19 6.9l-5.6 5.6 5.6 5.6-1.4 1.4-5.6-5.6z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <h2 class="mb-6 text-t4-sm lg:mb-12 lg:text-t4">註冊</h2>
            <!-- Google 登入 -->
            <button
              type="button"
              class="mb-4 flex w-full items-center justify-center rounded-2xl border border-neutral-300 p-3 transition hover:bg-neutral-200 lg:gap-1"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
              >
                <path
                  d="M19.3 10.208q-.002-.975-.167-1.875H10.5v3.55h4.933a4.23 4.23 0 0 1-1.841 2.759v2.308h2.975C18.3 15.35 19.3 13 19.3 10.208"
                  fill="#4285F4"
                />
                <path
                  d="M10.5 19.167c2.475 0 4.55-.817 6.067-2.217l-2.975-2.308c-.817.55-1.859.883-3.092.883-2.383 0-4.408-1.608-5.133-3.775h-3.05v2.367c1.508 2.991 4.6 5.05 8.183 5.05"
                  fill="#34A853"
                />
                <path
                  d="M5.367 11.742A5.5 5.5 0 0 1 5.075 10c0-.608.108-1.192.292-1.742V5.892h-3.05A9.05 9.05 0 0 0 1.333 10c0 1.483.359 2.875.984 4.108l2.375-1.85z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.5 4.483c1.35 0 2.55.467 3.508 1.367l2.625-2.625C15.042 1.742 12.975.833 10.5.833c-3.583 0-6.675 2.059-8.183 5.059l3.05 2.366c.725-2.166 2.75-3.775 5.133-3.775"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <!-- DC 登入 -->
            <button
              type="button"
              class="mb-6 flex w-full items-center justify-center rounded-2xl border border-neutral-300 p-3 transition hover:bg-neutral-200 lg:gap-1"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.003 3.333c.62 0 1.274.217 1.874.456l.44.18c1.05.44 1.64 1.363 2.097 2.378.743 1.645 1.258 3.84 1.437 5.508.085.792.106 1.588-.047 2.124-.164.573-.722.978-1.265 1.296l-.268.152-.279.155q-.215.12-.437.237l-.435.225-.598.298-.48.236a.835.835 0 1 1-.745-1.49l.658-.325-.483-.507c-1.159.475-2.523.744-3.972.744-1.45 0-2.813-.268-3.972-.744l-.483.506.66.325a.834.834 0 0 1-.744 1.492l-.454-.225c-.335-.167-.67-.332-1.002-.506l-.773-.42-.268-.153c-.542-.318-1.102-.723-1.265-1.296-.153-.536-.132-1.332-.047-2.125.178-1.667.694-3.862 1.436-5.507.458-1.015 1.048-1.938 2.098-2.378.696-.292 1.54-.636 2.314-.636.502 0 .897.463.825.956a11.4 11.4 0 0 1 1.675-.122q.866 0 1.678.123a.842.842 0 0 1 .824-.957M7.791 8.75a1.458 1.458 0 1 0 0 2.917 1.458 1.458 0 0 0 0-2.917m5.416 0a1.458 1.458 0 1 0 0 2.917 1.458 1.458 0 0 0 0-2.917"
                  fill="#586AEA"
                />
              </svg>
              Discord
            </button>
            <hr class="mb-6 border-neutral-300" />
            <!-- 帳號欄位 -->
            <div class="relative mb-4">
              <input
                v-model="account"
                type="text"
                id="account"
                placeholder=" "
                class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white px-3 pb-2.5 pt-[26px] transition focus:border-primary focus:outline-none"
              />
              <label
                for="account"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >帳號
              </label>
            </div>
            <!-- 密碼欄位 -->
            <div class="relative mb-4">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                placeholder=" "
                class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white pb-2.5 pl-3 pr-10 pt-[26px] transition focus:border-primary focus:outline-none"
              />
              <label
                for="password"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >密碼
              </label>
              <img
                :src="
                  showPassword ? '/icons/visible.svg' : '/icons/invisible.svg'
                "
                alt="顯示/隱藏密碼"
                class="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </div>
            <!-- 確認密碼欄位 -->
            <div class="relative mb-4">
              <input
                v-model="passwordAgain"
                :type="showPassword ? 'text' : 'password'"
                id="passwordAgain"
                placeholder=" "
                class="focus:shadow-focus peer block w-full rounded-lg border border-neutral-300 bg-white pb-2.5 pl-3 pr-10 pt-[26px] transition focus:border-primary focus:outline-none"
              />
              <label
                for="passwordAgain"
                class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                >確認密碼
              </label>
              <img
                :src="
                  showPassword ? '/icons/visible.svg' : '/icons/invisible.svg'
                "
                alt="顯示/隱藏密碼"
                class="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </div>
            <!-- 勾選同意 -->
            <label class="mb-4 flex cursor-pointer items-center gap-1">
              <input
                type="checkbox"
                name="agreeTerms"
                value="我同意服務條款和隱私政策"
                v-model="agreeTerms"
                class="custom-checkbox"
              />
              <span class="flex gap-1">
                我同意
                <NuxtLink
                  to="/terms-and-conditions"
                  target="_blank"
                  class="text-primary underline"
                  >服務條款
                </NuxtLink>
                和
                <NuxtLink
                  to="/privacy-policy"
                  target="_blank"
                  class="text-primary underline"
                  >隱私政策
                </NuxtLink>
              </span>
            </label>
            <AtomButton
              text="送出"
              hasIcon
              class="mb-6 w-full lg:mb-12"
              @click="handleRegister"
            />
            <span class="inline-flex gap-1 text-neutral-600">
              已經是會員？
              <button
                type="button"
                class="text-primary underline"
                @click="handleShowLogin"
              >
                直接登入
              </button>
            </span>
          </main>
          <aside
            class="hidden max-w-[700px] flex-1 rounded-r-3xl bg-[url('/images/member/register.webp')] bg-cover bg-center bg-no-repeat lg:block"
          ></aside>
        </div>
      </section>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
@import "@/assets/css/custom-checkbox.css";
</style>
