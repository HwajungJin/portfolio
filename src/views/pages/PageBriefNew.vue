<template lang='pug'>
.c-brief-new(
  :class="`is-${pageNumber}`"
)
  svg.c-svg-canvas(
    v-if="!isPhone"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
  )
    defs
      pattern#pattern-1(
        x="0" y="0" 
        :width="bgPattern.width"
        :height="bgPattern.height"
        patternUnits="userSpaceOnUse"
      )
        path.pattern-outline(
          :d="patternPaths.horizontal.outline"
        )
        path.pattern-innerline(
          :d="patternPaths.horizontal.innerline"
        )

      pattern#pattern-2(
        x="0" 
        :y="bgPattern.height" 
        :width="bgPattern.height"
        :height="bgPattern.width"
        patternUnits="userSpaceOnUse"
      )
        path.pattern-outline(
          :d="patternPaths.vertical.outline"
        )
        path.pattern-innerline(
          :d="patternPaths.vertical.innerline"
        )

    rect(
      x="0" y="0" 
      width="100%" :height="bgPattern.height"
      fill="url(#pattern-1)"
    )
    rect(
      x="0" y="0" 
      :width="bgPattern.height" height="100%"
      fill="url(#pattern-2)"
    )


  .c-container(
    :style="containerStyles"
  )
    styled-box.c-container-inner(
        type="dashed"
        :hasDots="false"
      )
        span.assist-line(
          v-for="n in 3"
          :class="`is-${n}`"
        )
        .c-empty
        .c-content
          h2.brief-title Problem
          slot
        .c-extra-content 
          slot(name="extra-content")
      
    styled-box.c-section-label(
      type="dashed"
      :style="{ 'position': 'absolute' }"
    )
      .deco-box
      h2 Brief

</template>

<script>
import StyledBox from "@components/StyledBox.vue"

export default {
  name: 'Brief',
  components: {
    StyledBox
  },
  computed: {
    isPhone () {
      return ['phoneblet', 'phone', 'small'].includes(this.$mq)
    },
    bgPattern () {
      switch(this.$mq) {
        case 'largescreen':
        case 'desktop':
        case 'tabletop':
          return {
            width: 350,
            height: 50,
            linegap: 10,
            lineHeight: 20,
            lineOffset: 15
          }
        case 'tablet':
        case 'phoneblet':
          return {
            width: 300,
            height: 35,
            linegap: 8,
            lineHeight: 15,
            lineOffset: 12.5
          }
        default:
          return {
            width: 250,
            height: 30,
            linegap: 8,
            lineHeight: 12.5,
            lineOffset: 12.5
          }
      }
    },
    patternPaths () {
      const {
        width: w, height: h,
        linegap: lg, lineHeight: lh,
        lineOffset: lo
      } = this.bgPattern

      return {
        horizontal: {
          outline: `M0,${h} h${w} v${-h}`,
          innerline: `M${w - lo},${(h - lh)/2} v${lh} M${w - lo - lg},${(h - lh)/2} v${lh}`
        },
        vertical: {
          outline: `M0,${w} h${h} v${-w}`,
          innerline: `M${(h - lh)/2},${w - lo} h${lh} M${(h - lh)/2},${w - lo - lg} h${lh}`
        }
      }
    },
    containerStyles () {
      return {
        // height: this.isPhone? '100%' : `calc(100% - ${this.bgPattern.height}px)`,
        width: this.isPhone? '100%' : `calc(100% - ${this.bgPattern.height}px)`,
        marginTop: this.isPhone? 0 : `${this.bgPattern.height}px`,
        marginLeft: this.isPhone? 0 : `${this.bgPattern.height}px`
      }
    }
  },
  props: {
    pageNumber: {
      type: Number
    },
    contentTitle: {
      type: String,
      default: ''
    }

  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

$pattern-color-grey: #707070;
$pattern-color-black: #000;

.c-brief-new {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  background-color: $background-white;

  &.is-1 { --feature-color: $ref_01; }
  &.is-2 { --feature-color: $ref_02; }
  &.is-3 { --feature-color: $ref_03; }
  &.is-4 { --feature-color: $ref_04; }
  &.is-5 { --feature-color: $ref_05; }
}

.c-svg-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .pattern-outline,
  .pattern-innerline {
    fill: none;
    stroke-width: 1px;
  }

  .pattern-outline {
    stroke: $pattern-color-grey;
  }
  .pattern-innerline {
    stroke: $pattern-color-black;
  }
}

.c-section-label {
  position: absolute;
  width: 75vw;
  max-width: 35rem;
  min-width: 30rem;
  height: calc(0.857 * 75vw);
  max-height: 30rem;
  min-height: 26rem;
  left: 1rem;
  top: 2.5rem;
  background-color: $background-white;
  z-index: 1;

  h2 {
    position: absolute;
    font-size: 7.5rem;
    top: 4rem;
    right: 3rem;
  }

  .deco-box {
    position: absolute;
    left: 0;
    bottom: 0;
    height: calc(100% * 2 / 3);
    width: calc(100% * 2 / 3);
    background-color: var(--feature-color);
  }

  @include tablet {
    h2 {
      font-size: 9rem;
      top: 5rem;
      right: 4.5rem;
    }
  }

  @include desktop {
    max-width: 42rem;
    max-height: 36rem;

    h2 {
      font-size: 10.5rem;
      top: 7rem;
      right: 5rem; 
    }
  }

  @include largescreen {
    max-width: 48rem;
    max-height: 42rem;

    h2 {
      font-size: 13rem;
    }
  }
}

.c-container {
  position: relative;
  overflow: hidden;

  .c-container-inner {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 10rem;
    background-color: $background-white;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "c-empty c-content"
      "c-extra-content c-extra-content";

    .assist-line {
      position: absolute;
      width: 30rem;
      height: 1px;
      border-top: 1px dashed $text-grey;
      display: none;

      &.is-1 {
        top: 60%;
        left: 0;
        transform: translateX(-100%);
      }
      &.is-2 {
        top: 60%;
        right: 0;
        transform: translateX(100%);
      }
      &.is-3 {
        top: 0;
        left: 50%;
        transform-origin: 0% 0%;
        transform: rotate(-90deg);
      }
    }

    .c-empty {
      grid-area: c-empty;
      width: 30rem;
    }

    .c-content {
      grid-area: c-content;
      text-align: left;
      padding: 5rem 2.5rem 3rem;
    }

    .c-extra-content {
      grid-area: c-extra-content;
    }
  }

  @include tablet {
    .c-container-inner {
      position: relative;
      width: calc(100% - 6rem - 10rem);
      height: max-content;
      margin-left: 6rem;
      margin-top: 10rem;
    }

    .c-container-inner  .c-content {
      padding: 8rem 5rem 3rem;
    }

    .c-container-inner .assist-line {
      display: block;
    }
  }

  @include till(950px) {
    .c-container-inner {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "c-empty"
        "c-content"
        "c-extra-content";
    }

    .c-container-inner .c-empty {
      width: 100%;
      height: 22rem;
    }
  }

  @include desktop {
    .c-container-inner .c-empty {
      width: 36rem;
    }
  }

  @include largescreen {
    .c-container-inner .c-empty {
      width: 46rem;
    }
  }
}
</style>