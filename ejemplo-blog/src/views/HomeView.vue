<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {

    // Array reactivo (por el 'ref') que contiene los objetos 'posts'.
    const posts = ref([
      {title: "Welcome to the blog", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu mi, dignissim nec purus posuere, placerat maximus nisi. Suspendisse quis massa mattis, semper dui id, vestibulum velit. Duis ac magna a justo tincidunt lacinia. Donec pellentesque nibh nec lorem ultricies rhoncus. Nunc nec magna nulla. Integer ac pulvinar lacus, rhoncus rhoncus lacus. Sed nisi lectus, tempus at turpis in, sollicitudin tristique libero. In eleifend pretium augue a vulputate. Nam gravida ipsum quis diam fermentum lobortis. Sed egestas convallis ante, eu posuere dui lacinia non. Sed ultricies in eros vitae ornare. Donec vitae gravida leo. Nulla massa ante, volutpat malesuada purus nec, lobortis ornare massa.", id: 1},
      {title: "Top 5 CSS tips", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu mi, dignissim nec purus posuere, placerat maximus nisi. Suspendisse quis massa mattis, semper dui id, vestibulum velit. Duis ac magna a justo tincidunt lacinia. Donec pellentesque nibh nec lorem ultricies rhoncus. Nunc nec magna nulla. Integer ac pulvinar lacus, rhoncus rhoncus lacus. Sed nisi lectus, tempus at turpis in, sollicitudin tristique libero. In eleifend pretium augue a vulputate. Nam gravida ipsum quis diam fermentum lobortis. Sed egestas convallis ante, eu posuere dui lacinia non. Sed ultricies in eros vitae ornare. Donec vitae gravida leo. Nulla massa ante, volutpat malesuada purus nec, lobortis ornare massa.", id: 2},
    ])

    return { posts }

  }
}
</script>
