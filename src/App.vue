<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="max-w-sm mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-center">Injecting Content Using Slots</h1>
    </div>

    <!-- button -->
    <div class="text-center p-8 my-8">
      <primary-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        Download
      </primary-button>
    </div>

    <!-- button with class merging -->
    <div class="text-center p-8 my-8">
      <primary-button class="btn-red">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
        Delete Element
      </primary-button>
    </div>

    <!-- card -->
    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img slot="image" src="https://images.unsplash.com/photo-1495835788122-ca48931258be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acc48b0187b28f7a221362b843f15755&auto=format&fit=crop&w=3450&q=80" alt="">
        <!-- <template slot="title">The Long Road to Mastering the Perfect Cartwheel</template> -->
        <template slot="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos accusantium minima architecto natus sequi quisquam incidunt dolorem, adipisci accusamus facere dicta magni, qui consectetur, omnis quis, voluptas tempore quo!</p>
        </template>
      </media-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img slot="image" src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" alt="">
        <template slot="title">The Long Road to Mastering the Perfect Cartwheel</template>
        <template slot="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos accusantium minima architecto natus sequi quisquam incidunt dolorem, adipisci accusamus facere dicta magni, qui consectetur, omnis quis, voluptas tempore quo!</p>
        </template>
      </media-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img slot="image" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=350" alt="">
        <template slot="title">The Long Road to Mastering the Perfect Cartwheel</template>
        <template slot="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos accusantium minima architecto natus sequi quisquam incidunt dolorem, adipisci accusamus facere dicta magni, qui consectetur, omnis quis, voluptas tempore quo!</p>
        </template>
      </media-card>
    </div>

  </div>
</template>

<script>
// get the primary button
import PrimaryButton from "./components/PrimaryButton";
// get the media card
import MediaCard from "./components/MediaCard";

export default {
  components: {
    PrimaryButton,
    MediaCard
  }
}
</script>

<style src="./assets/css/app.css"/>