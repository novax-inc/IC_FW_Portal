<template>
  <section class="section">
    <h1 class="title">Product Categories</h1>
    <h2 class="subtitle">
      A simple container to divide your page into <strong>sections</strong>,
      like the one you're currently reading.
    </h2>

    <div class="container">
      <div class="box">
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <!-- <div class="tile is-parent is-vertical"> -->
              <article
                class="tile is-child notification"
                @click="gotoCatogery('cabinet', 'Cabinet & Controller')"
              >
                <p class="title">Cabinet Controller</p>
                <!-- <p class="subtitle">...</p> -->
                <div class="content">
                  <figure class="image is-4by3">
                    <img
                      src="../assets/svg/novax-intellicross-system.svg"
                      alt=""
                    />
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
                <!-- <p class="subtitle">...</p> -->
                <div class="content">
                  <img src="../assets/svg/novax-ds3000-series.svg" alt="" />
                  <div class="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto fugiat recusandae tempore quaerat totam. Iusto!
                  </div>
                </div>
              </article>
              <!-- </div> -->
              <!-- </div>
        </div>
        <div class="tile is-parent"> -->
              <article
                class="tile is-child notification"
                @click="gotoCatogery('pedestrian', 'Pedestrian Products')"
              >
                <div class="content">
                  <p class="title">Pedestrian Products</p>
                  <!-- <p class="subtitle">...</p> -->
                  <div id="Pedestrian">
                    <figure class="image is-4by3">
                      <img src="../assets/svg/Ped_img.svg" alt="" />
                    </figure>
                  </div>
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
      </div>

      <div id="prodList">
        <!-- <div class="box searchBar"> -->
        <h1 class="title">All Products</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </h2>
        <b-field>
          <b-input
            placeholder="Search Products..."
            v-model="searchInput"
            icon-right="magnify"
            maxlength="30"
          ></b-input>
        </b-field>
        <div class="columns is-multiline">
          <!-- <div class="tile is-ancestor"> -->
          <!-- <div class="tile is-10 is-vertical"> -->

          <div v-for="(item, index) in filterList" :key="index">
            <div class="column">
              <!-- <div class="tile"> -->
              <div
                type="button"
                class="box"
                style="padding: 1em"
                icon-left="tray-arrow-down"
                @click="gotoProduct(index)"
              >
                <div class="block">
                  <img
                    src="../assets/svg/Ped_img.svg"
                    alt=""
                    style="width: 20px; height: 20px"
                  />
                  {{ item.Project }}
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import masterjson from "../../master_new.json";

export default {
  name: "Home",
  data() {
    return {
      searchInput: "",
      masterjson,
      filterList: [],
    };
  },
  watch: {
    searchInput: function (searchInput) {
      // console.log(searchInput);
      if (searchInput) {
        this.filterList = this.masterjson.filter((item) =>
          item.Project.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        this.filterList = this.masterjson;
      }
      // console.log(this.filterList.length);
    },
  },
  created() {
    this.filterList = this.masterjson;
  },
  methods: {
    gotoCatogery(catType, dispType) {
      this.$router.push({
        name: "Category",
        params: { catType, dispType, masterData: this.masterjson },
      });
    },
    gotoProduct(prodIdx) {
      let prodData = this.filterList[prodIdx];
      
      // console.log(prodIdx,JSON.stringify(prodData))

      this.$router.push({
        name: "Products",
        params: { id: prodData.Project.toLowerCase(), data: prodData },
      });
    },
    checkTest() {
      console.log("checkTest");
    },
  },
};
</script>

<style scoped>
.content {
  width: 90%;
}
.section{
  padding-top: 1.5rem;
}
.searchBar {
  /* position: sticky;
  top: 0; */
}
.container {
  /* z-index: -1; */
}
#Pedestrian {
  /* color: #fff; */
  /* backgroud-tranparent: 0.5; */
  background-image: repeating-linear-gradient(
    45deg,
    yellowgreen,
    yellowgreen 25px,
    #fff 25px,
    #fff 50px
  );
}
</style>