<template>
  <div class="flex justify-between items-start mb-3">
    <div class="flex justify-start items-center gap-4">
      <div
        class="self-start bg-[#1c1d1f] border border-[#d1d7dc] overflow-hidden relative"
      >
        <img :src="image" alt="course" width="160" height="145" />
      </div>
      <div class="text-[#2d2f31] flex-wrap text-wrap max-w-sm">
        <div>
          <h3 class="font-bold text-base text-wrap">
            {{ title }}
          </h3>
          <span class="font-[1.2rem] text-sm text-[#6a6f73]">{{
            creator
          }}</span>
          <div>
            <span class="font-bold text-sm">
              {{ rating }}
              <span class="font-bold text-[#B4690E]"> ★★★★ </span>
              <span
                class="relative inline-block text-lg font-bold text-[#B4690E] border-[#B4690E]"
              >
                <span class="absolute top-0 left-0 w-1/2 overflow-hidden">
                  ★
                </span>
                <span class="text-gray-100"> ★ </span>
              </span>
            </span>
            <span class="text-sm text-[#6a6f73]">{{ students }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-lg font-bold">{{ price }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: String,
  title: String,
  creator: String,
  rating: String,
  students: String,
  price: String,
});
</script>
