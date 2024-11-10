<template>
  <div class="bg-white p-6 max-w-[calc(100%-550px)] ml-16 mt-8">
    <h1 class="text-3xl font-bold mb-6">Requirements</h1>
    <div>
      <ul class="custom-bullets">
        <li v-for="(item, index) in items" :key="index" class="text-sm">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const items = [
  "You have an attitude to learn while having fun :)",
  "Zero Knowledge of Google Cloud Platform is expected",
  "Journey to become a Google Cloud Certified Professional Cloud Architect is NOT a cake walk. You need a lot of patience and dedication!",
  "You would need a valid debit or credit card to create your Google Cloud Platform account",
];
</script>

<style scoped>
.custom-bullets {
  list-style-type: none; /* Remove default bullets */
  padding-left: 20px; /* Add some padding */
}

.custom-bullets li::before {
  content: "•"; /* Add a bullet */
  color: blue; /* Change the color */
  font-size: 20px; /* Change the size */
  margin-right: 20px; /* Space between bullet and text */
}
</style>
