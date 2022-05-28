<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://www.meeshop.dk/zeus-assets/images//Logo-gron.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://www.meeshop.dk/zeus-assets/images//Logo-gron.svg"
              alt="Workflow"
            />
          </div>

          <div if="user" class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              :to="{ name: 'WebsiteAdmin' }"
              class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
            >
              Dashboard
            </router-link>

            <router-link
              :to="{ name: 'WebsiteDesigner' }"
              class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
            >
              Designer
            </router-link>

            <router-link
              :to="{ name: 'Logout' }"
              class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
            >
              Logout
            </router-link>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->

          <Menu as="div" class="ml-3 relative">
            <div if="user">
              <div>
                <MenuButton
                  class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  <span class="sr-only">Open user menu</span>
                  {{ user?.name }}
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Your Profile</a
                    >
                  </MenuItem>
                  <MenuItem>
                    <router-link
                      :to="{ name: 'Logout' }"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </router-link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </div>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <DisclosureButton
          as="a"
          href="#"
          class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Dashboard</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Team</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Projects</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Calendar</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
// import store
import { useStore } from "vuex";
// import computed
import { computed } from "vue";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  // setup
  setup() {
    const store = useStore();

    // user details
    const user = computed(() => store.getters["user/getUser"]);

    return {
      user,
    };
  },
};
</script>
