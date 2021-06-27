<template>
<div>
  <nuxt-link to="/">Home</nuxt-link>
<div>
  <auction />
</div>
</div>
</template>

<script>
import Auction from '~/components/auction'

export default {
  components: {
    Auction
  },
  title: "About"
}
</script>
