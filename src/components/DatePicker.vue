<template>
	<input
		type="text"
		ref="input"
		placeholder="YYYY-MM-DD"
		:value="value"
		class="appearance-none border rounded w-full p-3"
		autocomplete=false
	/>
</template>

<script>
// get pikaday
import Pikaday from "pikaday";
// get pikaday styles
import "pikaday/css/pikaday.css"

export default {
	props: {
		// the date value passed by the parent
		value: { required: true },
		// the use can indicate the date format
		options: {}
	},

  mounted(){
    // eslint-disable-next-line
    const picker = new Pikaday({
      field: this.$refs.input,
      onSelect: () => {
				// when a new date is selected we need to 
				// send the new date to the parent component
				this.$emit("input", picker.toString());
			},
			...this.options
    });
  }
}
</script>
