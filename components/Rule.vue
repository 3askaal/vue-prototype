<template>
  <div v-style="'Rule'">
    <div v-style="'RuleLine'"></div>
    <div v-style="'RuleContent px-s'" v-if="$slots.default">
      <slot />
    </div>
    <div v-style="'RuleLine'"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'lib-rule'
})
export default class extends Vue {}
</script>

<style lang="scss" module>
.Rule {
  display: flex;
  width: 100%;
  align-items: center;

  .RuleLine {
    height: 1px;
    flex-grow: 1;
    background-color: color(primary);
  }

  .RuleContent {
    font-family: fonts(heading);
    text-transform: uppercase;
    color: color(primary);
  }
}
</style>
