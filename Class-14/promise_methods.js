// Promise.all()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 5000);
});

const p3 = 3; // Promise.resolve(p3)
const p4 = 4;

// Promise.all([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.race()
/*
Similar to Promise.all but waits only for the first settled promise
and get's it's result or error
*/

// Promise.race([p1, p2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// polyfill -> it's like providing backward compatibility to old browsers
// split method -> array, there's a user -> on old browser where split doesn't exist -> it will break

// Promise.any
/*
Similar to Promise.race but waits only for the first fulfilled promises
and gets it's result.
If all the given promises are rejected, then returned promise is rejected
with AggregateError -> a special error object that stores all promises errors
in its error property
*/

// Promise.any([p1, p2])
//   .then((res) => console.log(res))
//   //   .catch((err) => console.log(err));
//   .catch((err) => {
//     console.log({ err });
//     // console.log(err.constructor.name);
//     // console.log(err.errors[0]);
//     // console.log(err.errors[1]);
//   });

// Promise.allSettled
/*
It takes array of promises and returns new promise that resolves after all the given
promises has either fulfilled or rejected, with an array of objects with fileds 
{
    status: "fulfilled" || "rejected",
    value : result || reason : err
}
 */

// Promise.allSettled([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
