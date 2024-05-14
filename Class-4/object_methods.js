const movie = {
  title: "The Matrix",
  director: "abc",
  releaseYear: 2000,
};

// const movieKeys = Object.keys(movie);
// console.log(movieKeys);

// const movieEntries = Object.entries(movie);
// console.log(movieEntries);

// const movieValues = Object.values(movie);
// console.log(movieValues);

const greetingProto = {
  greeting: function () {
    return "Welcome to " + this.name;
  },
};

const addInfo = Object.create(greetingProto, {
  name: {
    value: "Javascript Class",
  },
});

console.log(addInfo.greeting());
