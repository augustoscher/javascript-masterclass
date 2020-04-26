const visits = [
  {
    _id: "5ea59e59db091b000795363a",
    origin: "https://augustoscher.com",
    sourceIp: "191.193.209.96",
    country: "BR",
    accessType: "Desktop",
    date: "2020-04-26T14:44:41.506Z",
    __v: 0,
  },
  {
    _id: "5ea59d76db091b0007953639",
    origin: "https://augustoscher.com",
    sourceIp: "191.193.209.96",
    country: "BR",
    accessType: "Desktop",
    date: "2020-04-26T14:40:54.221Z",
    __v: 0,
  },
  {
    _id: "5ea59d2bdb091b0007953638",
    origin: "https://augustoscher.com",
    sourceIp: "189.4.74.37",
    country: "BR",
    accessType: "Desktop",
    date: "2020-04-26T14:39:39.280Z",
    __v: 0,
  },
  {
    _id: "5ea2143f67f9080007d27b38",
    origin: "https://augustoscher.com",
    sourceIp: "181.223.48.89",
    country: "BR",
    accessType: "Mobile",
    date: "2020-04-23T22:18:39.312Z",
    __v: 0,
  },
];

const today = new Date();

const isToday = (date) => {
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};

const todayVisits = visits.filter(({ date }) => {
  return isToday(new Date(date));
});

console.log("all: ", visits.length);
console.log("todayVisits: ", todayVisits.length);
