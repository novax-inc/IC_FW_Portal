<template>
  <div class="section">
    <h1 class="title">Product Categories</h1>
    <h2 class="subtitle">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cumque eius sit?
    </h2>

    <div class="box">
      <div class="tile is-ancestor">
        <div class="tile">
          <article
            class="tile is-child notification"
            @click="gotoCatogery('cabinet', 'Cabinet & Controller')"
          >
            <p class="title">Cabinet &amp; Controller</p>
            <div class="content">
              <img
                src="../assets/cabinet.png"
                alt=""
                sizes="(min-width: 1000px) 50vw"
              />
              <div class="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                numquam corrupti velit accusantium suscipit voluptate dolor
                repudiandae. Eaque porro, atque perspiciatis suscipit temporibus
                aut ut?
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-4">
          <article
            class="tile is-child notification is-danger"
            @click="gotoCatogery('priority', 'Priority & Pre-emption')"
          >
            <p class="title">Priority &amp; Preemption</p>
            <div class="content">
              <div class="blcok">
                <img
                  src="../assets/eMVPOD.jpg"
                  alt=""
                  sizes="(max-width: 800px) 50vw"
                />
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto fugiat recusandae tempore quaerat totam. Iusto!
              </div>
            </div>
          </article>
        </div>
        <div class="tile">
          <article
            class="tile is-child notification"
            @click="gotoCatogery('pedestrian', 'Pedestrian Products')"
          >
            <div class="block">
              <span id="PedestrianBar"></span>
              <div class="content">
                <p class="title">Pedestrian Products</p>
                <div>
                  <img src="../assets/touchfree.png" alt="" />
                </div>
                <div class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ut quo modi culpa quod recusandae maiores eligendi
                  odio, iusto animi.
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="container" id="prodList">
      <h1 class="title">All Products</h1>
      <h2 class="subtitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, necessitatibus!
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
        <div v-for="(item, index) in filterList" :key="index">
          <div class="column">
            <div
              class="box"
              style="padding: 1em"
              @click="gotoProduct(index)"
            >
              <div class="block">
                {{ item.Project }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.section {
  padding: 1rem;
}
.searchBar {
  /* position: sticky;
  top: 0; */
}
#PedestrianBar {
  width: min(20px, 20%);
  margin-inline-end: 0.5em;
  background-image: repeating-linear-gradient(
    45deg,
    yellowgreen,
    yellowgreen 20px,
    #fff 20px,
    #fff 40px
  );
}
.block {
  display: inline-flex;
}
</style>