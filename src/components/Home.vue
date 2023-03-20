<template>
  <div class="section">
    <div>
      <div class="line"></div>

      <h1 class="title">Product Categories</h1>
      <div class="line"></div>
    </div>
    <div class="box">
      <div class="tile is-ancestor">
        <div class="tile">
          <article
            class="tile is-child notification is-button"
            @click="gotoCatogery('cabinet', 'Cabinet & Controller')"
          >
            <p class="title">Cabinet &amp; Controller</p>
            <div class="cat">
              <img src="../assets/cabinet.jpg" alt="" />
              <!-- <div class="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                numquam corrupti velit accusantium suscipit voluptate dolor
                repudiandae. Eaque porro, atque perspiciatis suscipit temporibus
                aut ut?
              </div> -->
            </div>
          </article>
        </div>
        <div class="tile is-4">
          <article
            class="tile is-child notification is-danger is-button"
            @click="gotoCatogery('priority', 'Priority & Pre-emption')"
          >
            <p class="title">Priority &amp; Preemption</p>
            <div class="cat">
              <!-- <div style="height:100px"> -->
              <img src="../assets/eMVPOD.jpg" alt="" />
              <!-- </div> -->
              <!-- <div class="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto fugiat recusandae tempore quaerat totam. Iusto!
              </div> -->
            </div>
          </article>
        </div>
        <div class="tile">
          <article
            class="tile is-child notification is-button"
            @click="gotoCatogery('pedestrian', 'Pedestrian Products')"
          >
            <!-- <div class="block"> -->
            <!-- <span id="PedestrianBar"></span> -->
            <div class="content">
              <p class="title">Pedestrian Products</p>
              <div class="cat">
                <img src="../assets/touchfree.jpg" alt="" />
              </div>
              <!-- <div class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ut quo modi culpa quod recusandae maiores eligendi
                  odio, iusto animi.
                </div> -->
            </div>
            <!-- </div> -->
          </article>
        </div>
      </div>
    </div>

    <h1 class="title">All Products</h1>

    <div class="box" id="prodList">
      <b-field>
        <b-input
          type="search"
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
              class="box is-button"
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
export default {
  name: "Home",
  inject: ["masterjson"],
  data() {
    return {
      searchInput: "",
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

<style>
.section {
  padding: 1rem;
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
.line {
}
.block {
  /* display: inline-flex; */
}
.tile {
  gap: 0.6rem;
}
.notification {
  padding: 1.25rem;
}
.cat {
}
.cat img {
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 2px;
}
</style>