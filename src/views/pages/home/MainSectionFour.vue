<template lang='pug'>
.main-section.c-main-section-four
  .c-white-box
    .c-header
      boxed-text(
        :fontSize='headerFontSize'
      ) Contact me
    .c-line
      p I am excited to have a chance to work with you :)
      p Please contact me at
      strong hajoung222@gmail.com

    .c-line
      p Or give me a call on
      strong 022 676 3928
</template>

<script>
import BoxedText from '@components/BoxedText.vue'

export default {
  name: 'MainSectionFour',
  components: {
    BoxedText
  },
  computed: {
    headerFontSize () {
      switch (this.$mq) {
        case 'largescreen':
          return 14
        case 'desktop':
          return 12
        case 'tabletop':
          return 10
        case 'tablet':
          return 8
        case 'phoneblet':
          return 6.75
        default:
          return 5
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-main-section-four {
  position: relative;
  background-color: $background-grey;

  > *:not(.c-white-box) {
    z-index: 2;
  } 
}

.c-white-box {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 85vw;
  height: 80vh;
  max-width: 60rem;
  min-width: 70vw;
  max-width: 90rem;
  min-height: 70vh;
  padding: 6rem 2rem;
  background-color: $background-light-grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @include phoneblet {
    padding: 6rem 4rem;
  }

  @include tablet {
    min-width: 80vw;
    max-width: 68rem;
  }

  @include from(1000px) {
    min-width: 70vw;
    max-width: 90rem;
    padding: 10rem 6rem;
  }

  @include largescreen {
    padding: 14rem 8rem 4rem;
    max-width: 140rem;
  }

  @media screen and (min-width: 769px) and (min-height: 750px) {
    max-height: 60rem;
  }

  @media screen and (min-width: 769px) and (min-height: 900px) {
    max-height: 70rem;
  }

  @media screen and (min-width: 769px) and (min-height: 1100px) {
    min-height: 65vh;
    max-height: 100rem;
  }
}

.c-line {
  display: block;
  font-size: $size-body-lg;

  p {
    margin-bottom: 0.75rem;
  }

  strong {
    font-size: 1.15em;
    word-break: break-all;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  @include phoneblet {
    font-size: $size-body-xxl;
  }

  @include tablet {
    font-size: $size-body-huge;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }

  @include largescreen {
    font-size: 2.8rem;
  }
}

.c-header {
  position: absolute;
  width: 120%;
  height: auto;
  padding-bottom: 1rem;
  transform: translateX(-4rem) translateY(-75%);
  border-bottom: 1px solid $text-black;
  top: 0;
  left: 0;
}
</style>