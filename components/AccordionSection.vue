<template>
  <div class="border border-gray-200 overflow-hidden">
    <button
      @click="toggleAccordion"
      class="w-full flex justify-between items-center p-4 bg-gray-100 text-lg font-semibold text-gray-700"
    >
      <div class="flex justify-start items-center">
        <span class="text-xs" :class="{ 'transform rotate-180': isOpen }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5"
          >
            <path
              d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
            ></path>
          </svg>
        </span>
        <span class="ml-3 font-bold text-base text-black">{{ title }}</span>
      </div>
      <span class="text-base font-medium"
        >{{ totalLectures }} lectures • {{ totalTime }}</span
      >
    </button>
    <transition name="accordion">
      <div v-if="isOpen" class="p-4 bg-white">
        <ul>
          <li
            v-for="(item, index) in lectures"
            :key="index"
            class="flex justify-between py-2 last:border-none text-gray-600"
          >
            <div class="flex items-center">
              <i
                :class="
                  item.isPreview ? 'text-gray-400 mr-2' : 'text-blue-500 mr-2'
                "
                >📺</i
              >
              <span
                :class="
                  item.isPreview ? 'text-[#371783] underline' : 'text-gray-600'
                "
                >{{ item.title }}</span
              >
            </div>
            <div class="flex items-center justify-between">
              <span
                class="text-[#371783] underline mr-8"
                :class="item.isPreview ? 'block' : 'hidden'"
                >Preview</span
              >
              <span>{{ item.duration }}</span>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  totalLectures: Number,
  totalTime: String,
  lectures: Array,
});

const isOpen = ref(false);

function toggleAccordion() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Optional smooth accordion transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
