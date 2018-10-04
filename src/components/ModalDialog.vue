<template>
  <portal to="modals" v-if="show">
    <div class="modal-backdrop">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </portal>
</template>

<script>

export default {
  name: "",
  
  components: {},
  
  props: ["show"],

  methods: {
    /** Method to close the modal
     * Emits the close event to it's parent 
     * @private
    */
    cancel(){
      this.$emit("close");
    }
  },

  watch: {
    /* check the show prop to update the overflow property in
     * the body tag
    */
    show: {
      immediate: true,
      handler: show => {
        if ( show ) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  },

  created(){
    // create the escape handler
    const escapeHandler = e => {
      if ( e.key === "Escape" && this.show ) {
        this.cancel()
      }
    };

    // add the escape key event handler
    document.addEventListener("keydown", escapeHandler);

    // now listen to the destroyed hook in order to remove the event handler
    this.$once( "destroyed", () => document.removeEventListener("keydown", escapeHandler) );
  },

  data(){
    return {};
  }
}
</script>

<style scoped>
  
</style>
