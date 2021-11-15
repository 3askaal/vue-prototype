<template>
  <div>
    <Button>Button</Button>
    <SuccessButton>SuccessButton</SuccessButton>
    <Card>Card</Card>
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
