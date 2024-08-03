
# Warehouse Management System

This project is a Warehouse Management System built with React, Redux, and React Router. It allows users to view, search, filter, and edit warehouse information.

## Features

- List all warehouses
- Search warehouses by name
- Filter warehouses by city, cluster, and available space
- View detailed information for each warehouse
- Edit warehouse details
- Add custom fields to warehouses

## Project Structure

```
src/
├── components/
│   ├── WarehouseList.js
│   ├── WarehouseDetails.js
│   ├── SearchBar.js
│   ├── FilterBar.js
│   └── CustomFieldForm.js
├── pages/
│   ├── ListingPage.js
│   └── DetailsPage.js
├── redux/
│   ├── actions.js
│   ├── reducers.js
│   └── store.js
├── App.js
├── styles.css
└── index.js
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Usage

- The main page displays a list of all warehouses
- Use the search bar to find warehouses by name
- Use the filter options to narrow down the list by city, cluster, or available space
- Click on a warehouse to view its details
- On the details page, you can edit the warehouse information or add custom fields

## Technologies Used

- React
- Redux for state management
- React Router for navigation
- CSS for styling
