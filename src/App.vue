<template>
  <div id="app-wrap" class="h-screen">
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

      <div class="container mx-auto mt-6">
        <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab voluptas debitis vitae, ipsum nam inventore placeat sunt odit eveniet dolorum ducimus. Dignissimos illo omnis laborum et unde voluptate fugiat, nisi dolor aliquam minus. Nobis sed maiores cumque voluptatibus, debitis magnam voluptas sit odio, molestiae tempora fuga. Doloremque aliquid labore impedit eum doloribus nostrum, ad sequi laudantium sint error illum!</p>
        <p class="mb-3">Praesentium facere aut necessitatibus minus aliquam sequi illum commodi, quaerat voluptatum. Sint dolore dolores totam, illum laudantium quasi voluptatibus accusamus sapiente facere obcaecati similique temporibus nobis quibusdam corrupti fugiat autem qui esse. Quis perferendis ullam quam error. Beatae nam dignissimos veritatis accusamus. Alias similique ex vel porro, dolor minima laudantium reprehenderit? Culpa eius vel impedit velit officiis aliquid quos voluptatem!</p>
        <p class="mb-3">Quia nam cupiditate laudantium. Blanditiis provident ex laborum aliquid harum ipsa recusandae vel nemo aliquam suscipit sit iusto, fugiat consequatur. Illo eos beatae minus molestiae labore cum! Recusandae sed fugit qui optio sint quisquam? Recusandae, illo eius neque in reprehenderit nulla fugit quia? Hic, autem expedita sequi a natus odio harum laborum molestias enim, sit repellat esse reiciendis voluptates nulla.</p>
        <p class="mb-3">Tempora ratione sapiente quis! Deserunt veniam voluptate repellat iure dignissimos modi vitae perferendis quasi natus, minima explicabo alias non ipsam corrupti, ea quod cumque excepturi cupiditate, quibusdam ipsa sit provident fuga? Commodi tenetur consequatur sapiente expedita! Tempora alias explicabo nesciunt doloremque illo? Sed nobis temporibus natus animi ipsa, deleniti consectetur minus et laudantium sapiente, quia, non id debitis veniam obcaecati.</p>
        <p class="mb-3">Adipisci quos mollitia qui voluptatum, illum delectus non repellendus minima laborum facilis neque porro aliquid nostrum doloremque unde officia exercitationem ut voluptate fuga omnis aliquam, architecto eos. Et saepe doloribus magni quae molestiae nostrum. Tempore ut repellat ipsum ad corrupti libero ex ipsam voluptas nulla obcaecati molestiae impedit vel maxime labore, hic iusto non, earum eaque inventore minus sapiente in.</p>
        <p class="mb-3">Quia tenetur sint officiis eaque recusandae provident, autem voluptatum rem dicta reiciendis dolorum laboriosam eligendi repudiandae explicabo labore perferendis! A laudantium cumque molestias quos eum minus dicta tempora accusantium deserunt neque sint atque enim, facilis et consequuntur adipisci velit quaerat illum quidem eligendi assumenda cum magni. Consequuntur nulla eligendi expedita explicabo culpa molestias laborum officia inventore molestiae numquam. Iure, hic!</p>
        <p class="mb-3">Non aliquam eaque laboriosam. Corrupti laudantium, rerum, dolorum autem nostrum perferendis nam neque dolor unde beatae id error consectetur ea, reprehenderit possimus laborum dignissimos similique. Quam explicabo enim corporis odio modi incidunt ipsa unde vel temporibus aut fugiat ratione dicta nesciunt harum assumenda iure nisi, vero recusandae? Corporis labore asperiores, eius, perferendis, corrupti ut nam libero quis aliquam quisquam fuga.</p>
        <p class="mb-3">Odio aliquam aspernatur beatae modi, quam molestias eaque quae vitae hic ratione aut sed, eveniet cumque voluptatum ut. Blanditiis harum illum delectus molestias illo optio ab quo voluptate quaerat doloribus at laborum modi, deleniti quisquam inventore dolorem hic ipsam quibusdam pariatur animi similique officiis odit sint? Repellendus incidunt soluta ipsam. Deleniti corrupti dolorum impedit iure culpa aut sapiente laboriosam sequi!</p>
        <p class="mb-3">Doloremque, id suscipit. Accusantium adipisci perferendis eveniet, laboriosam, qui dolor dolorum repellendus voluptatem exercitationem totam laudantium, magni architecto officia vel unde sint tenetur? Aliquid pariatur modi nemo porro veniam tempora? Rerum maiores voluptas optio facilis esse, quibusdam sequi dolores, quae explicabo soluta quis error quisquam facere ad quo. Eveniet necessitatibus adipisci facere asperiores, optio unde eligendi. Tempora sequi nisi corporis.</p>
        <p class="mb-3">Vitae, dolores doloremque! Ipsam dolor vitae reiciendis consectetur cumque quidem pariatur ratione, accusantium, fugit atque quas enim accusamus aliquam soluta incidunt nam ducimus harum, id illum fugiat itaque tenetur culpa quibusdam. Corporis molestias exercitationem, animi eligendi laborum consectetur ipsam in maiores ex quos minus vitae tempore sint dolor commodi fuga voluptate corrupti ea, officia soluta beatae ipsa suscipit deserunt consequuntur!</p>
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
import ContentModal from "./components/SnapModal";

export default {
  components: {
    ContentModal
  },
  data(){
    return {
      showModal: false
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
