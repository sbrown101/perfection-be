import express from "express";
import cors from "cors";
import { Task } from "../../shared/Task"

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
