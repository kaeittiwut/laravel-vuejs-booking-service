import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";
import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home"
    },
    {
        path: "/second",
        component: Example2,
        name: "second"
    },
    {
        path: "/bookables",
        component: Bookables,
        name: "bookables"
    }
];

const router = new VueRouter({
    routes, //short for `routes: routes`
    mode: "history"
});

export default router;
