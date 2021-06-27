<style>
@import "./style.css";
</style>

<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <div class="article-mountain">
      <article :key="mountain.title" v-for="mountain of mountains">
        <div class="title">{{ mountain.title }}</div>
        <div class="content">{{ mountain.description }}</div>
        <div class="height">{{ mountain.height }}</div>
        <div class="countries">{{ mountain.countries }}</div>
        <div class="continent">{{ mountain.continent }}</div>
        <img v-bind:src="mountain.image" v-bind:alt="mountain.title" />
        <div class="slug">{{ mountain.slug }}</div>
        <div class="updatedAt">{{ mountain.updatedAt }}</div>
        <div class="path">{{ mountain.path }}</div>
      </article>
    </div>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains: [],
    };
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );
  },
};
</script>