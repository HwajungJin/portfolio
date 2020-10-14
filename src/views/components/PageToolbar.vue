<template lang='pug'>
.c-toolbar
  .c-toolbar-title(
    @click="toHome"
  ) Jin
  hamburger-icon
</template>

<script>
import HamburgerIcon from './hamburgerIcon.vue'
import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'PageToolbar',
  components: {
    HamburgerIcon
  },
  methods: {
    toHome () {
      Bus.$emit(eventList.updatePageNumber, 0)

      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: $page-toolbar-height;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $background-white;
  border: 1px solid $background-slight-grey;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.015);
  z-index: 3;

  @include tablet {
    padding: 0 8rem;
  }
}

.c-toolbar-title {
  font-size: 2.5rem;
  color: $text-black;
  cursor: pointer;
}
</style>