<template>
  <div class="bg-white max-w-[calc(100%-550px)] ml-16 mt-8">
    <h1 class="text-2xl font-bold mb-6">Course content</h1>
    <div class="flex justify-between mb-2 text-sm">
      <span>31 sections • 199 lectures • 31h 0m total length</span>
      <span class="text-[#371783] font-bold">Expand all sections</span>
    </div>
    <div class="">
      <AccordionSection
        title="Course Introduction"
        :totalLectures="5"
        totalTime="18 min"
        :lectures="Chapter1"
      />
      <AccordionSection
        title="Introducing Google Cloud Platform"
        :totalLectures="6"
        totalTime="43 min"
        :lectures="Chapter2"
      />
      <AccordionSection
        title="Google Cloud Account Setup"
        :totalLectures="3"
        totalTime="21 min"
        :lectures="Chapter3"
      />
    </div>
  </div>
</template>

<script setup>
import AccordionSection from "~/components/AccordionSection.vue";

const Chapter1 = [
  { title: "GCP Course Introduction", duration: "06:29", isPreview: true },
  { title: "Course Structure Outline", duration: "03:13", isPreview: true },
  {
    title: "GCP Associate Cloud Engineer Exam Blue Print",
    duration: "07:51",
    isPreview: true,
  },
  { title: "We Need You!!!", duration: "00:22", isPreview: false },
  {
    title: "Course Chat with Students and Tech Community",
    duration: "00:23",
    isPreview: false,
  },
];

const Chapter2 = [
  {
    title: "Google Cloud Platform Context",
    duration: "04:23",
    isPreview: false,
  },
  { title: "What is Cloud Computing", duration: "07:57", isPreview: false },
  {
    title: "GCP Services Overview",
    duration: "07:20",
    isPreview: false,
  },
  {
    title: "Google Network Infrastructure",
    duration: "04:45",
    isPreview: false,
  },
  { title: "GCP Regions & Zones", duration: "08:16", isPreview: false },
  {
    title: "GCP User Friendly Pricing",
    duration: "09:51",
    isPreview: false,
  },
];

const Chapter3 = [
  {
    title: "Create Free Tier GCP Account",
    duration: "12:12",
    isPreview: false,
  },
  { title: "Google Cloud Web Console", duration: "08:06", isPreview: false },
  {
    title: "Bonus : Jenkins Master Class Course",
    duration: "00:13",
    isPreview: false,
  },
];
</script>
