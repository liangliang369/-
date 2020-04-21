<template>
  <div class="layout">
    <router-view />
    <Tarbar></Tarbar>
  </div>
</template>

<script>
import Tarbar from '@/components/Tarbar.vue'
export default {
  name:'layout',
  components: {
    Tarbar
  }
}
</script>

<style>

</style>