<template>
  <div class="home">
    <a-layout id="components-layout-top" class="layout">
      <a-layout-header>
        <div class="logo">
          <img src="@/assets/logo.png" alt="" width="30px" />
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">主页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/shop">商品</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/car">购物车</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/about">个人中心</router-link>
          </a-menu-item>
        </a-menu>
        <span class="action">
          <a class="logout_title" href="javascript:;" @click="handleLogout">
            <a-icon type="logout" />
            <span>&nbsp;退出登录</span>
          </a>
        </span>
      </a-layout-header>
      <a-layout-content>
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div
          :style="{
            background: '#fff',
            padding: '20px',
            minHeight: 'calc(100vh - 133px)'
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        ©2020 Created by XZG
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleLogout() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style>
#components-layout-top .logo {
  width: 120px;
  height: 31px;
  /* background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0; */
  float: left;
}
#components-layout-top .action {
  cursor: pointer;
  padding: 0 14px;
  display: inline-block;
  transition: all 0.3s;
  line-height: 46px;
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>
