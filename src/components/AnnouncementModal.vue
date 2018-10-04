<template>
  <!-- listen to the close event from the base modal dialog -->
  <modal-dialog
    :show="show"
    @close="close"
  >
    <h1 class="text-center text-2xl font-bold mb-4">
      We Have an Important Announcement!!!
    </h1>
    <p class="mb-6">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ducimus facere excepturi aliquam unde autem! Optio quod hic recusandae qui fuga accusamus unde nostrum eveniet!
    </p>
    <div class="text-center">
      <button
        class="btn btn-blue"
        @click="close"
      >
        Close
      </button>
    </div>
  </modal-dialog>
</template>

<script>
// get the modal component
import ModalDialog from "./ModalDialog.vue";

export default {
  name: "AnnouncementDialog",
  
  components: {
    ModalDialog
  },

  methods: {
    close(){
      this.$emit("close");
    }
  },
  
  props: [ "show" ],

  data(){
    return {};
  }
}
</script>

<style scoped>
  
</style>
