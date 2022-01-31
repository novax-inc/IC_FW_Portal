<template>
  <div>
    <div>
      <h2>{{ data.Project }}</h2>
      <div class="box">
        <a href="./IntelliCross254.apk"
          ><img width="100" src="../assets/android.png"
        /></a>
        <a><img width="100" src="../assets/apple.png" /></a>
      </div>
    </div>
    <div>
      <div class="box">
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
            </td>
            <td align="left">
              <a :href="baseurl + '/Firmware/' + record.url" download>Download</a>
            </td>
            <td align="left">{{ record.description }}</td>
          </tr>
          
          <tr id="whitecell">
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
            </td>
            <td align="left">
              <a :href="baseurl + '/Filesystem/' + record.url" download>Download</a>
            </td>
            <td align="left">{{ record.description }}</td>
          </tr>

          <tr id="whitecell">
            <div colspan="4" align="left">
              <h3>Manual</h3>
            </div>
          </tr>
          <tr>
            <th align="left">Date</th>
            <th align="left">F/W Ver.</th>
            <th align="left">Link</th>
            <th align="left">Description</th>
          </tr>
          <tr v-for="(record, index) in data['Manual']" :key="index">
            <td align="left">{{ record.date }}</td>
            <td align="left" style="color: #f49f82">
              {{ record.id }}
            </td>
            <td align="left">
              <a :href="baseurl + '/Manual/' + record.url" download>Download</a>
            </td>
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
  data() {
    return {
      masterjson,
      data: {},
      baseurl:
        "https://raw.githubusercontent.com/xiaobingnic/IC_FW_Portal/main/",
    };
  },
  // watch: {
  //   "$route.params.id": function (id) {
  //     console.log(id);
  //     this.refresh();
  //   },
  // },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      for (const idx in this.masterjson) {
        if (
          this.$route.params.id.toLowerCase() ==
          this.masterjson[idx].Project.toLowerCase()
        ) {
          this.data = this.masterjson[idx];
          break;
        }
      }
    },
  },
};
</script>

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
.box {
  width: min(95%, 1000px);
  display: inline-flex;
  justify-content: center;
}
table{
  border-spacing: 0;
}
#whitecell{
  background-color: #fff;
}
</style>
