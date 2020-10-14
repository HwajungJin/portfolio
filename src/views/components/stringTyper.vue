<template lang='pug'>
.c-string-typer {{ string }}
</template>

<script>
export default {
   name: 'StringTyper',
   data () {
     return {
       currentText: ''
     }
   },
   props: {
     string: {
       type: String,
       required: true
     },
     aniOff: {
       type: Boolean,
        default: false
     },
     aniDelay: {
       type: Number,
       default: 0
     },
     durationBetween: {
       type: Number,
       default: 50
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

  &::after {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 0.3rem;
    margin-left: 0.3rem;
    margin-bottom: -0.2rem;
    background-color: $text-red;
  }
}
</style>