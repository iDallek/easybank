<template>
  <div class="article__section">
    <div class="article__area__content">
      <h1 class="article__section__title">Lastest Article</h1>
      <div class="articles__area">
        <div v-for="article in articles.slice().reverse()" :key="article.id" class="article">
          <img :src="getImgUrl(article.image)" alt="article.title" class="article__image" />
          <div class="article__content">
            <p class="article__author">{{ "By " + article.author }}</p>
            <h2 class="article__title">{{ article.title }}</h2>
            <p class="article__text">{{ summaryText(article.content, 125) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { type IArticle } from '@/core/models/db/IArticle';

  export default {
    name: 'ArticlesSection',
    setup() {
      const getImgUrl = (pic: string): string => {
        return new URL("../../../assets/images/", import.meta.url).href + `/${pic}`
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
  .article__section {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
  }

  .article__section__title {
    font-size: 2em;
    font-weight: 400;
    margin: 20px 30px;
    color: var(--color-heading);
    text-align: center;
  }

  .articles__area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 30px;
  } 

  .article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    background-color: var(--color-background);
    border-radius: 5px;
    width: 315px;
  }

  .article__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .article__content {
    padding: 0 20px;
    margin: 40px 0;
  }

  .article__author {
    font-size: 0.7em;
    margin-bottom: 10px;
  }

  .article__title {
    font-size: 1.1em;
    letter-spacing: -1px;
    line-height: 1.2em;
    margin-bottom: 10px;
    font-weight: 400;
    color: var(--color-heading);
  }

  .article:hover {
    cursor: pointer;
  }

  .article__title:hover {
    background-image: linear-gradient(90deg, var(--vt-c-lime-green), var(--vt-c-light-blue));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    cursor: pointer;
  }

  .article__text {
    font-size: 0.8em;
    line-height: 1.4em;
    color: var(--color-text);
  }

  @media (min-width: 1024px) {
    .article__area__content {
      max-width: 1200px;
      padding: 0 25px;
      margin: 0 auto;
      justify-content: space-around;
    }

    .article__section__title {
      text-align: left;
      margin-left: 0;
      font-size: 2.2em;
      margin-top: 60px;
      margin-bottom: 40px;
    }

    .articles__area {
      display: flex;
      margin: 0;
      padding: 0;
      gap: 20px;
    }

    .article {
      width: 270px;
    }
  }

</style>