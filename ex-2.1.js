// alert("saying hi from different file");

// //exercise 2.1 
// let str1 = 'emma';
// let str2 = 'ifee';
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(typeof str1)
// console.log(typeof str2)
// console.log (typeof val1)
// console.log (typeof val2)
// console.log (typeof myNum)









// let xx = 5;
// let yy = 5;
// console.log(xx==yy);
// console.log(xx!=yy);
// console.log(xx > yy);
// console.log(yy<=xx);

// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x > y && y < z);
// console.log(x > y || y > z);
// console.log(x > y || y < z);
// console.log(!x);



// let name1 = `Okwudigbo `;
// let name2 = `Jude`;
// let fullName = name1 + name2
// console.log("My name is " + fullName);
// console.log(name1 * name2)

// let b = 6
// let c = 2
// let result = b % c;
// c /= b;
// console.log(c);
// console.log(result)

// let a = "hello";
// a = prompt("world");
// console.log(a)

// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);

// let result = 3 + 4 * 2 / 8;
// console.log(result);

// let firstNum = 5;
// let seNum = 5;
// let total = --firstNum + seNum;
// console.log(total)

// const a = 5; 
// const b = 10; 
// console.log(a > 0 && b > 0);  
// console.log(a == 5 && b == 4);  
// console.log(true ||false);  
// console.log(a == 3 || b == 10);  
// console.log(a == 3 || b == 7);

 


// const arr = [1, 2, "s", 5];
// arr[0] = "ifee";
// arr[1] = 'please, ';
// arr[2] = 'fuck off!!';
// arr.push(4, 4, 5)
// let lengtharr = arr.push('jude')
// console.log(arr);
// console.log(arr.length - 8);
// console.log(arr.length - 1)
// console.log(lengtharr)

//index of 
// let arr6 = [1, 2, 3, 4, 5];
// let findindex = arr6.indexOf(3);
// let findindex1 = arr6.length;
// console.log(findindex)
// console.log(findindex1)



// function generatePosts(count = 10) {
//   const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];
//   const avatars = Array.from({ length: 10 }, (_, i) => `https://i.pravatar.cc/150?img=${i + 1}`);
//   const images = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${i + 1}/600/400`);

//   const posts = [];

//   for (let i = 0; i < count; i++) {
//     posts.push({
//       name: names[i],
//       avatar: avatars[i],
//       date: new Date(Date.now() - Math.random() * 1e10).toDateString(),
//       image: images[i],
//       text: `This is a sample post from ${names[i]}.`,
//       comments: Math.floor(Math.random() * 50),
//       likes: Math.floor(Math.random() * 200),
//       views: Math.floor(Math.random() * 1000),
//     });
//   }

//   return posts;
// }

// function renderPosts() {
//   const container = document.getElementById("posts");
//   const posts = generatePosts();

//   posts.forEach(post => {
//     const postElement = document.createElement("div");
//     postElement.className = "post";
//     postElement.innerHTML = `
//       <div>
//         <img class="avatar" src="${post.avatar}" alt="${post.name}'s avatar">
//         <span class="name">${post.name}</span> – <small>${post.date}</small>
//       </div>
//       <p>${post.text}</p>
//       <img src="${post.image}" alt="Post image">
//       <p>👍 ${post.likes} | 💬 ${post.comments} | 👁️ ${post.views}</p>
//     `;
//     container.appendChild(postElement);
//   });
// }

// renderPosts();

const maxValue = 5;
let guessNo = Math.floor(Math.random() * maxValue + 1);

let isCorrect = false;

while (!isCorrect) {
  let guess = parseInt(prompt("Guess a number"));

  if (guess < 1) {
    alert(" Guess is low")
  } else if ( guess > 5){
  alert("Guess is too high")
    }else if ( guess === maxValue){
      alert("cho cho cho, iji ya")
    }
}
