<template>
   <div>
    <!-- content -->
    <div class="flex flex-wrap justify-center min-h-screen p-4">
        
      <div class="">
        <h1 class="text-2xl font-bold mb-6 text-center">Modal Sample</h1>
        <p class="my-4">Edit your user account info, by opening this modal.</p>
      </div>
      
      <div class="w-full text-center">
        <button
          @click="showModal = true"
          class="btn btn-blue"
        >
          Edit Account
        </button>
      </div>

    </div>

    <!-- modal -->
    <user-settings-modal
      :show="showModal"
      @close="showModal = false"
      @showDeleteConfirm="showDeleteConfirm = true"
    ></user-settings-modal>

    <portal-target name="modals"></portal-target>
      
  </div>
</template>

<script>
// user settings modal
import UserSettingsModal from "./components/UserSettingsModal";

export default {

  data(){
    return {
      showModal: false
    }
  },

  components: {
    UserSettingsModal
  }
}
</script>

<style src="./assets/css/app.css"/>

<style scoped>
  .no-scroll {
    overflow-y: hidden;
  }
</style>
