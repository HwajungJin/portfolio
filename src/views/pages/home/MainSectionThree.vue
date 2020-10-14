<template lang='pug'>
.main-section.gridify.c-main-section-three
  .p-left
    .c-deco-box--work

    mesh-background.c-mesh-background

    vertical-red-text.c-red-text-work Selected works
  .p-right
    project-list.c-project-list
</template>

<script>
import MeshBackground from '@components/MeshBackground.vue'
import VerticalRedText from './VerticalRedText.vue'
import ProjectList from './ProjectList.vue'

export default {
  name: 'MainSectionThree',
  components: {
    MeshBackground,
    VerticalRedText,
    ProjectList
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-main-section-three {
  .p-left {
    position: relative;
    height: 9rem;
    overflow: hidden;

    
    @include phoneblet {
      height: 12rem;
    }

    @media screen and (max-width: 769px) and (max-height: 700px) {
      height: 9rem;
    }

    @media screen and (max-width: 769px) and (min-height: 750px) {
      height: 14rem;
    }

    @media screen and (max-width: 769px) and (min-height: 950px) {
      height: 22rem;
    }

    @include tablet {
      height: unset;
    }
  }
}

.c-deco-box--work {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 65vw;
  height: 7rem;
  background-color: darken($background-light-grey, 2%);

  @include tablet {
    bottom: unset;
    top: 7.5rem;
    width: 45%;
    height: 60%;
  }
}

.c-red-text-work {
  bottom: 0;
  right: 0;
  font-size: 3.8rem;
  line-height: 0.9;
  text-align: right;
  width: min-content;
  writing-mode: horizontal-tb;
  transform: rotate(0deg);

  @include phoneblet {
    font-size: 5rem;
    width: auto;
    line-height: 1.3;
  }

  @include tablet {
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    font-size: 6.5rem;
    height: auto;
    top: 2rem;
    bottom: unset;
  }

  @include from(1000px) {
    top: unset;
    right: 0;
    bottom: 0;
    height: auto;
  }

  @include desktop {
    font-size: 8rem;
  }
}

.c-project-list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>