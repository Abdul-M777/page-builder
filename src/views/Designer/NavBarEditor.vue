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
                  <!-- LinksSections -->
                  <div class="flex flex-col">
                    <!-- iterating over data and depending on this data we rendering elements. Manipulate DOM by data is recommended in vue and this is example. -->
                    <div
                      v-for="element in dataDeepCopy.redirectSection"
                      :key="element.id"
                    >
                      <!-- condition to show only target element -->
                      <div v-if="element.id == targetId" class="pt-10">
                        Title
                        <input
                          v-model="element.title"
                          type="text"
                          class="appearance-none block w-full mb-5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                        <div class="mb-5">
                          URL

                          <input
                            v-model="element.url"
                            type="text"
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />

                          <!-- Iterating over the menus in element -->
                          <div
                            v-for="menu in element.menu"
                            :key="menu.id"
                            class="mb-5"
                          >
                            Name
                            <input
                              type="text"
                              v-model="menu.name"
                              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            URL
                            <input
                              v-model="menu.url"
                              type="text"
                              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              @click="deleteLink(menu.id)"
                              :id="menu.id"
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
                      </div>
                      <!-- When clicking on a menu element, and not on the parent -->
                      <div
                        v-else-if="
                          element.menu.find((x) => x.id === targetMenuId)
                        "
                        class="pt-10"
                      >
                        Name
                        <input
                          v-model="
                            element.menu.find((x) => x.id === targetMenuId).name
                          "
                          type="text"
                          class="appearance-none block w-full mb-5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        URL
                        <input
                          v-model="
                            element.menu.find((x) => x.id === targetMenuId).url
                          "
                          type="text"
                          class="appearance-none block w-full mb-5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                        <button
                          @click="save()"
                          class="basis-full w-full btn bg-green-500 font-bold mb-3"
                        >
                          Save
                        </button>

                        <div>
                          <button
                            @click="deleteLink(targetMenuId)"
                            class="basis-full w-full btn bg-red-500 font-bold mt-3 mb-3"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Some buttons should not appear on all elements -->

                    <button
                      v-if="!targetMenuId"
                      @click="save()"
                      class="basis-full btn bg-green-500 font-bold mb-3"
                    >
                      Save
                    </button>
                    <!-- When clicking on menu element Add Sub Menu button should not appear -->
                    <button
                      v-if="!targetMenuId"
                      @click="addMenu()"
                      class="basis-full btn bg-green-500 font-bold mb-3"
                    >
                      Add Sub Menu
                    </button>

                    <button
                      v-if="showDelete && !targetMenuId"
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
    navBarData: Object,
    targetNavBarId: String,
    targetNavBarMenuId: String,
  },
  componenets: {},
  data: () => ({
    dataDeepCopy: {},
    targetId: "",
    targetMenuId: "",
    showDelete: true,
  }),
  methods: {
    hide() {
      this.$emit("update:editNavBar", false);
    },
    save() {
      this.$emit("updateNavBarData", this.dataDeepCopy);
      this.hide();
    },
    addColumn() {
      this.showDelete = false;
      const newId = uuidv4();
      this.dataDeepCopy.redirectSection.push({
        id: newId,
        title: "",
        url: "",
        menu: [],
      });
      this.targetId = newId;
    },
    addMenu() {
      const newMenuId = uuidv4();
      console.log(this.dataDeepCopy.redirectSection);
      this.dataDeepCopy.redirectSection.forEach((e) => {
        // Checking if the data is from submenu or from parentmenu.
        if (e.id == this.targetMenuId.split("_").shift()) {
          console.log(e);
          e.menu.push({
            id: newMenuId,
            name: "",
            url: "",
          });
          this.targetMenuId = newMenuId;
        } else if (e.id == this.targetId.split("_").shift()) {
          console.log(e);
          e.menu.push({
            id: newMenuId,
            name: "",
            url: "",
          });
        }
      });

      // Do Before the end of your internhip:
      // Fix your DropDown and maybe you need to change the logic.
      // Make it so the header generates only html and not vue.
      // Do this and than create a new project where you create the header with vuejs but it should be like Joachim.
    },
    deleteElement() {
      // Delete the whole menu with submenu.
      const index = this.dataDeepCopy.redirectSection.findIndex(
        (e) => e.id === this.targetNavBarId
      );
      this.dataDeepCopy.redirectSection.splice(index, 1);
      this.save();
    },
    deleteLink(menuId) {
      // Delete one submenu.
      // First find parent menu by index
      // then find submenu by index.
      // Delete by splice.
      this.dataDeepCopy.redirectSection.forEach((e) => {
        if (e.id === this.targetId) {
          const menuIndex = e.menu.findIndex((ev) => ev.menuId === menuId);
          e.menu.splice(menuIndex, 1);
        } else if (e.menu.find((x) => x.id === this.targetMenuId)) {
          const menuIndex = e.menu.findIndex((ev) => ev.menuId === menuId);
          e.menu.splice(menuIndex, 1);
          this.save();
        }
      });
    },
  },
  created() {
    // Deep copy. we can also use spread operator. i just prefer that way. Why we doing deep copy.
    //  Vue is indeed a two-way data binding but Vue state clearly that we dont want to change data from a child compoenet.
    //  So instead of changing data in the child compoenent we are emit events that with new data. And that is approach that vue recommend for us.
    //  That also means that vue is more event-driven then two-way data binding.
    // You can still be confused why we have to use deep copy instead of shallow copy. read about passing by reference and passing by value in JS.
    this.dataDeepCopy = JSON.parse(JSON.stringify(this.navBarData));

    console.log(this.targetNavBarId);

    if (!this.targetNavBarId) {
      this.addColumn();
      // When trying to create a submenu.
    }
    // else if (this.targetNavBarId.includes("addNew")) {
    //   this.targetMenuId = JSON.parse(JSON.stringify(this.targetNavBarId));
    //   this.addMenu();

    //   // When trying to edit in a submenu.
    // }
    // else if (this.targetNavBarId.includes("subMenu")) {
    //   this.targetMenuId = JSON.parse(JSON.stringify(this.targetNavBarId));
    //   this.targetMenuId = this.targetMenuId.split("_").shift();
    // }
    else {
      this.targetId = JSON.parse(JSON.stringify(this.targetNavBarId));
    }
  },
};
</script>
