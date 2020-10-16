import axios from "axios";
import qs from "qs";

axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

axios.interceptors.request.use(
  config => {
    // Toast.loading({
    //   mask: true,
    //   message: "加载中..."
    // });

    config.method === "post"
      ? (config.data = qs.stringify({ ...config.data }))
      : (config.params = { ...config.params });
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";

    return config;
  },
  error => {
    //请求错误处理
    // Toast.fail(error);
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    let result;
    switch (res.status) {
      case 404:
        console.log("404");
        break;
      case 500:
        console.log("服务器出错");
        break;
      case 401:
        console.log("401");
        break;
      case 200:
        // eslint-disable-next-line no-case-declarations
        let data = res.data;
        if (data.respCode === "0000") {
          result = data.data;
        } else {
          //   vant.fail(error);
        }
        break;
    }
    //在这里对返回的数据进行处理
    return result;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios; //暴露axios实例
