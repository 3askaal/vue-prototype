<template>
  <div v-style="['Alert', state ? `state-${state}` : '']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'lib-alert'
})
export default class extends Vue {
  @Prop() state!: string
  @Prop() outline!: boolean
}
</script>

<style lang="scss" module>
.Alert {
  border-radius: theme(radius);
  background-color: transparent(primary);
  border: theme(border);
  padding: theme(padding);
  color: color(primary);
}
</style>
