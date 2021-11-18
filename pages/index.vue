<template>
  <div>
    <Button>Button</Button>
    <SuccessButton>SuccessButton</SuccessButton>
    <Card :s="{ cardHeader: { backgroundColor: 'grey' } }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis consequuntur dolores officiis! Quae deserunt ea odit laborum, iste ut eaque doloribus voluptate, doloremque, quidem molestias enim eum adipisci modi.</Card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button, SuccessButton } from '../components/Button'

export default Vue.extend({
  components: {
    Button,
    SuccessButton,
  }
})
</script>
