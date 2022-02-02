<template>
  <div class="section">
    <div class="container">
      <h1 class="title">{{ data.Project }}</h1>
      <div v-show="data.Project.toLowerCase().includes('intellicross')">
        <a href="./IntelliCross254.apk"
          ><img width="100" src="../assets/android.png"
        /></a>
        <a><img width="100" src="../assets/apple.png" /></a>
      </div>

      <div class="columns">
        <div class="column">
          <div class="panel" v-show="data.Manual && data.Manual != ''">
        <h2 class="panel-heading is-primary">Manual</h2>
          <Tableblock :infolist="data.Manual" @download_file="download"/>
        </div>
      </div>
      </div>

      <div class="columns">
        <div class="column">
        <div class="panel is-success" v-show="data.Firmware && data.Firmware != ''">
          <h2 class="panel-heading">Firmware</h2>
          <!-- <div class="box"> -->
            <Tableblock :infolist="data.Firmware" @download_file="download" />
          <!-- </div> -->
          </div>
        </div>
        <div class="column">
        <div class="panel is-warning" v-show="data.Filesystem && data.Filesystem != ''">
          <h2 class="panel-heading">Filesystem</h2>
            <Tableblock :infolist="data.Filesystem" @download_file="download"/>
          </div>
        </div>
        </div>

    </div>
  </div>
</template>

<script>
import masterjson from "../../master.json";
// const data = require("../assets/sample.json");

import Tableblock from "./Tableblock.vue";

export default {
  name: "Products",
  components: {
    Tableblock,
  },
  data() {
    return {
      masterjson,
      data:{},
      baseURL:
        "https://raw.githubusercontent.com/xiaobingnic/IC_FW_Portal/main/Product_Info/",
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    download(fileURL){
      let url = this.baseURL + this.data.Project +'/'+fileURL;
      console.log(url)
      window.location.href = url;
    },
    refresh() {
      console.log(this.$route.params.id);

      for (const idx in this.masterjson) {
        if (
          this.masterjson[idx].Project.toLowerCase().includes(
            this.$route.params.id.toLowerCase()
          )
        ) {
          this.data = this.masterjson[idx];
          // console.log(JSON.stringify(this.data));
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.is-primary{
   /* background-color: #00718f; */
   background-color: #fcac00;
   color: #fff;
 }
</style>
