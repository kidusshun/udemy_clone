<template>
  <div class="bg-white p-6 max-w-[calc(100%-550px)] ml-16 mt-8">
    <h1 class="text-3xl font-bold">Students also bought</h1>
    <RecommendationSection
      v-for="recommendation in recommendations"
      :key="recommendation.title"
      :image="recommendation.image"
      :title="recommendation.title"
      :bestSeller="recommendation.bestSeller"
      :hours="recommendation.hours"
      :updated="recommendation.updated"
      :rating="recommendation.rating"
      :totalStudents="recommendation.totalStudents"
      :price="recommendation.price"
    />
    <div class="flex justify-center items-start w-full h-11 mt-2">
      <button
        class="border border-black font-bold w-full h-full text-[#2d2f31] hover:bg-[#173953] hover:bg-opacity-10"
      >
        Show more
      </button>
    </div>
  </div>
</template>

<script setup>
import RecommendationSection from "~/components/RecommendationSection.vue";
const recommendations = [
  {
    image: "https://img-c.udemycdn.com/course/50x50/2459706_d13a_6.jpg",
    title: "Ultimate Google Cloud Certifications: All in one Bundle",
    bestSeller: false,
    hours: "67 total hours",
    updated: "Updated 10/2024",
    rating: 4.4,
    totalStudents: "110,219",
    price: "$74.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/4178136_bd4b.jpg",
    title: "Google Cloud Developer - GCP Professional Certification",
    bestSeller: true,
    hours: "21.5 total hours",
    updated: "Updated 9/2023",
    rating: 4.7,
    totalStudents: "21,247",
    price: "$84.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/4321816_a698_5.jpg",
    title: "GCP Associate Cloud Engineer Google Certification -150 Demos",
    bestSeller: false,
    hours: "36.5 total hours",
    updated: "Updated 8/2024",
    rating: 4.6,
    totalStudents: "2,300",
    price: "$69.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/3962460_77bb_30.jpg",
    title: "GCP Associate Cloud Engineer Certification : Google Cloud",
    bestSeller: false,
    hours: "24 total hours",
    updated: "Updated 6/2024",
    rating: 4.5,
    totalStudents: "10,780",
    price: "$84.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/5485846_95c2.jpg",
    title: "Google Professional Cloud Architect - The Complete Guide",
    bestSeller: false,
    hours: "17 total hours",
    updated: "Updated 10/2024",
    rating: 4.7,
    totalStudents: "3,547",
    price: "$19.99",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/4280268_01cb.jpg",
    title: "Google Cloud Professional Cloud Architect: GCP Certification",
    bestSeller: true,
    hours: "22.5 total hours",
    updated: "Updated 4/2024",
    rating: 4.4,
    totalStudents: "17,694",
    price: "$49.99",
  },
];
</script>
