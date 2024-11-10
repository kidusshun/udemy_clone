<template>
  <div
    :class="{
      'fixed right-60 top-16 w-[340px] ml-[80rem]': !isFooterVisible,
      'absolute right-60 top-16 w-[340px] ml-[80rem]': isFooterVisible,
    }"
  >
    <CoursePricing />
  </div>
</template>

<script setup>
const isFooterVisible = ref(false);
// Create intersection observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isFooterVisible.value = entry.isIntersecting;
      });
    },
    {
      threshold: 0,
    }
  );

  // Observe the footer
  const footer = document.querySelector("footer");
  if (footer) {
    observer.observe(footer);
  }

  // Cleanup
  onUnmounted(() => {
    if (footer) {
      observer.unobserve(footer);
    }
  });
});
</script>
