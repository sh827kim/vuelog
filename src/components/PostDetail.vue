<template>
  <div>
    <h5>{{ posts[postId].title }}</h5>
    <p>{{ posts[postId].date }}</p>
    <p>{{ posts[postId].content }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: `PostDetail`,
  props: {
    posts: Array,
    postId: Number,
  },
};
</script>
<style></style>
