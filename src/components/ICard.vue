<template>
  <div class="i-card border">
    <div v-if="title" class="i-card__header">
      <span class="">
        {{ title }}
      </span>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ICard",
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/components/i-card";
</style>