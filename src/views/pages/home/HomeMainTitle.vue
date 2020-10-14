<template lang="pug">
.c-home-main-title
  .c-text-container 
    h3.text.heading My Portfolio.

  span.c-dot--inner(
    v-for="corner in corners"
    :key="`dot-inner-${corner}`"
    :class="corner"
  )

  span.c-dot--border(
    v-for="corner in corners"
    :key="`dot-border-${corner}`"
    :class="corner"
  )

  pointer.c-pointer
</template>

<script>
import Pointer from '@components/Pointer.vue'

export default {
  name: 'HomeMainTitle',
  components: {
    Pointer
  },
  data () {
    return {
      corners: [ 
        'topleft',
        'topright',
        'bottomleft',
        'bottomright'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";

.c-home-main-title {
  position: relative;
  border: 1px solid $text-black;
  color: $text-black;
  padding: 2rem;
  width: min-content;
  height: max-content;

  @media screen and (max-height: 700px) and (max-width: 440px) {
    width: max-content;
  }

  @include phoneblet {
    width: max-content;
  }

  .c-text-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    letter-spacing: 0.5rem;

    .text {
      font: {
        size: 5.6rem;
        weight: 700;
      }
      letter-spacing: 0.04em;

      @media screen and (max-height: 700px) and (max-width: 440px) {
        font-size: 12vw;
      }

      @include from(600px) {
        font-size: 7.6rem;
      }

      @include tablet {
        font-size: 9.5rem;
      }

      @include desktop {
        font-size: 12rem;
      }

      @include from(1400px) {
        font-size: 15rem;
      }

      @include largescreen {
        font-size: 18rem;
      }

      @include from(1800px) {
        font-size: 20rem;
      }
    }
  }
}

.c-dot--border {
  position: absolute;
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid $text-black;
  background-color: $background-white;

  &.topleft {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
  &.topright {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
  &.bottomleft {
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  }
  &.bottomright {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  }
}

.c-dot--inner {
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: 1px solid $text-black;
  background-color: $background-white;

  &::before {
    @include absoluteCenter;

    content: '';
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    background-color: $text-black;
    z-index: 1;
  }

  &.topleft {
    top: 0;
    left: 0;
    transform: translate(100%, 100%);
  }
  &.topright {
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
  }
  &.bottomleft {
    bottom: 0;
    left: 0;
    transform: translate(100%, -100%);
  }
  &.bottomright {
    bottom: 0;
    right: 0;
    transform: translate(-100%, -100%);
  }
}

.c-pointer {
  position: absolute;
  bottom: 0%;
  right: 0%;
}
</style>