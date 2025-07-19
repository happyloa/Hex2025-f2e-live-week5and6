<script setup>
const props = defineProps({
  /**
   * 數位游牧年數
   * @type {String}
   */
  years: {
    type: String,
    default: "1",
  },
  /**
   * 故事圖片
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/home/story-cover-1.webp",
  },
  /**
   * 故事角色稱號
   * @type {String}
   */
  title: {
    type: String,
    default: "透過 title prop 來輸入稱號",
  },
  /**
   * 故事角色簡介
   * @type {String}
   */
  intro: {
    type: String,
    default: "透過 intro prop 來輸入簡介",
  },
  /**
   * 故事角色職業
   * @type {String}
   */
  profession: {
    type: String,
    default: "透過 profession prop 來輸入職業",
  },
  /**
   * 故事角色名字與年齡
   * @type {String}
   */
  nameAndAge: {
    type: String,
    default: "透過 name prop 來輸入名字",
  },
});
const { years, img, title, intro, profession, nameAndAge } = toRefs(props);
</script>

<template>
  <article class="group w-fit rounded-2xl shadow-shadow md:rounded-3xl">
    <div class="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl">
      <img :src="img" :alt="title" class="transition group-hover:scale-110" />
      <span
        class="absolute left-3 top-3 rounded-xl bg-primary px-4 py-2 text-white"
        >數位遊牧 {{ years }} 年
      </span>
    </div>
    <div class="rounded-b-2xl bg-white p-4 md:rounded-b-3xl">
      <h3 class="mb-4 text-t2-sm md:text-t2">{{ title }}</h3>
      <p class="mb-4 text-body-sm text-neutral-600 2xl:h-[84px]">{{ intro }}</p>
      <div class="flex items-center gap-2">
        <h4 class="font-black leading-[1.2]">{{ profession }}</h4>
        <span class="border-l border-neutral-300 pl-2 text-body-sm">
          {{ nameAndAge }}
        </span>
      </div>
    </div>
  </article>
</template>
