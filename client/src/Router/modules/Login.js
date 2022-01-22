const Login = {
  path: "/login",
  name: "Login",
  hidden: true,
  component: () =>
    import(/* webpackChunkName: "Login" */ "../../Pages/Login/Login.vue"),
  meta: {
    title: "ROUTER.LOGIN",
    icon: "",
  },
};

export default Login;
