<template lang='pug'>
.c-string-typer(
  :class="{ 'is-cursor-hidden': hideCursor }"
) {{ currentText }}
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'StringTyper',
  data () {
    return {
      timeline: null,
      currentTrimPoint: 0,
      currentTrimPointMax: 0,
      hideCursor: true
    }
  },
  computed: {
    currentText () {
      return this.string.slice(
        0,
        Math.round(this.currentTrimPoint)
      )
    }
  },
  props: {
    string: {
      type: String,
      required: true
    },
    immediateRender: {
      type: Boolean,
      default: false,
      required: false
    },
    aniDelay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    }
  },
  methods: {
    initializeAnimation () {
      return gsap.timeline()
        .to(
          this.$data,
          {
            currentTrimPoint: this.currentTrimPointMax,
            duration: this.duration,
            ease: 'none',
            onStart: () => {
              this.hideCursor = false
            }
          }
        )
    }
  },
  mounted () {
    this.currentTrimPointMax = this.string.length
    
    if (this.immediateRender) {
      this.currentTrimPoint = this.currentTrimPointMax
      this.hideCursor = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-string-typer {
  display: inline-block;
  width: max-content;
  height: auto;
  font-size: $size-body-xl;
  color: $text-black;

  &.is-cursor-hidden::after {
    display: none;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 0.3rem;
    margin-left: 0.3rem;
    margin-bottom: -0.2rem;
    background-color: $text-red;
    // animation: flickeringCursor 0.4s steps(1) infinite alternate;
  }
}

@keyframes flickeringCursor {
  0%{ opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>