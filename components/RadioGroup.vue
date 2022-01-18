<template>
  <div v-if="options && options.length">
    <Radio
      v-for="(option, index) in options"
      :key="index"
      class="mb-s"
      :name="'radio'"
      :option="option"
      :picked="picked"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface IOptions {
  label: string,
  value: any,
  disabled?: boolean
}

@Component({
  name: 'lib-radioGroup'
})
export default class extends Vue {
  @Prop({ default: () => [] }) options!: IOptions[]

  picked: number | null = null

  onChange (value: any) {
    this.picked = value
    this.$emit('input', this.picked)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
