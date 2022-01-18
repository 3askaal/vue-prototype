<template>
  <pre class="Code" :class="{'is-block': block}">{{ formattedContent }}</pre>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { startsWith, trimStart } from 'lodash'

@Component({
  name: 'lib-code'
})
export default class extends Vue {
  @Prop() content!: string
  @Prop() block!: boolean

  formattedContent: string = ''

  mounted () {
    let cleanContent: string = trimStart(this.content, '\n')
    let found: any = cleanContent.match(/^(\ {2,})/)
    let rules: string[] = cleanContent.split('\n')

    if (found && found[0]) {
      rules = rules.map((rule: string) => {
        return rule.slice(found[0].length)
      })
    }

    this.formattedContent = rules.join('\n')
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.Code {
  display: inline-block;
  font-family: fonts(code);
  background-color: $grey;
  padding: space(xs);
  border-radius: theme(radius);
  color: $black;

  &.is-block {
    display: block;
    width: 100%;
  }
}
</style>
