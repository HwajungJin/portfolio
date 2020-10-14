<template lang='pug'>
.c-timeline-item
  .btn-container
    .btn
    .dash-line
  .item-content
    slot
</template>

<script>
export default {
  name: 'TimelineItem'
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 27rem;
  
  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  @include phoneblet {
    max-width: 70%;
  }

  @include from(600px) {
    max-width: 80%;
  }

  @include tablet {
    max-width: 50rem;
  }

  @include from(1000px) {
    max-width: unset;
  }

  @media screen and (min-height: 700px) {
    &:not(:last-child) {
      margin-bottom: 5.5rem;
    }
  }

  @media screen and (min-height: 900px) {
    &:not(:last-child) {
      margin-bottom: 7rem;
    }
  }

  @media screen and (min-height: 1100px) {
    &:not(:last-child) {
      margin-bottom: 10rem;
    }
  }
}

.btn-container {
  position: relative;
  margin-right: 1rem;
  display: flex;
  align-items: center;

  @include phoneblet {
    margin-right: 2.5rem;
  }

  .btn {
    position: relative;
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    background-color: $text-red;
  }
  .btn::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $background-white;
  }

  .dash-line {
    position: relative;
    width: 2rem;
    height: 1px;
    border-bottom: 2px dashed $text-red;

    @include from(600px) {
      width: 5rem;
    }
  }
}

.item-content {
  font-size: $size-body-md;
  color: rgba($text-black, 0.9);

  > strong {
    display: inline-block;
    margin: 0 0.75rem;
    color: $text-black;
  }

  @include phoneblet {
    font-size: $size-body-lg;
  }

  @include from(1000px) {
    font-size: $size-body-xxl;
  }

  @include desktop {
    font-size: 2.6rem;
  }

  @include largescreen {
    font-size: 3.2rem;
  }
}
</style>