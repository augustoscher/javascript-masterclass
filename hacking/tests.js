// console.log(0b1010.toString(8));
// console.log(parseInt("9.9", 10))
// console.log(parseFloat("0xFF"))
// console.log(1/0)
// console.log(Math.ceil(-9.9))
// console.log(Math.round(-5.5))

// console.log('Python'.indexOf('p'));
// console.log("10" + 0);
// console.log('10' == 10);

//'07:05:45PM'
//'19:05:45'
// const time = '07:05:45PM'

// let s = 'UDDDUDUU'
// let valleysCount = 0
// let ups = 0
// let downs = 0
// let enterOnValley = false
// for (let i = 0; i < s.length; i++){
//     if (s[i]==='U') {
//         ups++
//     } else {
//         downs++
//     }
//     if ((ups - downs) < 0) {
//         enterOnValley = true
//         valleysCount++
//     }
// }

// console.log("Math.round(5.7) = " + Math.round(67));

// let va = -5
// console.log(7-va)
// console.log(gradingStudents([4,73,67,38,33]))

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // s: integer, starting point of Sam's house location. 7
    // t: integer, ending location of Sam's house location. 11
    // a: integer, location of the Apple tree. 5
    // b: integer, location of the Orange tree. 15
    // apples: integer array, distances at which each apple falls from the tree.
    // oranges: integer array, distances at which each orange falls from the tree.
    let applesCount = 0
    apples.forEach(item => {
        if (item >= 0) {
            if (a + item >= s) {
                applesCount++
            }


            // if ((s <= (a + item)) && (t >= (a + item))) {
            //     applesCount++
            // }
        }
    })

    let orangesCount = 0
    // let distanceHouseOrangeTree = (b - t)
    oranges.forEach(item => {
        if (item <= 0) {
            if (b + item <= t) {
                orangesCount++
            }
            // console.log(item)
            // console.log(t)
            // if ((t >= (b - Math.abs(item))) && (s >= (b - Math.abs(item)))){
            //     orangesCount++
            // }
        }
    })
    console.log(applesCount)
    console.log(orangesCount)
}
// countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])


// Complete the divisibleSumPairs function below.
function divisibleSumPairs(k, ar) {
    let result = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if (i < j) {
                let sum = (ar[i] + ar[j]);
                if ((sum % k) < 1) {
                    result++;
                }
            }
        }
    }
    return result;
}

let arrF = [13, 91, 5, 100, 5, 12, 5, 79, 99, 87, 59, 65, 62, 73, 93, 73, 63, 65, 59, 46, 67, 35, 22, 55, 50, 53, 38, 79, 75, 44, 95, 53, 5, 73, 44, 94, 95, 21, 60, 2, 32, 48, 72, 13, 91, 74, 79, 99, 17, 31, 53, 20, 88, 17, 54, 47, 56, 79, 23, 49, 95, 81, 9, 50, 12, 20, 45, 82, 44, 82, 93, 15, 73, 51, 65, 96, 4, 77, 37, 41, 30, 
     11, 65, 100, 62, 51, 64, 48, 12, 11, 68, 81, 46, 37, 10, 46, 75, 82, 21, 23];
let nF = 100;     
let kF = 40;

let arrP = [1,2,3,4,5,6];
let kP = 5;

// console.log(divisibleSumPairs(kF, arrF)); //109
// console.log(divisibleSumPairs(kP, arrP)); 

// function migratoryBirds(arr) {
//     let mp = new Map();
//     arr.forEach(item => {
//         if (mp.has(item)) {
//             mp.set(item, mp.get(item)+1);
//         } else {
//             mp.set(item, 1);
//         }
//     })
//     let birdType = 0;
//     let mostAppear = 0;
//     let mapAsc = new Map([...mp.entries()].sort());
//     mapAsc.forEach((k,v) => {
//         if (k > mostAppear) {
//             mostAppear = k
//             birdType = v;
//         }
//     });
//     console.log(birdType);
// }
// migratoryBirds([1, 4, 4, 4, 5, 3, 8, 3, 3]) //4


// function bonAppetit(bill, k, b) {
//     bill.splice(k,1);
//     let sum = bill.reduce(function (total, v) {
//         return total += v;
//     }, 0);
//     let correctBill = (sum / 2);
//     if (correctBill === b) {
//         console.log("Bon Appetit");
//     } else {
//         console.log(b - correctBill);
//     }
// }

// bonAppetit([3,10,2,9], 1, 12) //5
// bonAppetit([3,10,2,9], 1, 7) //bonApetit



function sockMerchant(arr) {
    let mp = new Map();
    arr.forEach(item => {
        if (mp.has(item)) {
            mp.set(item, mp.get(item)+1);
        } else {
            mp.set(item, 1);
        }
    });
    let mapAsc = new Map([...mp.entries()].sort());
    let pairSum = 0;
    mapAsc.forEach((k,v) => {
        if (k > 1) {
            if (k % 2 == 0) {
                pairSum = pairSum + (k/2);
            } else {
                pairSum = pairSum + ((k-1)/2);
            }
        }
    });
    return pairSum;
}
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]))


function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const isVowel = v => {
        return vowels.includes(v);
    }
    for(let i=0; i< s.length; i++) {
        if (isVowel(s[i])) {
            console.log(s[i]);
        }
    }
    for(let i=0; i< s.length; i++) {
        if (!isVowel(s[i])) {
            console.log(s[i]);
        }
    }
}

vowelsAndConsonants("javascriptloops");

const opts = [
  {
    label: 'Dados do Lead',
    options: [
      {
        label: 'Campo',
        value: 'field'
      }
    ]
  },
  {
    label: 'Conversão',
    options: [
      {
        label: 'O Lead converteu',
        value: 'converted'
      },
      {
        label: 'O Lead não converteu',
        value: 'not_converted'
      }
    ]
  },
  {
    label: 'Funil',
    options: [
      {
        label: 'Oportunidade',
        value: 'state_opportunity'
      }
    ]
  }
];


const onCategoryChange = (value, options) => {
  let filteredOption;
  options.forEach(group => group.options.forEach(option => {
    if (option.value === value) {
      filteredOption = option;
    }
  }));
  return filteredOption;
};

const getOptionByValue = (value, options) => {
  let filteredOption;
  for (let i = 0; i < options.length; i++) {
    let filterResult = options[i].options.filter(opt => {
      return opt.value === value;
    });
    if (filterResult && filterResult.length > 0) {
      filteredOption = filterResult[0];
      break;
    }
  }
  return filteredOption;
}

let r;
console.time("onCategoryChange")
r = onCategoryChange('state_opportunity', opts);
// console.log(r);
console.timeEnd("onCategoryChange")

console.time("getOptionByValue")
r = getOptionByValue('state_opportunity', opts);
// console.log(r);
console.timeEnd("getOptionByValue")
