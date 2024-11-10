<template>
  <div class="bg-white border max-w-[calc(100%-550px)] ml-16 mt-1">
    <div class="w-full bg-[#f7f9fa]">
      <div class="mb-4 flex justify-between items-start px-9 py-6">
        <h2 class="text-lg font-bold">
          Prepare for your certifications with this course.
          <span
            ><NuxtLink
              to="/learn-more"
              class="text-[#371783] font-bold text-base underline"
              >Learn more</NuxtLink
            ></span
          >
        </h2>
      </div>
    </div>

    <div class="space-y-6 p-6">
      <div class="flex items-center space-x-4">
        <img
          src="/images/cloud-developer.png"
          alt="Professional Cloud Developer"
          class="w-16 h-16"
        />
        <div>
          <h3 class="font-bold text-[#371783]">Professional Cloud Developer</h3>
          <p class="text-sm text-gray-600">Issued by Google Cloud</p>
        </div>
      </div>

      <div
        class="flex items-center space-x-4 border-t pt-2"
        :class="{ hidden: !showMore }"
      >
        <img
          src="/images/cloud-architect.png"
          alt="Professional Cloud Architect"
          class="w-16 h-16"
        />
        <div>
          <h3 class="font-bold text-[#371783]">Professional Cloud Architect</h3>
          <p class="text-sm text-gray-600">Issued by Google Cloud</p>
        </div>
      </div>

      <div
        class="flex items-center space-x-4 border-t pt-2"
        :class="{ hidden: !showMore }"
      >
        <img
          src="/images/cloud-engineer.png"
          alt="Associate Cloud Engineer"
          class="w-16 h-16"
        />
        <div>
          <h3 class="font-bold text-[#371783]">Associate Cloud Engineer</h3>
          <p class="text-sm text-gray-600">Issued by Google Cloud</p>
        </div>
      </div>
    </div>

    <button
      @click="showMore = !showMore"
      class="mt-4 ml-6 text-[#371783] font-bold flex items-center"
    >
      {{ showMore ? "Show less" : "Show more" }}
      <span class="ml-1" :class="{ 'transform rotate-180': showMore }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-3"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script setup>
const showMore = ref(false);
</script>
