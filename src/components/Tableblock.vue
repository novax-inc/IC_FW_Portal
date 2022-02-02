<template>
  <!-- paginated -->
  <!-- per-page="8" -->
  <div class="container">
    <b-table
      :data="infolist"
      ref="table"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="id"
      @details-open="(row) => $buefy.toast.open(`Expanded ${row.url}`)"
      :show-detail-icon="showDetailIcon"
    >
      <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="id" label="Name" centered sortable v-slot="props">
        <template v-if="showDetailIcon">
          {{ props.row.url }}
        </template>
        <template v-else>
          <a @click="props.toggleDetails(props.row)">
            {{ props.row.url }}
          </a>
        </template>
      </b-table-column>

      <b-table-column
        field="date"
        label="Date"
        sortable
        centered
        v-slot="props"
      >
        <span class="tag is-success">
          {{ new Date(props.row.date).toLocaleDateString() }}
        </span>
      </b-table-column>

      <b-table-column v-slot="props">
        <span>
          <b-button @click="downloadurl(props.row.url)"> Download </b-button>
        </span>
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
  props: ["infolist"],
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: false,
    };
  },
  watch: {
    // "infolist": function (list) {
    //   console.log("list: "+list);
    // },
  },
  methods: {
    downloadurl(fileurl) {
      // console.log(fileurl);
      this.$emit('download_file',fileurl)
    },
  },
};
</script>
