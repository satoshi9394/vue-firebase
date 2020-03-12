<template>
  <div class="container" id="app">
    <div class="text-center">
      <router-link :to="{name: 'inicio'}">
        <img src="@/assets/logo.png" alt="">
      </router-link>
    </div> 
    <router-view/>
  </div>
</template>
