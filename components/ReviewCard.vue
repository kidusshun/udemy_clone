<template>
  <div class="border-t border-[#D1D7DC] py-2 pr-2">
    <div class="flex justify-between items-center">
      <div class="flex justify-start gap-3">
        <div
          class="w-10 h-10 rounded-full bg-black text-center flex items-center justify-center text-white font-bold"
        >
          {{ initials }}
        </div>
        <div>
          <h2 class="font-bold text-black text-lg">{{ name }}</h2>
          <div class="flex items-center">
            <span v-for="n in stars" :key="n" class="text-[#F69C07]">★</span>
            <span class="text-[#6a6f73] text-xs font-bold ml-2">{{
              time
            }}</span>
          </div>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M12 6v.01M12 12v.01M12 18v.01"
          />
        </svg>
      </div>
    </div>
    <div>
      <p class="text-base text-black mb-5 mt-4">{{ review }}</p>
    </div>
    <div class="flex justify-start text-black items-center">
      <span class="text-xs text-[#6a6f73] mr-4">Helpful?</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-3"
      >
        <path
          d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1V9z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-black"
      >
        <path
          d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4V3z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  initials: String,
  name: String,
  stars: Number,
  time: String,
  review: String,
});
</script>
