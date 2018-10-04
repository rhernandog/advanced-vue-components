<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-center">
        Extending Components Using Composition
      </h1>
      <hr />

      <!-- user settings -->
      <user-settings-form
        @deleteAccount="showDeleteConfirm = true"
      ></user-settings-form>

    </div>

    <!-- modals target portal -->
    <portal-target name="modals"></portal-target>

    <!-- announcement modal -->
    <announcement-modal
      :show="showAnnouncement"
      @close="showAnnouncement = false"
    ></announcement-modal>

  </div>
</template>

<script>
// get the user settings
import UserSettingsForm from "./components/UserSettingsForm.vue";
// get the announcement modal
import AnnouncementModal from "./components/AnnouncementModal.vue";

export default {
  name: "AppRoot",


  components: {
    UserSettingsForm,
    AnnouncementModal
  },

  data(){
    return {
      accountId: 7,
      showAnnouncement: true
    };
  }
}
</script>

<style src="./assets/css/app.css"/>

<style scoped>
  .no-scroll {
    overflow-y: hidden;
  }
</style>
