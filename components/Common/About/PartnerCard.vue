<script setup>
const props = defineProps({
  /**
   * 夥伴圖片
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/about/mentor-1.webp",
  },
  /**
   * 夥伴稱號
   * @type {String}
   */
  title: {
    type: String,
    default: "透過 title prop 來輸入稱號",
  },
  /**
   * 夥伴名字
   * @type {String}
   */
  name: {
    type: String,
    default: "透過 name prop 來輸入名字",
  },
  /**
   * 夥伴標籤
   * @type {Array}
   */
  tags: {
    type: Array,
    default: ["# 標籤1", "# 標籤2"],
  },
});
const { img, title, name, tags } = toRefs(props);
</script>

<template>
  <article
    class="group w-fit rounded-2xl text-start shadow-shadow md:rounded-3xl"
  >
    <div class="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl">
      <img :src="img" :alt="name" class="transition group-hover:scale-110" />
      <!-- 白色三角形 -->
      <!-- <div
        class="absolute bottom-0 right-0 size-10 bg-white"
        style="clip-path: polygon(100% 0, 0% 100%, 100% 100%)"
      ></div> -->
    </div>
    <div class="p-4">
      <p class="mb-2 font-medium text-neutral-600">{{ title }}</p>
      <h3 class="mb-4 text-t2-sm !font-medium md:text-t2">{{ name }}</h3>
      <!-- 標籤 -->
      <ul class="flex flex-wrap items-start gap-x-2 gap-y-1 lg:h-16">
        <li
          v-for="(tag, idx) in tags"
          :key="idx"
          class="rounded-full border border-neutral-300 px-2 py-1 text-body-sm text-neutral-600"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </article>
</template>
