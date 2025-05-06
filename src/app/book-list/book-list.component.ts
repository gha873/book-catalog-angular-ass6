
import { Component, Input } from '@angular/core'; // Import Input
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor etc.
import { Book } from '../book.model'; // Import the model

@Component({
  selector: 'app-book-list', // How we use this component in HTML (<app-book-list>)
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule here for standalone components
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  // Decorate 'books' with @Input() to receive data from the parent component
  @Input() books: Book[] = []; // Initialize with an empty array

  constructor() { }

 
}