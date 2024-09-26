const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //data base call, network , cryptography
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise complete");
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ankit", email: "ankit@gmail.com" });
  }, 1000);
});
promisethree.then(function (user) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "ABX", password: "123" });
    } else {
      reject("ERROr: Something went wrong");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either reslove and reject"));

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROr: JS went wrong ");
    }
  }, 1000);
});

async function consumePromisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromisefive();

// async function getAllUsers() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );
//     const data =  await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
 
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
      return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
