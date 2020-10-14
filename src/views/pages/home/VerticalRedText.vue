<template lang='pug'>
.c-vertical-red-text.heading
  slot
</template>

<script>
export default {
  name: 'VerticalRedText'
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-vertical-red-text {
  position: absolute;
  color: $text-red;
  writing-mode: vertical-rl;
  font-size: 10rem;
  font-weight: 700;
  transform-origin: 50% 50%;
  transform: rotate(-180deg);
}
</style>