<template>
  <div>
    <NavBar />
    <main class="relative w-full">
      <CourseHeader />
      <div class="fixed right-60 top-16 w-[340px] ml-[80rem]">
        <CoursePricing />
      </div>
      <div class="w-full flex pt-12">
        <div class="mx-auto w-[100%] max-w-7xl">
          <CourseCertifications />
          <CourseWhatYouLearn />
          <CourseRelatedTopics />
          <CourseIncludes />
          <CourseTestimonial />
          <CourseChapters />
          <CourseRequirements />
          <CourseDescription />
          <CourseRecommenations />
          <CourseBoughtTogether />
          <Instructor />
          <Reviews />
          <Explore />
        </div>
      </div>
    </main>
  </div>
</template>
