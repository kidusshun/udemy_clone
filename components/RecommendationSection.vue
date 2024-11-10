<template>
  <div class="flex gap-1 items-center justify-center border-b py-3">
    <div class="">
      <img :src="image" alt="Course image" width="64" height="64" />
    </div>
    <div class="flex flex-col flex-4 ml-4 max-w-[315px]">
      <h2 class="text-base font-bold whitespace-normal break-words">
        {{ title }}
      </h2>
      <div class="text-sm flex">
        <div class="flex items-center mt-1">
          <span
            v-if="bestSeller"
            class="text-xs bg-[#eceb98] font-bold text-[#223509] px-2 py-0.5 mr-2"
          >
            Bestseller
          </span>
        </div>
        <span class="font-bold text-[#1e6055] after:content-['']">{{
          hours
        }}</span>
        •
        <span>{{ updated }}</span>
      </div>
    </div>
    <div class="flex flex-3 justify-between items-center w-1/3 ml-9">
      <div>
        <span
          class="text-black font-semibold text-sm after:content-['★'] after:text-[#B4690E]"
          >{{ rating }}</span
        >
      </div>
      <div class="flex items-center gap-1 justify-end">
        <span class="text-sm text-gray-500 mr-12">{{ totalStudents }}</span>
        <div class="text-base font-bold text-black mt-2">{{ price }}</div>
      </div>
    </div>
    <div class="flex-1 ml-6">
      <button
        class="w-10 h-10 border rounded-full flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: String,
  title: String,
  bestSeller: Boolean,
  hours: String,
  updated: String,
  rating: Number,
  totalStudents: String,
  price: String,
});
</script>

<style scoped>
/* Optional styling if needed */
</style>
