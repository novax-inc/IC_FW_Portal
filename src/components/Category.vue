<template>
  <section class="section">
    <h1 class="title">{{ dispType }}</h1>
    <h2 class="subtitle">Manuals</h2>

    <div class="columns">
      <!-- <div class="columns is-multiline"> -->
        <div v-for="(item, index) of masterData" :key="index">
          <div
            class="column"
            v-show="
              item.Category &&
              item.Category.toLowerCase() == catType &&
              item.Manual &&
              item.Manual != ''
            "
          >
            <div class="panel">
              <h2 class="panel-heading is-primary">{{ item.Project }}</h2>
              <Tableblock :infolist="item.Manual" @download_file="downloadfn($event,item)" />
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
import Tableblock from "./Tableblock.vue";

export default {
  name: "Category",
  props: ["catType", "dispType", "masterData"],
  inject: ['baseURL'],
  components: {
    Tableblock,
  },
  mounted() {
    console.log(this.catType);
  },
  methods: {
    downloadfn(fileURL,item) {
      let url = this.baseURL + item.Project + "/" + fileURL;
      console.log(url);
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.columns {
  display:flex;
  flex-direction:column;
}
</style>