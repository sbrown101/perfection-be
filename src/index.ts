import express from "express";
import cors from "cors";
import { Task } from "./types/Task.js"

const app = express();
const PORT = 8080;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.text({
    type: "text/xml",
    limit: "10mb"
}));

app.post("/analyze", (req, res) => {
    const xmlText = req.body;
    console.log("Received XML:", xmlText.slice(0, 100)); // just preview first 100 chars

    const tasks: Task[] = [
        {
            id: "sell_carrot",
            type: "ship",
            displayName: "Sell a carrot",
            link: "https://stardewvalleywiki.com/Carrot",
            targetId: "carrot",
            completed: false,
            conditions: [{
                seasons: ["spring"],
                weather: [],
                locations: [],
                time: [],
            }],
            blocked: false
        },
        {
            id: "catch_carp",
            type: "fish",
            displayName: "Catch a carp",
            link: "https://stardewvalleywiki.com/Carp",
            targetId: "carp",
            completed: false,
            conditions: [{
                seasons: ["spring", "summer", "fall"],
                weather: [],
                locations: ["mountain_lake"],
                time: [],
            },
            {
                seasons: [],
                weather: [],
                locations: ["mutant_bug_lair"],
                time: [],
            }],
            blocked: false
        },
        {
            id: "catch_glacierfish",
            type: "fish",
            displayName: "Catch a glacierfish",
            link: "https://stardewvalleywiki.com/Glacierfish",
            targetId: "glacier_fish",
            completed: false,
            conditions: [{
                seasons: ["winter"],
                weather: [],
                locations: ["cindersap_forest"],
                time: [],
            }],
            blocked: false
        },
        {
            id: "catch_sunfish",
            type: "fish",
            displayName: "Catch a sunfish",
            link: "https://stardewvalleywiki.com/Sunfish",
            targetId: "glacier_fish",
            completed: false,
            conditions: [{
                seasons: ["spring", "summer"],
                weather: ["sun", "wind"],
                locations: ["pelican_town_river", "cindersap_river"],
                time: [],
            }],
            blocked: false
        },
        {
            id: "build_earth_obelisk",
            type: "construction",
            displayName: "Build an earth obelisk",
            link: "https://stardewvalleywiki.com/Earth_Obelisk",
            targetId: "earth_obelisk",
            completed: false,
            conditions: [{
                seasons: [],
                weather: [],
                locations: ["farm"],
                time: [],
            }],
            blocked: false
        },
        {
            id: "kill_slimes",
            type: "combat",
            displayName: "Kill 1000 slimes",
            link: "https://stardewvalleywiki.com/Slimes",
            targetId: "slime",
            completed: false,
            conditions: [{
                seasons: [],
                weather: [],
                locations: [],
                time: [],
            }],
            blocked: false
        },
        {
            id: "befriend_kent",
            type: "friendship",
            displayName: "Reach 8 hearts with Kent",
            link: "https://stardewvalleywiki.com/Kent",
            targetId: "kent",
            completed: false,
            conditions: [{
                seasons: [],
                weather: [],
                locations: [],
                time: [],
            }],
            blocked: false
        },
        {
            id: "fair_stardrop",
            type: "stardrop",
            displayName: "Obtain stardrop from the fair",
            link: "https://stardewvalleywiki.com/Stardew_Valley_Fair",
            targetId: "stardrop",
            completed: false,
            conditions: [{
                seasons: ["fall"],
                weather: [],
                locations: [],
                time: [{start: 9 * 60, end: 15 * 60}],
            }],
            blocked: false
        },
        {
            id: "cook_omelete",
            type: "cook",
            displayName: "Cook an omelete",
            link: "https://stardewvalleywiki.com/Omelet",
            targetId: "omlete",
            completed: false,
            conditions: [{
                seasons: [],
                weather: [],
                locations: [],
                time: [],
            }],
            blocked: false
        },
        {
            id: "craft_fish_smoker",
            type: "craft",
            displayName: "Craft a fish smoker",
            link: "https://stardewvalleywiki.com/Fish_Smoker",
            targetId: "fish_smoker",
            completed: false,
            conditions: [{
                seasons: [],
                weather: [],
                locations: [],
                time: [],
            }],
            blocked: false
        },
        {
            id: "find_golden_walnuts",
            type: "golden_walnuts",
            displayName: "Find all golden walnuts",
            link: "https://stardewvalleywiki.com/Golden_Walnut",
            targetId: "golden_walnut",
            completed: false,
            conditions: [{
                seasons: [],
                weather: [],
                locations: ["ginger_island"],
                time: [],
            }],
            blocked: false
        }
    ];

    res.json(tasks);
});

// CORS for FE dev server
app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.listen(PORT, () => {
    console.log(`BE running at http://localhost:${PORT}`);
});
