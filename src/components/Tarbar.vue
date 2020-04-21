<template>
  <div class="tarbar">
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? homeIcon.active : homeIcon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? classifyIcon.active : classifyIcon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>吃什么</span>
        <template #icon="props">
          <img :src="props.active ? foodIcon.active : foodIcon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? cartIcon.active : cartIcon.inactive" />
        </template>
      </van-tabbar-item>
       <van-tabbar-item>
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? mineIcon.active : mineIcon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      homeIcon: {
        active: require('../assets/imgs/tarbar/homeActive.png'),
        inactive: require('../assets/imgs/tarbar/homeBase.png'),
      },
      classifyIcon: {
        active: require('../assets/imgs/tarbar/classifyctive.png'),
        inactive: require('../assets/imgs/tarbar/classifyBase.png'),
      },
      foodIcon: {
        active: require('../assets/imgs/tarbar/foodActive.png'),
        inactive: require('../assets/imgs/tarbar/foodBase.png'),
      },
      cartIcon: {
        active: require('../assets/imgs/tarbar/cartActive.png'),
        inactive: require('../assets/imgs/tarbar/cartBase.png'),
      },
      mineIcon: {
        active: require('../assets/imgs/tarbar/mineActive.png'),
        inactive: require('../assets/imgs/tarbar/mineBase.png'),
      }
    }
  }
};
</script>

<style>
</style>