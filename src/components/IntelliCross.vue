<template>
    <table  class="center">
        <tr>
          <th align="center">
            <h3>{{ data["Project"] }}</h3>
          </th>
        </tr>
        <tr>
          <th align="left">
            <img width="150" src="../assets/android.png"/>&nbsp;<img width="150" src="../assets/apple.png"/>
          </th>
        </tr>
        <tr>
          <th align="left">
            <h4>Firmware</h4>
          </th>
        </tr>
        <tr>
          <th align="left">Date</th>
          <th align="left">F/W Ver.</th>
          <th align="left">Link</th>
          <th align="left">Description</th>
        </tr>
        <tr v-for="(record, index) in data['Firmware']" :key="index">
          <td align="left">{{ record.date }}</td>
          <td align="left">{{ record.id }}</td>
          <td align="left"><a :href="record.url">Download</a></td>
          <td align="left">{{ record.description }}</td>
        </tr>
  
        <tr>
          <th align="left">
            <h4>Filesystem</h4>
          </th>
        </tr>
  
        <tr>
          <th align="left">Date</th>
          <th align="left">F/W Ver.</th>
          <th align="left">Link</th>
          <th align="left">Description</th>
        </tr>

        <tr v-for="(record, index) in data['Filesystem']" :key="index">
          <td align="left">{{ record.date }}</td>
          <td align="left">{{ record.id }}</td>
          <td align="left"><a :href="record.url">Download</a></td>
          <td align="left">{{ record.description }}</td>
        </tr>

        <tr>
          <th align="left">
            <h4>Default</h4>
          </th>
        </tr>

        <tr>
          <th align="left">Date</th>
          <th align="left">F/W Ver.</th>
          <th align="left">Link</th>
          <th align="left">Description</th>
        </tr>

        <tr v-for="(record, index) in data['Default_setting']" :key="index">
          <td align="left">{{ record.date }}</td>
          <td align="left">{{ record.id }}</td>
          <td align="left"><a :href="record.url">Download</a></td>
          <td align="left">{{ record.description }}</td>
        </tr>
  
    </table>
</template>

<script>
import data from "../../master.json";
export default {
  name: "IntelliCross",
  props: {
    msg: String,
  },
  data() {
    return {
      data,
    };
  },
  mounted() {
    console.log(data);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.center {
border: 0px solid #403f41;
justify-content: center;
}
</style>
