
import { Component, OnInit } from '@angular/core'; // Import OnInit
import { CommonModule } from '@angular/common';


import { Book } from './book.model';             // Import the model
import { BookService } from './book.service';     // Import the service
import { BookListComponent } from './book-list/book-list.component'; // Import the child component

@Component({
  selector: 'app-root', // This component is placed in index.html
  standalone: true,     // Mark as standalone
  imports: [
    CommonModule,
    // RouterOutlet, // Remove if not using routing
    BookListComponent  // Import the child component here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // No 'providers' needed here because BookService uses providedIn: 'root'
})
export class AppComponent implements OnInit { // Implement OnInit
  title = 'My Book Catalog App'; // App title
  booksFromService: Book[] = []; // Array to hold books fetched from service

  // Inject the BookService into the constructor
  constructor(private bookService: BookService) {}

  // ngOnInit is a lifecycle hook called after Angular initializes the component
  ngOnInit(): void {
    this.fetchBooks(); // Call the method to get books
  }

  // Method to get books from the service
  fetchBooks(): void {
    this.booksFromService = this.bookService.getBooks();
    console.log('Books fetched:', this.booksFromService); // Log for debugging
  }
}