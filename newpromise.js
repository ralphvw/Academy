const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., API call or setTimeout
  setTimeout(() => {
    const randomNum = 1;
    if (randomNum < 0.5) {
      resolve(randomNum); // Success, fulfill the promise with the randomNum
    } else {
      reject('You got an error'); // Error, reject the promise with an error
    }
  }, 2000);
});

myPromise
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.log({ error });
  });
