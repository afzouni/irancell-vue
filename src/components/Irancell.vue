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
                  <button @click="resetFilter">حذف فیلتر</button>
                </div>
                <h1 class="filter-item-inner-heading minus">قیمت</h1>
                <ul class="filter-attribute-list ul-reset">
                  <div class="filter-attribute-list-inner">
                    <li
                      class="filter-attribute-item"
                      v-for="(value, index) in sizePrice"
                      :key="value"
                    >
                      <input
                        type="checkbox"
                        :id="index"
                        :value="value"
                        v-model="filters.filterPrice.value"
                        name="stepPrice"
                        class="filter-attribute-checkbox ib-m"
                      />

                      <label
                        :for="value.name"
                        class="filter-attribute-label ib-m"
                      >
                        {{ value.name }}
                      </label>
                    </li>
                  </div>
                </ul>

                <h1 class="filter-item-inner-heading minus">حجم بسته</h1>
                <ul class="filter-attribute-list ul-reset">
                  <div class="filter-attribute-list-inner">
                    <li
                      class="filter-attribute-item"
                      v-for="(value, index) in sizeSteps"
                      :key="value"
                    >
                      <input
                        type="checkbox"
                        :id="index"
                        :value="value"
                        v-model="filters.filterSize.value"
                        name="stepSize"
                        class="filter-attribute-checkbox ib-m"
                      />

                      <label
                        :for="value.name"
                        class="filter-attribute-label ib-m"
                      >
                        {{ value.name }}
                      </label>
                    </li>
                  </div>
                </ul>

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
let sizeSteps = {
  sizeStep1: {
    name: "کمتر از 1 گیگ",
    min: -1,
    max: 1024,
  },
  sizeStep2: {
    name: "بین 1 تا 3 گیگ",
    min: 1024,
    max: 3072,
  },
  sizeStep3: {
    name: "بین 3 تا 10 گیگ",

    min: 3072,
    max: 10240,
  },
  sizeStep4: {
    name: "بیشتر از 10 گیگ",

    min: 10240,
    max: 99999999,
  },
};
let sizePrice = [
  {
    name: "کمتر از 10 هزار تومان",
    min: -1,
    max: 100000,
  },
  {
    name: "بین 11 تا 25 هزار تومان",
    min: 100001,
    max: 250000,
  },
  {
    name: "بین 26 تا 30 هزار تومان",
    min: 250001,
    max: 300000,
  },
  {
    name: "بین 31 تا 50 هزار تومان",
    min: 300001,
    max: 500000,
  },
  {
    name: "بین 51 تا 90 هزار تومان",
    min: 510001,
    max: 900000,
  },
  {
    name: "بالای 91 هزار تومان",
    min: 900001,
    max: 999999999,
  },
];
export default {
  name: "CustomFiltering",
  created() {
    this.filteredList(boltons);
  },
  data() {
    return {
      checked: [],
      sizeSteps,
      subcategories,
      sizePrice,
      boltons,
      filters: {
        subcategoryname: { value: [], custom: this.filterBySubcategoryname },
        filterSize: { value: [], custom: this.filterBySize },
        filterPrice: { value: [], custom: this.filterByPrice },
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

    filterBySize(filterValue, row) {
      if (filterValue.length === 0) {
        return true;
      }
      let min = 9999999,
        max = -1;
      filterValue.forEach((element) => {
        if (element.max > max) {
          max = element.max;
        }
        if (element.min < min) {
          min = element.min;
        }
      });
      return row.size >= min && row.size <= max;
    },

    filterByPrice(filterValue, row) {
      if (filterValue.length === 0) {
        return true;
      }
      let min = 9999999,
        max = -1;
      filterValue.forEach((element) => {
        if (element.max > max) {
          max = element.max;
        }
        if (element.min < min) {
          min = element.min;
        }
      });
      return row.price >= min && row.price <= max;
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

    resetFilter() {
      this.filters.subcategoryname.value = [];
      this.filters.filterSize.value = [];
      this.filters.filterPrice.value = [];
    },
  },
};
</script>



<style>
</style>