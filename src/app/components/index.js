import m from "mithril";
import page from "page";
import Home from "./Home";
import Search from "./Search";
import Detail from "./Detail";
import Loading from "./misc/Loading";
import Searchbar from "./misc/Searchbar";
import Menu from "./misc/Menu";

import "./base.scss";
import "./app.scss";

import debounce from "lodash/debounce";
import store from "lib/store";
import layouts from "lib/layouts";
import Log from "lib/log";
import initRoutes from "lib/routing";

const log = Log.child(__filename);

const optional = (pred, cb) => pred ? cb() : null;

const update = debounce(function() {
    log.trace("state changed, redrawing");
    log.debug("state", store.get());
    m.redraw();
});

export default {
    oninit(vnode) {
        initRoutes();
        store.select("data").on("update", update);
        store.select("loading").on("update", update);
        store.select("component").on("update", update);
        
    },
    view({ state }) {
        const { Component, data, search, loading, appstate } = store.get();
        const layout = layouts[appstate];

        const Search = layout.searchbar
            ? <Searchbar search={search} selector={store.select("search")} />
            : null;
        
        const Menubar = layout.menu
            ? <Menu>{Search}</Menu>
            : Search;
        return (
            <div className={"app " + appstate}>
                <div className="app-background" role="presentation" >
                    <img src="/assets/bg_prim.svg" class="clear" />
                    <img src="/assets/bg_prim.svg" class="blur" />
                </div>
                <div className="app-page">
                    {Menubar}
                    <Component loading={loading} data={data} />
                </div>

                {optional(loading, () => <Loading /> )}
            </div>
        );
    } 
};
