<template>
  <div>
    <main class="main" role="main">
      <div class="wrapper cf">
        <!-- <div class="breadcrumb">
          <a href="#">Codepen</a> > <a href="#">Filter accordion</a>
        </div> -->

        <aside class="sidebar">
          <h1 class="sidebar-heading">فیلتر</h1>

          <ul class="filter ul-reset">
            <li class="filter-item">
              <section class="filter-item-inner">
                <div class="text-center">
                  <button @click="filters.subcategoryname.value = []">
                    حذف فیلتر
                  </button>
                </div>
                <h1 class="filter-item-inner-heading minus">مدت زمان</h1>
                <ul class="filter-attribute-list ul-reset">
                  <div class="filter-attribute-list-inner">
                    <li
                      class="filter-attribute-item"
                      v-for="value in subcategories"
                      :key="value"
                    >
                      <input
                        type="checkbox"
                        :id="value"
                        :value="value"
                        v-model="filters.subcategoryname.value"
                        name="subcategoryname"
                        class="filter-attribute-checkbox ib-m"
                      />

                      <label :for="value" class="filter-attribute-label ib-m">
                        {{ value }}
                      </label>
                    </li>
                  </div>
                </ul>
              </section>
            </li>
          </ul>
        </aside>

        <section class="content">
          <div class="content-upper">
            <h2 class="content-heading">لیست بسته‌های اینترنت ایرانسل</h2>
            <p>
              در این صفحه لیست بسته‌های ایرانسل را مشاهده می‌کنید و به شما کمک
              می‌کند انتخاب بهینه‌ای برای خرید بسته اینترنتی خود داشته باشید.
            </p>
            <v-table :data="boltons" :filters="filters" class="table">
              <thead slot="head" class="w3-text-teal">
                <tr>
                  <v-th sortKey="desc">عنوان</v-th>
                  <v-th sortKey="size">حجم</v-th>
                  <v-th sortKey="price">قیمت (ریال)</v-th>
                  <v-th sortKey="pricePerSize" defaultSort="asc"
                    >قیمت هر گیگ (ریال)</v-th
                  >
                  <!-- <v-th sortKey="expiryday">مدت روز</v-th> -->
                  <v-th sortKey="subcategoryname">نوع</v-th>
                  <v-th sortKey="sizePerDay">حجم روزانه معادل (مگ) </v-th>
                </tr>
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
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import boltons from "../boltons-new.json";
let subcategories = [];
export default {
  name: "CustomFiltering",
  created() {
    this.filteredList(boltons);
  },
  data() {
    return {
      checked: [],
      subcategories,
      boltons,
      filters: {
        subcategoryname: { value: [], custom: this.filterBySubcategoryname },
      },
    };
  },
  methods: {
    filterBySubcategoryname(filterValue, row) {
      // no search, don't filter :
      if (filterValue.length === 0) {
        return true;
      }
      return filterValue.includes(row.subcategoryname);
    },
    filteredList(array) {
      var subcategories = [];
      array.forEach((element) => {
        var key = element["subcategory"];
        if (subcategories[key] === undefined) {
          subcategories.push(element["subcategoryname"]);
        }
      });
      this.subcategories = [...new Set(subcategories)];
      return this.subcategories;
    },
  },
};
</script>



<style>
</style>