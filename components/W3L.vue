<template>
  <div class="w-3/4 pt-40 mx-auto">
    <h1 class="flex justify-center text-6xl text-white text-shadow">What 3 Letters</h1>

    <W3LForm @add:article="addArticle"/>
    <W3LTable :articles="articles"/>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        articles:[],
        baseURL: 'https://ja.wikipedia.org/wiki/'
      }
    },
    methods:{
      addArticle(article){
        this.articles = this.articles.filter(
          a => a.headword != article.headword
        )

        const id = this.articles.length > 0
          ? this.articles[this.articles.length - 1].id + 1
          : 1;
        const url = this.baseURL + article.headword
        const detail = false
        const newArticle = { ...article, url, id ,detail};
        this.articles = [...this.articles, newArticle];

        if(this.articles.length>100) this.articles.shift()
      },
    },
  }
</script>

<style>
  .text-shadow{
    text-shadow: 2px 5px 3px darkgrey;
  }
</style>
