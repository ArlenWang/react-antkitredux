import Index from "../views/Index";
import SearchResult from '../views/SearchResult';
import AntListView from '../views/AntListView';
import AntListView2 from '../views/AntListView2';
var indexRoutes = [
  { path: "/antlist2", name: "AntList2", component: AntListView2 },
  { path: "/antlist", name: "AntList", component: AntListView },
  { path: "/search", name: "Search", component: SearchResult },
  { path: "/", name: "Index", component: Index },
  {
    redirect: true,
    path: "/",
    pathTo: "/",
    name: "首页"
  }
];

export default indexRoutes;
