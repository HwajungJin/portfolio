<template lang='pug'>
.c-text-cloud
  svg.c-svg(
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 150 70"
  )
    path.c-cloud(
      :d="isUpsideDown? 'M 0,15 h68 l7,-15 7,15 h68 v55 h-150 z' : 'M 0,0 h150 v55 h-68 l-7,15 -7,-15 h-68 z'"
    )
    text.c-welcome-text(
      x="75" 
      :y="isUpsideDown? 50 : 35"
    ) Welcome!
</template>

<script>
export default {
  name: 'TextCloud',
  props: {
    isUpsideDown: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-text-cloud {
  position: absolute;
  width: 12rem;
  height: 5rem;

  @include tablet {
    width: 15rem;
    height: 7rem;
  }
}

.c-svg {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
}

.c-cloud {
  fill: $text-black;
  stroke: none;
}

.c-welcome-text {
  font-size: 2.2rem;
  letter-spacing: 1.25px;
  text-anchor: middle;
  fill: $background-white;
}
</style>