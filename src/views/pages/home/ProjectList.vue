<template lang='pug'>
.c-project-list
  ul.c-list-container
    li.c-title
      svg.c-list-title(
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 240 50"
      )
        text.c-list-title--text(
          x="120"
          y="37"
        ) Project Name

    project-list-item(
      v-for='item in projects'
      :key='item.projectName'
      :itemInfo='item'
      tag='li'
      @click='navigateTo(item)'
    )
</template>

<script>
import ProjectListItem from './ProjectListItem.vue'

export default {
  name: 'ProjectList',
  components: {
    ProjectListItem
  },
  data () {
    return {
      projects: [
        { 
          projectName: 'Unashamed',
          isCommercial: false,
          number: 1,
          route: 'First'
        },
        { 
          projectName: 'Art at heart', 
          isCommercial: true, 
          client: 'Auckland Art Gallery',
          number: 2,
          route: 'Second'
        },
        { 
          projectName: 'Dream List',
          isCommercial: false ,
          number: 3,
          route: 'Third'
        },
        { 
          projectName: 'Scanny',
          isCommercial: false ,
          number: 4,
          route: 'Fourth'
        },
        { 
          projectName: 'Flip',
          isCommercial: false,
          number: 5,
          route: 'Fifth'
        }
      ]
    }
  },
  methods: {
    navigateTo ({ route }) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-project-list {
  padding-right: 0;
  
  @include tablet {
    padding-right: 2.6rem;
  }

  @include desktop {
    padding-right: 4rem;
  }

  @include largescreen {
    padding-right: 8.5rem;
  }
}

.c-list-container {
  position: relative;
  width: 100%;
  list-style: none;
}

.c-title {
  display: block;
  padding: 1.5rem 2rem;
  padding-left: 1rem;
  border-bottom: 1px solid $text-grey-dark;
  user-select: none;

  @include phoneblet {
    padding-left: 2rem;
  }

  @include largescreen {
    padding-left: 7rem;
  }
}

.c-list-title {
  position: relative;
  width: 24rem;
  height: 4.7rem;

  @include phoneblet {
    width: 30rem;
    height: 6rem;
  }

  @include from (1000px) {
    width: 37rem;
    height: 7rem;
  }

  @include largescreen {
    width: 50rem;
    height: 9.5rem;
  }

  &--text {
    text-anchor: middle;
    fill: none;
    stroke: $text-black {
      width: 1px;
    }
    font: {
      size: 4rem;
      weight: 700;
    }
  }
}

.c-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid $text-grey-dark;
  cursor: pointer;

  &:first-child {
    cursor: auto;
    user-select: none;
  }

  &--name {
    font-size: 5rem;
  }

  &--description {
    display: flex;
    flex-direction: column;
    text-align: right;
    line-height: 1.5;
    font-size: $size-body-sm;

    .project-type {
      display: inline-block;
      font-weight: 700;
    }
    .project-type::before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: $text-grey;
      margin-right: 0.5rem;
    }
    .project-type.commercial::before {
      background-color: $text-red;
    }
  }
}

</style>