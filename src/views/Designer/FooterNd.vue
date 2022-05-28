<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="gap-8 xl:col-span-4">
          <div class="flex">
            <div
              v-for="row in footerData.redirectSection"
              :key="row.id"
              class="ml-5 mr-3"
              @mouseover="showBtn = row.id"
              @mouseleave="showBtn = false"
            >
              <div>
                <button
                  v-if="showBtn === row.id"
                  @click="$emit('openEditor', row)"
                  class="flex justify-center border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-1/2"
                >
                  Edit
                </button>
              </div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                {{ row.title }}
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="link in row.list" :key="link.linkId">
                  <a
                    :href="link.url"
                    class="text-base text-gray-300 hover:text-white"
                    @click.prevent="click"
                    @click="$emit('openEditor', link)"
                  >
                    {{ link.text }}
                  </a>
                </li>
              </ul>
              <!-- <button @click="$emit('openEditor', row)" type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit Column</button> -->
            </div>
            <button
              @click="$emit('openEditor')"
              type="button"
              class="h-8 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusSmIconSolid class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div
        class="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0"
      >
        <div>
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            Subscribe to our newsletter
          </h3>
          <p class="mt-2 text-base text-gray-300">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autocomplete="email"
            required=""
            class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div
        class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <div v-for="icon in footerData.socialMediaSection" :key="icon.name">
            <a class="text-gray-400 hover:text-gray-300" :href="icon.url"
              ><i :class="findClass(icon.name)"></i
            ></a>
          </div>
          <button
            @click="$emit('openEditor', 'socialMedia')"
            type="button"
            class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit Social
          </button>
        </div>
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid";

export default {
  props: {
    footerData: Object,
    socialMediaIcons: Array,
  },
  data() {
    return {
      showBtn: false,
    };
  },
  components: {
    PlusSmIconSolid,
  },
  methods: {
    findClass(name) {
      return this.socialMediaIcons.find((e) => e.name === name)?.class;
    },
  },
};
</script>

<style scoped>
.page-builder-visible {
  display: block !important;
}
</style>
