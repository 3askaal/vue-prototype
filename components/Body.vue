<template>
  <div class="Body">
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

<style lang="scss" scoped>
@import "../style/main.scss";

.Body {
  > * + * {
    margin-top: space(m);
  }
}
</style>
