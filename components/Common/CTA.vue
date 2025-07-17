<template>
  <!-- 邁向你真正想過的生活，從這裡開始 -->
  <section class="px-3 py-10">
    <div
      class="mx-auto max-w-container rounded-2xl bg-primary px-6 py-4 text-white md:rounded-3xl md:px-12 md:py-6"
    >
      <img src="/logo-icon-w.svg" alt="白色 logo" class="mb-6" />
      <h2 class="mb-3 text-t4-sm md:text-t4">
        邁向你真正想過的生活，從這裡開始
      </h2>
      <p class="mb-6 text-body-lg-sm md:text-body-lg">
        第一次諮詢只要 30 分鐘，可能改變你未來 30 年的生活方式
      </p>
      <hr class="mb-4 border-dashed md:mb-6" />
      <footer class="flex flex-col justify-between gap-6 md:flex-row">
        <ul class="flex flex-col gap-4 md:flex-row md:gap-6">
          <li class="inter | md:text-t text-t-sm !font-medium">
            <a href="tel:0800-123-123" class="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1a.93.93 0 0 1 .625.237.9.9 0 0 1 .325.563l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.926 1.188 1.787.687.863 1.512 1.663.775.775 1.625 1.438.85.661 1.8 1.212l2.35-2.35a1.4 1.4 0 0 1 .588-.338 1.6 1.6 0 0 1 .712-.062l3.45.7q.35.1.575.363A.88.88 0 0 1 21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.024.35 2.025T6.025 9m8.95 8.95q.976.424 1.987.675 1.013.25 2.038.325v-2.2l-2.35-.475z"
                  fill="currentColor"
                />
              </svg>
              0800-123-123
            </a>
          </li>
          <li class="inter | md:text-t text-t-sm !font-medium">
            <a href="mailto:Sample@mail.com" class="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm8-7L4 8v10h16V8zm0-2 8-5H4zM4 8V6v12z"
                  fill="currentColor"
                />
              </svg>
              Sample@mail.com
            </a>
          </li>
        </ul>
        <AtomButton to="/contact" text="預約免費職涯探索" hasIcon />
      </footer>
    </div>
  </section>
</template>
