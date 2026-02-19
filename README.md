# Perfection Backend

A backend service for the Perfection application, which provides task data for Stardew Valley game activities.

## Description

This backend service exposes an API endpoint that returns task data for various activities in Stardew Valley, such as fishing and shipping items. Each task includes conditions like seasons, weather, locations, and time ranges when they can be completed.

Currently this only returns a stub for FE dev and testing purposes. 

## Setup

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Usage

### Development

To start the development server with hot-reload:

```bash
npm run dev
```

The server will run at http://localhost:8080

## API Endpoints

### POST /analyze

Accepts XML data and returns a list of tasks.

**Request:**
- Method: POST
- Content-Type: text/xml
- Body: XML data (limit: 10MB)

**Response:**
- Content-Type: application/json
- Body: Array of Task objects

Example Task object:
```json
{
  "id": "catch_carp",
  "type": "fish",
  "displayName": "Catch a carp",
  "link": "https://stardewvalleywiki.com/Carp",
  "targetId": "carp",
  "completed": false,
  "conditions": [
    {
      "seasons": ["spring", "summer", "fall"],
      "weather": [],
      "locations": ["mountain_lake"],
      "time": []
    },
    {
      "seasons": [],
      "weather": [],
      "locations": ["mutant_bug_lair"],
      "time": []
    }
  ],
  "blocked": false
}
```

## Project Structure

- `src/index.ts` - Main application entry point
- `shared/` - Shared type definitions
  - `Task.ts` - Task interface definition
  - `TaskCondition.ts` - Task condition interface and related types
