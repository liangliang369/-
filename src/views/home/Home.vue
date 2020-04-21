<template>
  <div class="home">
    <van-sticky>
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </van-sticky>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.home {
  width: 100%;
  height: 200px;
}
</style>