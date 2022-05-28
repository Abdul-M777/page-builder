<template>
    <div class="pb-6 min-h-screen bg-gray-100 dark:bg-gray-700">
        <div class="mx-auto" style="margin: 0 2rem 0 17rem">
            <div>
                <DesignerDragComponents></DesignerDragComponents>
                <DesignerCompiler></DesignerCompiler>
                <!-- <DesignerEditor v-if="$store.state.ds.editor.opened"></DesignerEditor> -->
                <!-- <MediaLibrary></MediaLibrary> -->
            </div>
        </div>
    </div>
</template>
<script>
import DesignerDragComponents from '@/components/page-builder/DesignerDragComponents.vue';
import { mapActions } from 'vuex';
import DesignerCompiler from '@/components/page-builder/DesignerCompiler.vue';
// import DesignerEditor from '@/components/page-builder/DesignerEditor.vue';
// import MediaLibrary from '@/components/page-builder/MediaLibrary.vue';

export default {
  name: 'Home',
  components: {
    // MediaLibrary,
    DesignerCompiler,
    DesignerDragComponents,
    // DesignerEditor,
  },

  methods: {
    ...mapActions('designer', ['getComponents']),
  },

  created() {
    console.log('odpalam sie');
    this.getComponents();
  },
};
</script>
