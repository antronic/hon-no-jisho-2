<template lang="pug">
button.list-title(@click="$emit('click')", :class="{'is-clickable': clickable}")
  div.title
    i.material-icons.icon(v-if="icon") {{icon}}
    span.text
      span: slot
      span.icon(v-if="clickable"): i.material-icons chevron_right
</template>

<script>
export default {
  props: {
    clickable: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import '../scss/_import';

.list-title {
  @include page-padding();
  min-height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: none;
  border: none;
  cursor: pointer;
  .title {
    display: flex;
    align-items: center;
    .icon.material-icons {
      font-size: 14px;
      width: 20px;
      height: 20px;
      background-color: $primary;
      border-radius: 18px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin-right: 16px;
    }
    .text {
      flex: 1;
      display: flex;
      align-items: center;
      font-weight: 600;
      color: #555;
      font-size: 14px;
      .icon {
        display: inline-flex;
        .material-icons {
          margin-top: 2px;
          margin-left: 2px;
          font-size: 18px;
        }
      }
    }
  }
  &:not(.is-clickable) {
    pointer-events: none;
    cursor: auto;
  }
}
</style>
