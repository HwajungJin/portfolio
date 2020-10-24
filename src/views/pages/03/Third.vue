<template lang='pug'>
page-template.c-dreamlist(
  :pageNumber='3'
)
  .page-section.c-output
    img(:src='imgPaths.output_1')
    img(:src='imgPaths.output_2')
    img(:src='imgPaths.output_3')

  page-brief-new.mt-6(
    contentTitle='Solution'
  )
    .brief-paragraph
      | Like a bucket list It's possible to write down a list of things you want to achieve 
      | before you die. However, plans are quite vague or It never happens because of 
      | a lack of motivation or naturally just forget about it in our life.

    .brief-paragraph
      strong 45.8%
      |  of People say they cannot put their plans into action. 
      | The reason why they cannot practice is that 
      strong they do not have enough money, motivation and willingness.

    template(#extra-content)
      .brief-card-container
        styled-box.brief-card
          p.color-featured.is-quote
            | You may delay, but time will not.

        styled-box.brief-card
          p.is-quote
            | Share your dreams with others and get motivated.
            span.color-featured The sky is the limit.
  
        styled-box.brief-card.is-big
          p.is-quote
            | How can I make 
            span.color-featured my bucket list
            |   happen without giving up or forgetting 
            span.color-featured in a fun way
            | ?

  .page-section.c-insights.mt-20-10
    h4.mb-4 Insights
    
    .c-insights-container
      styled-box.c-insights-graph
        p
          | Do you share your bucket list as your friends?

        .graph 60%
        span.yes Yes

      styled-box.c-insights-text
        featured-list-item.text-item.mb-2
          | People mostly inspired by other people doing cool things. 
          | In order to make a decision mean anything, we need to take action. 
          
        featured-list-item.text-item
          | This concept is so simple, yet most people never move from deciding to doing.
          | They do not get into the habit of taking action and do not accomplish all they could be accomplishing.
          | By getting into the habit of putting ideas and decisions into action, 
          | we are in a better position to achieve the results we desire.
  
  .page-section.c-target.mt-20-10
    h4.mb-4 Target Market

    .target-image-container
      .target-image-unit(
        v-for="path in imgPaths.targetImageList"
        :key="path"
      )
        img.target-image(
          :src='path'
        )
        .target-shape
          svg.c-dashed-svg
            rect(x='0' y='0' width='100%' height='100%')
          img.target-shape-image(
            :src='imgPaths.targetShapes'
          )

      .c-target-keywords
        span 22-40
        span Goal-oriented
        span Future-oriented
        span Dreamer
        span Passionate
    
    .grid-decoration
      .grid-vertical
        svg
          defs
            pattern(
              id='p-vertical'
              patternUnits='userSpaceOnUse'
              x='0' y='0'
              width="20" height="20"
            )
              path.line(d="M19,0 v20")
            pattern(
              id='p-vertical-2'
              patternUnits='userSpaceOnUse'
              x='0' y='0'
              width='60' height='60'
            )
              path.line-hard(d='M1,0 v60')
          rect(
            x='0' y='0' width='100%' height='100%'
            fill='url(#p-vertical)'
          )
          rect(
            x='0' y='0' width='100%' height='100%'
            fill='url(#p-vertical-2)'
          )
      .grid-horizontal
        svg
          defs
            pattern(
              id='p-horizontal'
              patternUnits='userSpaceOnUse'
              x='0' y='0'
              width="20" height="20"
            )
              path.line(d="M0,19 h20")

            pattern(
              id='p-horizontal-2'
              patternUnits='userSpaceOnUse'
              x='0' y='0'
              width="60" height="60"
            )
              path.line-hard(d="M0,1 h60")
          rect(
            x='0' y='0' width='100%' height='100%'
            fill='url(#p-horizontal)'
          )
          rect(
            x='0' y='0' width='100%' height='100%'
            fill='url(#p-horizontal-2)'
          )
  
  .page-section.no-padding.c-persona.mt-20-10
    h4.page-section__title.mb-4 Persona

    styled-box.c-persona-image-container
      .persona-unit(
        v-for="item in personaDataArray"
        :key="item.name"
      )
        img.profile(:src='item.imgPath')

        .description
          .name {{ item.name }}

          .line
            .line-label Age
            .line-content {{ item.age }}

          .line
            .line-label Occupation
            .line-content {{ item.occupation }}

          .line
            .line-label Country
            .line-content {{ item.country }}
          
          .text(v-html='item.text')

          .characteristics
            .characteristics-item(
              v-for="c in item.characteristics"
              :key="c"
            ) {{ c }}


  .page-section.no-padding.c-solution.mt-20-10
    h4.page-section__title.mb-4 Solution

    p.page-section__description.mb-6
      | People might be motivated by the fact that there are some people 
      | who have the same dream as me, even if it's vague. 
      | They share the same dreams and goals with people and get the information they didn't know. 
      | It helps them to move toward happiness with dreams and goals in their tedious and repeated everyday life.
  
    .c-solution-grid-image
      img(:src='imgPaths.picgrid')
    
  
  .page-section.no-padding.c-outcome
    .c-outcome__title Main Page

    .c-outcome__main
      img.image-main(
        :src='imgPaths.output_main'
      )

      .explanation.first
        | The form of asking was used to approach to users more friendly.
      .explanation.second
        | Users can swipe the images from left to right to see the 
        strong top 10 bucket lists
        |  and easily save the post into my page.

      .title-deco.dreamlist Dreamlist
      .title-deco.number -01

    .c-outcome__suggestion
      .description
        .title Suggestion
        .content
          | The post has given help users to explore diverse subjects out there and 
          strong to get motivated
          | .
      
      img(:src='imgPaths.output_suggestion')

    .c-outcome__more
      img(:src='imgPaths.output_more')

      .description
        .title More features
        .content
          | In My Page, users can save their own bucket list in a diary format, In addition, 
          |users can check the date when a specific event is stored in the calendar.
</template>

<script>
import PageTemplate from '../PageTemplate.vue'
import PageBriefNew from '../PageBriefNew.vue'
import StyledBox from '@components/StyledBox.vue'
import FeaturedListItem from '@components/FeaturedListItem.vue'

export default {
  name: 'Third',
  components: {
    PageTemplate,
    PageBriefNew,
    FeaturedListItem,
    StyledBox
  },
  data () {
    return {
      briefSolutionList: [
        { 
          number: '01',
          title: 'No money',
          content: "Dreamlist provide many potential bucketlists even If you have no money."
        },
        { 
          number: '02',
          title: 'No motivation',
          content: "You can get motivated by exploring people's bucketlists and talking to cool people with same dreams as you." 
        },
        { 
          number: '03',
          title: 'No willingness',
          content: "It provides feeds that recommand you the suitable contents." 
        }
      ]
    }
  },
  computed: {
    imgPaths() {
      const path = fileName => require('@/assets/images/03/' + fileName)

      return {
        output_1: path('output-1.png'),
        output_2: path('output-2.png'),
        output_3: path('output-3.png'),
        targetImageList: new Array(3).fill('').map((_, index) => path(`target-${index + 1}.jpg`)),
        targetShapes: path('shapes.svg'),
        target_1: path('target-1.jpg'),
        target_2: path('target-2.jpg'),
        target_3: path('target-3.jpg'),
        picgrid: path('pic-grid.png'),
        personaImageList: new Array(2).fill('').map((_, index) => path(`persona_0${index + 1}.png`)),
        output_main: path('output_main.png'),
        output_suggestion: path('output_suggestion.png'),
        output_more: path('output_more.png')
      }
    },
    personaDataArray () {
      const path = fileName => require('@/assets/images/03/' + fileName)

      return [
        {
          name: 'Sarah',
          age: 29,
          occupation: 'graphic designer',
          country: 'New zealand',
          text: `Sarah is already in her sixth year as a graphic designer.<br />
            She lives in a boring, ordinary New Zealand routine that is no different from others.<br />
            She thinks that her daily routine is boring and her life is in some kind of rat race.<br />
            She lives in a normal life, but she always dreams of vague, creative and funny imagination.<br />
            And she is as up to date as ordinary people. She created a bucket list that she wanted to do before she die
            when bucket list  was in full swing. She was interested in creating a bucket list. Because she seemed to have
            another goal and dream of life. However, her happiness and interest did not last long. Because when she went to work
            and daily life, she naturally forgot about her dreams.
            `,
          characteristics: [
            'easily-fed-up-with',
            'daydreamer',
            'creative'
          ],
          imgPath: path('persona_01.png')
        },
        {
          name: 'Katie',
          age: 20,
          occupation: 'student',
          country: 'New zealand',
          text: `She routinely checks SNS habitually. She dreams of travelling around the world by seeing travel photos of people
            posting on the SNS. She has an active personality that likes to hang out with people. SHe is also influenced mainly by
            others and gets synergy when working with people. She has a lot of greed, but she does not have the ability to practice.
            She also forgets what she dreamed. She usually wants to meet or communicate with people who have the same dreams as themselves.
            Often she also plans grand plans every year at the beginning of the year but has never been done until the end of the year.
            She has a passionate personality, but she lacks will and motivation.<br />
            What is the necessary application for her?
            `,
          characteristics: [
            'goal-oriented',
            'forgetful',
            'cooperative'
          ],
          imgPath: path('persona_02.png')
        }, 
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-dreamlist {
  --feature-color-dark: #6F13D9;
}

.c-output {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 100%;
    margin-bottom: 4rem;
    height: auto;
    box-shadow: $img-box-shadow;

    &:first-child {
      margin-top: 4rem;
    }

    @include phoneblet {
      width: 38rem;
    }

    @include tablet {
      width: 50rem;

      &:first-child {
        margin-right: -8rem;
        margin-top: 7rem;
      }
      &:nth-child(2) {
        margin-top: -6rem;
      }
      &:last-child {
        margin-top: -6rem;
        margin-left: -8rem;
      }
    }

    @include from(1000px) {
      width: 60rem;

      &:first-child {
        margin-right: -12rem;
        margin-top: -6rem;
      }
      &:nth-child(2) {
        margin-top: -7rem;
      }
      &:last-child {
        margin-top: -7rem;
        margin-left: -12rem;
      }
    }

    @include desktop {
      width: 75rem;

      &:first-child {
        margin-right: -16rem;
        margin-top: -7rem;
      }
      &:last-child {
        margin-left: -16rem;
      }
    }

    @include largescreen {
      width: 90rem;

      &:first-child {
        margin-right: -20rem;
        margin-top: -7rem;
      }
      &:nth-child(2) {
        margin-top: -9rem;
      }
      &:last-child {
        margin-top: -9rem;
        margin-left: -20rem;
      }
    }
  }
}

.c-insights-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
  }

  .c-insights-graph {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $background-white;
    padding: 4rem 6rem;
    max-width: 50rem;
    margin-bottom: 4rem;
    
    p {
      font-size: $size-body-xl;
      margin-bottom: 3rem;
    }

    .graph {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--feature-color);
      margin-bottom: 3rem;
      width: 15rem;
      height: 15rem;
      font-size: $size-body-xl;
      border-radius: 50%;
      color: $text-white;
      font: {
        size: $size-body-xl;
        weight: 700;
      }
    }

    .yes {
      display: block;
      font: {
        size: $size-body-xxl;
        weight: 700;
      }
    }
  }

  .c-insights-text {
    background-color: $background-white;
    padding: 3rem 4rem;
    z-index: 1;
    max-width: 60rem;

    .text-item {
      font-size: $size-body-xxl;
    }
  }

  @include phoneblet {
    .c-insights-graph {
      padding: 3rem 4rem;

      .graph {
        width: 20rem;
        height: 20rem;
        font-size: $size-body-huge;
      }
    }
  }

  @include tablet {
    .c-insights-graph {
      margin-bottom: 6rem;
    }
    .c-insights-graph p {
      font-size: $size-body-xxl;
    }

    .c-insights-graph .yes {
      font-size: $size-body-huge;
    }

    .c-insights-text {
      padding: 4rem 6rem;

      .text-item {
        font-size: $size-body-xxl;
      }
    }
  }


  @include desktop {
    .c-insights-graph {
      max-width: 48rem;
      margin-bottom: 0;
      padding: 4rem 10rem 4rem 6rem;
    }

    .c-insights-text {
      max-width: 60rem;
      margin-left: -6rem;
      padding: 3rem 4rem;
    }
  }

  @include largescreen {
    .c-insights-graph {
      max-width: 65rem;
    }

    .c-insights-text {
      max-width: 70rem;
    }
  }
}

.c-target {
  position: relative;

  .target-image-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    @include tablet {
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
    }

    @include desktop {
      flex-wrap: nowrap;
    }

    .target-image-unit {
      display: flex;
      flex-direction: column;
      width: 22rem;
      height: auto;
      
      &:not(:first-child) {
        margin-top: 4rem;
      }

      .target-image,
      .target-shape-image {
        display: block;
      }

      .target-image {
        width: 100%;
        height: auto;
      }

      .target-shape {
        position: relative;
        display: block;
        border-top: none;
        padding: 2rem;

        .c-dashed-svg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;

          rect {
            fill: none;
            stroke: $text-grey-dark {
              width: 1px;
              dasharray: 10 14;
            }
          }
        }
      }

      .target-shape-image {
        display: block;
        height: 2.75rem;
        width: auto;
      }

      @include phoneblet {
        width: 27rem;
      }

      @include tablet {
        width: 18rem;

        &:nth-child(2) {
          margin-top: 9rem;
        }
        &:nth-child(3) {
          margin-top: 12rem;
        }

        .target-shape-image {
          height: 2.75rem;
        }
      }

      @include from(1000px) {
        width: 24rem;

        &:nth-child(2) {
          margin-top: 11rem;
        }
        &:nth-child(3) {
          margin-top: 14rem;
        }

        .target-shape-image {
          height: 3rem;
        }
      }

      @include desktop {
        &:nth-child(2) {
          margin-top: 13rem;
        }
        &:nth-child(3) {
          margin-top: 17rem;
        }

        .target-shape-image {
          height: 4rem;
        }
      }

      @include largescreen {
        width: 32rem;

        &:nth-child(2) {
          margin-top: 16rem;
        }
        &:nth-child(3) {
          margin-top: 20rem;
        }
      }
    }
  }

  &-keywords {
    --feature-sub-color: #CDABE7;

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40rem;
    font: {
      family: 'Goku';
      size: 3rem;
      weight: 700;
    }
    line-height: 1.3;
    white-space: nowrap;
    margin-top: 4rem;
    margin-left: -1.5rem;
    order: -1;
    margin-bottom: 4rem;

    span {
      display: block;
      position: relative;
      width: max-content;

      &::before {
        content: '# ';
        font-size: 1.35em;
        font-weight: 700;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0.75rem;
        left: 0;
        height: 40%;
        width: 100%;
        z-index: -1;
        background-color: var(--feature-sub-color);
      }
    }

    @include tablet {
      order: unset;
      margin-bottom: unset;
      max-width: 70rem;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      font-size: 3.2rem;

      span {
        margin-right: 2rem;
      }
    }

    @include desktop {
      margin-top: 29rem;
      flex-direction: column;
      flex-wrap: nowrap;

      span {
        margin-right: 0;
      }
    }

    @include largescreen {
      font-size: 4rem;
      margin-top: 34rem;
    }
  }

  .grid-decoration {
    display: none;
    $grid-color: $text-grey;
    $transparent: rgba(0,0,0,0);

    position: absolute;
    opacity: 0.7;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 36rem;
    transform-origin: 100% 0%;
    transform: scale(0.8);

    --grid-gap: 2.2rem;

    .grid-vertical {
      position: absolute;
      height: 100%;
      width: 65%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .grid-horizontal {
      position: absolute;
      height: 65%;
      width: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    .grid-vertical svg,
    .grid-horizontal svg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      .line,
      .line-hard {
        fill: none;
        stroke-width: 1px;
        stroke: $text-grey;
      }

      .line-hard {
        stroke: $text-grey-dark;
      }
    }

    @include phoneblet {
      transform: scale(0.75);
      width: 50rem;
    }

    @include tablet {
      transform: scale(0.85);
    }

    @include desktop {
      width: 65rem;
      height: 50rem;
    }

    @include largescreen {
      width: 80rem;
      height: 55rem;
    }
  }
}

.c-persona {

  .c-persona-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem;

    @include from(1000px) {
      padding: 6rem 4rem;
    }

    @include largescreen {
      padding: 10rem 6rem;
    }

    .persona-unit {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .profile {
        display: block;
        width: 28rem;
        height: auto;
        margin-bottom: 6rem;
      }

      .description {
        display: block;
        border-top: 1px solid $text-grey-dark;
        font-size: $size-body-xl;
        padding: 3rem 1.5rem;
        max-width: 45rem;

        --l-label-width: 10rem;

        .name {
          font-family: 'Goku';
          font-size: 1.3em;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 4rem;
          text-align: center;
          color: var(--feature-color);
        }

        .line {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;

          &-label {
            width: var(--l-label-width);
            font-family: 'Goku';
            letter-spacing: 0.5px;
            font-weight: 700;
            text-align: right;
            margin-right: 2rem;
          }
          &-content {
            font-size: 1.1em;
            color: var(--feature-color);
            width: var(--l-label-width);
          }
        }

        .text {
          margin-top: 4rem;
          line-height: 1.2;
          letter-spacing: -0.2px;
        }
      }

      .characteristics {
        display: block;
        margin-top: 2.5rem;
        font-size: $size-body-xxl;
        font-family: 'Goku';
        letter-spacing: 1px;

        .characteristics-item {
          display: inline-block;
          word-break: break-word;
          font-weight: 700;
          margin-right: 2rem;

          &::before {
            content: '# ';
          }
        }
      }

      @include phoneblet {
        
        &:not(:last-child) {
          margin-bottom: 12rem;
        }

        .profile {
          width: 34rem;
        }

        .description {
          font-size: $size-body-xxl;
          --l-label-width: 14rem;

          padding: 4rem 2rem 2rem;
          max-width: 60rem;

          .name {
            margin-bottom: 7rem;
            font-size: 1.6em;
          }

          .text {
            margin-top: 6rem;
            line-height: var(--line-height);
          }

          .line .line-label {
            margin-right: 4rem;
          }
        }

        .characteristics {
          margin-top: 4rem;
          text-align: center;
          font-size: $size-body-huge;
        }
      }

      @include tablet {
        .description {
          --l-label-width: 18rem;
        }
      }

      @include from(1000px) {
        flex-direction: row;
        border-top: unset;

        &:not(:last-child) {
          margin-bottom: 8rem;
        }

        .profile {
          width: 32rem;
          margin-right: 6rem;
        }

        .description {
          padding: 1.5rem 0;
          padding-left: 6rem;
          font-size: $size-body-xxl;
          max-width: 50rem;
          border-top: unset;
          border-left: 1px solid $text-grey-dark;

          --l-label-width: 18rem;

          .name {
            margin-bottom: 2rem;
            text-align: left;
            font-size: 1.25em;
          }

          .line {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            &-label {
              width: var(--l-label-width);
              font-weight: 700;
              text-align: left;
            }
            &-content {
              color: var(--feature-color);
              width: auto;
              flex-grow: 1;
            }
          }
        }

        .characteristics {
          margin-top: 2.5rem;
          text-align: left;
        }
      }

      @include desktop {
        .profile {
          width: 36rem;
        }

        .description {
          max-width: 60rem;
          
          --l-label-width: 22rem;
        }
      }

      @include largescreen {
        &:not(:last-child) {
          margin-bottom: 10rem;
        }

        .profile {
          width: 42rem;
          margin-right: 8rem;
        }

        .description {
          max-width: 72rem;
          padding-left: 8rem;
          font-size: $size-body-huge;
        }
      }
    }
  }
}

.c-solution-grid-image {
  position: relative;
  width: 100%;
  height: auto;

  &::after {
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    height: 40%;
    background-color: var(--feature-color-dark);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}



.has-highlighter {
  display: block;
  position: relative;
  width: max-content;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 110%;
    height: 60%;
    bottom: -5%;
    left: -5%;
    opacity: 0.5;
    background-color: #F4CFFF;
    z-index: -1;
  }
}

.c-outcome {
  border-top: 1px solid var(--feature-color-dark);
  background-color: #F5F5F5;

  &__title {
    position: relative;
    display: block;
    width: 100%;
    padding: 5rem 4rem 7rem;
    color: $text-white;
    background-color: var(--feature-color-dark);
    letter-spacing: 1px;
    font: {
      size: $size-body-xxl;
      weight: 700;
      family: 'Goku';
    }

    @include tablet {
      font-size: $size-body-huge;
      padding: 7rem 6rem 10rem;
    }

    @include from(1000px) {
      padding: 7rem 8rem 12rem;
      font-size: 3rem;
    }
 
    @include desktop {
      padding: 10rem 10rem 16rem;
    }

    @include largescreen {
      padding: 10rem 14rem 20rem;
    }
  }

  &__main {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6rem;

    .image-main {
      display: block;
      width: 98%;
      height: auto;
      z-index: 1;
      margin-top: -15vw;
    }

    .title-deco {
      position: absolute;
      display: block;
      color: #EEEBF6;
      font: {
        weight: 700;
        size: 3.2rem;
      }

      &.dreamlist {
        bottom: 0;
        left: 1rem;
      }

      &.number {
        bottom: 0;
        right: 1rem;
      }
    }

    .explanation {
      position: relative;
      font-size: $size-body-xl;
      max-width: 26rem;

      &.first {
        margin-top: 12rem;
        margin-bottom: 4rem;
      }

      &.first::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        transform: translateX(-50%) translateY(-130%);
        width: 2px;
        height: 8rem;
        background-color: var(--feature-color-dark);
      }
    }

    @include phoneblet {
      padding-bottom: 12rem;

      .title-deco {
        font-size: 4.5rem;
      }

      .explanation {
        font-size: $size-body-xxl;
        max-width: 36rem;

        &.first::after {
          height: 10rem;
        }
      }
    }

    @include tablet {
      .image-main {
        width: 90%;
      }

      .title-deco {
        font-size: 6rem;
      }

      .explanation {
        max-width: 55rem;
      }
    }

    @include from(1000px) {
      flex-direction: row;
      justify-content: center;
      padding-bottom: 0;

      .title-deco {
        position: absolute;
        color: #EEEBF6;
        writing-mode: vertical-rl;
        transform-origin: 50% 50%;
        transform: rotate(180deg);
        font-size: 9.5rem;
      }

      .title-deco.dreamlist {
        font-size: 6rem;
        left: 7.5%;
        bottom: 20%;
      }

      .title-deco.number {
        font-size: 13rem;
        right: 0;
        bottom: 5%;
        margin-right: -2rem;
      }

      .explanation {
        position: absolute;
        font-size: $size-body-xl;
        z-index: 1;
      }

      .explanation.first {
        top: -10rem;
        right: 4rem;
        max-width: 30rem;
        margin-bottom: 0;

        &::after {
          content: '';
          top: 0;
          left: 0;
          transform: translateX(-110%) translateY(0.7rem);
          height: 2px;
          width: 10rem;
        }
      }
      .explanation.second {
        max-width: 22rem;
        top: 12rem;
        right: 4rem;
      }
    }

    @include desktop {
      .title-deco.dreamlist {
        font-size: 8rem;
        left: 7%;
      }

      .explanation {
        font-size: $size-body-xl;
        max-width: 26rem;
      }
      .explanation.first {
        top: -7.5rem;
        right: 10rem;

        &::after {
          width: 16rem;
        }
      }
      .explanation.second {
        top: 18rem;
        right: 8rem;
      }
    }

    @include largescreen {
      .explanation {
        max-width: 30rem;
      }
      .explanation.first {
        top: -6rem;
        right: 18rem;
      }
      .explanation.second {
        top: 26rem;
        right: 14rem;
      }

      .title-deco.dreamlist {
        font-size: 9.5rem;
        left: 8%;
      }
      .title-deco.number {
        font-size: 15rem;
      }
    }
  }

  &__suggestion,
  &__more {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    margin-top: 10rem;

    .description {
      z-index: 1;
      max-width: 40rem;

      .title {
        font-size: $size-body-huge;
        font-family: 'Goku';
        font-weight: 700;
        letter-spacing: 2px;
        padding: 1.6rem 0;
        color: var(--feature-color-dark);
        border-bottom: 1px solid var(--feature-color-dark);
      }

      .content {
        font-size: $size-body-xxl;
        padding: 2.2rem 0;
      }
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    @include tablet {
      .description {
        max-width: 50rem;
      }
    }

    @include from(1000px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;

      .description {
        max-width: 30rem;

        .title {
          font-size: 2.8rem;
        }
      }
    }

    @include desktop {
      .description {
        max-width: 34rem;
      }
    }

    @include largescreen {
      .description {
        max-width: 40rem;

        .title {
          font-size: 3.2rem;
        }
      }
    }
  }

  &__suggestion {
    img {
      width: 130vw;
      margin-left: -40vw;
    }

    @include from(1000px) {
      img {
        max-width: 94rem;
        margin-left: -32rem;
      }
    }

    @include desktop {
      img {
        max-width: 110rem;
        margin-left: -36rem;
      }
    }

    @include largescreen {
      img {
        max-width: 160rem;
        margin-left: -50rem;
      }
    }
  }

  &__more {

    .description {
      order: -1;
      text-align: right;
    }

    img {
      width: 130vw;
      margin-right: -35vw;
    }

    @include from(1000px) {
      margin-top: 16rem;

      .description {
        order: unset;
      }

      img {
        max-width: 94rem;
        margin-right: -32rem;
      }
    }

    @include desktop {
      img {
        max-width: 110rem;
        margin-right: -36rem;
      }
    }

    @include largescreen {
      img {
        max-width: 160rem;
        margin-right: -50rem;
      }
    }
  }
}
</style>