<template lang='pug'>
.section-indicator
  .section-indicator__box
  .section-indicator__row(
    v-for="(sectionName, index) in sectionList"
    :key="sectionName"
    :class="{ 'active': sectionName === activeSection }"
  )
    span.line
    span.text {{ sectionName }}
</template>

<script>
export default {
  name: 'SectionIndicator',
  data () {
    return {
      sectionList: [
        'about',
        'work',
        'contact'
      ]
    }
  },
  props: {
    activeSection: {
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.section-indicator {
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  pointer-events: none;

  > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  &__box {
    width: 1.2rem;
    height: 1.2rem;
    background-color: $text-black;
  }
}

.section-indicator__row {
  $timing-function: cubic-bezier(.87,.08,.91,.44);

  display: block;
  overflow: hidden;

  > * {
    display: inline-block;
  }

  .line {
    width: 2rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    margin-right: 1rem;
    background-color: $text-black;
  }

  .text {
    position: relative;
    font-size: $size-body-xs;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: $text-black;
    margin-bottom: -0.2rem;
    user-select: none;
    transform: translateX(120%);
    overflow: hidden;

    @include desktop {
      font-size: $size-body-sm;
    }

    @include largescreen {
      font-size: $size-body-md;
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $text-black;
    }
  }

  &.active {
    > .line { 
      width: 2.8rem; 
    }

    > .text {
      transform: translateX(0%);
      transition: transform 0.28s $timing-function;

      &::after {
        transform: translateX(-110%);
        transition: transform 0.25s $timing-function 0.4s;
      }
    }
  }
}
</style>