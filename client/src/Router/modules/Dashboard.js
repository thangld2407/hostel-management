const Dashboard = {
  path: "/dashboard",
  name: "Dashboard",
  hidden: true,
  component: () =>
    import(
      /* webpackChunkName: "Login" */ "../../Pages/Dashboard/Dashboard.vue"
    ),
  meta: {
    title: "ROUTER.DASHBOARD",
    icon: "",
  },
  children: [
    {
      path: "index",
      component: () =>
        import(
          /* webpackChunkName: "Login" */ "../../Pages/Dashboard/Dashboard.vue"
        ),
    },
  ],
};

export default Dashboard;
