<template>
  <div class="bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200">
    <Menu @changeComponent="changeComponent">
      <keep-alive>
        <component :is="currentComponent" @changeComponent="changeComponent"/>
      </keep-alive>
    </Menu>
  </div>
</template>

<script>
export default{
  data(){
    return{
      currentComponent: "Home"
    }
  },
  methods:{
    changeComponent(component){
      this.currentComponent=component
    }
  }
}
</script>
