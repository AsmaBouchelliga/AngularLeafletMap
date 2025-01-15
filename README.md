# Leaflet Map Project

## Overview
This Angular application integrates **Leaflet** for interactive map visualization, providing an intuitive interface to explore various locations dynamically loaded from a JSON data source.

## Features
- **Dynamic Markers**: Automatically render locations from a JSON file.
- **Interactive Map**: Users can zoom, pan, and interact with map elements.
- **Details Pop-ups**: Clicking a marker displays additional details about the location, such as its name and description.

---

## Key Files
### Components
- **`src/app/packagelist/packagelist.component.ts`**: Handles loading location data and rendering it on the map.
- **`src/app/app.component.ts`**: Serves as the root component and contains the primary layout.

### JSON Data
- **`src/assets/data.json`**: Contains location information, including title, longitude, latitude, and description.

### Leaflet Integration
- **`src/app/app.module.ts`**: Integrates the `ngx-leaflet` library.

---

## Development Workflow
This project is built with Angular CLI and follows standard Angular development practices.

### Setting Up
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.

---

## JSON Data Management
### Location Data Structure
The map markers are dynamically generated from the `src/assets/data.json` file. Each entry includes the following fields:
- **titre**: The name of the location.
- **longitude**: The longitude of the location.
- **latitude**: The latitude of the location.
- **description**: A brief description of the location.

### Example JSON Entry
```json
{
  "titre": "Shaqqa",
  "longitude": 36.69472,
  "latitude": 32.89583,
  "description": "Shaqqa is a city in the As Suwayda Governorate in southern Syria, inhabited primarily by Druze descendants."
}
```

---

## Routing
The application uses basic Angular routing. Currently, the root path (`/`) displays the map and location details.

### Example Routes Code
```typescript
const routes: Routes = [
  { path: '', component: AppComponent },
];
```

---

## Leaflet Integration
The project integrates Leaflet through the `ngx-leaflet` library for Angular. This provides a robust, interactive map with dynamic marker placement.

### Leaflet Features Used
- **Map Layers**: Base map rendering with zoom and pan capabilities.
- **Marker Pop-ups**: Display details when clicking on markers.

---

## Key Libraries
- **Leaflet**: Interactive maps library.
- **ngx-leaflet**: Angular wrapper for Leaflet.

---

## Future Enhancements
- **Search Feature**: Allow users to search for specific locations.
- **Custom Styling**: Enhance marker icons and map styles.
- **Routing Integration**: Add routes for separate views and detailed location pages.

