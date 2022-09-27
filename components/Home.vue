<template>
  <div class="w-3/4 pt-40 mx-auto">
    <h1 class="flex justify-center text-6xl text-white text-shadow">Works</h1>

    <div class="container pt-10 flex flex-wrap justify-around">

      <div class="card w-72 m-[calc(2%)] bg-base-100 shadow-xl" @click="$emit('changeComponent', 'W3L')">
        <figure><img src="/Wikipedia-logo-v2-en.svg" alt="What_3_Letters" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            What 3 Letters
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p></p>
          <p>アルファベット3文字をWikipediaで検索</p>
        </div>
      </div>

      <div class="w-72 m-[calc(2%)]"></div>
      <div class="w-72 m-[calc(2%)]"></div>
      <div class="w-72 m-[calc(2%)]"></div>

    </div>
  </div>
</template>

<script></script>

<style>
  .text-shadow{
    text-shadow: 2px 5px 3px darkgrey;
  }

  .card{
    transition: transform .6s ease;
  }

  .card:hover{
    transform: scale(1.1);
  }
</style>
