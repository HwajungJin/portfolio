<template lang='pug'>
.page-section.no-padding.c-design-outcome.mt-20-10
  h4.page-section__title.mb-6
    | Design outcome - 
    span.unstyled-heading Smart mirror

  .c-outcome-container
    img.outcome-image(
      v-for="path in imgPaths.outcomeList"
      :key="path"
      :src="path"
    )

  h4.page-section__title.mt-10.mb-3
    | Design outcome - 
    span.unstyled-heading Smart mirror website
  
  p.page-section__description.mb-6
    | The website is made for promoting product Scanny.
    | It consists of the page where to introduce the main feature of Scanny and the page where to purchase it.

  .c-outcome-website-container
    .website-image-box
      img(
        v-for="path in imgPaths.web1"
        :key="path"
        :src="path"
      )

      .label Main page

    .website-image-box
      img(
        v-for="path in imgPaths.web2"
        :key="path"
        :src="path"
      )

      .label App info page

    .website-image-box.is-long
      img(:src="imgPaths.web3")

      .label Shop page

</template>

<script>
export default {
  name: 'FourthDesignOutcome',
  computed: {
    imgPaths () {
      const path = fileName => require('@/assets/images/04/' + fileName)
    
      return {
        outcomeList: [
          path('outcome_01.jpg'),
          path('outcome_02.jpg')
        ],
        web1: new Array(3).fill('').map((_, index) => path(`web_01_${index + 1}.jpg`)),
        web2: new Array(3).fill('').map((_, index) => path(`web_02_${index + 1}.png`)),
        web3: path('web_03.png')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-outcome-container {
  position: relative;
  display: block;

  .outcome-image {
    display: block;
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  @include phoneblet {
    padding: 0 3rem;
  }

  @include tablet {
    padding: 0 10rem;

    .outcome-image:not(:last-child) {
      margin-bottom: 6rem;
    }
  }

  @include from(1000px) {
    .outcome-image {
      max-width: 96rem;

      &:not(:last-child) {
        margin-bottom: 8rem;
      }
    }
  }

  @include largescreen {
    .outcome-image {
      max-width: 110rem;
    }
  }
}

.c-outcome-website-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  @include from(1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
  }

  .website-image-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 4rem;

    &.is-long {
      max-width: 100%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      box-shadow: $img-box-shadow;
    }

    .label {
      display: block;
      font-size: $size-body-xl;
      margin-left: 1.2rem;
      margin-top: 2rem;
    }

    @include phoneblet {
      width: calc(100% - 4rem);

      .label {
        margin-left: 0;
      }
    }

    @include tablet {
      max-width: 54rem;
      margin-bottom: 6rem;

      &.is-long {
        max-width: calc(100% - 10rem);
      }

      .label {
        font-size: $size-body-xxl;
      }
    }

    @include from(1000px) {
      max-width: 42rem;

      &:first-child {
        margin-right: 6rem;
      }

      &.is-long {
        max-width: 90rem;
      }
    }

    @include desktop {
      max-width: 48rem;

      &.is-long {
        max-width: 102rem;
      }
    }

    @include largescreen {
      max-width: 60rem;

      &.is-long {
        max-width: 130rem;
      }

      &:first-child {
        margin-right: 8rem;
      }

      .label {
        font-size: $size-body-huge;
      }
    }
  }
}
</style>