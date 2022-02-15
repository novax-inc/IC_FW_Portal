<template>
  <div>
    <b-button icon-left="download" @click="saveJSON">Save JSON</b-button>
    <ul class="json">
      <li
        v-for="(element, index) of rawData"
        :key="index"
        align="left"
      >
        <div class="section" style="border: 1em solid green">
            <h2 style="color: red">Project {{index+1}}</h2>
          <input class="subtitle" type="text" v-model="element.Project" />
          <button class="subtitle" @click="deleteProj(rawData, index)">
            Del Project
          </button>
          <h2 style="color: red">Category</h2>
          <input class="subtitle" type="text" v-model="element.Category" />
          

          <li v-for="(item, name) of element" :key="name">
            <div v-if="name != 'Project' && name != 'Category'">
              <div class="container">
                <h2 style="color: red">{{ name }}</h2>
                <button @click="addLine(item)">Add</button>
                <ol>
                  <li v-for="(list, idx) of item" :key="idx">
                    <input type="text" v-model="list.id" placeholder="id"/>
                    <input type="text" v-model="list.url" placeholder="url"/>
                    <!-- <input type="text" v-model="list.checksum" placeholder="checksum"/> -->
                    <input type="text" v-model="list.date" placeholder="date"/>
                    <input
                      type="text"
                      v-model="list.description"
                      max-length="100"
                      placeholder="description"
                    />
                    <button @click="deleteLine(item, idx)">Del</button>
                  </li>
                </ol>
              </div>
            </div>
          </li>
        </div>
      </li>
      <div class="section" style="border: 1em solid green"><button @click="addProj()">+ Add Project</button></div>

    </ul>
    <b-button icon-left="download" @click="saveJSON">Save JSON</b-button>
  </div>
</template>

<script>
// import axios from 'axios'


export default {
  name: "Master",
  inject: ["masterjson"],
  data() {
    return {
      newProjTemp :{
        Project:"",
        Manual: [
          {
            date: new Date().toISOString().slice(0, 10),
          },
        ],
        Firmware: [],
        Filesystem: [],
      },
      rawData: [],
      editType: ["Manual", "Fireware", "Filesystem"],
    };
  },
  mounted() {
    this.rawData = this.masterjson;
  },
  methods: {
    saveJSON() {
     // remove empty project
    let cleanData = this.rawData.filter(val => (val.Project != ""))
     // save to file
      var a = document.createElement("a");
      var file = new Blob([JSON.stringify(cleanData)], {
        type: "application/json",
      });
      a.href = URL.createObjectURL(file);
      a.download = "masterJSON.json";
      a.click();
    },
    addLine(data) {
      let time = new Date();
      data.unshift({
        date: time.toISOString().slice(0, 10),
      });
    },
    addProj() {
      this.rawData.push(this.newProjTemp);
    },
    deleteLine(data, idx) {
      data.splice(idx, 1);
    },
    deleteProj(data, idx) {
      data.splice(idx, 1);
    },
    editableType(type) {
      return this.editType.find((item) => item == type);
    },
  },
};
</script>

<style>

</style>