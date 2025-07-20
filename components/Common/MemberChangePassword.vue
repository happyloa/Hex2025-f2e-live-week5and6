<script setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const props = defineProps({
  open: Boolean, // 控制 Modal 開關
  onClose: Function, // 關閉時觸發
});

// yup schema：驗證密碼欄位
const schema = yup.object({
  password: yup.string().required("請輸入密碼"),
  passwordAgain: yup
    .string()
    .required("請再次輸入密碼")
    .oneOf([yup.ref("password")], "兩次輸入的密碼不一致"),
});

// 初始化表單驗證狀態與錯誤訊息（useForm 提供）
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    password: "",
    passwordAgain: "",
  },
});

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField("password");
const {
  value: passwordAgain,
  errorMessage: passwordAgainError,
  handleBlur: passwordAgainBlur,
} = useField("passwordAgain");

// 處理表單送出，驗證通過才 emit 註冊成功事件
const handleRegister = handleSubmit(() => {
  props.onClose();
});
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
        <div
          class="relative z-10 w-[87%] max-w-[480px] rounded-xl bg-white shadow-shadow"
        >
          <!-- 標題 -->
          <header class="flex items-center justify-between px-6 py-2">
            <h2 class="text-t-sm !font-medium md:text-t">更新密碼</h2>
            <!-- 關閉按鈕 -->
            <button
              class="p-2.5 text-neutral transition duration-300 hover:text-primary"
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
          </header>
          <!-- 更新密碼欄位 -->
          <div class="space-y-6 border-y border-neutral-300 p-6">
            <!-- 新密碼欄位 -->
            <div>
              <div class="relative">
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  placeholder=" "
                  class="peer block w-full rounded-lg border bg-white pb-2.5 pl-3 pr-10 pt-[26px] transition focus:outline-none"
                  :class="
                    passwordError
                      ? 'focus:shadow-focus-error border-danger'
                      : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                  "
                  @blur="passwordBlur"
                  :aria-invalid="!!passwordError"
                  :aria-describedby="
                    passwordError ? 'password-error' : undefined
                  "
                />
                <label
                  for="password"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >新密碼</label
                >
              </div>
              <!-- 錯誤訊息 -->
              <p
                v-if="passwordError"
                id="password-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ passwordError }}
              </p>
            </div>
            <!-- 再次輸入新密碼欄位 -->
            <div>
              <div class="relative">
                <input
                  v-model="passwordAgain"
                  type="password"
                  id="passwordAgain"
                  placeholder=" "
                  class="peer block w-full rounded-lg border bg-white pb-2.5 pl-3 pr-10 pt-[26px] transition focus:outline-none"
                  :class="
                    passwordAgainError
                      ? 'focus:shadow-focus-error border-danger'
                      : 'border-neutral-300 focus:border-primary focus:shadow-focus'
                  "
                  @blur="passwordAgainBlur"
                  :aria-invalid="!!passwordAgainError"
                  :aria-describedby="
                    passwordAgainError ? 'passwordAgain-error' : undefined
                  "
                />
                <label
                  for="passwordAgain"
                  class="pointer-events-none absolute left-3 top-4 z-10 -translate-y-1/2 text-body-sm text-neutral-600 duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-neutral peer-focus:top-4 peer-focus:text-body-sm peer-focus:text-neutral-600"
                  >再次輸入新密碼</label
                >
              </div>
              <!-- 錯誤訊息 -->
              <p
                v-if="passwordAgainError"
                id="passwordAgain-error"
                class="mt-1 flex items-center gap-1 bg-danger-100 px-2 text-body-xs text-danger"
              >
                <img
                  src="/icons/error-icon.svg"
                  alt="錯誤 icon"
                  class="text-danger"
                />
                {{ passwordAgainError }}
              </p>
            </div>
          </div>
          <!-- 按鈕 -->
          <footer class="flex justify-end px-6 py-4">
            <AtomButton text="更新密碼" hasIcon @click="handleRegister" />
          </footer>
        </div>
      </section>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
