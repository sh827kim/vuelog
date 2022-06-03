<template>
  <div v-for="(post, index) in posts" :key="index">
    <h5 @click="$router.push(`/detail/${post.number}`)">
      {{ post.title }}
    </h5>
    <p>{{ post.date }}</p>
  </div>
</template>
<script>
export default {
  name: `PostList`,
  props: {
    posts: Array,
  },
};
</script>
<style></style>
