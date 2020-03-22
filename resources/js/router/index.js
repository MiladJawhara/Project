import Vue from "vue";
import routes from "./routes";
import Router from "vue-router";
Vue.use(Router);

// The middleware for every page of the application.
const globalMiddleware = ["locale", "check-auth"];

const router = new Router({
    mode: "history",
    routes
});

export default router;
