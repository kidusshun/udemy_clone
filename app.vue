<template>
  <div>
    <NavBar />
    <main class="relative w-full">
      <CourseHeader />
      <CoursePricingWrapper />
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
    <Footer />
  </div>
</template>

<script>
import CoursePricingWrapper from "./components/CoursePricingWrapper.vue";

export default {
  data() {
    return {
      isFooterInView: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkFooterInView);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkFooterInView);
  },
  methods: {
    checkFooterInView() {
      const footer = document.getElementById("footer");
      const rect = footer.getBoundingClientRect();
      this.isFooterInView = rect.top < window.innerHeight && rect.bottom >= 0;
    },
  },
};
</script>

<style>
.absolute {
  position: absolute;
}
</style>
