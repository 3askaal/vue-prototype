<template>
  <Card :s="s.card">
    <CardHeader :s="s.cardHeader">
      <slot name='header'>
        Header
      </slot>
    </CardHeader>
    <CardContent :s="s.cardContent">
      <slot>
        Content
      </slot>
    </CardContent>
    <CardFooter :s="s.cardFooter">
      <slot name='footer'>
        Footer
      </slot>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { styled } from '@egoist/vue-emotion'
import { css } from '@styled-system-ts/css'
import { COLOR, SPACING } from '~/design'

export const Card = styled('div')((props) => ({
  border: `1px solid ${COLOR.primary}`,
  ...(props.s || {})
}))

export const CardHeader = styled('div')((props) => ({
  padding: SPACING.xs,
  ...(props.s || {})
}))

export const CardContent = styled('div')((props) => ({
  padding: SPACING.xs,
  ...(props.s || {})
}))

export const CardFooter = styled('div')((props) => ({
  padding: SPACING.xs,
  ...(props.s || {})
}))

export default Vue.extend({
  components: {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
  },
  props: {
    s: {
      default: {}
    }
  }
})
</script>
