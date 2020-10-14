<template lang='pug'>
.c-home-animation-new
  .bar-container
    .bar(
      ref='bar'
      v-for="n in barAmount"
      :key="'bar-' + n"
      :style='barStyleObj'
    )
  
  .big-box(
    :style='bigBoxStyleObj'
  )

  .gutter-container
    .gutter(
      ref='gutter'
      v-for="m in (barAmount - 1)"
      :key="'gutter-' + m"
      :style='{ left: `${100 / barAmount * m}%` }'
    )

  .color-palette(
    v-if='false'
    :class="{ 'is-clicked': isColorClicked }"
  )
    .label Select colours

    .color-item(
      v-for='color in colorList'
      :key='color'
    )
      .pad(:style='{ backgroundColor: `#${color}` }')
      .color-name {{ color }}
      .percent 100%
  
    pointer.c-pointer
</template>

<script>
// import gsap from 'gsap'
import Pointer from '@components/Pointer.vue'

export default {
  name: 'HomeAnimationNew',
  components: {
    Pointer
  },
  data () {
    return {
      colorList: ['464646', 'F1CD75', 'F8F4F4'],
      isColorClicked: false
    }
  },
  computed: {
    barAmount () {
      switch (this.$mq) {
        case 'small':
        case 'phone':
        case 'phoneblet':
          return 3
        case 'tablet':
        case 'tabletop':
          return 4
        default:
          return 5
      }
    },
    barStyleObj () {
      return {
        width: `${100 / this.barAmount}%`
      }
    },
    bigBoxStyleObj () {
      let pw, ph

      switch (this.$mq) {
        case 'small':
        case 'phone':
          pw = 75
          ph = 57
          break
        case 'phoneblet':
        case 'tablet':
          pw = 75
          ph = 65
          break
        default:
          pw = 70
          ph = 65
      }

      return {
        width: `${pw}%`,
        height: `${ph}%`,
        top: `${100 - ph}%`,
        left: `${100 - pw}%`
      }
    },
    isBarVertical () {
      return ['tabletop', 'desktop', 'largescreen'].includes(this.$mq)
    }
  },
  methods: {
    clickColor () {
      this.isColorClicked = true
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-home-animation-new {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;

  .bar-container,
  .gutter-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
  }
}

.bar {
  position: relative;
  background-color: $background-light-grey;
  height: 100%;
}

.gutter {
  position: absolute;
  top: 0;
  transform: translateY(-1px);
  width: 2px;
  height: 100%;
  background-color: $background-white;
}

.color-palette {
  position: absolute;
  right: 8rem;
  bottom: 8rem;
  background-color: $background-white;
  border: 1px solid $text-grey-dark;
  box-shadow: -1rem 1rem 0px 0px var(--shadow-color__before);
  min-width: 24rem;
  width: max-content;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4.2rem 3rem;

  --shadow-color__before: #D1C6C6;
  --shadow-color__after: #E3C068;

  &.is-clicked {
    box-shadow: -1rem 1rem 0px 0px var(--shadow-color__after);
  }

  .label {
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: $size-body-xxl;
    color: $text-black;
  }

  .color-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: $text-grey;
    font-size: $size-body-xl;
    font-weight: 700;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    .pad {
      position: relative;
      flex-shrink: 0;
      width: 2.6rem;
      height: 2.6rem;
      margin-right: 1.4rem;
    }

    .color-name {
      position: relative;
      text-align: left;
      min-width: 12rem;
    }
  }
}

.big-box {
  position: absolute;
  background-color: $background-grey;
}

.c-pointer {
  position: absolute;
  bottom: 15%;
  left: 30%;
  z-index: 2;
}
</style>