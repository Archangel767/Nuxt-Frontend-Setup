<template>
  <div>
    <h1>Jokes go here</h1>
    <p>If I knew any...</p>
    <br>
    <div class="gallery">
      <nuxt-img src="/chuckle.jpeg" sizes="sm:100px md:200px lg:400px" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dad 'Jokes'",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny jokes",
        },
      ],
    };
  },
};
</script>

<style>

.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
}
</style>