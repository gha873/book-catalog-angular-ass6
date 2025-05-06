// src/app/book.model.ts
export interface Book {
    id: number;         
    title: string;
    author: string;
    yearPublished: number;
    coverImageUrl?: string; 
  }