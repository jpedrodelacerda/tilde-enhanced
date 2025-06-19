const CONFIG = {
    /**
     * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
     * Icons must be added to "icons" folder and their values/names must be updated.
     * If none of the specified keys are matched, the '*' key is used.
     * Commands without a category don't show up in the help menu.
     * Update line 11 and 13 if you prefer using Google.
     */
    commands: [
        {
            name: "Duckduckgo",
            key: "*",
            url: "https://duckduckgo.com",
            search: "/?q={}",
        },
        {
            category: "general",
            name: "mail",
            key: "m",
            url: "https://gmail.com",
            search: "/#search/text={}",
            color: "linear-gradient(135deg, #dd5145, #dd5145)",
            icon: "email",
            quickLaunch: true,
        },
        {
            category: "general",
            name: "diariodebordo",
            key: "ddb",
            url: "https://ddb.jpedrodelacerda.com",
            color: "#fdf6e3",
            icon: "pencil",
            quickLaunch: false,
        },
        {
            category: "general",
            name: "youtube",
            key: "y",
            url: "https://youtube.com",
            search: "/results?search_query={}",
            color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
            icon: "youtube",
            quickLaunch: false,
        },
        {
            category: "general",
            name: "pocketcasts",
            key: "pc",
            url: "https://pocketcasts.com/podcasts",
            search: "/search?q={}",
            color: "#1dd35e",
            icon: "spotify",
            quickLaunch: false,
        },
        {
            category: "general",
            name: "spotify",
            key: "sp",
            url: "https://open.spotify.com/",
            search: "/search/{}",
            color: "#1dd35e",
            icon: "spotify",
            quickLaunch: false,
        },
        {
            category: "general",
            name: "gdrive",
            key: "gd",
            url: "https://drive.google.com",
            search: "/drive/search?q={}",
            color: "linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)",
            icon: "google-drive",
            quickLaunch: false,
        },
        {
            category: "general",
            name: "mega",
            key: "mu",
            url: "https://mega.io",
            icon: "mega",
            quickLaunch: false,
        },
        {
            category: "dev",
            name: "github",
            key: "gh",
            url: "https://github.com",
            search: "/search?q={}",
            color: "linear-gradient(135deg, #2b2b2b, #3b3b3b)",
            icon: "github",
            quickLaunch: true,
        },
        {
            category: "dev",
            name: "codeberg",
            key: "berg",
            url: "https://codeberg.org",
            search: "/search?q={}",
            color: "linear-gradient(135deg, #2b2b2b, #3b3b3b)",
            icon: "codeberg",
            quickLaunch: true,
        },
        {
            category: "study",
            name: "moodle - COS",
            key: "mc",
            url: "https://moodle.cos.ufrj.br",
            icon: "moodle",
            quickLaunch: true,
        },
        {
            category: "study",
            name: "moodle - Poli",
            key: "mp",
            url: "https://polimoodle.poli.ufrj.br",
            icon: "moodle",
            quickLaunch: true,
        },
        {
            category: "media",
            name: "hbo",
            key: "h",
            url: "https://www.max.com",
            icon: "hbo",
            quickLaunch: false,
        },
        {
            category: "media",
            name: "disneyplus",
            key: "dp",
            url: "https://disneyplus.com",
            icon: "disneyplus",
            quickLaunch: false,
        },
        {
            category: "media",
            name: "globoplay",
            key: "gp",
            url: "https://globoplay.com",
            icon: "globoplay",
            quickLaunch: false,
        },
        {
            category: "media",
            name: "primevideo",
            key: "pv",
            url: "https://primevideo.com",
            icon: "primevideo",
            quickLaunch: false,
        },
        {
            category: "media",
            name: "netflix",
            key: "n",
            url: "https://www.netflix.com",
            color: "linear-gradient(135deg, #E50914, #CB020C)",
            icon: "netflix",
            quickLaunch: false,
        },
        {
            category: "social",
            name: "twitter",
            key: "t",
            url: "https://www.twitter.com",
            search: "/search?q={}&src=typed_query",
            color: "linear-gradient(135deg, #1DA1F2, #19608F)",
            icon: "twitter",
            quickLaunch: true,
        },
        {
            category: "social",
            name: "reddit",
            key: "r",
            url: "https://reddit.com",
            search: "/search?q={}",
            color: "linear-gradient(135deg, #FF8456, #FF4500)",
            icon: "reddit",
            quickLaunch: false,
        },
        {
            category: "social",
            name: "linkedin",
            key: "l",
            url: "https://linkedin.com",
            search: "/search/results/all/?keywords={}",
            color: "linear-gradient(135deg, #006CA4, #0077B5)",
            icon: "linkedin",
            quickLaunch: true,
        },
        {
            category: "fun",
            name: "steam",
            key: "st",
            url: "https://store.steampowered.com",
            search: "/search/?term={}",
            color: "linear-gradient(135deg, #006CA4, #0077B5)",
            icon: "steam",
            quickLaunch: true,
        },

        {
            category: "fun",
            name: "lichess",
            key: "lc",
            url: "https://lichess.org",
            search: "/@/{}",
            color: "linear-gradient(135deg, #006CA4, #0077B5)",
            icon: "lichess",
            quickLaunch: true,
        },
        {
            category: "fun",
            name: "chess.com",
            key: "cc",
            url: "https://chess.com",
            search: "/search/?term={}",
            color: "linear-gradient(135deg, #006CA4, #0077B5)",
            icon: "chessdotcom",
            quickLaunch: true,
        },
    ],

    /**
     * Get suggestions as you type.
     */
    suggestions: true,
    suggestionsLimit: 4,

    /**
     * The order and limit for each suggestion influencer. An "influencer" is
     * just a suggestion source. The following influencers are available:
     *
     * - "Commands" suggestions come from CONFIG.commands
     * - "Default" suggestions come from CONFIG.defaultSuggestions
     * - "DuckDuckGo" suggestions come from the duck duck go search api
     * - "History" suggestions come from your previously entered queries
     */
    influencers: [
        {
            name: "Commands",
            limit: 2,
        },
        {
            name: "Default",
            limit: 4,
        },
        {
            name: "History",
            limit: 1,
        },
        {
            name: "DuckDuckGo",
            limit: 4,
        },
    ],

    /**
     * Default search suggestions for the specified queries.
     */
    defaultSuggestions: {
        g: ["g/issues", "g/pulls", "gist.github.com"],
        r: ["r/r/unixporn", "r/r/startpages", "r/r/webdev", "r/r/technology"],
    },

    /**
     * Instantly redirect when a key is matched. Put a space before any other
     * queries to prevent unwanted redirects.
     */
    instantRedirect: false,

    /**
     * Open triggered queries in a new tab.
     */
    newTab: false,

    /**
     * Dynamic overlay background colors when command domains are matched.
     */
    colors: false,

    /**
     * Invert color theme
     */
    invertedColors: false,

    /**
     * Show keys instead of icons
     */
    showKeys: false,

    /**
     * The delimiter between a command key and your search query. For example,
     * to search GitHub for potatoes, you'd type "g:potatoes".
     */
    searchDelimiter: ":",

    /**
     * The delimiter between a command key and a path. For example, you'd type
     * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
     */
    pathDelimiter: "/",

    /**
     * The delimiter between the hours and minutes on the clock.
     */
    clockDelimiter: ":",

    /**
     * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
     */
    twentyFourHourClock: true,

    /**
     * File extension for icon images
     */
    iconExtension: "svg",
};
