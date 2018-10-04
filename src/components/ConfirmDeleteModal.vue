<template>
  <modal-dialog
    :show="show"
    @close="close"
  >
    <h1 class="text-center">
      Are You Sure?
    </h1>
    <p class="text-xl my-6">
      Deleting your account can't be undone!!
    </p>
    <div class="flex justify-around">
      <button class="btn btn-red">
        Delete Account
      </button>
      <button
        @click="close"
        class="btn btn-blue"
      >
        Go Back
      </button>
    </div>
  </modal-dialog>
</template>

<script>
// get the modal component
import ModalDialog from "./ModalDialog.vue";

export default {
  name: "ConfirmDeleteModal",
  
  components: {
    ModalDialog
  },

  methods: {
    close(){
      this.$emit("close");
    }
  },
  
  props: [
    "show",
    "accountId"
  ],

  data(){
    return {};
  }
}
</script>
