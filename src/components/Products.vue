<template>
  <div align="center">
    <div>
      <h2>Product : {{  title }}</h2>
      <a href="./IntelliCross254.apk"
        ><img width="100" src="../assets/android.png"
      /></a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a><img width="100" src="../assets/apple.png" /></a>
    </div>
    <div>
      <div>
        <table>
          <tr>
            <div colspan="4" align="left">
              <h3>Firmware</h3>
            </div>
          </tr>
          <tr>
            <th align="left">Date</th>
            <th align="left">F/W Ver.</th>
            <th align="left">Link</th>
            <th align="left">Description</th>
          </tr>
          <tr v-for="(record, index) in data['Firmware']" :key="index">
            <td align="left">{{ record.date }}</td>
            <td align="left" style="color: #f49f82">
              {{ record.id }}
              <!-- <font color="#f49f82">{{ record.id }}</font> -->
            </td>
            <td align="left"><a :href="record.url">Download</a></td>
            <td align="left">{{ record.description }}</td>
          </tr>
          <tr>
            <div colspan="4" align="left">
              <h3>Filesystem</h3>
            </div>
          </tr>
          <tr>
            <th align="left">Date</th>
            <th align="left">F/W Ver.</th>
            <th align="left">Link</th>
            <th align="left">Description</th>
          </tr>
          <tr v-for="(record, index) in data['Filesystem']" :key="index">
            <td align="left">{{ record.date }}</td>
            <td align="left" style="color: #f49f82">
              {{ record.id }}
              <!-- <font color="#f49f82">{{ record.id }}</font> -->
            </td>
            <td align="left"><a :href="record.url">Download</a></td>
            <td align="left">{{ record.description }}</td>
          </tr>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import masterjson from "../../master.json";
export default {
  name: "Products",
  props: {
    msg: String,
  },
  computed: {
    title(){
      let str = this.data.Project
      return str;
    }
  },
  data() {
    return {
      masterjson,
      data: {},
    };
  },
  mounted() {
    console.log(this.$route.params.id)
    for (const idx in this.masterjson) {
      // console.log(this.masterjson[idx])
      if (this.$route.params.id == this.masterjson[idx].Project) {
        this.data = this.masterjson[idx];
        break;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th {
  background-color: #fcac00;
  color: #fff;
  padding: 0.4em;
}
td {
  padding: 0.4em;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
a {
  color: #42b983;
}
</style>
