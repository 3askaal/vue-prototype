<template>
  <div v-style="'Bar'">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'lib-bar'
})
export default class extends Vue {}
</script>

<style lang="scss" module>
.Bar {
  display: flex;

  > * {
    flex-basis: auto;
    border-radius: 0 !important;

    &:first-child {
      border-top-left-radius: theme(radius) !important;
      border-bottom-left-radius: theme(radius) !important;
    }

    + * {
      border-left: 0;
    }

    &:last-child {
      border-top-right-radius: theme(radius) !important;
      border-bottom-right-radius: theme(radius) !important;
    }
  }
}
</style>
