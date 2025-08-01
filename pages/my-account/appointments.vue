<script setup>
useSeoMeta({
  title: "預約紀錄 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
  ogTitle: "預約紀錄 | 2025 切版直播班 - 職涯諮詢媒合 W5&W6",
});

definePageMeta({
  layout: "member",
});

const appointments = ref([]);
const loading = ref(true);

// 依照狀態的 Filter
const filterStatus = ref("全部預約"); // 預設

const statusOptions = [
  { label: "全部預約", value: "全部預約" },
  { label: "已完成", value: "已完成" },
  { label: "已取消", value: "已取消" },
];

const filteredAppointments = computed(() => {
  if (filterStatus.value === "全部預約") {
    return sortedAppointments.value;
  }
  return sortedAppointments.value.filter(
    (item) => item.status === filterStatus.value,
  );
});

// 依照日期的排序功能
const showDropdown = ref(false); // dropdown 開關
const sortOrder = ref("desc"); // "desc" 新到舊（預設），"asc" 舊到新

const sortedAppointments = computed(() => {
  return [...appointments.value].sort((a, b) => {
    // 日期格式 "YYYY/MM/DD" -> new Date 也可以直接比大小
    if (sortOrder.value === "desc") {
      return new Date(b.date) - new Date(a.date); // 新到舊
    } else {
      return new Date(a.date) - new Date(b.date); // 舊到新
    }
  });
});

function selectSort(order) {
  sortOrder.value = order;
  showDropdown.value = false; // 選擇後關閉
}

onMounted(async () => {
  const res = await fetch("/data/appointments.json");
  appointments.value = await res.json();
  loading.value = false; // 接到資料就結束 loading Spinner
});
</script>

<template>
  <section class="bg-neutral-100 px-3 py-12 md:py-20">
    <div class="mx-auto max-w-container-md">
      <CommonMemberNav />
      <main
        class="rounded-2xl bg-white p-6 shadow-shadow md:rounded-3xl md:p-12"
      >
        <h1 class="mb-4 text-t2-sm !font-medium md:mb-6 md:text-t2">
          預約紀錄
        </h1>
        <ul class="mb-6 grid gap-6 md:mb-12 md:grid-cols-3">
          <!-- 卡片1 -->
          <li
            class="hidden justify-items-center rounded-2xl border border-neutral-300 p-6 text-center md:block md:rounded-3xl"
          >
            <p class="inter | mb-2 text-t4-sm text-primary md:text-t4">3</p>
            <h2 class="text-body-lg-sm text-neutral-600 md:text-body-lg">
              已完成諮詢
            </h2>
          </li>
          <!-- 卡片2 -->
          <li
            class="justify-items-center rounded-2xl border border-neutral-300 p-4 text-center md:rounded-3xl md:p-6"
          >
            <p class="inter | mb-2 text-t4-sm text-primary md:text-t4">
              2025/10/10
            </p>
            <h2 class="text-body-lg-sm text-neutral-600 md:text-body-lg">
              即將到來
            </h2>
          </li>
          <!-- 卡片3 -->
          <li
            class="hidden justify-items-center rounded-2xl border border-neutral-300 p-6 text-center md:block md:rounded-3xl"
          >
            <p class="inter | mb-2 text-t4-sm text-primary md:text-t4">3/6</p>
            <h2 class="text-body-lg-sm text-neutral-600 md:text-body-lg">
              使用方案進度
            </h2>
          </li>
        </ul>
        <div class="mb-4 flex items-center justify-between gap-3 md:mb-6">
          <div class="flex gap-2">
            <AtomButton
              v-for="option in statusOptions"
              :key="option.value"
              :text="option.label"
              :isOutlined="filterStatus !== option.value"
              @click="filterStatus = option.value"
            />
          </div>
          <!-- 過濾按鈕 -->
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-1 rounded-xl border-neutral-300 p-2.5 transition duration-300 hover:bg-neutral-200 sm:border sm:px-5 sm:py-3 md:rounded-2xl"
              aria-label="開啟列表排序"
              @click="showDropdown = !showDropdown"
            >
              <span class="hidden sm:block">排序</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 md:size-5"
              >
                <path
                  d="M8.333 15v-1.667h3.334V15zM5 10.833V9.167h10v1.666zM2.5 6.667V5h15v1.667z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <!-- 透明 backdrop -->
            <div
                v-if="showDropdown"
                @click="showDropdown = false"
                class="fixed inset-0 z-20 bg-transparent"
              ></div>
            <div
              v-if="showDropdown"
              class="absolute right-0 top-14 z-30 w-[160px] rounded-xl bg-white py-2 shadow-shadow"
            >
              <ul>
                <li
                  class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                  :class="{ 'bg-neutral-200': sortOrder === 'desc' }"
                  @click="selectSort('desc')"
                >
                  新到舊
                </li>
                <li
                  class="cursor-pointer px-6 py-2 transition duration-300 hover:bg-neutral-200"
                  :class="{ 'bg-neutral-200': sortOrder === 'asc' }"
                  @click="selectSort('asc')"
                >
                  舊到新
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 讀取資料 Spinner -->
        <AtomSpinner v-if="loading" />

        <!-- 資料區塊（接到資料後才顯示） -->
        <template v-else>
          <!-- 電腦版表格 -->
          <table
            class="hidden w-full whitespace-nowrap md:table"
            v-if="filteredAppointments.length"
          >
            <thead class="border-b border-neutral-300 text-body-sm">
              <tr>
                <th class="w-3/5 p-3 text-start !font-medium">諮詢方案</th>
                <th class="p-3 text-start !font-medium">預約日期</th>
                <th class="p-3 text-start !font-medium">諮詢時長</th>
                <th class="p-3 text-start !font-medium">諮詢方式</th>
                <th class="p-3 text-start !font-medium">上課狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, idx) in filteredAppointments"
                :key="idx"
                :class="[
                  idx % 2 === 1 ? 'bg-neutral-200' : '', // 雙數列底色
                  'border-b border-neutral-300 transition hover:bg-primary-200',
                  item.status === '已完成' ? 'text-neutral-500' : '',
                ]"
              >
                <td class="px-3 py-4">{{ item.consultPlan }}</td>
                <td class="px-3 py-4">{{ item.date }}</td>
                <td class="px-3 py-4">{{ item.period }}</td>
                <td class="px-3 py-4">
                  <span
                    class="rounded-xl border border-neutral-300 bg-white px-2 py-[3.5px] text-body-sm !font-medium leading-[1.2] text-neutral-600"
                    >{{ item.method }}</span
                  >
                </td>
                <td class="px-3 py-4">{{ item.status }}</td>
              </tr>
            </tbody>
          </table>
          <!-- 沒有記錄訊息 -->
          <p
            v-else
            class="hidden py-6 text-center text-body-lg-sm md:block md:text-body-lg"
          >
            目前沒有相關預約紀錄
          </p>
          <!-- 手機版卡片 -->
          <div class="block md:hidden">
            <h3
              class="border-b border-neutral-300 px-2 py-[11.5px] text-body-sm !font-medium"
            >
              預約紀錄一覽
            </h3>
            <ul v-if="filteredAppointments.length">
              <li
                v-for="(item, idx) in filteredAppointments"
                :key="idx"
                :class="[
                  idx % 2 === 1 ? 'bg-neutral-200' : '', // 雙數列底色
                  'border-b border-neutral-300 px-2 text-body-sm transition hover:bg-primary-200',
                  item.status === '已完成'
                    ? 'text-neutral-500'
                    : 'text-neutral-600',
                ]"
              >
                <article>
                  <div class="flex items-center justify-between py-2.5">
                    <h4
                      class="truncate text-body-lg-sm"
                      :class="
                        item.status === '已完成'
                          ? 'text-neutral-500'
                          : 'text-neutral'
                      "
                    >
                      {{ item.consultPlan }}
                    </h4>
                    <span
                      class="whitespace-nowrap rounded-xl border border-neutral-300 bg-white px-2 py-[3.5px] !font-medium leading-[1.2] text-neutral-600"
                      >{{ item.method }}</span
                    >
                  </div>
                  <div class="flex items-center gap-4 py-[11.5px]">
                    <h4>時間：{{ item.date }}</h4>
                    <span>時長：{{ item.period }}</span>
                  </div>
                  <div class="py-[11.5px]">
                    <h4>{{ item.status }}</h4>
                  </div>
                </article>
              </li>
            </ul>
            <!-- 沒有記錄訊息 -->
            <p v-else class="py-6 text-center text-body-lg-sm md:text-body-lg">
              目前沒有相關預約紀錄
            </p>
          </div>
        </template>
      </main>
    </div>
  </section>
</template>
