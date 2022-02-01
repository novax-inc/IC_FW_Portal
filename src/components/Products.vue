<template>
  <div>
    <div>
      <h2>{{ data.Project }}</h2>
      <div v-show="data.Project.toLowerCase().includes('intellicross')" class="box">
        <a href="./IntelliCross254.apk"
          ><img width="100" src="../assets/android.png"
        /></a>
        <a><img width="100" src="../assets/apple.png" /></a>
      </div>
    </div>
    <div>
      <div class="box">
        <table>
          <!-- ================================================= -->
          <div v-show="data.Manual && data.Manual.length">
            <tr>
              <div colspan="4" align="left">
                <h3>Manual</h3>
              </div>
            </tr>
            <tr>
              <th align="left">Date</th>
              <th align="left">Link</th>
              <th colspan="2" align="left">File Name</th>
            </tr>
            <tr v-for="(record, index) in data['Manual']" :key="index">
              <td align="left">{{ record.date }}</td>
              <td align="left">
                <a :href="baseurl + data.Project + '/' + record.url" download
                  >Download</a
                >
              </td>
              <td colspan="2" align="left">{{ record.description? record.description: record.url }}</td>
            </tr>
          </div>
          <!-- ================================================= -->
          <div v-show="data.Firmware && data.Firmware.length">
            <tr id="title">
              <div colspan="4" align="left">
                <h3>Firmware</h3>
              </div>
            </tr>
            <tr>
              <th align="left">Date</th>
              <th align="left">Link</th>
              <th align="left">F/W Ver.</th>
              <th align="left">Description</th>
            </tr>
            <tr v-for="(record, index) in data['Firmware']" :key="index">
              <td align="left">{{ record.date }}</td>
              <td align="left">
                <a :href="baseurl + data.Project + '/' + record.url"
                  >Download</a
                >
              </td>
              <td align="left" style="color: #f49f82">
                {{ record.id }}
              </td>
              <td align="left">{{ record.description }}</td>
            </tr>
          </div>
          <!-- ================================================= -->
          <div
            v-show="
              data.Filesystem && data.Filesystem.length
            "
          >
            <tr id="title1">
              <div colspan="4" align="left">
                <h3>Filesystem</h3>
              </div>
            </tr>
            <tr>
              <th align="left">Date</th>
              <th align="left">Link</th>
              <th align="left">F/W Ver.</th>
              <th align="left">Description</th>
            </tr>
            <tr v-for="(record, index) in data['Filesystem']" :key="index">
              <td align="left">{{ record.date }}</td>
              <td align="left">
                <a :href="baseurl + data.Project + '/' + record.url" download
                  >Download</a
                >
              </td>
              <td align="left" style="color: #f49f82">
                {{ record.id }}
              </td>
              <td align="left">{{ record.description }}</td>
            </tr>
          </div>
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
        "https://raw.githubusercontent.com/xiaobingnic/IC_FW_Portal/main/Product_Info/",
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
      console.log(this.$route.params.id);

      for (const idx in this.masterjson) {
        if (
          // this.$route.params.id.toLowerCase() ==
          this.masterjson[idx].Project.toLowerCase().includes(
            this.$route.params.id.toLowerCase()
          )
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
  width: min(95%, 800px);
  display: inline-flex;
  justify-content: center;
}
table {
  border-spacing: 0.1em;
}
#title,
#title1 {
  background-color: #fff;
}
</style>
