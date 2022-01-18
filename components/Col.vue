<template>
  <div
    class="Col"
    :style="{
      flex: width && `0 0 ${calcWidth()}`,
      maxWidth: width && calcWidth(),
      marginLeft: gutter && `${gutter / 2}px`,
      marginRight: gutter && `${gutter / 2}px`,
      marginBottom: gutter && `${gutter}px`
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'

@Component({
  name: 'lib-col'
})
export default class extends Vue {
  @Prop() width!: number
  @Inject() cols!: number
  @Inject() gutter!: number

  calcWidth () {
    if (this.gutter) {
      return `calc(${ 100 / this.cols * this.width}% - ${this.gutter}px)`
    } else {
      return `${ 100 / this.cols * this.width}%`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.Col {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;
  align-items: center;
  justify-content: center;
}
</style>
