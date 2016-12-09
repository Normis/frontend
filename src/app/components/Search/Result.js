const m = require("mithril");
const Profilepic = require("../misc/Profilepic");
const round = (number, digits) => ((number * digits) | 0) / digits;

const getKd = player => player.stats.kills / player.stats.deaths;
const getWl = player => player.stats.matchesWon / player.stats.matchesLost;

const getAliases = player => {
    const shown = player.aliases.slice(0, 2).map(alias => <li>{alias.name}</li>);
    const rest = player.aliases.length > 2
        ? <li>and {player.aliases.length - 2}more</li>
        : null;
    return (
        <div className="player-aliases">
            <header>known aliases</header>
            <ul>
                {shown}
                {rest}
            </ul>
        </div>);
};
const getStats = player => (
    player.stats
        ? (<div className="player-stats">
            KD: {round(getKd(player), 2)}| WL: {round(getWl(player), 2)}
        </div>)
        : null
);
module.exports = {
    class: m.prop("is-hidden"),
    oncreate: ({ state }) => state.class("is-visible"),
    onremove: ({ state }) => state.class("is-hidden"),
    view: ({attrs, state}) => (
        <div className={"playercard " + state.class() + " " + (attrs.player.role || "")}>
            <a href={attrs.href} className="card-image">
                <Profilepic id={attrs.player.id} delay={attrs.index} />
            </a>
            <div className="card-content">
                <div className="player-identification">
                    <a href={attrs.href} className="player-name">{attrs.player.aliases[0].name}</a>
                    <span className="player-id">{attrs.player.id}</span>
                </div>
                {getAliases(attrs.player)}
                <a href={`https://game-rainbow6.ubi.com/en-gb/uplay/player-statistics/${attrs.player.id}/multiplayer`} className="player-uplaylink">
                    › view on uplay
                </a>
            </div>
        </div>
    )

};
