const data = [
  {
    id: 1,
    name: "Star Platinum",
  },
  {
    id: 2,
    name: "Silver Chariot",
  },
  {
    id: 3,
    name: "Hermit Purple",
  },
];

const user = [
  {
    id: 1,
    name: "Crazy Diamond",
    username: "Josuke Hishigata",
  },
  {
    id: 2,
    name: "The Hand",
    username: "Okoyasu Nijimura",
  },
  {
    id: 3,
    name: "Heaven's Door",
    username: "Rohan Kishibe",
  },
];

const arr = [data, user].flatMap((item) =>
  item.map((array) => [array.name, array.username])
);

console.log(arr);
