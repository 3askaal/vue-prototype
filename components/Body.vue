<template>
  <div v-style="'Body'">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'lib-body'
})
export default class extends Vue {}
</script>

<style lang="scss" module>
.Body {
  > * + * {
    margin-top: space(m);
  }
}
</style>
