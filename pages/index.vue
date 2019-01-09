<template>
  <section>
    <h1>Logo</h1>
    <h2>{{ from }}</h2>
    <nuxt-logo />
    <nuxt-logo-two />
  </section>
</template>

<script>
export default {
  components: {
    NuxtLogo: () => import("~/assets/nuxt.svg"),
    NuxtLogoTwo: () => import("~/assets/nuxt-two.svg")
  },
  asyncData() {
    return {
      from: process.server ? "server" : "client"
    };
  }
};
</script>
