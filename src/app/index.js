/**
 * this is the app's entry point
 */

// import polyfills
import "isomorphic-fetch";

// import deps
import "../scss/styles.scss";
import page from "page";
import store from "lib/store";
import Log from "lib/log";
import m from "mithril";
import moment from "moment";

if (process.env.NODE_ENV === "production") {
    // set log level
    Log.setLevel(10);

    // run google analytics
    (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
    ga("create", "UA-86120096-1", "auto");
} else {
    // expose libs;
    window.page = page;
    window.m = m;
    window.store = store;
    window.moment = moment;
    // set debug flag
    store.set("debug", window.location.search.indexOf("debug") !== -1);

    // set log level
    Log.setLevel(50);
    // shim google analytics
    window["GoogleAnalyticsObject"] = window.ga = function() {};
}

require("./app");
