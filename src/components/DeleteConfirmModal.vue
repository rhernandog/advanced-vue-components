<template>
  <div
    v-show="show"
    @click="closeDeleteConfirmModal"
		class="h-screen w-screen modal-wrap flex items-center"
	>
    <div
			@click.stop
			class="w-1/2 max-w-full rounded-lg p-4 bg-white mx-auto"
		>
      <h3 class="text-center">Delete Account?</h3>
      <p class="my-6">Are you sure?. This cannot be undone!!</p>
      <div class="flex justify-around">
        <button class="btn btn-blue"
          @click="closeDeleteConfirmModal"
        >
          Cancel
        </button>
        <button class="btn btn-red"
          @click="closeDeleteConfirmModal"
        >
          Delete Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: "DeleteConfirmModal",

  props: {
    show: { required: true }
  },
  
  methods: {
    // close modal
    closeDeleteConfirmModal(){
      this.$emit("close");
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
