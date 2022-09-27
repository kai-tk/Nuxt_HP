<template>
  <div class="drawer">

    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <!-- Humberger Button -->
      <label for="menu-drawer" class="fixed m-12 btn btn-circle swap swap-rotate">
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
      </label>
      <!-- Page Content -->
      <slot></slot>
    </div>

    <div class="drawer-side">
      <!-- Overlay -->
      <label for="menu-drawer" class="drawer-overlay"></label>
      <!-- Menu -->
      <ul class="fixed pt-10 h-screen menu overflow-y-auto w-80 bg-base-100 text-base-content">
        <li @click="CloseDrawer('Home')"><NuxtLink to="/" tag="div">Top</Nuxtlink></li>
        <li @click="CloseDrawer('W3L')" class="pt-5"><NuxtLink to="/" tag="div">What 3 Letters</Nuxtlink></li>
      </ul>
    </div>

  </div>

</template>

<script>
  export default{
    methods:{
      CloseDrawer(component){
        this.$emit('changeComponent', component)
        document.getElementById('menu-drawer').click()
      }
    }
  }
</script>

<style>
  .menu-drawer{
    transition: transform .6s ease;
  }
</style>
