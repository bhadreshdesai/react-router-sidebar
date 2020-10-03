import AdminView from "./pages/AdminView";
import HomeView from "./pages/HomeView";
import TopicView from "./pages/TopicView";
import UserView from "./pages/UserView";

const routes = [
  { path: "/admin", label: "Admin", component: AdminView },
  { path: "/home", label: "Home", component: HomeView },
  { path: "/topic", label: "Topics", component: TopicView },
  { path: "/user", label: "User", component: UserView }
];

export default routes;
