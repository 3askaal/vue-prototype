<template>
  <div
    class="Label"
    :class="{
      [`state-${state}`]: state,
      [`bg-${color}`]: color,
      [`color-${color}`]: color,
      'has-outline': outline
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'lib-label'
})
export default class extends Vue {
  @Prop({ default: 'primary' }) color!: string
  @Prop() state!: string
  @Prop() outline!: boolean
}
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.Label {
  display: inline-flex;
  align-items: center;
  border-radius: theme(radius);
  padding: theme(padding);

  &.has-outline {
    background-color: transparent;
    border: theme(border);
  }
}
</style>
