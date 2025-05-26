// app/favorite-books/page.tsx

import React from "react";

const books = [
  {
    title: "1Q84",
    author: "村上 春樹",
    description: "現代社会と不思議な異世界が交差する長編小説。",
  },
  {
    title: "ノルウェイの森",
    author: "村上 春樹",
    description: "若者の恋愛と喪失を描いた感傷的な物語。",
  },
  {
    title: "罪と罰",
    author: "ドストエフスキー",
    description: "人間の良心と罪を深く掘り下げるロシア文学の傑作。",
  },
];

const FavoriteBooksPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">お気に入りの本</h1>
        <div className="grid gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {book.author}
              </p>
              <p className="text-base">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FavoriteBooksPage;

//aaa

