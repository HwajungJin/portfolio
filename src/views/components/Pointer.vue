<template lang='pug'>
span.c-pointer
  span.c-pointer--circle(
    :class="{ 'is-clicked': isClicked }"
    @animationend="$emit('pointer-click')"
  )
  span.c-pointer--triangle
  span.c-pointer--bar
</template>

<script>
export default {
  name: 'Pointer',
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    pointerClick () {
      this.isClicked = true
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-pointer {
  display: block;
  right: 0%;
  width: 1.4rem;
  height: 1.4rem;
  transform-origin: 50% 50%;
  transform: translate(80%, 80%) rotate(-45deg);

  > * {
    position: absolute;
    display: block;
  }

  &--circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    background-color: var(--ref_02);
    opacity: 0;

    &.is-clicked {
      animation: pointerClicked 0.65s ease-in forwards;
    }
  }

  &--triangle {
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    border-top: 0px solid rgba(0,0,0,0);
    border-left: 0.7rem solid rgba(0,0,0,0);
    border-right: 0.7rem solid rgba(0,0,0,0);
    border-bottom: 1.4rem solid $text-black;
  }

  &--bar {
    top: 100%;
    left: 55%;
    width: 0.3rem;
    height: 1rem;
    border-radius: 0.2rem;
    background-color: $text-black;
    transform: translateX(-50%);
  }
}

@keyframes pointerClicked {
  0% {
    opacity: 1;
    width: 0;
    height: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0.02;
    width: 5rem;
    height: 5rem;
  }
}
</style>