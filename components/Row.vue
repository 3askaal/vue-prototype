<template>
  <div
    v-style="'Row'"
    :style="{
      marginLeft: gutter && `-${ gutter / 2 }px`,
      marginRight: gutter && `-${ gutter / 2 }px`
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'vue-property-decorator'

@Component({
  name: 'lib-row'
})
export default class extends Vue {
  @Prop({ default: 12 }) @Provide() cols!: number
  @Prop() @Provide() gutter!: number
}
</script>

<style lang="scss" module>
.Row {
  display: flex;
  flex-wrap: wrap;
}
</style>
