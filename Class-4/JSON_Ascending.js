function AscendingSort(initial) {
  initial?.sort((a, b) => a.libraryID - b.libraryID);
  let output = [];
  initial.forEach((book) => {
    let bookInfo = `${book.title}-${book.author}-${book.libraryID}`;
    output.push(bookInfo);
    console.log(bookInfo);
  });
  //   return output;
}

const input = [
  { title: "Bill Gates", author: "The Road Ahead", libraryID: 1254 },
  { title: "Steve Jobs", author: "Walter Isaacson", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
console.log(AscendingSort(input));
