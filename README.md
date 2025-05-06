# [Book Catalog - Angular App] - Assignment 6

This project is an Angular application built for  CSCI E31 - Assignment #6. The goal of this assignment was to demonstrate proficiency in using the Angular CLI to create a project, create components, pass data into them, and display mock data.

**Live Demo :** (https://stackblitz.com/~/github.com/gha873/book-catalog-angular-ass6)

## Features

*   Displays a list of books (or your chosen data type).
*   Uses mock data hardcoded within an Angular service.
*   Implements a parent component (`AppComponent`) and a nested child component (`BookListComponent`) to display items.
*   Utilizes `*ngFor` structural directive to render a list of items.
*   Basic styling using Bootstrap 5 for a clean and decent interface.
*   Configured for deployment on Heroku.

## Data Structure

The mock data for books follows this structure:

```typescript
// src/app/book.model.ts
export interface Book {
  id: number;
  title: string;
  author: string;
  yearPublished: number;
  coverImageUrl?: string; // Optional
}

## Project Structure

```
src/app/
│
├── app.component.ts/.html/.css         # Main application component - fetches data and passes it to BookListComponent
├── book-list/
│   └── book-list.component.ts/.html/.css   # Displays the list of books using *ngFor
├── book.model.ts                       # Defines the Book interface
├── book.service.ts                     # Provides mock book data
│
src/index.html                          # Main HTML file with Bootstrap CDN
src/styles.css                          # Global styles
angular.json                            # Angular CLI configuration
package.json                            # Project dependencies and scripts
server.js                               # Express server to serve Angular build (for Heroku)
Procfile                                # Defines process type for Heroku
```

## Prerequisites

- Node.js (version 18.x or 20.x)
- npm (version 10.x)
- Angular CLI (version 17.x)

## Getting Started (Local Development)

```bash
git clonehttps://github.com/HarvardDCENode/assignment-6-angular-gha873
cd  assignment-6-angular-gha873
npm install
ng serve -o
```

> The application will open automatically in your browser at `http://localhost:4200/`.



## Assignment Requirements Checklist

- ✅ Angular CLI used for project creation
- ✅ Additional component `book-list.component` added
- ✅ Component nested within `app.component`
- ✅ Uses `*ngFor` to display multiple items
- ✅ No unused component files
- ✅ Follows course coding standards
- ✅ Displays data from a hardcoded structure
- ✅ Implements 'Read' operation only
- ✅ Mock data served via Angular service (`book.service.ts`)
- ✅ Clear and easy-to-use UI

## Author

**Ghazanfar Ali** - gha873