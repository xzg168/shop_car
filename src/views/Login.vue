<template>
  <div class="loginContainer">
    <div class="main">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="@/assets/logo.png" alt="logo" class="logo" />
            <span class="title">水果商城系统</span>
          </a>
        </div>
      </div>
      <a-form :form="form" class="login-form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [{ required: true, message: '请输入账户!' }]
              }
            ]"
            placeholder="账户"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码!' }]
              }
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a class="login-form-forgot">
            忘记密码
          </a>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>

          <a class="login-form-register">
            注册
          </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$get("/user/info").then(res => {});
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
</script>
<style>
.loginContainer {
  width: 100%;
  min-height: 100%;
  height: 100%;
  background: #f0f2f5 url(../assets/login-background.jpg) no-repeat 50%;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top {
  text-align: center;
  margin-bottom: 40px;
}
.top .header {
  height: 44px;
  line-height: 44px;
}
.top .header .logo {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
  border-style: none;
}
.top .header .title {
  font-size: 33px;
  color: #ffffff;
  font-weight: 600;
  position: relative;
  top: 2px;
}
.main {
  min-width: 260px;
  width: 368px;
}
.main .has-error .ant-form-explain,
.main .has-error .ant-form-split {
  text-align: left;
}
.login-form-forgot,
.login-form-register {
  float: right;
}
</style>
