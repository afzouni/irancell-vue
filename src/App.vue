<template>
  <div class="container">
    <v-table
      :data="boltons"
      :filters="filters"
      :currentPage.sync="currentPage"
      :pageSize="page_size"
      @totalPagesChanged="totalPages = $event"
    >
      <thead slot="head">
        <v-th sortKey="desc">عنوان</v-th>
        <v-th sortKey="size">حجم</v-th>
        <v-th sortKey="price">قیمت (ریال)</v-th>
        <v-th sortKey="pricePerSize" defaultSort="asec"
          >قیمت هر گیگ (ریال)</v-th
        >
        <!-- <v-th sortKey="expiryday">مدت روز</v-th> -->
        <v-th sortKey="subcategoryname">نوع</v-th>
        <v-th sortKey="sizePerDay">حجم روزانه معادل (مگ) </v-th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }">
        <tr v-for="row in displayData" :key="row.id">
          <td>{{ row.desc }}</td>
          <td class="ltr">{{ row.sizeName }}</td>
          <td>{{ vueNumberFormat(row.price) }}</td>
          <td>{{ vueNumberFormat(row.pricePerSize) }}</td>
          <!-- <td>{{ row.expiryday }}</td> -->
          <td>{{ row.subcategoryname }}</td>
          <td>{{ row.sizePerDay }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import boltons from "./boltons-new.json";

export default {
  name: "CustomFiltering",
  data: () => ({
    boltons,
    sinpper_value: 100,
    filters: {
      price: { value: "", keys: ["price"] },
    },
  }),
};
</script>

<style>
body {
  /* background: #696969; */
  font-family: "vazirvue";
  direction: rtl;
}
.container {
  margin: auto;
  width: 70%;
  padding: 10px;
  text-align: center;
}
.ltr {
  direction: ltr !important;
}
table {
  border-collapse: collapse;
  margin: auto;
  width: 100%;
}
table {
  margin: 1rem 0;
  display: block;
  overflow-x: auto;
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

tr {
  border-top: 1px solid #dfe2e5;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

td,
th {
  border: 1px solid #dfe2e5;
  padding: 0.6em 1em;
  text-align: center;
}

td {
  display: table-cell;
  vertical-align: inherit;
}

tr:nth-child(2n) {
  background-color: #f6f8fa;
}
</style>