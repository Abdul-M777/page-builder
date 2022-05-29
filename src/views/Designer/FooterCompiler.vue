<template>
  <div>
    <!-- I extensively describe logic in navbar section. here i will just mark differences and new elements. -->
    <TransitionRoot as="template" :show="changeFooterModal">
      <Modal dialog @change="changeFooterHandler($event)" @close="changeFooterModal = false">
        <template v-slot:header> Footers </template>
      </Modal>
    </TransitionRoot>
    <!-- this v-model is quite new syntax for me a always used ".sync" -->
    <FooterEditor
      v-if="editFooter"
      v-model:edit-footer="editFooter"
      v-model:edit-social-media="editSocialMedia"
      :footer-data="footerData"
      :social-media-icons="socialMediaIcons"
      :edit-social-media="editSocialMedia"
      :target-footer-section-id="targetFooterSection?.id"
      :target-footer-section-linkId="targetFooterSection?.linkId"
      @update-footer-data="footerData = $event"
    />
    <div class="">
      <!-- <div @mouseover="showChangeFooterButton = true" @mouseleave="showChangeFooterButton = false"> -->
      <button
        type="button"
        v-if="showChangeFooterButton"
        @click="changeFooterModal = true"
        class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Change Design
      </button>
      <Footer
        v-if="chosenFooterId === 1"
        :footer-data="footerData"
        :social-media-icons="socialMediaIcons"
        @open-editor="openEditor($event)"
      />
      <FooterNd
        v-if="chosenFooterId === 2"
        :footer-data="footerData"
        :social-media-icons="socialMediaIcons"
        @open-Editor="openEditor($event)"
      />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { TransitionRoot } from "@headlessui/vue";
import { v4 as uuidv4 } from "uuid";
import FooterEditor from "./FooterEditor.vue";
import Footer from "./Footer.vue";
import FooterNd from "./FooterNd.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    FooterEditor,
    Footer,
    FooterNd,
    Modal,
    TransitionRoot,
  },
  data() {
    return {
      chosenFooterId: 1,
      editFooter: false,
      showChangeFooterButton: true,
      editSocialMedia: false,
      targetFooterSection: "",
      changeFooterModal: false,
      // data that describe what icons we offering to implemnent.
      socialMediaIcons: [
        {
          name: "facebook",
          class: "fab fa-facebook",
        },
        {
          name: "instagram",
          class: "fab fa-instagram",
        },
        {
          name: "twitter",
          class: "fab fa-twitter",
        },
        {
          name: "linkedin",
          class: "fab fa-linkedin-in",
        },
      ],
      // To better understand this structure you can imagine that we have an array of object and its equal to array of columns in footer section.
      //  then each column have title, unic id and list. List is again array of object that is equal to array of links in one column. each link have id url, text.
      footerData: {
        redirectSection: [
          {
            title: "About us",
            id: uuidv4(),
            list: [
              {
                linkId: uuidv4(),
                url: "https://youtube.com/",
                text: "Redirect to my website",
              },
              {
                linkId: uuidv4(),
                url: "https://www.google.dk/",
                text: "Google",
              },
            ],
          },
          {
            title: "Information",
            id: uuidv4(),
            list: [
              {
                linkId: uuidv4(),
                url: "https://youtube.com/",
                text: "Redirect to my website",
              },
              {
                linkId: uuidv4(),
                url: "https://www.google.dk/",
                text: "Google",
              },
            ],
          },
        ],
        socialMediaSection: [
          {
            name: "instagram",
            url: "https://www.instagram.com/",
          },
        ],
      },
    };
  },
  methods: {
    changeFooterHandler(id) {
      this.chosenFooterId = id;
      this.changeFooterModal = false;
    },
    openEditor(data) {
      // here we validate with what types of data we would like to open editor
      if (data === "socialMedia") {
        this.editSocialMedia = true;
        this.editFooter = true;
      } else if (!data) {
        this.targetFooterSection = [];
        this.editFooter = true;
      } else if (data.id) {
        this.targetFooterSection = data;
        this.editFooter = true;
      } else if (data.linkId) {
        this.targetFooterSection = data;
        this.editFooter = true;
      }
    },
  },
};
</script>
