<template>
  <div v-if="options && options.length">
    <Checkbox
      v-for="(option, index) in options"
      :key="index"
      class="mb-s"
      :name="'radio'"
      :option="option"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { includes, pull } from 'lodash'

interface IOptions {
  label: string,
  value: any,
  checked: boolean,
  disabled?: boolean
}

@Component({
  name: 'lib-checkboxGroup'
})
export default class extends Vue {
  @Prop({ default: () => [] }) options!: IOptions[]

  selected: any[] = []

  mounted () {
    this.options.forEach((option: any) => {
      if (option.checked) {
        this.selected.push(option.value)
      }
    })

    this.$emit('input', this.selected)
  }

  onChange (value: any) {
    if (includes(this.selected, value)) {
      this.selected = [...pull(this.selected, value)]
    } else {
      this.selected.push(value)
    }

    this.$emit('input', this.selected)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
