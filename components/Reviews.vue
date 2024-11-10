<template>
  <div class="bg-white p-6 max-w-[calc(100%-550px)] ml-16 mt-8">
    <h3 class="text-3xl font-bold mb-8">
      <span class="text-[#B4690E]">★</span>
      <span class="after:content-['•'] after:text-[#6A6F73]"
        >4.4 course rating
      </span>
      2K ratings
    </h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="p-4 text-white">
        <ReviewCard v-bind="reviews[0]" />
      </div>
      <div class="p-4 text-white"><ReviewCard v-bind="reviews[1]" /></div>
      <div class="p-4 text-white">
        <ReviewCard v-bind="reviews[2]" />
      </div>
      <div class="p-4 text-white">
        <ReviewCard v-bind="reviews[3]" />
      </div>
    </div>
    <button
      class="flex justify-center items-center border border-black text-[#2d2f31] hover:bg-[#173953] hover:bg-opacity-10 h-10 w-[136px]"
    >
      <p class="font-bold text-sm">Show all reviews</p>
    </button>
  </div>
</template>

<script setup>
import ReviewCard from "./ReviewCard.vue";

const reviews = [
  {
    initials: "KD",
    name: "KAVYA D.",
    stars: 5,
    time: "3 weeks ago",
    review: "good course for GCP learners",
  },
  {
    initials: "IO",
    name: "Ivar O.",
    stars: 4,
    time: "2 months ago",
    review:
      "Plenty of content, but some of it is outdated. There is also a language barrier which can make it hard to hear/understand certain parts of the content.",
  },
  {
    initials: "AK",
    name: "Avinash K.",
    stars: 4,
    time: "4 months ago",
    review:
      "It's a very good course for the beginner. It should be updated with the latest information and reference materials. Thanks.",
  },
  {
    initials: "AU",
    name: "Anonymized U.",
    stars: 5,
    time: "5 months ago",
    review:
      "It's a long course with all you have to know about the GCP. Recommended",
  },
];
</script>
