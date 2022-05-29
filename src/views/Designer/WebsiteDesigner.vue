<template>
  <div class="sm:flex justify-center items-center py-4">
    <h1 class="content-center text-lg">Website Name</h1>
  </div>
  <div class="sm:flex sm:grid-cols-6 sm:gap-2 justify-end sm:mx-4 border-b items-center py-4">
    <div class="sm:col-span-6 items-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span class="pr-2">Save</span>
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>

    <div class="sm:col-span-6 items-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span class="pr-2">Preview</span>
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="sm:grid sm:grid-cols-6 sm:gap-2 mt-12 sm:mx-10 min-h-min">
    <!--    start -->
    <div class="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto">
      <div class="flex-grow flex flex-col h-screen">
        <nav aria-label="Sidebar" class="flex-1 px-2 space-y-1">
          <div
            class="text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Elements
          </div>

          <!--   submenu     -->
          <Disclosure v-slot="{ open }" as="div" class="space-y-1">
            <DisclosureButton
              class="text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                :class="[
                  open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                  'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                ]"
                aria-hidden="true"
                viewBox="0 0 20 20"
              >
                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
              </svg>
              Sections
            </DisclosureButton>

            <DisclosurePanel class="space-y-1">
              <draggable
                :group="{ name: 'html-components', pull: 'clone', put: false }"
                :list="list1"
                :sort="false"
                class="dragArea list-group cursor-pointer mx-2 col-span-1"
                item-key="id"
                @change="log"
              >
                <template #item="{ element }">
                  <DisclosureButton
                    class="text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md"
                  >
                    <svg
                      class="text-gray-400 rotate-90 mr-2 flex-shrink-0 h-2 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                    {{ element.description }}
                  </DisclosureButton>
                </template>
              </draggable>
            </DisclosurePanel>
          </Disclosure>
        </nav>
      </div>
    </div>
    <!--    end -->
    <div class="w-screen">
      <div class="w-9/12 bg-white">
        <Header></Header>

        <draggable
          :list="list2"
          class="dragArea list-group col-span-5"
          group="html-components"
          item-key="id"
          @change="log"
        >
          <template #item="{ element }">
            <section v-html="element.components"></section>
          </template>
        </draggable>
        <Footer></Footer>
      </div>
    </div>

    <!-- editor sidebar here -->
    <EditorSideMenu
      :element="htmlElementSelectorItem"
      :open="menuOpened"
      @close="menuOpened = false"
    ></EditorSideMenu>
    <!-- editor sidebar here -->
  </div>
</template>

<script>
import WebsiteAdminHeader from "@/components/Header/WebsiteAdminHeader";
import EditorSideMenu from "@/components/Code-Editor/EditorSideMenu";
import draggable from "vuedraggable";
import axios from "axios";
import { onMounted, ref } from "vue";
// router
import { useRouter } from "vue-router";
// store
import { useStore } from "vuex";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { PencilIcon } from "@heroicons/vue/outline";
import Header from "./HeaderCompiler.vue";
import Footer from "./FooterCompiler.vue";

export default {
  name: "WebsiteDesigner",
  display: "Clone",
  order: 2,

  components: {
    WebsiteAdminHeader,
    EditorSideMenu,
    draggable,
    //
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    PencilIcon,
    Header,
    Footer,
  },

  setup() {
    // editor menu
    const htmlElementSelectorItem = ref("");
    const menuOpened = ref(false);
    // router
    const router = useRouter();
    // store
    const store = useStore();
    //
    //
    // list1
    const list1 = ref([]);
    // list2
    const list2 = ref([]);
    //

    //
    // code editor
    const editEnabled = ref(false);
    const code = ref("");
    const codeElement = ref({});
    //
    //
    // method
    const log = function (event) {
      window.console.log("log:", event);
      startEditListener();
    };

    // get file
    const getFile = function () {
      // url's
      const urls = ["1.html", "2.html", "3.html", "4.html"];
      const descriptions = [
        "Subscribe to newsletter",
        "Our offices",
        "Meet our team",
        "Latest blogs",
      ];

      try {
        urls.forEach(async (url, i) => {
          const response = await fetch(`/html/${url}`);
          const data = await response.text();
          //  push
          list1.value.push({
            name: i + 1,
            id: 1 + i,
            description: descriptions[i],
            components: data,
          });
        });
      } catch (err) {
        console.log("error trying getting html components. Error message:", err);
      }
    };
    //
    // edit html elements which are having unique id's
    const startEditListener = function () {
      // find all editable-element's
      const editableElementsAll = document.querySelectorAll("[editable-element]");

      // eventlistener on each editable element
      editableElementsAll.forEach((singleHtmlElement) => {
        singleHtmlElement.addEventListener("click", (e) => {
          htmlElementSelectorItem.value = e.currentTarget;
          console.log(e.currentTarget);

          // open slider menu
          menuOpened.value = true;
        });
      });
    };
    //
    //
    //

    const cloneComp = function (comp) {
      // Deep clone component
      const clonedComp = { ...comp };

      // Generate unix
      const currentDate = new Date();
      const timestamp = currentDate.getTime();

      // Set id of clone to timestamp giving it a unique id
      clonedComp.id = timestamp;

      // Return to the cloned element to be dropped
      return clonedComp;
    };
    //
    //

    const closeEditing = function () {
      editEnabled.value = false;
      startEditListener();
    };

    const moveComponent = function (e, dir) {
      // Declare container of components and current component
      const allComponents = document.querySelector("#pagebuilder").children;
      const currentComponent = e.currentTarget.parentElement.parentElement.parentElement;

      // Get index of chosen component
      const currentIndex = Array.from(allComponents).indexOf(currentComponent);

      // Return if moving first element backwards or last element forwards
      if (
        (currentIndex === 0 && dir === -1) ||
        (currentIndex === list2.value.length - 1 && dir === 1)
      )
        return;

      // Store chosen component
      let comp = list2.value[currentIndex];

      // Remove current object
      // Move it forwards if negative dir or forward if positive dir
      list2.value.splice(currentIndex, 1);
      list2.value.splice(currentIndex + 1 * dir, 0, comp);

      // Follow element to new location
      allComponents[currentIndex + 1 * dir].scrollIntoView({
        behavior: "smooth",
      });
    };

    // preview current design in external browser tab
    const previewCurrentDesign = function () {
      // html array
      const allAddedHtmlComponents = ref([]);

      document.querySelectorAll("[render-html]").forEach((html) => {
        allAddedHtmlComponents.value.push(html.outerHTML);
      });
      //
      store.dispatch(
        "websiteDesigner/setCurrentHtmlComponenstAddedToDesigner",
        allAddedHtmlComponents.value
      );
      //
      //
      //
      // push to website preview
      const routeData = router.resolve({ name: "WebsitePreview" });
      window.open(routeData.href, "_blank");
      // end function
    };
    //
    //
    //
    onMounted(() => {
      getFile();
    });
    //
    return {
      list1,
      list2,
      log,
      menuOpened,
      htmlElementSelectorItem,
      editEnabled,
      code,
      // elementId,
    };
  },
};
</script>

<style>
[editable-element]:hover {
  box-shadow: inset 0 0 0 1px #0bb783, 0 0 0 2px #0bb783;
  border-radius: 2px;
  cursor: pointer;
}

[code-editor] {
  cursor: pointer;
}
</style>
