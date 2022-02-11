<template>
  <div class="section" ref="childProd">
    <div class="container">
      <h1 class="title">{{ prodData.Project }}</h1>
      <!-- <h2>{{id}} - {{data}}</h2> -->
      <div
        v-show="
          prodData.Project &&
          prodData.Project.toLowerCase().includes('intellicross')
        "
      >
        <a href="/android/IntelliCross254.apk" download
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
              :path='baseURL + prodData.Project + "/"'
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
              :path='baseURL + prodData.Project + "/"'
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
              :path='baseURL + prodData.Project + "/"'
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
  // props: ['id', 'data'],
  inject: ["baseURL", "masterjson"],
  components: {
    Tableblock,
  },
  data() {
    return {
      prodData: {},
    };
  },
  created() {
    let params = this.$route.params;

    if (params && params.data) {
      console.log(params.data.Project);
      this.prodData = params.data;
    } else {//come from browser
    console.log("params.id = " + params.id)
      this.prodData = this.masterjson.find(item => item.Project.toLowerCase().includes(params.id.toLowerCase()))
    }
  },
  methods: {
    downloadfn(fileURL) {
      let url = this.baseURL + this.prodData.Project + "/" + fileURL;
      console.log(url);
      // alert(url)
      window.location.href = url;

//       async (url) => {

//   // Change this to use your HTTP client
//       fetch(url, {/*YOUR CUSTOM HEADER*/} ) // FETCH BLOB FROM IT
//         .then((response) => response.blob())
//         .then((blob) => { // RETRIEVE THE BLOB AND CREATE LOCAL URL
//           var _url = window.URL.createObjectURL(blob);
//           window.open(_url, "_blank").focus(); // window.open + focus
//       }).catch((err) => {
//         console.log(err);
//       });
// };
      
    },
  },
};
</script>

<style scoped>
.panel-heading {
  background-color: #fff;
}
</style>
