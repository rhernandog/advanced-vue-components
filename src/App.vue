<template>
  <div>
    <!-- content -->
    <div class="flex flex-wrap justify-center min-h-screen p-4">
        
      <div class="">
        <h1 class="text-2xl font-bold mb-6 text-center">Modal Sample</h1>
      </div>
      
      <div class="w-full text-center">
        <button
          @click="toggleModal"
          class="btn btn-blue"
        >
          Show Modal
        </button>
      </div>

    </div>

    <!-- modal -->
    <content-modal
      :show="showModal"
      @close="toggleModal"
    ></content-modal>
      
  </div>
</template>

<script>
// get the modal component
import SnapModal from "./components/SnapModal";

export default {
  components: {
    ContentModal
  },
  data(){
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style src="./assets/css/app.css"/>