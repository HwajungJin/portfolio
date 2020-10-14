<template lang='pug'>
button.c-close-button(
  v-on='$listeners'
)
  span.c-bar
  span.c-bar
</template>

<script>
import { 
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'CloseButton',
  methods: {
    close () {
      Bus.$emit(eventList.closeModal)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

$button-side-length: 3.5rem;
$bar-width: 1px;

.c-close-button {
  position: absolute;
  width: $button-side-length;
  height: $button-side-length;
  cursor: pointer;
  padding: 0.5rem;
}

.c-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  height: $bar-width;
  border-radius: $bar-width;
  width: 100%;
  background-color: $text-black;

  &:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.c-close-button:hover .c-bar {
  animation: width-ani 0.3s ease-out;
}

@keyframes width-ani {
  0% { width: 0%; }
  100% { width: 100%; }
}
</style>