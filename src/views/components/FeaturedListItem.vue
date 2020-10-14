<template lang='pug'>
component.c-featured-list-item(
  :is='tag'
)
  span.bullet
  p.content
    slot
</template>

<script>
export default {
  name: 'FeaturedListItem',
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: value => ['div', 'p', 'li'].includes(value)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-featured-list-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: $size-body-md;

  .bullet { 
    display: inline-block;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin: 0.8rem 1rem 0 1rem;
    background-color: var(--feature-color);
  }
}
</style>