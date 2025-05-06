
import { Injectable } from '@angular/core';
import { Book } from './book.model'; 

@Injectable({
  providedIn: 'root' // Makes the service available application-wide
})
export class BookService {

  // Hardcoded mock book data
  private mockBooks: Book[] = [
    {
      id: 1,
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      yearPublished: 1979,
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg' 
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      yearPublished: 1813,
       coverImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/800px-PrideAndPrejudiceTitlePage.jpg'
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      yearPublished: 1960,
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg'
    },
    {
      id: 4,
      title: 'Dune',
      author: 'Frank Herbert',
      yearPublished: 1965,
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg/250px-Dune-Frank_Herbert_%281965%29_First_edition.jpg'
    }
    
  ];

  constructor() { }

  // Method to get all books (simulates fetching data)
  getBooks(): Book[] {
  
    return this.mockBooks;
  }


}