<template>
  <div v-style="'RangeWrapper'">
    <div v-style="'Range'">
      <div
        v-style="'RangeDisabled RangeDisabledStart'"
        :style="{ width: `calc(${minValue}% + 10px)` }"
      />
      <div
        v-style="'RangeDisabled RangeDisabledEnd'"
        :style="{ width: `calc(${100 - maxValue}% + 10px)` }"
      />
      <div
        v-style="'RangeActive'"
        :style="{
          'left': `${value.start}%`,
          'right': `${100 - value.end}%`,
        }"
      />
      <input
        type="range"
        v-style="'RangeInput'"
        :class="{'is-min': value.start < 10}"
        :style="{ left: `${minValue}%`, width: `${100 - (minValue + (100 - maxValue))}%` }"
        :value="value.start"
        :min="minValue || 0"
        :max="maxValue || 100"
        :step="step"
        @input="onMinInput(parseFloat($event.target.value))"
      />
      <input
        type="range"
        v-style="'RangeInput'"
        :class="{'is-max': value.end > 90}"
        :style="{ right: `${100 - maxValue}%`, width: `${100 - (minValue + (100 - maxValue))}%` }"
        :value="value.end"
        :min="minValue || 0"
        :max="maxValue || 100"
        :step="step"
        @input="onMaxInput(parseFloat($event.target.value))"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-range'
})
export default class extends Vue {
  @Prop() value!: { start: number; end: number }
  @Prop({ default: 5 }) step!: number
  @Prop() minValue!: number
  @Prop() maxValue!: number

  onMinInput (value: number) {
    if (this.value.end > value) {
      this.value.start = value
      this.$emit('input', this.value)
    } else {
      this.value.start = this.value.end - this.step
      this.$forceUpdate()
    }
  }

  onMaxInput (value: number) {
    if (this.value.start < value) {
      this.value.end = value
      this.$emit('input', this.value)
    } else {
      this.value.end = this.value.start + this.step
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" module>
.RangeWrapper {
  position: relative;
  height: 30px;
}

.Range {
  position: absolute;
  width: 100%;
  height: 20px;
  border-radius: 30px;
  border: theme(border);
  overflow: hidden;
}

.RangeActive {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: transparent(primary);
  // border-radius: 30px;
}

.RangeDisabled {
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent(primary),
    transparent(primary) 4px,
    dark(primary) 4px,
    dark(primary) 5px
  );
}

.RangeDisabledStart {
  left: 0;
  border-right: 1px solid dark(primary);
}

.RangeDisabledEnd {
  right: 0;
  border-left: 1px solid dark(primary);
}

@mixin sliderThumb {
  background-color: color(primary);
  border: 4px solid $black;
  box-shadow: 0 0 0 1px color(primary);
  height: 18px;
  width: 18px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 1;
  pointer-events: auto;
}

.RangeInput {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  pointer-events: none;

  &.is-min,
  &.is-max {
    z-index: 0;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    margin-top: 0; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    -webkit-appearance: none;
    @include sliderThumb;
  }

  &::-moz-range-thumb {
    @include sliderThumb;
  }

  &::-ms-thumb {
    @include sliderThumb;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
}
</style>
