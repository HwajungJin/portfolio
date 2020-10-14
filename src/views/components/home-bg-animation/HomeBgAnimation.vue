<template>
  <canvas ref="canvas" class="c-canvas"></canvas>
</template>

<script>
import animationMixin from './animationMixin.js'

export default {
  name: 'HomeBackgroundAnimation',
  mixins: [animationMixin]
}
</script>

<style scoped lang='scss'>
.c-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>