// ===============Fetch================= //

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ===============Axios================= //

// const div = document.querySelector("div");

// axios("https://fakestoreapi.com/products")
//   .then((res) => {
//     console.log(res.data);
//     res.data.map((items) => {
//       div.innerHTML += `
//      <img width="150" src="${items.image}" alt="">
//      <h1>Title: ${items.title}</h1>
//      <h1>Price: ${items.price}</h1>
//      <hr />
//       `;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ===============Trim================= //

// const input = document.querySelector("input");

// function testIn() {
//   const val = input.value;
//   if (val.trim() === "") {
//     console.error("Enter Something");
//   } else {
//     console.log(val);
//     input.value = "";
//   }
// }

// ===============Async Await================= //

// async function harry() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 4000);
//   });

//   let bangaloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 Deg");
//     }, 8000);
//   });

//   console.log("Fetching Delhi Weather Please wait ...");
//   let delhiW = await delhiWeather;
//   console.log("Fetched Delhi Weather: " + delhiW);

//   console.log("Fetching Bangalore Weather Please wait ...");
//   let bangaloreW = await bangaloreWeather;
//   console.log("Fetched Bangalore Weather: " + bangaloreW);

//   return [delhiW, bangaloreW];
// }

// console.log("Welcome to weather control room");

// let a = harry();

// a.then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.log(error);
// });

// ===============addEventListener================= //

// const input = document.querySelector("input");

// input.addEventListener("keypress", (event) => {
//   const val = input.value;
//   event.stopPropagation();
//   if (event.key === "Enter") {
//     console.log(val);
//     input.value = "";
//     input.style = "focus";
//   }
// });

// ===============Concat================= //

// const arr1 = ["Apple", "Mango"];
// const arr2 = ["Orange", "Watermelon"];
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// ===============Freeze================= //

// let obj1 = Object.freeze({
//   userName: "Abdul",
//   fatherName: "Saleem",
//   rollNumber: 188528,
// });

// obj1.isMarried = false;
// console.log(obj1)
// console.log(obj1.isMarried);

// ===============Entries================= //

// let obj1 = {
//   userName: "Abdul",
//   fatherName: "Saleem",
//   rollNumber: 188528,
// };

// for (let [keys, value] of Object.entries(obj1)) {
//   console.log(`Key: ${keys} ===> Value: ${value}`)
// }

// ===============Local Storage================= //

const h1 = document.querySelector("h1");
// const inputEl1 = document.querySelector("#name");
// const inputEl2 = document.querySelector("#password");

// function saveUser() {
//   const student = {
//     studentName: inputEl1.value,
//     rollNumber: inputEl2.value,
//   };

//   localStorage.setItem("student", JSON.stringify(student));
// }

// let stName = localStorage.getItem("student");
// if (stName) {
//   stName = JSON.parse(stName);
//   h1.innerHTML = `Name: ${stName.studentName} Roll Number: ${stName.rollNumber}`;
// }

// const courseName = "Web and Mobile App Development"
// localStorage.setItem("courseName", courseName)

// const getCourse = localStorage.getItem("courseName")
// h1.innerHTML = getCourse

// const user = {
//   name: "Abdul Hannan",
//   rollNumber: 188528,
//   subjects: ["HTML", "CSS", "JS"],
// };

// localStorage.setItem("user", JSON.stringify(user));

// let val = localStorage.getItem("user");
// val = JSON.parse(val);
// console.log(val.subjects[0]);

// const fruits = ["Apple", "Banana", "Mango"]

// localStorage.setItem("fruit", JSON.stringify(fruits))

// let val = localStorage.getItem("fruit")
// val = JSON.parse(val)
// console.log(val);
