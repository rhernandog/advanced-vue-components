<template>
  <div
    v-show="show"
    @click="closeModal"
		class="h-screen w-screen modal-wrap flex items-center"
	>
		<div
			@click.stop
			class="w-1/2 max-w-full rounded-lg p-4 bg-white mx-auto"
		>
			<form @submit.prevent>
        <h1 class="text-2xl font-bold mb-6 text-center">Your Settings</h1>
        <label class="block mb-6">
          <span class="form-label mb-2">Email Address</span>
          <input v-model="email" class="form-input" placeholder="you@example.com">
        </label>
        <div class="mb-8">
          <span class="form-label mb-2">Newsletter</span>
          <div class="flex justify-between items-center">
            <p class="mr-4">Send you occasional news and updates.</p>
            <toggle-input
              v-model="receiveNewsletter"
            ></toggle-input>
          </div>
        </div>
        <div class="flex justify-around">
          <button
            class="btn btn-red"
            @click="showDeleteConfirmModal"
          >
            Delete Account
          </button>
          <button
            type="button"
            class="btn btn-blue"
          >
            Update Settings
          </button>
        </div>
      </form>
		</div>

    <portal to="modals">
      <delete-confirm-modal
        :show="showDeleteConfirm"
        @close="showDeleteConfirm = false"
      ></delete-confirm-modal>
    </portal>

	</div>
</template>

<script>
// get toggle
import ToggleInput from "./ToggleInput";
// get confirm modal
import DeleteConfirmModal from "./DeleteConfirmModal";

export default {
  name: "UserSettingsModal",

  components: {
    ToggleInput,
    DeleteConfirmModal
  },

  data(){
    return {
      email: "",
      receiveNewsletter: true,
      showDeleteConfirm: false
    }
  },

  props: {
    show: { required: true }
  },

  /* Add and remove the event listener for the escape key in
   * the created hook. Also listen to the destroyed hook.
  */
  created(){
    // the event handler
    const escapeHandler = e => {
      if ( e.key === "Escape" && this.show && !this.showDeleteConfirm ) {
        this.closeModal();
      }
      if ( e.key === "Escape" && this.showDeleteConfirm ) {
        this.showDeleteConfirmModal();
      }
    };

    // add the event listener
    document.addEventListener("keydown", escapeHandler);

    // listen to the destroyed hook
    this.$once("hook:destroyed", () => document.removeEventListener("keydown", escapeHandler) );
  },

  methods: {
    // close modal method
    closeModal(){
      this.$emit("close");
    },

    // show delete confirm modal
    showDeleteConfirmModal(){
      this.showDeleteConfirm = !this.showDeleteConfirm;
    }
  }

}
</script>

<style scoped>

.modal-wrap {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(50, 50, 50, 0.85);
	/* display: none; */
}

.btn-red {
  background-color: #b30000;
  color: #fff;
}
</style>
