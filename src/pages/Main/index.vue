<template lang="pug">
div
  .mdl-layout.mdl-js-layout.mdl-layout--fixed-header#header
    header.mdl-layout__header
      button.search-wrapper
        .icon: i.material-icons search
        span.text Search definition, entry, and collection
      button.user-wrapper
        img.user(src="http://placekitten.com/g/200/200")
  router-view
  .mdl-layout.mdl-js-layout.mdl-layout--fixed-header#footer
    header.mdl-layout__header
      button.home-wrapper.is-active: .icon: i.material-icons home
      button.entries-wrapper: .icon: i.material-icons view_agenda
      button.collections-wrapper: .icon: i.material-icons book
</template>

<script>
import Jisho from '@/services/dictionary/jisho-org';

export default {
  async created() {
    const test = await Jisho.word('上げる');
    // eslint-disable-next-line
    console.log(test);
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/_import';

.mdl-layout__header {
  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
  }
}

#header {
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
  .mdl-layout__header {
    background-color: white;
    border-bottom: 1px solid #ddd;
    flex-direction: row;
    z-index: 2;
    button {
      &.search-wrapper {
        flex: 1;
        cursor: text;
        color: #777;
        font-family: $fontstack;
        .icon {
          padding: 0 8px;
          padding-top: 4px;
        }
        .text {
          padding-left: 6px;
        }
      }
      &.user-wrapper {
        $size: 28px;
        width: $size * 2;
        display: flex;
        justify-content: center;
        cursor: pointer;
        .user {
          width: $size;
          height: $size;
          border-radius: $size;
        }
      }
    }
  }
}

#footer {
  .mdl-layout__header {
    background-color: white;
    border-top: 1px solid #eee;
    flex-direction: row;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    position: fixed;
    bottom: 0;
    z-index: 2;
    button {
      flex: 1;
      align-items: center;
      justify-content: center;
      .icon {
        color: #444;
      }
      &.is-active {
        pointer-events: none;
        .icon .material-icons {
          color: $primary;
        }
      }
    }
  }
}
</style>
