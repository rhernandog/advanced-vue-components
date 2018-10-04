<template>
  <div class="card">

    <h1 class="text-2xl font-bold mb-6">Your Settings</h1>
    
    <label class="block mb-6">
      <span class="block text-grey-darker font-semibold mb-2">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com">
    </label>
    
    <div class="mb-8">
      <span class="block text-grey-darker font-semibold mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <toggle-input v-model="receiveNewsletter"></toggle-input>
      </div>
    </div>
    
    <div class="flex justify-between">
      <button
        class="btn btn-red"
        @click="showDeleteConfirm = true"
      >
        Delete Account
      </button>
      <button type="button" class="btn btn-blue">Update Settings</button>
    </div>

    <!-- confirm delete modal -->
    <confirm-delete-modal
      :accountId="accountId"
      :show="showDeleteConfirm"
      @close="showDeleteConfirm = false"
    >
    </confirm-delete-modal>

  </div>
</template>

<script>
// toggle component
import ToggleInput from "./ToggleInput.vue";
// confirm delete modal
import ConfirmDeleteModal from "./ConfirmDeleteModal.vue";

export default {
  name: "UserSettingsForm",

  props: [ "accountId" ],

  components: {
    ConfirmDeleteModal,
    ToggleInput
  },

  methods: {
    deleteAccount(){
      
    }
  },

  data(){
    return {
      email: "",
      receiveNewsletter: true,
      showDeleteConfirm: false
    };
  }
}
</script>
