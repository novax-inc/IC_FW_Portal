<template>
  <section class="section">
    <h1 class="title">All Product Categories</h1>
    <h2 class="subtitle">
      A simple container to divide your page into <strong>sections</strong>,
      like the one you're currently reading.
    </h2>
    <div class="box">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article
                class="tile is-child notification"
                @click="gotoCatogery('cabinet', 'Cabinet & Controller')"
              >
                <p class="title">Cabinet Controller</p>
                <p class="subtitle">...</p>
                <div class="content">
                  <figure class="image is-4by3">
                    <!-- <img src="https://bulma.io/images/placeholders/640x480.png" /> -->
                    <img src="../assets/svg/Ped_img.svg" alt=""/>
                  </figure>
                  <div class="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore numquam corrupti velit accusantium suscipit voluptate
                    dolor repudiandae. Eaque porro, atque perspiciatis suscipit
                    temporibus aut ut?
                  </div>
                </div>
              </article>

              <article
                class="tile is-child notification is-danger"
                @click="gotoCatogery('priority', 'Priority & Pre-emption')"
              >
                <p class="title">Priority Pre-emption</p>
                <p class="subtitle">...</p>
                <div class="content">
                  <!-- <figure class="image is-4by3"> -->
                  <!-- <img src="https://bulma.io/images/placeholders/640x480.png" /> -->
                   <img src="../assets/svg/novax-ds3000-series.svg" alt="" />
                  <!-- <b-image
                    src="https://picsum.photos/300/200"
                    alt="A random image"
                    ratio="3by2"
                    :rounded="false"
                  ></b-image> -->
                  <!-- </figure> -->
                  <div class="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto fugiat recusandae tempore quaerat totam. Iusto!
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article
            class="tile is-child notification"
            @click="gotoCatogery('pedestrian', 'Pedestrian Products')"
          >
            <div class="content">
              <p class="title">Pedestrian Products</p>
              <p class="subtitle">...</p>
              <figure class="image is-4by3">
                <img
                  src="../assets/svg/novax-intellicross-system.svg"
                  alt=""
                  border="2px solid black"
                />
              </figure>
              <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi ut quo modi culpa quod recusandae maiores eligendi
                odio, iusto animi.
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <h1 class="title">All Products</h1>
    <h2 class="subtitle">
      A simple container to divide your page into <strong>sections</strong>,
      like the one you're currently reading.
    </h2>
      <div class="columns is-multiline">
        <div v-for="(item, index) of masterjson" :key="index">
          <div class="column">
            <div
              type="button"
              class="box"
              style="padding: 1em;"
              icon-left="tray-arrow-down"
              @click="gotoProduct(index)"
            >
            <div class="block" >
              <img src="../assets/svg/Ped_img.svg" alt="" style="width:20px;height:20px;">
{{ item.Project }}
            </div>
              
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import masterjson from "../../master.json";

export default {
  name: "Home",
  data() {
    return {
      masterjson,
      masterData: {},
      baseURL:
        "https://raw.githubusercontent.com/xiaobingnic/IC_FW_Portal/main/Product_Info/",
    };
  },
  methods: {
    gotoCatogery(catType, dispType) {
      this.$router.push({
        name: "Category",
        params: { catType, dispType, masterData: this.masterjson },
      });
    },
    gotoProduct(prodIdx) {
      let prodData = this.masterjson[prodIdx];

      this.$router.push({
        name: "Products",
        params: { id: prodData.Project.toLowerCase(), data: prodData },
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 85%;
}
</style>