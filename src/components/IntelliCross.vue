<template>
  <div>
    <table width="100%">
      <thead>
        <tr><th><b>{{ data["Project"] }}-Firmware</b></th></tr>
      </thead>
      <tbody>
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
      </tbody>
     <thead>
        <tr><th><b>{{ data["Project"] }}-Filesystem</b></th></tr>
      </thead>
      <thead>
        <tr>
          <th align="left">Date</th>
          <th align="left">F/W Ver.</th>
          <th align="left">Link</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in data['Filesystem']" :key="index">
          <td align="left">{{ record.date }}</td>
          <td align="left">{{ record.id }}</td>
          <td align="left"><a :href="record.url">Download</a></td>
          <td align="left">{{ record.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
</style>
