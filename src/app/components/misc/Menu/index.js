import m from "mithril";
import "./menu.scss";
import Icon, { GLYPHS } from "../Icon";
import Searchbar from "../Searchbar";
import page from "page";
import { isPS4, isXbox } from "lib/constants";

let platform = "PC";
if (isPS4) { platform = "PS4"; }
if (isXbox) {  platform = "XBox"; }


const link = href => e => page(href);

export default {
    view({ attrs, children }) {
        return (
            <div className="menu">
                <div className="menu-top">
                    <svg className="menu-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 123">
                           <g fill="#FFF" fill-rule="evenodd">
                                <path d="M14.7 69v30.3H0V22.8h15.4c7.2 0 17.6.3 21 4 1.7 2 3.3 3.7 4.3 6.5 1 3 1.5 7.2 1.5 11.3 0 4.5-1 13-2.6 16.5-1.6 4-6.6 7-6.6 7s7 27 9.4 32H27l-8.2-31h-4zm0-11.3H18c3.3 0 6.3 0 8.2-2 1.8-2.2 1.4-6 1.4-9.6 0-3 .3-7-1.4-9-1.8-1-4.8-2-8-2h-3.5v23zm130-35h18.6c8 0 15 1.6 18.6 4.7 3 3 4 9.3 4 16 0 4.5-1 8.2-3 10.7-2 3-5 4-5 4s4 2 6 5c1 3 2 7 2 14s-1 14-5 18-10 5-16.5 5h-21V23zm14 41.8V88h6c3.3 0 5-.7 6.4-2.4 2-1.7 2-6 2-9.4 0-2 1-7.4-1-9.5-1-1.6-3-2.2-6-2.2h-6zm0-11.8h5c3.3 0 5.7.2 7-1.8 1.4-2 1.2-5 1.2-8s0-6-2-8-4-2-7-2h-5v19zm-17 7.6v12.3c0 5 0 10.6-1 14.6-.6 2.3-2 3.6-3.3 5.3-5 6.7-15.3 6.8-24.7 6.8h-15V22.8h16.6c8.7 0 19 0 23.7 6.5 1.6 2 2.8 4.8 3.3 8 .4 2.4.2 5.2.4 8.2v14.8zM128 61.8c0-22.7.4-27-9.7-27h-6v52.7h4.8c11 0 11-3 11-25.7z"/>
                                <path d="M8.8 22.8h-3l18 8.6s3.8-3.7 3.8 14v54H37c0-1 1-5.2 0-7-1-2-2.3-3.3-2.8-6.2-1-5.7-1-12.3-1-19.2V49.4c0-4.7-.3-7.5.5-12.3C34.5 33 6 23 6 23h2.8zm54.8 0h15.6v76.5H60.6c5-.4 9.5-1.8 12.4-5.4 3.7-5 4.4-12 4.4-20 0-5-.2-10-1-14-.7-3-1.5-6-2.8-8-3-4-7-6-13.3-6C49.6 47 47 51 47 51c0-7-.5-9.7 1-13 1.4-3 3.4-3.7 6.3-3.7 3 0 6.7.8 7.7 6L76.3 37c-1-7.2-6.5-12.6-12.7-14zm-8 65.3c3 0 4.7 0 6.2-3 1.5-2 2-6 2-10 0-3 0-11-1.5-13-1.3-2-4.6-3-7.3-3-3 0-5 1-7 3s-1.3 9-1.3 12c0 4 0 9.4 2 12 1.6 3 3.6 3 6.4 3zm31-88H90v123h-3.5z"/>
                            </g>
                        </svg>
                        <span className="platform">{platform}</span>
                </div>
                <Searchbar
                    className="menu-search"    
                    search={attrs.search}
                    selector={attrs.store.select("search")} />
                <div className="menu-center">
                    <a href="/" className="menu-item">Home</a>
                    <a href="/leaderboard" className="menu-item">Leaderboard</a>
                </div>
                <footer className="menu-bottom is-center">    
                    <div className="menu-footer">
                        <a href="https://twitter.com/Rainbow6_DB">
                            <Icon glyph={GLYPHS.TWITTER} />
                        </a>
                        <a href="mailto:info@r6db.com">info@r6db.com</a>
                    </div>
                </footer>
            </div>
        );
    }
};