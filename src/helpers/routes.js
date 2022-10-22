import Home from "views/Home";
import About from "views/About";
import NotFound from "views/NotFound";

export const routes = {
    '/': Home,
    '/about': About,
    // '/about/:': 'Product',
    '404': NotFound
}
