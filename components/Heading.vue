<template>
  <div class="Heading" :style="{'font-size': sizes[size]}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-heading'
})
export default class extends Vue {
  @Prop({ default: () => 'm' }) size!: string

  sizes = {
    s: '1.25em',
    m: '1.5em',
    l: '2.25em'
  }
}
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.Heading {
  font-family: font(heading);
  display: flex;
  color: color(primary);
  font-weight: 400;
  font-weight: bold;
}
</style>
