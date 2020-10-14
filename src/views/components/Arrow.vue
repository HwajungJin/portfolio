<template lang='pug'>
.c-arrow(
  v-bind='$attrs'
  v-on='$listeners'
  :class="{ 'is-red': isRed, 'to-right': toRight }"
)
  .c-arrow__middle
    .c-arrow__wing.is-right
    .c-arrow__wing.is-left
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    isRed: {
      type: Boolean,
      default: false
    },
    toRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

$height: 1.2rem;
$width: 3.2rem;
$thickness: 2px;

.c-arrow {
  position: relative;
  display: inline-block;
  width: $width;
  height: $height;
  cursor: pointer;
  padding: 1.5rem 2.5rem;
  
  &__middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: $thickness;
    border-radius: $thickness;
    width: $width;
    background-color: $text-black;
  }

  &__wing {
    position: absolute;
    height: $thickness;
    border-radius: $thickness;
    top: 0;
    left: 0;
    width: 30%;
    transform-origin: 0% 50%;
    background-color: inherit;
  }
  &__wing.is-left {
    transform: rotate(45deg);
  }
  &__wing.is-right {
    transform: rotate(-45deg);
  }
}

.c-arrow.is-red .c-arrow__middle {
  background-color: $text-red;
}

.c-arrow.to-right{
  transform: scale(-1,1);
}
</style>