<template>
  <div>

    <form @submit.prevent="HandleSubmit">
      <div class="pt-20 form-control">

        <!-- input form -->
        <div class="input-group justify-center">
          <input
            ref="first"
            type="text"
            placeholder="Enter 3 letters"
            class="input input-bordered w-[calc(30%)]"
            v-model="article.headword"
            @focus=ClearStatus
            @keypress=ClearStatus
          />
          <button class="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>

        <!-- action message -->
        <div class="flex justify-center">
          <!-- error message -->
          <div v-if="error && submitting" class="alert alert-error shadow-lg w-[calc(50%)] opacity-80 flex justify-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Please Enter 3 Letters</span>
            </div>
          </div>
          <!-- notFound message -->
          <div v-else-if="notFound" class="alert alert-warning shadow-lg w-[calc(50%)] opacity-80 flex justify-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Extract is not found</span>
            </div>
          </div>
          <!-- success message -->
          <div v-else-if="success" class="alert alert-success shadow-lg w-[calc(50%)] opacity-80 flex justify-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Article successfully added!</span>
            </div>
          </div>
          <!-- empty message -->
          <div v-else class="alert opacity-0">
            <div>
              <span>Empty message</span>
            </div>
          </div>
        </div>

      </div>
    </form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        article: {
          headword: '',
          about: '',
          state: '',
        },

        submitting: false,
        error: false,
        success: false,
        notFound: false,

        URL:"https://ja.wikipedia.org/w/api.php?format=xml&origin=*&action=query&prop=extracts&exintro&explaintext&format=json&redirects=1&titles="
      }
    },
    methods:{
      HandleSubmit(){
        this.submitting=true
        this.ClearStatus()

        if(!this.validInput){
          this.$refs.first.focus()
          this.error=true
          return
        }

        this.article.headword=this.article.headword.toUpperCase()
        this.SearchWiki()
      },
      ClearStatus(){
        console.log("Yes")
        this.success=false
        this.error=false
        this.notFound=false
      },
      async SearchWiki(){
        await fetch(this.URL+this.article.headword)
        .then(response=>{
          return response.json()
        })
        .then(data=>{
          if(data.query.pages[-1]){
            this.article.about=""
            this.article.state='missing'
          }else{
            for(let id in data.query.pages){
              this.article.about=data.query.pages[id].extract
              if(this.article.about) this.article.state='found'
              else this.article.state='no extract'
            }
          }
        })
        .catch((error)=>{
          console.log(error)
        })
        this.$emit('add:article', this.article)
        this.$refs.first.focus()

        if(this.article.state==='found') this.success=true
        else this.notFound=true
        this.submitting=false

        this.article = {
          headword: '',
          about: '',
          state: ''
        }
      },
    },
    computed:{
      validInput(){
        if(this.article.headword.match(/^[A-Za-z]*$/)) return this.article.headword.length === 3
        else return false;
      }
    }
  }
</script>

<style scoped>
  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>
