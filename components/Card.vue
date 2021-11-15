<template>
  <Card>
    <CardHeader>
      <slot name='header' />
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
    <CardFooter>
      <slot name='footer' />
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { styled } from '@egoist/vue-emotion'
import { COLOR, SPACING } from '~/design'

export const Card = styled('div')({
  border: `1px solid ${COLOR.primary}`
})

export const CardHeader = styled('div')({
  padding: SPACING.xxs
})

export const CardContent = styled('div')({
  padding: SPACING.xxs
})

export const CardFooter = styled('div')({
  padding: SPACING.xxs
})

export default Vue.extend({
  components: {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
  }
})
</script>
