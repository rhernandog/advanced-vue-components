<template>
  <div class="min-h-screen bg-grey-darker p-4">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl text-grey-lightest font-bold mb-6 text-center">
        Date Picker Vue Component
      </h1>

      <div class="max-w-sm mx-auto bg-grey-lightest py-6 px-3 shadow-lg
rounded">
        <h4 class="mb-4">Select a Date</h4>
        <DatePicker
          v-model="date"
          :options="{
            format :'MMM DD, YYYY',
            firstDay: 1
          }"
        ></DatePicker>
      </div>
    </div>
  </div>
</template>

<script>
// get the daypicker
import DatePicker from "./components/DatePicker";
// eslint-disable-next-line
console.clear();

export default {
  components: {
    DatePicker
  },
  
	data(){
    return {
      date: "Jun 22, 2018"
    };
  },
}
</script>

<style src="./assets/css/app.css"/>