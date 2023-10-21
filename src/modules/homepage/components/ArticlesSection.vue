<template>
  <div>
    <h1>Lastest Article</h1>
    <div v-for="article in articles.slice().reverse()" :key="article.id">
      <img :src="getImgUrl(article.image)" alt="article.title" />
      <p>{{ article.author }}</p>
      <h2>{{ article.title }}</h2>
      <p>{{ summaryText(article.content, 130) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { type IArticle } from '@/core/models/db/IArticle';

  export default {
    name: 'ArticlesSection',
    setup() {
      const getImgUrl = (pic: string): string => {
        return new URL(`../../../assets/images/${pic}`, import.meta.url).href
      }

      return { getImgUrl }
    },
    data() {
      return{
        articles: [] as IArticle[]
      }
    },
    methods: {
      fetchArticles() {
        fetch('http://localhost:3001/articles')
          .then(response => response.json())
          .then(data => {
            this.articles = data.slice(-4)
          })
      },
      summaryText(text: string, maxLength: number): string {
        const trimmedString = text.slice(0, maxLength)

        return trimmedString.slice(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + '...'
      }
    },
    mounted() {
        this.fetchArticles()
    },
  }
</script>

<style scoped>

</style>