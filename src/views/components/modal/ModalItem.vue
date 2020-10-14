<template lang='pug'>
.c-modal-item(
  v-bind="$attrs"
  v-on="$listeners"
  :class="['is-' + itemInfo.number, isActive && 'is-active']"
)
    h3.c-number {{ item.number }}
    .c-description
      h5.c-name {{ item.title }}
      .c-role {{ item.role }}
    img.c-image(:src="item.imagePath")
    .c-date {{ item.date }}
</template>

<script>
export default {
  name: 'ModalItem',
  data () {
    return {
      isActive: false
    }
  },
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    item () {
      return Object.assign(
        {},
        this.itemInfo,
        {
          imagePath: require(
            '@/assets/images/pageMain/' +
            this.itemInfo.imageName +
            '.png'
          )
        }
      )
    },
    isLargerThanTablet () {
      return ['tabletop', 'desktop', 'largescreen'].includes(this.$mq)
    }
  },
  mounted () {
    const { currentPageNumber } = this.$root.$children[0]
    
    if (this.itemInfo.number === `0${currentPageNumber}`) {
      this.isActive = true
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

$modal-border-color: #E8E1E1;

.c-modal-item {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  padding: 2rem;
  text-align: right;
  cursor: pointer;
  border-bottom: 1px solid $modal-border-color;

  @for $n from 1 through 5 {

    &.is-0#{$n} {
      --modal-item-feature-color: var(--ref_0#{$n});
    }
  }

  &:hover {
    background-color: rgba(0,0,0,0.0125);
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @include tablet {
    align-items: flex-end;
    padding: 2rem 4rem;
  }

  @include from(1000px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 12rem 0.4rem 0 0;
    border-right: 1px solid $modal-border-color;
    border-bottom: unset;

    &:nth-child(even) {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1000px) and (min-height: 700px) {
    padding: 16rem 0.4rem 0 0;
  }

  @include desktop {
    &:first-child {
      border-left: 1px solid $modal-border-color;
    }
  }
}

.c-number {
  position: absolute;
  bottom: -4rem;
  left: -1.2rem;
  font: {
    size: $size-heading-lg;
    weight: 700;
  }
  color: $background-grey;

  .c-modal-item:nth-child(even) & {
    left: unset;
    right: -1.2rem;
  }

  .c-app.is-page-00 & {
    color: var(--ref_02);
  }

  .c-modal-item.is-active & {
    color: var(--modal-item-feature-color);
  }

  @include phoneblet {
    font-size: $size-heading-xl;
    left: -1.5rem;

    .c-modal-item:nth-child(even) & {
      left: unset;
      right: -1.5rem;
    }
  }

  @include tablet {
    position: relative;
    line-height: 0.75;
    font-size: $size-heading-xl;
    z-index: unset;
    bottom: unset;
    left: unset;
    right: unset;

    .c-modal-item:nth-child(even) & {
      right: unset;
    }
  }

  @include from(1000px) {
    margin-bottom: 8rem;
    line-height: 1.3;
  }

  @include desktop {
    font-size: $size-heading-xxl;
  }

  @include largescreen {
    font-size: 13rem;
  }
}

.c-description {
  position: relative;
  text-align: left;

  .c-modal-item:nth-child(even) & {
    text-align: right;
  }

  &::before {
    content: '';
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 2.4rem;
    height: 1px;
    background-color: $text-grey-dark;
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: $text-grey;
    transform: rotate(20deg);
    top: 0;
    left: -4rem;
  }

  .c-modal-item:nth-child(even) &::after {
    left: unset;
    right: -4rem;
  }

  .c-name {
    color: text-black;
    font: {
      weight: 700;
      size: $size-body-lg;
    }
  }
  .c-role {
    font-size: $size-body-md;
  }

  @include phoneblet {
    .c-name {
      font-size: $size-body-xxl;
    }
  }

  @include tablet {
    margin-left: 8rem;
    padding-top: 2rem;

    .c-modal-item:nth-child(even) & {
      margin-left: unset;
      margin-right: 8rem;
    }

    &::after {
      display: block;
    }

    .c-name {
      font-size: $size-body-huge;
    }

    .c-role {
      font-size: $size-body-xl;
    }
  }

  @include from(1000px) {
    text-align: right;
    margin-bottom: 2rem;
    padding-top: 2rem;
    margin-left: unset;

    .c-modal-item:nth-child(even) & {
      text-align: right;
      margin-right: unset;
    }

    &::before {
      display: block;
    }
    &::after {
      display: none;
    }
  }

  @include desktop {
    .c-name {
      font-size: 3rem;
    }

    .c-role {
      font-size: $size-body-xl;
    }
  }

  @include largescreen {
    margin-bottom: 6rem;

    .c-name {
      font-size: 3.6rem;
    }
  }
}

.c-image {
  position: absolute;
  display: inline-block;
  height: 82.5%;
  bottom: -4rem;
  left: 8rem;
  width: auto;
  order: 10;

  .c-modal-item:nth-child(even) & {
    left: unset;
    right: 8rem;
  }

  @media screen and (max-width: 441px) and (min-height: 750px) {
    height: 72.5%;
  }

  @include phoneblet {
    left: 10rem;

    .c-modal-item:nth-child(even) & {
      left: unset;
      right: 10rem;
    }
  }

  @include tablet {
    position: relative;
    bottom: unset;
    left: unset;
    height: 90%;
    margin-left: 2rem;

    .c-modal-item:nth-child(even) & {
      margin-left: unset;
      margin-right: 2rem;
      right: unset;
    }
  }

  @include from(1000px) {
    z-index: unset;
    width: 100%;
    height: auto;
    max-width: 20rem;
    max-height: 14rem;
    margin-bottom: 2rem;
    margin-left: unset;

    .c-modal-item:nth-child(even) & {
      margin-right: unset;
    }
  }

  @include largescreen {
    max-width: 26rem;
    max-height: 20rem;
  }
}

.c-date {
  position: relative;
  display: inline-block;
  font-size: $size-body-sm;
  margin-left: 2rem;
  margin-top: 0.4rem;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: $text-grey;
    transform: rotate(20deg);
    top: 0;
    left: -1rem;
  }

  .c-modal-item:nth-child(even) & {
    margin-left: unset;
    margin-right: 2rem;
  }

  .c-modal-item:nth-child(even) &::after {
    left: unset;
    right: -1rem;
  }

  @include phoneblet {
    font-size: $size-body-lg;
    margin-left: 6rem;

    &::after {
      left: -3rem;
    }

    .c-modal-item:nth-child(even) & {
      margin-right: 6rem;
    }

    .c-modal-item:nth-child(even) &::after {
      right: -3rem;
    }
  }

  @include from(1000px) {
    font-size: $size-body-xl;
    margin-left: unset;

    .c-modal-item:nth-child(even) & {
      margin-right: unset;
    }

    &::after {
      display: none;
    }
  }
}

</style>