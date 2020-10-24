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
    ref='bigBox'
    :style='bigBoxStyleObj'
    :class="{ 'is-color-clicked': isColorClicked || immediateRender }"
  )
    template(v-if='!hideBigBoxDeco')
      svg.c-svg-outline(
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
      )
        rect(
          x="0" y="0" 
          width="100%" height="100%"
        )

      .cross

  .gutter-container
    .gutter(
      ref='gutter'
      v-for="m in (barAmount - 1)"
      :key="'gutter-' + m"
      :style='{ left: `${100 / barAmount * m}%` }'
    )

  .color-palette(
    v-show='!immediateRender'
    ref='colorPalette'
    :class="{ 'is-clicked': isColorClicked }"
  )
    .label Select colours

    .color-item(
      ref='colorItem'
      v-for='color in colorList'
      :key='color'
    )
      .pad(:style='{ backgroundColor: `#${color}` }')
      .color-name {{ color }}
      .percent 100%
  
  pointer.c-pointer(
    ref='pointer'
    @pointer-click="clickColor"
  )
</template>

<script>
import gsap from 'gsap'
import Pointer from '@components/Pointer.vue'

export default {
  name: 'HomeAnimationNew',
  components: {
    Pointer
  },
  data () {
    return {
      colorList: ['464646', 'F1CD75', 'F8F4F4'],
      isColorClicked: false,
      masterTimeline: null,
      colorPaletteTimeline: null,
      hideBigBoxDeco: false,
      bigBoxStyleObj: {
        top: '130%',
        left: '140%',
        width: '0%',
        height: '0%'
      },
      pointerStyleObj: {
        top: null,
        left: null,
      },
      pointerTo: {
        top: null,
        left: null
      }
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
    bigBoxStyleTo () {
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
    },
    immediateRender () {
      return this.$root.$data.shared.introAnimationDisabled
    }
  },
  methods: {
    clickColor () {
      this.isColorClicked = true
    },
    initializeAnimation () {
      this.masterTimeline = gsap.timeline({
        paused: true
      })

      this.colorPaletteTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          !this.immediateRender &&
            this.pointerAnimation()
        }
      })

      this.masterTimeline
        .add( this.barAnimation() )
        .addLabel('afterBarAnimation', "+=0.25")
        .add( this.bigBoxRevealAnimation(), 'afterBarAnimation')
        .add( this.gutterAnimation(), 'afterBarAnimation+=0.3')
    
      this.colorPaletteTimeline
        .add( this.colorPaletteAnimation() )
    },
    barAnimation() {
      return gsap.fromTo(
        this.$refs.bar,
        { height: '0%' },
        {
          duration: 0.7,
          stagger: 0.25,
          ease: 'power2.out',
          height: '100%'
        }
      )
    },
    gutterAnimation() {
      return gsap.fromTo(
        this.$refs.gutter,
        { height: '0%' },
        {
          duration: 1.5,
          ease: 'none',
          height: '100%',
          onComplete: () => {
            !this.immediateRender &&
              this.$emit('bg-animation-done')
          }
        }
      )
    },
    bigBoxRevealAnimation() {
      const thisRef = this

      return gsap.timeline().to(
        this.bigBoxStyleObj,
        {
          duration: 0.8,
          ease: 'power2.out',
          top: this.bigBoxStyleTo.top,
          left: this.bigBoxStyleTo.left
        }).to(
          this.bigBoxStyleObj,
          {
            duration: 1,
            height: this.bigBoxStyleTo.height,
            width: this.bigBoxStyleTo.width,
            ease: 'power1.out',
            onComplete: () => {
              thisRef.hideBigBoxDeco = true
            }
          }, "+=0.3")
    },
    colorPaletteAnimation () {
      return gsap.fromTo(
        this.$refs.colorPalette,
        {
          bottom: '-40rem'
        },
        {
          bottom: '8rem',
          duration: 0.6,
          ease: 'back.out(1.2)',
          onComplete: this.getColorItemPosition,
          callbackScope: this
        }
      )
    },
    getColorItemPosition () {
      const itemEl = this.$refs.colorItem[1]
      const {
        top, left, width
      } = itemEl.getBoundingClientRect()

      this.pointerTo.top = `${top}px`
      this.pointerTo.left = `${left + width*0.2}px`
    },
    pointerAnimation () {
      const pointer = this.$refs.pointer

      const tl = gsap.timeline({
        paused: true
      }).fromTo(
        pointer.$el,
        {
          top: `${innerHeight * 1.25}px`,
          left: `${innerWidth * 0.2}px`
        },
        {
          duration: 0.6,
          top: this.pointerTo.top,
          left: this.pointerTo.left,
          ease: 'power2.out',
          onComplete: () => {
            pointer.pointerClick()
          }
        }
      ).addLabel('afterBoxBgAnimation', '+=1.3')
      .to(
        pointer.$el,
        {
          duration: 0.3,
          top: `${innerHeight * 1.25}px`,
          ease: 'power2.out',
        },
        'afterBoxBgAnimation'
      )
      .to(
        this.$refs.colorPalette,
        {
          duration: 0.45,
          bottom: '-45rem',
          ease: 'back.in(1.2)',
          onComplete: () => {
            this.$emit('color-palette-animation-done')
          }
        },
        'afterBoxBgAnimation'
      )

      if (this.immediateRender) {
        tl.progress(1)
      } else {
        tl.play()
      }
    }
  },
  mounted () {
    this.initializeAnimation()
    
    if (this.immediateRender) {
      this.masterTimeline.progress(1)
    } else {
      this.$nextTick(() => {
        this.masterTimeline.play()
      })
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

  .bar-container {
    align-items: flex-end;
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
  right: 50%;
  transform: translateX(50%);
  bottom: 6rem;
  background-color: $background-white;
  border: 1px solid $text-grey-dark;
  box-shadow: -1rem 1rem 0px 0px var(--shadow-color__before);
  width: max-content;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;

  --shadow-color__before: #D1C6C6;
  --shadow-color__after: #E3C068;
  
  @include tablet {
    right: 8rem;
    transform: unset;
    padding: 4.2rem 3rem;
    min-width: 24rem;
  }

  @include from(1000px) {
    right: 12rem;
  }

  @include desktop {
    right: 20rem;
  }

  &.is-clicked {
    box-shadow: -1rem 1rem 0px 0px var(--shadow-color__after);
  }

  .label {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: $size-body-xl;
    color: $text-black;

    @include phoneblet {
      font-size: $size-body-xl;
    }

    @include tablet {
      margin-bottom: 3rem;
    }

    @include desktop {
      font-size: $size-body-xxl;
    }
  }

  .color-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: $text-grey;
    font-size: $size-body-lg;
    font-weight: 700;

    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    .pad {
      position: relative;
      flex-shrink: 0;
      width: 2rem;
      height: 2rem;
      margin-right: 0.8rem;
    }

    .color-name {
      position: relative;
      text-align: left;
      min-width: 8rem;
    }

    @include tablet {
      font-size: $size-body-xl;

      &:not(:last-child) {
        margin-bottom: 2rem;
      }

      .pad {
        width: 2.6rem;
        height: 2.6rem;
        margin-right: 1.4rem;
      }

      .color-name {
        min-width: 12rem;
      }
    }
  }
}

.big-box {
  position: absolute;
  background-color: $background-grey;
  transform-origin: "left top";

  &.is-color-clicked {
    transition: background-color 0.2s ease-out;
    background-color: var(--ref_01);
  }

  .cross {
    position: absolute;
    bottom: 0;
    right: 0;

    --cross-length: 2.6rem;

    &::after,
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $text-black;
    }

    &::after {
      height: var(--cross-length);
      width: 1px;
    }

    &::before {
      height: 1px;
      width: var(--cross-length);
    }
  }
}

.c-pointer {
  position: absolute;
  top: 130%;
  left: 20%;
  z-index: 2;
}

.c-svg-outline {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  rect {
    fill: none;
    stroke: $text-grey-dark {
      width: 1px;
      dasharray: 6 6;
    }
  }
}
</style>