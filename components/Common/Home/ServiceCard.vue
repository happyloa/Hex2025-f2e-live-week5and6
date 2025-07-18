<script setup>
const props = defineProps({
  /**
   * 服務圖片
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/home/service-1.svg",
  },
  /**
   * 步驟
   * @type {String}
   */
  step: {
    type: String,
    default: "1",
  },
  /**
   * 流程標題
   * @type {String}
   */
  title: {
    type: String,
    default: "透過 title prop 來輸入標題",
  },
  /**
   * 流程描述
   * @type {String}
   */
  desc: {
    type: String,
    default: "透過 desc prop 來輸入描述",
  },
});
const { img, step, title, desc } = toRefs(props);
</script>

<template>
  <article class="relative h-full">
    <!-- 標籤 -->
    <span
      class="inter | absolute left-0 top-0 flex items-center gap-1 rounded-br-xl rounded-tl-xl bg-neutral-100 px-3 py-2 text-body-sm font-bold text-primary"
      >STEP<span class="text-body-lg-sm !font-bold md:text-body-lg"
        >{{ step }}
      </span>
    </span>
    <!-- 卡片本身 -->
    <div
      class="h-full justify-items-center space-y-4 rounded-2xl bg-white px-4 pb-12 pt-16 shadow-shadow md:space-y-6 md:rounded-3xl md:px-6"
    >
      <img :src="img" :alt="title" class="size-40" />
      <h3 class="text-t2-sm md:text-t2">{{ title }}</h3>
      <p class="text-body-sm text-neutral-600">
        {{ desc }}
      </p>
    </div>
  </article>
</template>
