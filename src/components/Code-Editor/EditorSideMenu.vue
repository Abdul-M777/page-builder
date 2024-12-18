<template>
  <TransitionRoot :show="open" as="template">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="$emit('close')">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900"
                      >Editor menu
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="button"
                        @click="$emit('close')"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon aria-hidden="true" class="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->

                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-gray-900 dark:text-gray-100"
                      for="text-weight"
                      >Font Size</label
                    >
                    <select
                      id="text-weight"
                      v-model="fontSize"
                      class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      name="text-weight"
                      @change="changeTextSize()"
                    >
                      <option disabled selected value="">Default size</option>
                      <option
                        v-for="size in sizes"
                        :key="size"
                        :class="'text-' + size"
                        :value="size"
                      >
                        {{ size.toUpperCase() }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-gray-900 dark:text-gray-100"
                      for="text-weight"
                      >Font Weight</label
                    >
                    <select
                      id="text-weight"
                      v-model="fontWeight"
                      class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      name="text-weight"
                      @change="changeTextWeight()"
                    >
                      <option disabled selected value="">Default weight</option>
                      <option
                        v-for="weight in weights"
                        :key="weight"
                        :class="'text-' + weight"
                        :value="weight"
                      >
                        {{ weight.toUpperCase() }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-gray-900 dark:text-gray-100"
                      for="text-weight"
                      >Font Family</label
                    >
                    <select
                      id="text-weight"
                      v-model="fontFamily"
                      class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      name="text-weight"
                      @change="changeFontFamily()"
                    >
                      <option disabled selected value="">Default font family</option>
                      <option
                        v-for="family in families"
                        :key="family"
                        :class="'font-' + family"
                        :value="family"
                      >
                        {{ family.toUpperCase() }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-gray-900 dark:text-gray-100"
                      for="text-weight"
                      >Font Style</label
                    >
                    <select
                      id="text-weight"
                      v-model="fontStyle"
                      class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      name="text-weight"
                      @change="changeFontStyle()"
                    >
                      <option disabled selected value="">Default style</option>
                      <option
                        v-for="style in styles"
                        :key="style"
                        :class="'font-' + style"
                        :value="style"
                      >
                        {{ style.toUpperCase() }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-900 mb-1 dark:text-gray-100"
                      >Opacity</label
                    >
                    <div class="flex w-full">
                      <input
                        id="opacity"
                        v-model="opacityIndex"
                        class="flex-grow"
                        max="14"
                        min="0"
                        name="opacity"
                        type="range"
                        @input="changeOpacity()"
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-900 mb-1 dark:text-gray-100">
                      Text color <i>— choose predefined color</i></label
                    >

                    <div class="flex flex-row mb-2">
                      <label class="mr-3" for="colorpicker">Choose custom color</label>
                      <input
                        id="colorpicker-txt"
                        v-model="customTextColor"
                        name="colorpicker"
                        type="color"
                        @input="changeTextColorCustom()"
                      />
                    </div>

                    <div class="grid grid-cols-11 gap-1">
                      <div
                        v-for="color in colors"
                        :key="color"
                        :class="'bg-' + color"
                        class="h-6 w-6 cursor-pointer border border-gray-400 solid"
                        @click="changeTextColor('text-' + color)"
                      ></div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-900 mb-1 dark:text-gray-100">
                      Background color <i>— choose predefined color</i></label
                    >
                    <div class="grid grid-cols-11 gap-1">
                      <div
                        v-for="color in colors"
                        :key="color"
                        :class="'bg-' + color"
                        class="h-6 w-6 cursor-pointer border border-gray-400 solid"
                        @click="changeBackgroundColor('bg-' + color)"
                      ></div>
                    </div>
                  </div>

                  <!-- End Replace with your content -->
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    element: {
      // type: String,
      required: true,
    },
  },
  setup(props) {
    // Text size
    const fontSize = ref("");
    const sizes = ref([
      "xs",
      "sm",
      "base",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
      "9xl",
    ]);

    // font weight
    const fontWeight = ref("");
    const weights = ref([
      "thin",
      "extralight",
      "light",
      "normal",
      "medium",
      "semibold",
      "bold",
      "extrabold",
      "black",
    ]);

    // font family
    const fontFamily = ref("");
    const families = ref(["sans", "serif", "mono"]);

    // font style
    const fontStyle = ref("");
    const styles = ref(["italic", "not-italic"]);

    // opacity
    const opacityIndex = ref("");
    const opacities = ref([
      "0",
      "5",
      "10",
      "20",
      "25",
      "30",
      "40",
      "50",
      "60",
      "70",
      "75",
      "80",
      "90",
      "95",
      "100",
    ]);

    // colors
    const colors = ref([
      "white",
      "black",
      "gray-50",
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-500",
      "gray-600",
      "gray-700",
      "gray-800",
      "gray-900",
      "red-50",
      "red-100",
      "red-200",
      "red-300",
      "red-400",
      "red-500",
      "red-600",
      "red-700",
      "red-800",
      "red-900",
      "yellow-50",
      "yellow-100",
      "yellow-200",
      "yellow-300",
      "yellow-400",
      "yellow-500",
      "yellow-600",
      "yellow-700",
      "yellow-800",
      "yellow-900",
      "green-50",
      "green-100",
      "green-200",
      "green-300",
      "green-400",
      "green-500",
      "green-600",
      "green-700",
      "green-800",
      "green-900",
      "blue-50",
      "blue-100",
      "blue-200",
      "blue-300",
      "blue-400",
      "blue-500",
      "blue-600",
      "blue-700",
      "blue-800",
      "blue-900",
      "indigo-50",
      "indigo-100",
      "indigo-200",
      "indigo-300",
      "indigo-400",
      "indigo-500",
      "indigo-600",
      "indigo-700",
      "indigo-800",
      "indigo-900",
      "purple-50",
      "purple-100",
      "purple-200",
      "purple-300",
      "purple-400",
      "purple-500",
      "purple-600",
      "purple-700",
      "purple-800",
      "purple-900",
      "pink-50",
      "pink-100",
      "pink-200",
      "pink-300",
      "pink-400",
      "pink-500",
      "pink-600",
      "pink-700",
      "pink-800",
      "pink-900",
    ]);

    // custom text color
    const customTextColor = ref("#ffffff");

    // custom background color
    const customBackgroundColor = ref("#ffffff");

    // change font size
    const changeTextSize = function () {
      // for each
      sizes.value.forEach((size) => {
        const reg = `text-${size}`;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove(`sm:${reg}`);
        }
      });
      //  add chosen text size value
      props.element.classList.add(`sm:text-${fontSize.value}`);
    };

    // change font wheight
    const changeTextWeight = function () {
      // for each
      weights.value.forEach((weight) => {
        const reg = `font-${weight}`;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove(`sm:${reg}`);
        }
      });
      //  add chosen text size value
      props.element.classList.add(`sm:font-${fontWeight.value}`);
    };

    // change font family
    const changeFontFamily = function () {
      // for each
      families.value.forEach((family) => {
        const reg = `font-${family}`;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove(`sm:${reg}`);
        }
      });
      //  add chosen text size value
      props.element.classList.add(`sm:font-${fontFamily.value}`);
    };

    // change font style
    const changeFontStyle = function () {
      // for each
      styles.value.forEach((style) => {
        const reg = style;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove(`sm:${reg}`);
        }
      });
      //  add chosen text size value
      props.element.classList.add(fontStyle.value);
    };

    // change opacity
    const changeOpacity = function () {
      opacities.value.forEach((opacitySingle) => {
        props.element.classList.remove(`opacity-${opacitySingle}`);
        props.element.classList.add(`opacity-${opacities.value[opacityIndex.value]}`);
      });
    };

    // change text color
    const changeTextColor = function (color) {
      colors.value.forEach((singleColor) => {
        props.element.classList.remove(`text-${singleColor}`);
      });
      // add clicked color to element
      props.element.classList.add(color);
    };

    // change custom text color
    const changeTextColorCustom = function (color) {
      // this.colors.forEach(color => this.element.classList.remove('text-' + color)) //remove any colors that are currently in the classList so there is not a color specified in a class and as a style
      // this.element.style.color = this.customTxtColor

      colors.value.forEach((singleColor) => {
        // remove color classes for element
        props.element.classList.remove(`text-${singleColor}`);
      });
      // add color class to element
      props.element.classList.add(`text-${singleColor}`);

      console.log("element is:", props.element);
    };

    // change background color
    const changeBackgroundColor = function (color) {
      colors.value.forEach((singleColor) => {
        props.element.classList.remove(`bg-${singleColor}`);
      });
      // add clicked color to element
      props.element.classList.add(color);
    };

    return {
      fontSize,
      sizes,
      changeTextSize,
      fontWeight,
      weights,
      changeTextWeight,
      fontFamily,
      families,
      changeFontFamily,
      fontStyle,
      styles,
      changeFontStyle,
      opacityIndex,
      opacities,
      changeOpacity,
      colors,

      changeTextColor,
      customTextColor,
      changeTextColorCustom,

      customBackgroundColor,
      changeBackgroundColor,
    };
  },
};
</script>
