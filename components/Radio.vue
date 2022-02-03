<template>
  <label
    v-style="'Radio flex aic'"
    :class="{
      'is-checked': option.value === picked,
      'is-disabled': option.disabled
    }"
  >
    <input
      class="none"
      type="radio"
      :name="name"
      :value="option.label"
      :checked="option.value === picked"
      :disabled="option.disabled"
      @change="$event.target.checked && $emit('change', option.value)"
    />
    <div v-style="'RadioInput mr-m'">
      <div v-style="'RadioInputIndicator'"></div>
    </div>
    <div v-style="'RadioLabel'">{{ option.label }}</div>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-radio'
})
export default class extends Vue {
  @Prop() name!: string
  @Prop() option!: any
  @Prop() picked!: number | null
}
</script>

<style lang="scss" module>
.Radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover:not(.is-checked):not(.is-disabled) {
    .RadioInputIndicator {
      background-color: transparent(primary);
    }
  }

  &.is-checked {
    .RadioInputIndicator {
      background-color: color(primary);
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .RadioInput {
      border-color: transparent(primary);
    }

    &.is-checked {
      .RadioInputIndicator {
        background-color: transparent(primary);
      }
    }
  }
}

.RadioInput {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: lighter(primary);
  border: theme(border);
  transition: border-color theme(duration) theme(easing);
  border-radius: 100%;
}

.RadioInputIndicator {
  background-color: transparent;
  display: inline-block;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 100%;
  transition: background-color theme(duration) ease-in;
}
</style>
