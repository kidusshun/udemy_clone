<template>
  <div class="outline outline-white outline-2 -z-1">
    <div class="relative">
      <img
        src="https://img-c.udemycdn.com/course/240x135/2827592_53fc_9.jpg"
        alt="Course preview"
        class="w-full h-[200px] object-cover"
      />
      <button
        class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50"
      >
        <div
          class="w-16 h-16 rounded-full bg-white flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h2 class="text-white font-bold mt-12">Preview this course</h2>
      </button>
    </div>

    <div class="border rounded-b-lg bg-white shadow-xl">
      <div class="flex border-b">
        <button
          class="flex-1 py-3 border-b-2 font-bold"
          :class="selectedTab === 'Personal' ? 'border-black' : 'text-gray-600'"
          @click="selectedTab = 'Personal'"
        >
          Personal
        </button>
        <button
          class="flex-1 py-3 border-b-2 font-bold"
          :class="selectedTab === 'Teams' ? 'border-black' : 'text-gray-600'"
          @click="selectedTab = 'Teams'"
        >
          Teams
        </button>
      </div>

      <div class="p-6">
        <div v-if="selectedTab === 'Personal'">
          <h2 class="text-xl font-bold mb-2">
            Subscribe to Udemy's top courses
          </h2>
          <p class="text-gray-700 mb-4">
            Get this course, plus 12,000+ of our top-rated courses, with
            Personal Plan.
            <NuxtLink to="/learn-more" class="text-purple-600 font-medium"
              >Learn more</NuxtLink
            >
          </p>

          <button
            class="w-full bg-purple-600 text-white py-3 rounded font-medium mb-2 hover:bg-purple-700"
          >
            Try Personal Plan for free
          </button>

          <p class="text-center text-sm text-gray-600">
            Starting at $10.00 per month after trial
          </p>
          <p class="text-center text-sm text-gray-600 mb-4">Cancel anytime</p>

          <div class="flex items-center gap-2 my-4">
            <div class="h-[1px] bg-gray-300 flex-1"></div>
            <span class="text-gray-500">or</span>
            <div class="h-[1px] bg-gray-300 flex-1"></div>
          </div>

          <div class="text-xl font-bold mb-4">$79.99</div>

          <button
            class="w-full border border-black py-3 mb-4 font-bold hover:bg-gray-50"
          >
            Add to cart
          </button>

          <p class="text-center text-sm text-gray-600">
            30-Day Money-Back Guarantee
          </p>
          <p class="text-center text-sm text-gray-600 mb-4">
            Full Lifetime Access
          </p>

          <div class="flex justify-between text-sm font-medium mb-4">
            <button class="text-gray-700">Share</button>
            <button class="text-gray-700">Gift this course</button>
            <button class="text-gray-700">Apply Coupon</button>
          </div>

          <div class="border rounded p-3 mb-4 relative">
            <div class="flex justify-between items-center">
              <div>
                <span class="font-medium">LETSLEARNNOW</span> is applied
                <div class="text-sm text-gray-500">Udemy coupon</div>
              </div>
              <button class="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div class="flex">
            <input
              type="text"
              placeholder="Enter Coupon"
              class="flex-1 border rounded-l px-3 py-2 focus:outline-none focus:border-gray-400"
            />
            <button
              class="bg-gray-900 text-white px-6 py-2 rounded-r font-medium hover:bg-gray-800"
            >
              Apply
            </button>
          </div>
        </div>
        <div v-else>
          <img
            src="/images/udemy-business.png"
            alt="udemy business"
            width="141"
            height="24"
          />
          <p class="text-black mb-4 text-sm">
            Subscribe to this course and 27,000+ top‑rated Udemy courses for
            your organization.
          </p>

          <button
            class="w-full bg-purple-600 text-white py-3 font-bold mb-2 hover:bg-purple-700"
          >
            Try Udemy Business
          </button>

          <div class="flex items-start space-x-3 mt-2">
            <div class="mr-1">✓</div>
            <p class="text-sm">For teams of 2 or more users</p>
          </div>
          <div class="flex items-start space-x-3 mt-2">
            <div class="mr-1">✓</div>
            <p class="text-sm">27,000+ fresh & in-demand courses</p>
          </div>
          <div class="flex items-start space-x-3 mt-2">
            <div class="mr-1">✓</div>
            <p class="text-sm">Learning Engagement tools</p>
          </div>
          <div class="flex items-start space-x-3 mt-2">
            <div class="mr-1">✓</div>
            <p class="text-sm">SSO and LMS Integrations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePricing",
  data() {
    return {
      selectedTab: "Personal",
    };
  },
};
</script>
