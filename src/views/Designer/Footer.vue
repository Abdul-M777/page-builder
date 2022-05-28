<template>
  <div class="w-10/12 mx-auto" ref="elHook">
    <section class="py-12 lg:py-20">
      <div class="container mx-auto px-4 mb-12 md:mb-20">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
            <p class="mb-6 max-w-sm text-base text-gray-500">
              Nem og hurtig webshop løsning.
            </p>
            <div class="flex">
              <div
                class="mr-3"
                v-for="icon in footerData.socialMediaSection"
                :key="icon.name"
              >
                <a :href="icon.url"><i :class="findClass(icon.name)"></i></a>
              </div>
            </div>
            <button
              @click="$emit('openEditor', 'socialMedia')"
              type="button"
              class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Social
            </button>
          </div>
          <div class="w-full lg:w-2/3 px-4">
            <div class="flex flex-wrap justify-start-mx-4">
              <div
                v-for="row in footerData.redirectSection"
                :key="row.id"
                class="relative px-4 pt-1 mb-8 lg:mb-0"
                @mouseover="showBtn = row.id"
                @mouseleave="showBtn = false"
              >
                <div>
                  <button
                    v-if="showBtn === row.id"
                    @click="$emit('openEditor', row)"
                    class="flex justify-center border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-1/4"
                  >
                    Edit
                  </button>
                </div>
                <h3 class="mb-6 text-base font-medium">{{ row.title }}</h3>
                <ul class="text-sm">
                  <li v-for="link in row.list" :key="link.linkId" class="mb-4">
                    <a
                      class="text-gray-500 hover:text-gray-600"
                      :href="link.url"
                      @click.prevent="click"
                      @click="$emit('openEditor', link)"
                      >{{ link.text }}</a
                    >
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
      </div>
      <p class="text-center text-sm text-gray-500 pt-8 px-4 border-t">
        Copyright © 2019-2021 Meeshop Aps - Marielundvej 17F - 2730 Herlev -
        CVR: 40984593
      </p>
    </section>
  </div>
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
  mounted() {},

  updated() {
    // this is the way to acces plain html to save it. There wont be any of looping and no vue syntax. you accesing compiled html.
  },
};
</script>

<style scoped>
.page-builder-visible {
  display: block !important;
}
</style>
