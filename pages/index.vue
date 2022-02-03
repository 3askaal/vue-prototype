<template>
  <div v-style="'app'">
    <Layout>
      <Body>

        <Rule>Colors</Rule>

        <div class="flex wrap">
          <span v-for="color in colors" :key="color" v-style="'color'">
            <span v-style="'color-indicator'" :class="{[`bg-${color}`]: color}"></span>
            <span :class="{[`color-${color}`]: color}">{{ color }}</span>
          </span>
        </div>

        <Rule>Grid</Rule>

        <Row :gutter="20">
          <Col>Auto</Col>
          <Col>Auto</Col>
          <Col>Auto</Col>
          <Col>Auto</Col>
        </Row>

        <Row :gutter="20">
          <Col :width="2">2</Col>
          <Col :width="2">2</Col>
          <Col :width="4">4</Col>
          <Col :width="4">4</Col>
          <Col :width="3">3</Col>
          <Col :width="9">9</Col>
        </Row>

        <Rule>Headings</Rule>

        <Heading :size="'s'">Heading S</Heading>
        <Heading>Heading M</Heading>
        <Heading :size="'l'">Heading L</Heading>

        <Rule>Labels</Rule>

        <div class="flex wrap">
          <Label
            v-for="label in labels"
            :key="label.name"
            class="mr-xs mb-xs"
            :color="label.color"
            :outline="label.outline"
          >{{ label.name }}</Label>
        </div>

        <Rule>Alerts</Rule>

        <Alert>This is an alert</Alert>
        <Alert state="success">This is a success alert</Alert>
        <Alert state="danger">This is a warning alert</Alert>

        <Rule>Buttons</Rule>

        <Button>I'm a button</Button>
        <Button :disabled="true">I'm a disabled button</Button>
        <Button :block="true">I'm a block button</Button>

        <Rule>Inputs</Rule>

        <Input :placeholder="'Text'" v-model="text" />
        <p>{{ text }}</p>
        <Input :type="'password'" :placeholder="'Password'" v-model="password" />
        <p>{{ password }}</p>

        <Rule>Checkbox</Rule>

        <CheckboxGroup :options="options" v-model="checkboxesSelected" />
        <p v-if="checkboxesSelected && checkboxesSelected.length">{{ checkboxesSelected }}</p>

        <Rule>Radio buttons</Rule>

        <RadioGroup :options="options" v-model="radioSelected" />
        <p v-if="radioSelected">{{ radioSelected }}</p>

        <Rule>Select inputs</Rule>

        <Select :options="options" v-model="selectSelected" />
        <p v-if="selectSelected">{{ selectSelected }}</p>
        <Select multiple :options="options" v-model="multiSelectSelected" />
        <p v-if="multiSelectSelected && multiSelectSelected.length">{{ multiSelectSelected }}</p>

        <Rule>Dual range input</Rule>

        <Range v-model="range" :minValue="10" :maxValue="90" />
        <div class="flex jcsb">
          <span>{{ range.start }}</span>
          <span>{{ range.end }}</span>
        </div>

        <Rule>Bar</Rule>

        <Bar>
          <Label>Message</Label>
          <Input :placeholder="'Text'" v-model="text" />
          <Button>Submit</Button>
        </Bar>

        <Rule>Code</Rule>

        <Code :content="'const javascript = true;'" />
        <Code
          :block="true"
          :content="`
            const javascript = function() {
              return true;
            }`"
        />

        <Rule>Rule</Rule>

        <Rule>I Rule</Rule>

      </Body>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
class App extends Vue {
  colors: string[] = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'gray',
    'blue-grey'
  ]

  labels: any[] = [
    { name: 'none', color: 'primary', outline: true },
    { name: 'feature', color: 'green' },
    { name: 'bugfix', color: 'red' },
    { name: 'refactor', color: 'teal' }
  ]

  text: string = ''
  password: string = ''

  options: any[] = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2, checked: true },
    { label: 'Three', value: 3 },
    { label: 'Four', value: 4, disabled: true }
  ]

  checkboxSelected: boolean | null = null
  checkboxesSelected: any[] = []
  radioSelected: any = null
  selectSelected: any = null
  multiSelectSelected: any[] = []

  range: any = {
    start: 20,
    end: 80
  }
}

export default App
</script>

<style lang="scss" module>
body {
  line-height: 1;
}

.app {
  font-family: fonts(base);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: $white;
  background-color: $background;
  padding-top: 80px;
  padding-bottom: 80px;
}

.color {
  display: flex;
  align-items: center;
  margin: 10px;
}

.color-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: theme(radius);
}

.Rule:not(:first-child) {
  margin-top: 60px;
}

.Col {
  background-color: color(primary);
  border-radius: theme(radius);
  padding: theme(padding);
}
</style>
