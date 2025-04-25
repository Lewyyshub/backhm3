// // 1) Create a countdown bomb:
// // bombTimer(seconds) logs each second until it hits 0 and then logs "💥 Boom!".
// // Add a defuse() function that can be called anytime before 0 to cancel the countdown. If successful, log “🧯 Defused!”.

function bombTimer(seconds) {
  let current = seconds;
  let intervalId;

  intervalId = setInterval(() => {
    if (current > 0) {
      console.log(current);
      current--;
    } else {
      console.log("💥 Boom!");
      clearInterval(intervalId);
    }
  }, 1000);

  defuse = function () {
    if (current > 0) {
      clearInterval(intervalId);
      console.log("🧯 Defused!");
    }
  };
}

bombTimer(5);

// //2) Create a function that takes a string and logs each character one by one every 200ms — like a typewriter effect.
// // Example:
// // typeText("Hello world");
// // Should log:
// // H (0.2s)...e...l...

function typeText(text) {
  let index = 0;

  const intervalId = setInterval(() => {
    if (index < text.length) {
      console.log(text[index]);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 200);
}

typeText("Hello world");

// // 3) Create a function that takes a random special number like 11, 22, 33, 44 ... 99, this function randomly should log random 2 digit special number 11, 22, 33... 99 and stops when argument and random number are same.
// // Example: randomNum(22)
// // should log:
// // 22 11,
// // 22, 77
// // 22, 22 //should stop.
function randomNum(target) {
  const specialNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  const intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * specialNumbers.length);
    const randomValue = specialNumbers[randomIndex];
    console.log(`${target}, ${randomValue}`);

    if (randomValue === target) {
      clearInterval(intervalId);
    }
  }, 500);
}

randomNum(22);

// 4)Create a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods

function getFakeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeData = {
        id: Math.floor(Math.random() * 1000),
        name: "John Doe",
        email: "john@example.com",
      };
      resolve(fakeData);
    }, 1000);
  });
}

getFakeData().then((data) => {
  console.log(data);
});

async function fetchData() {
  const data = await getFakeData();
  console.log(data);
}

fetchData();

//   5) Create a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved. use setTimeout and promises.
// eg: console.log('first')
// await sleep(2000)
// console.log('second')
// second should sleep after 2 seconds


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function func() { 
    console.log(1); 
    await sleep(2000);
    console.log(2); 
  }
  
  func(); 