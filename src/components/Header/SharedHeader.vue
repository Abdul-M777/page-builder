<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-full">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="bg-white border-b border-gray-200 bg-blue-200"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img
                alt="Workflow"
                class="block lg:hidden h-8 w-auto"
                src="https://www.meeshop.dk/zeus-assets/images//Logo-gron.svg"
              />
              <img
                alt="Workflow"
                class="hidden lg:block h-8 w-auto"
                src="https://www.meeshop.dk/zeus-assets/images//Logo-gron.svg"
              />
            </div>

            <!-- if user is true-->
            <div
              v-if="user"
              class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
            >
              <!--              <router-link :to="{name: 'Home'}"-->
              <!--                           class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium">-->
              <!--                Home-->
              <!--              </router-link>-->

              <router-link
                :to="{ name: 'Dashboard' }"
                class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
              >
                Dashboard
              </router-link>

              <router-link
                :to="{ name: 'Logout' }"
                class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
              >
                Logout
              </router-link>
            </div>

            <!-- if no user -->
            <div
              v-if="!user"
              class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
            >
              <router-link
                :to="{ name: 'Login' }"
                class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
              >
                Login
              </router-link>
              <router-link
                :to="{ name: 'Register' }"
                class="text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1text-sm font-medium"
              >
                Register
              </router-link>
            </div>
          </div>

          <div v-if="user" class="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" class="h-6 w-6" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  <span class="sr-only">Open user menu</span>
                  {{ user.name }}
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
                  class="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <router-link
                      :to="{ name: 'Dashboard' }"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your profile
                    </router-link>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <router-link
                      :to="{ name: 'Logout' }"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </router-link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" aria-hidden="true" class="block h-6 w-6" />
              <XIcon v-else aria-hidden="true" class="block h-6 w-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div v-if="user" class="pt-2 pb-3 space-y-1">
          <!--                    <router-link :to="{name: 'Home'}">-->
          <!--                      <DisclosureButton-->
          <!--                        class="my-2 w-full bg-indigo-50 border-indigo-500 text-indigo-700 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-left">-->
          <!--                        Home-->
          <!--                      </DisclosureButton>-->
          <!--                    </router-link>-->
        </div>

        <div v-if="!user" class="pt-2 pb-3 space-y-1">
          <router-link :to="{ name: 'Login' }">
            <DisclosureButton
              class="my-2 w-full bg-indigo-50 border-indigo-500 text-indigo-700 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-left"
            >
              Login
            </DisclosureButton>
          </router-link>

          <router-link :to="{ name: 'Register' }">
            <DisclosureButton
              class="my-2 w-full bg-indigo-50 border-indigo-500 text-indigo-700 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-left"
            >
              Register
            </DisclosureButton>
          </router-link>
        </div>

        <!-- nav -->
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div v-if="user" class="mt-3 space-y-1">
            <router-link :to="{ name: 'Dashboard' }">
              <DisclosureButton
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                {{ user.name }}
              </DisclosureButton>
            </router-link>
            <router-link :to="{ name: 'Logout' }">
              <DisclosureButton
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Logout
              </DisclosureButton>
            </router-link>
          </div>

          <div v-if="!user" class="mt-3 space-y-1">
            <router-link :to="{ name: 'Register' }">
              <DisclosureButton
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign up today!
              </DisclosureButton>
            </router-link>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script>
// import store
import { useStore } from "vuex";
// import computed
import { computed } from "vue";

// import tailwind ui
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

const userNavigation = [
  {
    name: "Your Profile",
    href: "#",
  },
  {
    name: "Settings",
    href: "#",
  },
  {
    name: "Sign out",
    href: "/logout",
  },
];

export default {
  name: "SharedHeader",

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

  setup() {
    const store = useStore();
    // user details
    const user = computed(() => store.getters["user/getUser"]);

    return {
      user,
      userNavigation,
    };
  },
};
</script>

<style scoped>
#nav {
  justify-content: right;
  padding: 30px;
  display: flex;
  float: right;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #eee;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: darkred;
}

.nav-items {
  display: flex;
  justify-content: end;
  width: 600px;
  gap: 1rem;
}
</style>
