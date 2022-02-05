<template>
  <div class="section">
    <div class="container">
      <h1 class="title">{{ prodData.Project }}</h1>
      <div
        class="box"
        v-show="
          prodData.Project &&
          prodData.Project.toLowerCase().includes('intellicross')
        "
      >
        <a href="../../IntelliCross254.apk" download
          ><img width="130" src="../assets/android.png"
        /></a>
        <a><img width="130" src="../assets/apple.png" /></a>
      </div>

      <div class="columns">
        <div class="column" v-show="prodData.Manual && prodData.Manual != ''">
          <div class="panel">
            <h2 class="panel-heading is-primary">Manual</h2>
            <Tableblock
              :infolist="prodData.Manual"
              @download_file="downloadfn"
            />
          </div>
        </div>
      </div>

      <div class="columns">
        <div
          class="column"
          v-show="prodData.Firmware && prodData.Firmware != ''"
        >
          <div class="panel">
            <h2 class="panel-heading">Firmware</h2>
            <Tableblock
              :infolist="prodData.Firmware"
              @download_file="downloadfn"
            />
          </div>
        </div>
        <div
          class="column"
          v-show="prodData.Filesystem && prodData.Filesystem != ''"
        >
          <div class="panel">
            <h2 class="panel-heading">Filesystem</h2>
            <Tableblock
              :infolist="prodData.Filesystem"
              @download_file="downloadfn"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tableblock from "./Tableblock.vue";

export default {
  name: "Products",
  components: {
    Tableblock,
  },
  data() {
    return {
      prodData: {},
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.prodData = this.$route.params.data;
  },
  methods: {
    downloadfn(fileURL) {
      let url = this.baseURL + this.prodData.Project + "/" + fileURL;
      console.log(url);
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.panel-heading {
  background-color: #fff;
}
</style>
