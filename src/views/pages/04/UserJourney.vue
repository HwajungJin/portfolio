<template lang='pug'>
.page-section.c-user-journey.mt-20-10
  h4.page-section__title.mb-6 User Journey

  .c-card-table(
    v-for="(item, index) in userJourneyList"
    :key="item.name"
  )
    .g-cardname
      .c-card.cardname {{ item.name }}

    .g-before
      .before-top(
        :class="{'is-first': index === 0}"
      ) Before using smart mirror

      .c-card-container
        styled-box.c-card(
          v-for="(beforeItem, index) in item.before"
          :key="'before-' + index"
        ) {{ beforeItem }}
    .g-after
      .after-top(
        :class="{'is-first': index === 0}"
      ) Using smart mirror

      .c-card-container
        styled-box.c-card(
          v-for="(afterItem, index) in item.after"
          :key="'after-' + index"
        ) {{ afterItem }}
    
</template>

<script>
import StyledBox from '@components/StyledBox.vue'

export default {
  name: 'FourthUserJourney',
  components: {
    StyledBox
  },
  data () {
    return {
      userJourneyList: [
        {
          name: 'Current state',
          before: [
            'Periodically see a doctor to prevent skin cancer spreads.',
            'To prevent recurrence of skin cancer, keep in mind applying sunscreen.'
          ],
          after: [
            'My body state can be recognized through the camera of Smart mirror.',
            'I will save my state with a focus on skin cancer, If there is a part, smart mirror will notify me.'
          ]
        },
        {
          name: 'Key finding',
          before: [
            'It takes a lot of time and money to visit a hospital regularly.',
            'I forgot to put sunscreen every time.'
          ],
          after: [
            'If the condition of the skin is bad, the smart mirror will ask you to make an appointment.'
          ]
        },
        {
          name: 'Key problems',
          before: [
            'The severity of the visible skin condition is unknown.',
            'I am worried that the condition of the skin cancer will get worse or move to another place.'
          ],
          after: [
            'It saves time and money not to go to hospital physically.',
            'I do not need to worry about skin cancer spreading or recurring.'
          ]
        },
        {
          name: 'Services',
          before: [
            'What is the easiest way to diagnose and prevent skin cancer at home?',
            'What is the way I can continue to check my body condition?'
          ],
          after: [
            'Save my skin condition and keep a record of the change.'
          ]
        },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";
.c-user-journey {

  @include tablet {
    padding: 0 3rem;

    .page-section__title {
      margin-left: 6rem;
    }
  }

  @include desktop {
    padding: 0 6rem;

    .page-section__title {
      margin-left: unset;
    }
  }

  @include largescreen {
    padding: 0 10rem;
  }
}


.c-card-table {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "g-cardname"
    "g-before"
    "g-after";
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  --feature-color-light: #63D3FF;
  --card-width: 16rem;
  --card-height: 20rem;

  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  @include phoneblet {
    width: max-content;

    --card-width: 16rem;
    --card-height: 22rem;
  }

  @include tablet {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "g-cardname g-before"
      "g-cardname g-after";

    --card-width: 18rem;
    --card-height: 26rem;
  }

  @include from(1000px) {
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    grid-template-areas: "g-cardname g-before g-after";

    &:not(:last-child) {
      margin-bottom: 4.5rem;
    }
  }

  @include desktop {
    --card-width: 20rem;
    --card-height: 26rem;
  }

  @include largescreen {
    --card-width: 22rem;
    --card-height: 28rem;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }

  .g-cardname {
    grid-area: g-cardname;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    width: 100%;
    margin-bottom: 4rem;

    .cardname {
      color: var(--feature-color);
      font-weight: 700;
      font-size: $size-body-huge;
      font-family: 'Goku';
      background-color: rgba(0,0,0,0);
      width: 100%;
      height: auto;
      padding: 1.2rem 2rem;
    }

    @include tablet {
      margin-right: 6rem;
      margin-bottom: unset;
      justify-content: flex-start;
      width: max-content;
      
      .cardname {
        width: var(--card-width);
        height: auto;
        background-color: var(--feature-color);
        color: $text-white;
        padding: 3rem 2rem;
        font-size: $size-body-lg;
        font-family: 'Roboto';
      }
    }

    @include from(1000px) {
      margin-right: unset;
      justify-content: flex-end;

      .cardname {
        font-size: $size-body-xxl;
        width: calc(var(--card-width) * 0.6);
        height: var(--card-height);
      }
    }

    @include desktop {
      .cardname {
        width: var(--card-width);
      }
    }

  }

  .g-before,
  .g-after {
    --extra-space: 4rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
    width: 100%;

    @include phoneblet {
      width: calc(var(--card-width) * 2 + var(--extra-space));
    }

    @include largescreen {
      --extra-space: 8rem;
    }

    .before-top,
    .after-top {
      position: relative;
      display: block;
      color: $text-white;
      padding: 1rem 3.5rem;
      font-weight: 700;
      font-size: $size-body-lg;
      text-align: center;
      margin-bottom: 2rem;
      margin-left: -1.8rem;

      &::after,
      &::before {
        content: '';
        display: block;
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 50%;
      }

      &::before {
        top: 0;
        left: 0;
        transform-origin: left top;
        transform: skewX(35deg);
      }

      &::after {
        bottom: 0;
        left: 0;
        transform-origin: left bottom;
        transform: skewX(-35deg);
      }

      @include phoneblet {
        margin-left: unset;
      }

      @include from(1000px) {
        padding: 1.2rem 1.8rem;
        font-size: $size-body-xl;

        &:not(.is-first) {
          display: none;
        }
      }

      @include desktop {
        padding: 1.4rem 2rem;
      }

      @include largescreen {
        padding: 1.6rem 2.4rem;
        font-size: $size-body-xxl;
      }
    }

  }

  .g-before {
    grid-area: g-before;
    margin-bottom: 4rem;

    .before-top::after,
    .before-top::before {
      background-color: var(--feature-color-light);
    }

    @include from(1000px) {
      margin-bottom: unset;
    }
  }

  .g-after {
    grid-area: g-after;

    .after-top::before,
    .after-top::after {
      background-color: var(--feature-color);
    }
  }

  .c-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 calc(var(--extra-space) / 2);

    @include phoneblet {
      flex-direction: row;
      align-items: flex-end;
    }

    @include tablet {
      justify-content: flex-start;
    }
  }

  .c-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 3rem 2rem;
    text-align: center;
    flex-grow: 0;
    font-size: $size-body-lg;

    &:not(:last-child) {
      margin-bottom: 2.5rem;
    }

    @include phoneblet {
      width: var(--card-width);
      height: var(--card-height);
      font-size: $size-body-md;

      &:not(:last-child) {
        margin-right: 2.5rem;
        margin-bottom: unset;
      }
    }

    @include tablet {
      font-size: $size-body-lg;
    }

    @include desktop {
      font-size: $size-body-xl;
    }

    @include largescreen {
      font-size: $size-body-xxl;
    }
  }
}

</style>