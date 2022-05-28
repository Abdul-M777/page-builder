<template>
  <!-- that is the modal for changing designs -->
  <TransitionRoot as="template" :show="changeNavBarModal">
    <Modal
      @change-footer="changeFooterHandler($event)"
      @close="changeNavBarModal = false"
    />
  </TransitionRoot>
  <!-- editor for footer -->
  <NavBarEditor
    v-if="editNavBar"
    :target-nav-bar-id="targetNavBarId"
    v-model:edit-nav-bar="editNavBar"
    @update-nav-bar-data="navBarData = $event"
    :nav-bar-data="navBarData"
  />
  <div class="">
    <!-- hovering footer to show the button for modal  -->
    <!-- <div @mouseover="showChangeNavBarButton = true" @mouseleave="showChangeNavBarButton = false"> -->
    <button
      type="button"
      v-if="showChangeNavBarButton"
      @click="changeNavBarModal = true"
      class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Change Design
    </button>
    <!-- this navbars is just a demo we cannot use it because of tailwind ui policy -->
    <!-- managing footers desing is now hangled by modal but footer also could be draggable. This supposed to only show how to handle links and create reactive component that we can modify a bit more then classes -->
    <NavBar
      v-if="chosenNavBarId === 1"
      :nav-bar-data="navBarData"
      @open-editor="openEditor($event)"
    />
    <NavBarNd v-if="chosenNavBarId === 2" />
    <!-- </div> -->
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { TransitionRoot } from "@headlessui/vue";
import Modal from "./Modal.vue";
import NavBar from "./NavBar.vue";
import NavBarNd from "./NavBarNd.vue";
import NavBarEditor from "./NavBarEditor.vue";

export default {
  components: {
    NavBar,
    NavBarNd,
    NavBarEditor,
    Modal,
    TransitionRoot,
  },
  data() {
    return {
      //  for desings
      chosenNavBarId: 1,
      //  to show editor
      editNavBar: false,
      // to target a specific element
      targetNavBarId: "",
      // to show modal
      changeNavBarModal: false,
      //  to show button for modal
      showChangeNavBarButton: true,
      // Data for header. Here supposed to be data that will imitate navbars value. And depends on final components we can create reusable structure or structure for each compoenent.
      // For instance each navbar normally have a logo and row with text and those elements we can imitate in data structure and reuse.
      // Probably we could keep footer and header compoennt as html file but then we cannot use router. I just want to mark that here we could have diffrent approaches. That is approach that gives us full Vue value.
      navBarData: {
        redirectSection: [
          {
            id: "1",
            title: "dashboard",
            url: "/dashboard",
            menu: [
              {
                id: uuidv4(),
                name: "test",
                url: "/test",
              },
              {
                id: uuidv4(),
                name: "test2",
                url: "/test2",
              },
            ],
          },
          {
            id: "2",
            title: "team",
            url: "/team",
            menu: [
              {
                id: uuidv4(),
                name: "Abdul",
                url: "/home",
              },
            ],
          },
          {
            id: "3",
            title: "projects",
            url: "/projects",
            menu: [],
          },
          {
            id: "4",
            title: "calendar",
            url: "/calendar",
            menu: [],
          },
        ],
      },
    };
  },
  methods: {
    changeFooterHandler(id) {
      this.chosenNavBarId = id;
      this.changeNavBarModal = false;
    },
    openEditor(data) {
      this.editNavBar = true;
      console.log(data);
      // with this passed data property we could target element.
      if (data?.id) {
        this.targetNavBarId = data?.id;
        console.log(this.targetNavBarId);
      } else {
        this.targetNavBarId = data;
      }
    },
  },
};
</script>
