<template>
  <label
    class="Checkbox flex aic"
    :class="{
      'is-checked': checked,
      'is-disabled': option.disabled
    }"
  >
    <input
      class="none"
      type="checkbox"
      :checked="option.checked"
      :disabled="option.disabled"
      @change="checked = $event.target.checked; $emit('change', option.value)"
    />
    <div class="CheckboxInput mr-m">
      <div class="CheckboxInputIndicator"></div>
    </div>
    <div class="CheckboxLabel">{{ option.label }}</div>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-checkbox'
})
export default class extends Vue {
  @Prop() option!: any

  checked: boolean = this.option.checked || false
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.Checkbox {
  cursor: pointer;

  &:hover:not(.is-checked):not(.is-disabled) {
    .CheckboxInputIndicator {
      background-color: transparent(primary);
    }
  }

  &.is-checked {
    .CheckboxInputIndicator {
      background-color: color(primary);
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .CheckboxInput {
      border-color: transparent(primary);
    }

    &.is-checked {
      .CheckboxInputIndicator {
        background-color: transparent(primary);
      }
    }
  }
}

.CheckboxInput {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: lighter(primary);
  border-radius: theme(radius);
  border: theme(border);
  transition: border-color theme(duration) theme(easing);
}

.CheckboxInputIndicator {
  background-color: transparent;
  display: inline-block;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 1px;
  transition: background-color theme(duration) ease-in;
}
</style>
