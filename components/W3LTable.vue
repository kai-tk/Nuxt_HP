<template>
  <div class="pt-10">
    <table class="table table-fixed">
      <thead>
        <tr>
          <th class="w-[calc(20%)] border-solid border-r-2 text-center">word</th>
          <th class="border-solid border-r-2 text-center">About</th>
          <th class="w-[calc(25%)] text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr class="hover bg-white" v-for="article in reverseArticles" :key="articles.id">

          <td class="bg-white pt-6 border-solid border-r-2 text-center h-1">
            <a class="link link-hover block h-full" :href="article.url">{{article.headword}}</a>
          </td>
          <td class="bg-white border-solid border-r-2">
            <div v-if="article.state==='found'">
              <textarea v-if="article.detail" class="textarea resize-none" :id="textId(article)" disabled>{{article.about}}</textarea>
              <p v-else class="overflow-x-hidden text-ellipsis">{{article.about}}</p>
            </div>
            <div v-else-if="article.state==='no extract'">
              <p><span class="text-red-500">No Extract</span> (概要が無い記事です)</p>
            </div>
            <div v-else>
              <p><span class="text-red-500">Not Found</span> (記事が存在しません)</p>
            </div>
          </td>
          <td class="bg-white text-center align-top">
            <button v-if="article.state==='found'" class="btn btn-outline btn-info" @click="showInfo(article)">Info</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    props:{
      articles: Array
    },
    computed:{
      reverseArticles(){
        return this.articles.slice().reverse()
      },
      textId(){
        return(article)=>{
          return 'text'+article.id
        }
      }
    },
    methods:{
      adjustHeight(article){
        if(article.detail){
          let textarea = document.getElementById('text'+article.id);
          textarea.style.height = "auto";
          textarea.style.height = (textarea.scrollHeight + 2) + 'px';
        }
      },
      showInfo(article){
        article.detail=!article.detail
        this.$nextTick(()=>{
          this.adjustHeight(article)
        })
      },
      handleResize(){
        this.$nextTick(()=>{
          this.articles.forEach(article => this.adjustHeight(article))
        })
      }
    },
    mounted(){
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy(){
      window.removeEventListener('resize', this.handleResize)
    },
    watch:{
      articles(){
        this.$nextTick(()=>{
          this.articles.forEach(article => this.adjustHeight(article))
        })
      }
    }
  }
</script>
