<template>
  <footer class="text-white">
    <div class="bg-[#1C1D1F]">
      <!-- Top Companies Banner -->
      <div class="mx-auto px-8 mb-12 py-6 border-b">
        <div class="flex items-center justify-between">
          <p class="text-xl font-bold">
            Top companies choose
            <span class="text-[#c0c4fc] text-base">Udemy Business</span>
            to build in-demand career skills.
          </p>
          <div class="flex items-center space-x-8">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
              alt="Nasdaq"
              class="h-12 opacity-80"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
              alt="Volkswagen"
              class="h-12 opacity-80"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
              alt="Box"
              class="h-12 opacity-80"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
              alt="NetApp"
              class="h-12 opacity-80"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
              alt="Eventbrite"
              class="h-12 opacity-80"
            />
          </div>
        </div>
      </div>

      <!-- Skills and Certifications -->
      <div class="max-w-[90rem] mx-auto px-2 py-5">
        <h2 class="text-2xl font-bold mb-8">
          Explore top skills and certifications
        </h2>

        <div class="grid grid-cols-4 gap-8 mb-8 text-sm">
          <!-- Certifications by Issuer -->
          <div>
            <h3 class="font-semibold mb-4">Certifications by Issuer</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/aws" class="text-gray-300 hover:text-white"
                  >Amazon Web Services (AWS) Certifications</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/six-sigma" class="text-gray-300 hover:text-white"
                  >Six Sigma Certifications</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/microsoft" class="text-gray-300 hover:text-white"
                  >Microsoft Certifications</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/cisco" class="text-gray-300 hover:text-white"
                  >Cisco Certifications</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/tableau" class="text-gray-300 hover:text-white"
                  >Tableau Certifications</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/all-certifications"
                  class="text-gray-300 hover:text-white"
                  >See all Certifications</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Web Development -->
          <div>
            <h3 class="font-semibold mb-4">Web Development</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/web-development"
                  class="text-gray-300 hover:text-white"
                  >Web Development</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/javascript"
                  class="text-gray-300 hover:text-white"
                  >JavaScript</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/react" class="text-gray-300 hover:text-white"
                  >React JS</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/angular" class="text-gray-300 hover:text-white"
                  >Angular</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/java" class="text-gray-300 hover:text-white"
                  >Java</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- IT Certifications -->
          <div>
            <h3 class="font-semibold mb-4">IT Certifications</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/aws" class="text-gray-300 hover:text-white"
                  >Amazon AWS</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/aws-practitioner"
                  class="text-gray-300 hover:text-white"
                  >AWS Certified Cloud Practitioner</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/azure" class="text-gray-300 hover:text-white"
                  >AZ-900: Microsoft Azure Fundamentals</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/aws-architect"
                  class="text-gray-300 hover:text-white"
                  >AWS Certified Solutions Architect - Associate</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/kubernetes"
                  class="text-gray-300 hover:text-white"
                  >Kubernetes</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Leadership -->
          <div>
            <h3 class="font-semibold mb-4">Leadership</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/leadership"
                  class="text-gray-300 hover:text-white"
                  >Leadership</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/management"
                  class="text-gray-300 hover:text-white"
                  >Management Skills</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/project-management"
                  class="text-gray-300 hover:text-white"
                  >Project Management</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/productivity"
                  class="text-gray-300 hover:text-white"
                  >Personal Productivity</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/emotional-intelligence"
                  class="text-gray-300 hover:text-white"
                  >Emotional Intelligence</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-8 text-sm mb-6">
          <!-- Certifications by Issuer -->
          <div>
            <h3 class="font-semibold mb-4">Certifications by Skill</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/aws" class="text-gray-300 hover:text-white">
                  Cybersecurity Certification
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/six-sigma" class="text-gray-300 hover:text-white"
                  >Project Management Certification
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/microsoft" class="text-gray-300 hover:text-white"
                  >Cloud Certification
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cisco" class="text-gray-300 hover:text-white"
                  >Data Analytics Certification
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/tableau" class="text-gray-300 hover:text-white"
                  >HR Management Certification
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/all-certifications"
                  class="text-gray-300 hover:text-white"
                  >See all Certifications</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Web Development -->
          <div>
            <h3 class="font-semibold mb-4">Data Science</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/web-development"
                  class="text-gray-300 hover:text-white"
                >
                  Data Science</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/javascript"
                  class="text-gray-300 hover:text-white"
                  >Python</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/react" class="text-gray-300 hover:text-white"
                  >Machine Learning
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/angular" class="text-gray-300 hover:text-white">
                  ChatGPT
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/java" class="text-gray-300 hover:text-white"
                  >Deep Learning</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- IT Certifications -->
          <div>
            <h3 class="font-semibold mb-4">Communication</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/aws" class="text-gray-300 hover:text-white"
                  >Communication Skills
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/aws-practitioner"
                  class="text-gray-300 hover:text-white"
                  >Presentation Skills
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/azure" class="text-gray-300 hover:text-white"
                  >Public Speaking
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/aws-architect"
                  class="text-gray-300 hover:text-white"
                  >Writing PowerPoint</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/kubernetes"
                  class="text-gray-300 hover:text-white"
                  >PowerPoint</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Leadership -->
          <div>
            <h3 class="font-semibold mb-4">
              Business Analytics & Intelligence
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/leadership"
                  class="text-gray-300 hover:text-white"
                  >Microsoft Excel
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/management"
                  class="text-gray-300 hover:text-white"
                  >SQL
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/project-management"
                  class="text-gray-300 hover:text-white"
                  >Microsoft Power BI
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/productivity"
                  class="text-gray-300 hover:text-white"
                  >Data Analysis
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/emotional-intelligence"
                  class="text-gray-300 hover:text-white"
                  >Business Analysis</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#101112] border-b">
      <div class="max-w-[90rem] mx-auto px-2 py-5">
        <div class="grid grid-cols-4 gap-8 mb-8 text-sm">
          <!-- Certifications by Issuer -->
          <div>
            <h3 class="font-semibold mb-4">About us</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/aws" class="text-gray-300 hover:text-white"
                  >Careers</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/six-sigma"
                  class="text-gray-300 hover:text-white"
                >
                  Contact us</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/microsoft" class="text-gray-300 hover:text-white"
                  >Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cisco" class="text-gray-300 hover:text-white"
                  >Investors</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Web Development -->
          <div>
            <h3 class="font-semibold mb-4">Discovery Udemy</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/web-development"
                  class="text-gray-300 hover:text-white"
                  >Get the app</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/javascript"
                  class="text-gray-300 hover:text-white"
                  >Teach on Udemy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/react" class="text-gray-300 hover:text-white"
                  >Plans and Pricing</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/angular" class="text-gray-300 hover:text-white"
                  >Affiliate
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/java" class="text-gray-300 hover:text-white"
                  >Help and Support</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- IT Certifications -->
          <div>
            <h3 class="font-semibold mb-4">Udemy for Business</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/aws" class="text-gray-300 hover:text-white"
                  >Udemy Business</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Leadership -->
          <div>
            <h3 class="font-semibold mb-4">Legal & Accessibility</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/leadership"
                  class="text-gray-300 hover:text-white"
                  >Accessibility statement</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/management"
                  class="text-gray-300 hover:text-white"
                  >Privacy policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/project-management"
                  class="text-gray-300 hover:text-white"
                  >Sitemap
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/productivity"
                  class="text-gray-300 hover:text-white"
                  >Terms</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#101112]">
      <div
        class="max-w-[90rem] mx-auto px-2 py-5 flex justify-between items-center"
      >
        <div class="flex justify-start items-center">
          <NuxtLink to="/" class="text-2xl font-bold">
            <img
              src="public/images/udemy.png"
              alt="Udemy"
              width="91"
              height="34"
            />
          </NuxtLink>
          <p>© 2024 Udemy, Inc.</p>
        </div>
        <div>Cookie settings</div>
        <div class="flex justify-start items-center gap-2">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              /></svg
          ></span>
          English
        </div>
      </div>
    </div>
  </footer>
</template>
