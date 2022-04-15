<template>
  <label>
    <input
        type="checkbox"
        v-model="model"
        class="filter-attribute-checkbox ib-m"
    />

    {{ label }}
  </label>
</template>

<script>
export default {
  name: "ICheckbox",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
}
</script>
