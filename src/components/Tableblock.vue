<template>
  <!-- paginated -->
  <!-- per-page="8" -->
  <!-- narrowed -->
  <div class="box">
    <b-table
      :data="infolist"
      ref="table"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="id"
      :show-detail-icon="showDetailIcon"
    >
      <b-table-column field="name" label="Name" centered v-slot="props">
        <template v-if="showDetailIcon">
          {{ props.row.url }}
        </template>
        <template v-else>
          <a @click="props.toggleDetails(props.row)">
            {{ props.row.url }}
          </a>
        </template>
      </b-table-column>

      <b-table-column field="date" label="Date" centered v-slot="props">
        <span class="tag is-success">
          {{ new Date(props.row.date).toLocaleDateString() }}
        </span>
      </b-table-column>

      <b-table-column field="id" numeric v-slot="props">
        <a :href="link(props.row.url)">
        <b-button
          icon-left="tray-arrow-down"
          @click="downloadurl(props.row.url)"
        >
          {{ props.row.id ? props.row.id : "Download" }}
        </b-button>
        </a>
      </b-table-column>

      <template #detail="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Update Details:</strong>
                <br />
                {{ props.row.description }}
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis sunt odio nulla officia provident, excepturi,
                temporibus cumque delectus doloribus quidem optio possimus, et
                accusantium amet molestias consequuntur ratione nisi
                perferendis!
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Tableblock",
  props: ["infolist", 'path'],
  computed:{
    url: function(fileurl){
      return this.path + fileurl
    }
  },
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: false,
    };
  },
  methods: {
    downloadurl(fileurl) {
      // console.log(fileurl);
      // this.$emit("download_file", fileurl);
      let url = this.path + fileurl;
      // alert(url)
      window.location.href = url;
    },
    link(fileurl) {
      return this.path + fileurl;
    },
  },
};
</script>
