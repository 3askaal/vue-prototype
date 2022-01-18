<template>
  <div class="Select">
    <!-- <p v-if="hasLabel" class="InputLabel">{{startCase(toLower(name))}}</p> -->
    <select
      :multiple="multiple"
      v-model="values"
      @change="$emit('input', values)"
      :placeholder="'lol'"
    >
      <option v-if="!multiple" disabled :value="null">Select an option</option>
      <option
        v-for="option in options"
        :key="option.value"
        :selected="option.selected"
        :value="option.value"
        :disabled="option.disabled"
      >{{ option.label }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'lib-select'
})
export default class extends Vue {
  @Prop() type!: string
  @Prop() name!: string
  @Prop() options!: any[]
  @Prop() onChange!: any
  @Prop() multiple!: boolean

  values: any[] = []
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.Select {
  position: relative;
  padding: theme(padding);
  border-radius: theme(radius);
  border: 1px solid color(primary);
  width: 100%;
  color: color(primary);
  transition: all theme(duration) theme(easing);

  select {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  &:focus {
    outline: 0;
  }
}
</style>
