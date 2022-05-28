<template>
  <div
    class="fixed z-30 inset-0"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-auto">
      <div class="absolute inset-0 w-full" @click="hide()"></div>

      <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div
          class="bg-white shadow-xl dark:bg-gray-dark relative w-screen max-w-md"
        >
          <div
            class="absolute top-0 right-5 ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
          >
            <button
              class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                @click="hide()"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            class="h-full flex flex-col py-6 bg-white shadow-xl mt-14 dark:bg-gray-dark"
          >
            <div class="px-4 sm:px-6">
              <h2
                class="text-lg font-medium text-gray-900 dark:text-gray-100"
                id="slide-over-title"
              >
                Edit element
              </h2>
            </div>
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <div class="absolute inset-0 px-4 sm:px-6">
                <div class="h-full" aria-hidden="true">
                  <!-- SocialIconsSection -->
                  <div class="flex flex-col" v-if="editSocialMedia">
                    <div
                      v-for="icon in dataDeepCopy.socialMediaSection"
                      :key="icon.id"
                    >
                      <div>
                        <label
                          for="location"
                          class="block text-sm font-medium text-gray-700"
                          >Icon</label
                        >
                        <select
                          v-model="icon.name"
                          id="location"
                          name="location"
                          class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                          <option
                            v-for="icon in socialMediaIcons"
                            :key="icon.name"
                          >
                            {{ icon.name }}
                          </option>
                        </select>
                      </div>
                      URL
                      <input
                        v-model="icon.url"
                        type="text"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button
                      @click="addSocialIcon()"
                      class="basis-full btn bg-green-500 font-bold mb-3"
                    >
                      Add Social Icon
                    </button>
                    <button
                      @click="save()"
                      class="basis-full btn bg-green-500 font-bold"
                    >
                      Save
                    </button>
                  </div>
                  <!-- LinksSections -->
                  <div class="flex flex-col" v-else>
                    <div
                      v-for="column in dataDeepCopy.redirectSection"
                      :key="column.id"
                    >
                      <div v-if="column.id === targetId" class="pt-10">
                        Title
                        <input
                          v-model="column.title"
                          type="text"
                          class="appearance-none block w-full mb-5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <div
                          v-for="link in column.list"
                          :key="link.id"
                          class="mb-5"
                        >
                          Link
                          <input
                            v-model="link.text"
                            type="text"
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          URL
                          <input
                            v-model="link.url"
                            type="text"
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            @click="deleteLink(link.linkId)"
                            :id="link.id"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                      <!-- LinksSections EDIT -->
                      <div
                        v-if="
                          column.list.find((x) => x.linkId === targetLinkId)
                        "
                      >
                        Link
                        <input
                          v-model="
                            column.list.find((x) => x.linkId === targetLinkId)
                              .text
                          "
                          type="text"
                          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        URL
                        <input
                          v-model="
                            column.list.find((x) => x.linkId === targetLinkId)
                              .url
                          "
                          type="text"
                          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <div>
                          <button
                            @click="deleteLink(targetLinkId)"
                            class="basis-full w-full btn bg-red-500 font-bold mt-3 mb-3"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      v-if="!targetLinkId"
                      @click="addLink()"
                      class="basis-full btn bg-green-500 font-bold mb-3"
                    >
                      Add Link
                    </button>
                    <button
                      @click="save()"
                      class="basis-full btn bg-green-500 font-bold mb-3"
                    >
                      Save
                    </button>
                    <button
                      v-if="!targetLinkId && showDelete"
                      @click="deleteElement()"
                      class="basis-full btn bg-red-500 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    footerData: Object,
    targetFooterSectionId: String,
    targetFooterSectionLinkId: String,
    socialMediaIcons: Array,
    editSocialMedia: Boolean,
  },
  componenets: {},
  data: () => ({
    dataDeepCopy: {},
    targetId: "",
    targetLinkId: "",
    showDelete: true,
  }),
  methods: {
    hide() {
      this.$emit("update:editSocialMedia", false);
      this.$emit("update:editFooter", false);
    },
    deleteElement() {
      const index = this.dataDeepCopy.redirectSection.findIndex(
        (e) => e.id === this.targetId
      );
      this.dataDeepCopy.redirectSection.splice(index, 1);
      this.save();
    },
    deleteLink(linkId) {
      this.dataDeepCopy.redirectSection.forEach((e) => {
        if (e.id === this.targetId) {
          const linkIndex = e.list.findIndex((ev) => ev.linkId === linkId);
          e.list.splice(linkIndex, 1);
        } else if (e.list.find((x) => x.linkId === this.targetLinkId)) {
          const linkIndex = e.list.findIndex((ev) => ev.linkId === linkId);
          e.list.splice(linkIndex, 1);
          this.save();
        }
      });
    },
    save() {
      this.$emit("updateFooterData", this.dataDeepCopy);
      this.hide();
    },
    // right now we can add new column new link new social icons and deleting them. So far there is no limit for that but is fairly simple to do.
    addLink() {
      this.dataDeepCopy.redirectSection.forEach((e) => {
        if (e.id === this.targetId) {
          console.log(e);
          e.list.push({
            linkId: uuidv4(),
            url: "",
            text: "",
          });
        }
      });
    },
    addSocialIcon() {
      this.dataDeepCopy.socialMediaSection.push({
        name: "facebook",
        url: "",
      });
    },
    addColumn() {
      this.showDelete = false;
      const newColumnId = uuidv4();
      this.dataDeepCopy.redirectSection.push({
        title: "",
        id: newColumnId,
        list: [
          {
            linkId: uuidv4(),
            url: "",
            text: "",
          },
        ],
      });
      this.targetId = newColumnId;
    },
  },
  created() {
    // Deep copy
    this.dataDeepCopy = JSON.parse(JSON.stringify(this.footerData));
    if (
      !this.targetFooterSectionId &&
      !this.editSocialMedia &&
      !this.targetFooterSectionLinkId
    ) {
      this.addColumn();
    } else if (this.targetFooterSectionId) {
      this.targetId = JSON.parse(JSON.stringify(this.targetFooterSectionId));
    } else if (this.targetFooterSectionLinkId) {
      this.targetLinkId = JSON.parse(
        JSON.stringify(this.targetFooterSectionLinkId)
      );
    }
  },
};
</script>
