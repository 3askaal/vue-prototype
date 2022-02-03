<template>
  <button
    v-style="['Button', block && 'ButtonBlock', disabled && 'ButtonDisabled']"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-button'
})
export default class extends Vue {
  @Prop() block!: boolean
  @Prop() disabled!: boolean
  @Prop() outline!: boolean
}
</script>

<style lang="scss" module>
.Button {
  display: flex;
  justify-content: center;
  position: relative;
  padding: theme(padding);
  background-color: transparent;
  border: theme(border);
  color: color(primary);
  border-radius: theme(radius);
  text-decoration: none;
  transition: all theme(duration) theme(easing);
  cursor: pointer;

  @include hover {
    background-color: transparent(primary);
  }
}

.ButtonBlock {
  display: flex;
  width: 100%;
  pointer-events: none;
}

.ButtonDisabled {
  pointer-events: none;
  cursor: not-allowed;
  border-color: transparent(primary);
  color: transparent(primary);
}
</style>
