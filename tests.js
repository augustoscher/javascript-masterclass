// console.log(0b1010.toString(8));
// console.log(parseInt("9.9", 10))
// console.log(parseFloat("0xFF"))
// console.log(1/0)
// console.log(Math.ceil(-9.9))
// console.log(Math.round(-5.5))

// console.log('Python'.indexOf('p'));
// console.log("10" + 0);
// console.log('10' == 10);
// var moment = require('moment');

// let v = '31/10/2019'
// const [year, month, day] = v.split('-');
// console.log(year, month, day);
// let d = new Date(year, month - 1, day);
// console.log(d);
// const mockedMoment = moment(d);

// const dateStrToMoment = (value) => {
//   try {
//     const [year, month, day] = value.split('-');
//     return moment(new Date(year, month - 1, day));
//   } catch (e) {
//     return null;
//   }
// };

// const momentToDateStr = (value) => {
//   if (!value) {
//     return null;
//   }
//   const date = value.toDate();

//   let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
//   return str;
// };

// console.log(momentToDateStr(mockedMoment));

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