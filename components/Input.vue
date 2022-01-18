<template>
  <input
    class="Input"
    :class="{'InputError': err}"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    @keyup="$emit('change', $event.target.value)"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-input'
})
export default class extends Vue {
  @Prop() type!: string
  @Prop() name!: string
  @Prop() value!: string
  @Prop() placeholder!: string
  @Prop() onChange!: any
  @Prop() hasLabel!: any
  @Prop() err!: any
}
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.Input {
  display: flex;
  flex-basis: 100%;
  position: relative;
  background-color: transparent !important;
  padding: theme(padding);
  border: theme(border);
  border-radius: theme(radius);
  color: color(primary);
  transition: all theme(duration) theme(easing);

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px $background inset;
  }
}
</style>
