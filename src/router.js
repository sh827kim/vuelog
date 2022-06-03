import { createWebHistory, createRouter } from "vue-router";
import PostList from './components/PostList.vue'
import BlogMain from './components/BlogMain.vue'
import PostDetail from './components/PostDetail.vue'
import PostAuthor from './components/PostAuthor.vue'
import PostComments from './components/PostComments.vue'

const routes = [
    {
        path: "/list",
        component: PostList,
    },
    {
        path: "/",
        component: BlogMain,
    },
    {
        path: "/detail/:postId",
        component: PostDetail,
        children: [
            {
                path: "author",
                component: PostAuthor,
            },
            {
                path: "comment",
                component: PostComments
            }  
        ],
        props: true,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 