<template>
  <div
    @click="closeModal"
    v-show="show"
    class="h-screen w-screen modal-wrap flex items-center"
    ref="modalWrap"
  >
    <div
      @click.stop
      class="w-1/2 max-w-full rounded-lg p-4 bg-grey-lightest mx-auto shadow-lg"
    >
      <h3 class="text-center mb-4">Modal Title</h3>
      <div class="mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore hic magnam deleniti reiciendis sapiente veniam laborum molestiae blanditiis, suscipit officia adipisci amet. Temporibus, delectus facilis.
      </div>
      <button
        @click="closeModal"
        class="btn btn-close mx-auto flex"
      >
        Close Modal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentModal",

  props: {
    show: {
      required: true,
      default: false
    },
    hideParentScroll: {
      default: true
    }
  },

  /* Depending on the user settings, we listen to changes in the show
   * prop and based on that and the setting for hiding the parent scroll,
   * we add/remove he scroll property.
   * When the show prop changes we check the setting, if the setting is
   * to not hide the scroll from the parent component then do nothing.
  */
  watch: {
    show: {
      handler: function(show){
        if ( show ) {
          // if the setting is to hide the parent scroll, hide it
          this.hideParentScroll && document.body.style.setProperty("overflow-y", "hidden");
        } else {
          // the 
          this.hideParentScroll && document.body.style.removeProperty("overflow-y");
        }
      },
      immediate: true
    }
  },

  /* As soon as the modal is created, add an event listener to the
   * DOM in order to close the modal when the esc key is pressed.
   * Also check that the model is actually visible.
   * In order to remove the event listener after the component is
   * removed, add an instance reference to the event handler
  */
  /* Another solution to not create an instance state and add
   * the event listener to it, is use a hook in the created event
   * and a local variable
  */
  created(){
    const escapeHandler = e => {
      if ( e.key === "Escape" && this.show ) {
        this.closeModal();
      }
    };
    // now add the event handler to the DOM
    document.addEventListener("keydown", escapeHandler);
    /* In order to remove the event handler from the DOM, we listen
     * to the destroyed event, but just once. The next time the
     * component is created the created method will be called again
     * so the event listener will be added and the component will
     * listen to the destroy event as well.
    */
    this.$once( "hook:destroyed", () => document.removeEventListener("keydown", escapeHandler) );
  },

  methods: {
    closeModal(){
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

.btn-close {
  background-color: #ecb613;
  color: #000;
}
</style>
