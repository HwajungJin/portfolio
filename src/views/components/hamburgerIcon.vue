<template lang='pug'>
button.c-hamburger(
  @click='openModal'
)
  span.bar(
    v-for='n in 3'
    :key='"bar" + n'
  )
</template>
<script>
import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'HamburgerIcon',
  methods: {
    openModal () {
      Bus.$emit(eventList.openModal)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.c-hamburger {
  $bar-width: 2rem;
  $bar-height: 0.2rem;

  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: $bar-height * 2;

  .bar {
    display: block;
    width: $bar-width;
    height: $bar-height;
    border-radius: $bar-height;
    background-color: $text-grey-dark;
    transition: width 0.2s cubic-bezier(.86,.67,.65,1.54);
  }
  .bar:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    .bar:first-child { width: $bar-width * 0.5; }
    .bar:nth-child(2) { width: $bar-width * 0.75; }
    .bar:last-child { width: $bar-width * 1.2; }
  }
  &:active {
    background-color: $text-grey-dark;
    
    .bar { background-color: $background-white; }
  }
}
</style>