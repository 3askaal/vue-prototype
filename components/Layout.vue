<template>
  <div v-style="'Layout'">
    <div v-style="'LayoutContainer'">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "lib-layout",
})
export default class extends Vue {}
</script>

<style lang="scss" module>
.Layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.LayoutContainer {
  max-width: 800px;
  padding: space(m);
}
</style>
