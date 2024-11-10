<template>
  <div
    class="bg-white border rounded-lg max-w-[calc(100%-550px)] ml-16 mt-8 p-7 mb-12"
  >
    <div class="flex flex-col justify-between gap-3">
      <div class="mb-6">
        <div class="flex justify-between items-baseline">
          <h2 class="font-bold text-xl">Frequently Bought Together</h2>
        </div>
      </div>
      <div class="flex flex-col mb-7">
        <BoughtTogetherCard
          v-for="course in courses"
          :key="course.title"
          :image="course.image"
          :title="course.title"
          :creator="course.creator"
          :rating="course.rating"
          :students="course.students"
          :price="course.price"
        />
      </div>
    </div>
    <div class="flex justify-between items-center">
      <h1 class="text-black text-xl">
        Total: <span class="font-bold">$184.97</span>
      </h1>
      <button class="font-bold text-white text-xl bg-[#8710D8] px-3 py-2">
        Add all to cart
      </button>
    </div>
  </div>
</template>

<script setup>
import BoughtTogetherCard from "~/components/BoughtTogetherCard.vue";

const courses = [
  {
    image: "https://img-c.udemycdn.com/course/240x135/2827592_53fc_9.jpg",
    title: "Google Cloud (GCP) MasterClass : GCP Live Projects 2024",
    creator: "TechLink Selenium | DevOps | GenAI",
    rating: "4.4",
    students: "(1,763)",
    price: "$79.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/240x135/4805730_6483_2.jpg",
    title: "Getting started with Azure Cloud",
    creator: "Houssem Dellai",
    rating: "4.3",
    students: "(256)",
    price: "$59.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/240x135/4985536_d06f_5.jpg",
    title: "Microsoft Azure: Hands On Training: AZ-900 AZ-104 and AZ-305",
    creator: "Kaizad Anklesaria",
    rating: "4.5",
    students: "(646)",
    price: "$44.99",
  },
];
</script>
