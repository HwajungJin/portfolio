<template lang='pug'>
.c-timeline
  .timeline__track(
    ref='track'
  )
  .timeline__btn(
    ref='button'
    :class="{ 'show-text': showStartText }"
  )
  .timeline__text.heading
    span(
      ref='heading'
    ) 2020
  .timeline__container
    timeline-item
      svg.c-hello-text(
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 525 100"
      )
        text.hello(
          x="262.5"
          y="70"
          textLength="525"
          lengthAdjust="spacingAndGlyphs"
        ) Hello Again :)
    timeline-item
      | I'm a
      strong UI Designer
      | from korea, currently based in New Zealand.
    timeline-item
      | I'm a
      strong Creative
      | person.
    timeline-item
      | I'm a great
      strong Learner.
    timeline-item
      | I love to
      strong design
      | and
      strong develop app & web.
</template>

<script>
import gsap from 'gsap'
import TimelineItem from './TimelineItem.vue'

export default {
  name: 'Timeline',
  data () {
    return {
      showStartText: false
    }
  },
  components: {
    TimelineItem
  },
  methods: {
    timelineAnimation () {
      return gsap.timeline()
        .add( this.buttonAnimation() )
        .addLabel('button-ani-end')
        .add( this.trackAnimation(), "button-ani-end")
        .add( this.headingAnimation(), "button-ani-end")
    },
    buttonAnimation () {
      return gsap.from(
        this.$refs.button,
        {
          duration: 0.5,
          ease: 'back.out(1.45)',
          scale: 0,
          onComplete: () => {
            this.showStartText = true
          }
        }
      )
    },
    trackAnimation () {
      return gsap.from(
        this.$refs.track,
        {
          duration: 0.6,
          ease: 'power3.in',
          height: '0%'
        }
      )
    },
    headingAnimation () {
      return gsap.from(
        this.$refs.heading,
        {
          duration: 0.5,
          ease: 'power2.out',
          x: '-110%'
        }
      )
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-timeline {
  position: absolute;
  width: 0.3rem;
  height: calc(100vh + 18rem);
  border-radius: 0.3rem;

  .timeline__track {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: $text-red;
  }

  .timeline__btn {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    background-color: $text-red;

    &.show-text::after {
      margin-left: 2rem;
      opacity: 1;
      transition: all 0.25s ease-out;
    }
  }
  .timeline__btn::before {
    content: '';
    display: block;
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $background-white;
  }
  .timeline__btn::after {
    content: 'start';
    display: block;
    position: relative;
    font-size: $size-body-lg;
    letter-spacing: 1px;
    margin-left: 0;
    opacity: 0;

    @include largescreen {
      font-size: $size-body-xxl;
    }

    @media screen and (min-height: 800px) {
      font-size: $size-body-xl;
    }

    @media screen and (min-height: 1100px) {
      font-size: $size-body-xxl;
    }
  }

  .timeline__text {
    position: absolute;
    color: $text-red;
    font-size: 5.2rem;
    font-weight: 700;
    writing-mode: vertical-lr;
    transform: rotate(0deg) translateX(-10%);
    bottom: 100.5vh;
    overflow: hidden;
    
    > span {
      display: inline-block;
      position: relative;
    }
  }

  .timeline__container {
    position: absolute;
    left: -0.8rem;
    top: 25rem;
    width: max-content;
    height: max-content;
  }

  @include tablet {
    .timeline__text {
      transform: rotate(-180deg) translateX(78%);
    }
  }

  @media screen and (min-height: 800px) {
    height: calc(100vh + 24rem);

    .timeline__text {
      font-size: 6.4rem;
    }

    .timeline__container {
      top: 35rem;
    }
  }

  @media screen and (min-height: 1100px) {
    height: calc(100vh + 50rem);

    .timeline__text {
      font-size: 8rem;
    }

    .timeline__container {
      top: 70rem;
    }
  }
}

.c-hello-text {
  position: relative;
  width: 22rem;
  height: 4.7rem;

  @include phoneblet {
    width: 30rem;
    height: 6rem;
  }

  @include from(600px) {
    width: 38rem;
    height: 7.6rem;
  }

  @include tablet {
    width: 44rem;
    height: 8.5rem;
  }

  @include from(1000px) {
    width: 52.5rem;
    height: 10rem;
  }
  
  @include desktop {
    width: 62rem;
    height: 14rem;
  }

  @include largescreen {
    width: 80rem;
    height: 18rem;
  }

  .hello {
    font-size: 7rem;
    font-weight: 700;
    text-anchor: middle;
    fill: none;
    letter-spacing: 0.5rem;
    stroke: rgba($text-black, 0.9) {
      width: 1px;
    }
  }
}
</style>