<template>
  <button
    class="Button"
    :disabled="disabled"
    :class="{'is-block': block, 'is-disabled': disabled }"
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

<style lang="scss" scoped>
@import "../styles/main.scss";

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

  .is-block {
    display: flex;
    width: 100%;
  }
}

.ButtonDisabled {
  pointer-events: none;
  cursor: not-allowed;
  border-color: transparent(primary);
  color: transparent(primary);
}
</style>
