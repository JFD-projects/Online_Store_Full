import {category} from "./category.api"
const products = [
  {
    _id: "10101",
    name: "Apple iPhone12",
    category: category.phone,
    cost: 50000,
    countProduct: 12,
    imageProduct: "https://kirov-klg.amazingame.ru/upload/iblock/0ea/catcover1.jpg",
  },
  {
    _id: "10102",
    name: "Ноутбук Apple MacBook",
    category: category.laptop ,
    cost: 90000,
    countProduct: 10,
    imageProduct: "https://i.ebayimg.com/00/s/MTAwMFgxNDgz/z/TAsAAOSw8DJZ9LHX/$_57.JPG?set_id=8800005007",
  },
  {
    _id: "10103",
    name: "Холодильник LG",
    category: category.fridge,
    cost: 34000,
    countProduct: 23,
    imageProduct: "https://items.s1.citilink.ru/1152141_v01_b.jpg",
  },
  {
    _id: "10104",
    name: "Redmi Note 10",
    category: category.phone,
    cost: 15000,
    countProduct: 90,
    imageProduct: "https://items.s1.citilink.ru/1490107_v01_m.jpg",
  },
  {
    _id: "10105",
    name: "Телевизор Samsung",
    category: category.tv,
    cost: 54000,
    countProduct: 17,
    imageProduct: "https://items.s1.citilink.ru/1517222_v01_b.jpg",
  },
  {
    _id: "10106",
    name: "Samsung A52",
    category: category.phone,
    cost: 25000,
    countProduct: 56,
    imageProduct: "https://items.s1.citilink.ru/1494810_v01_b.jpg",
  },
  {
    _id: "10107",
    name: "Ноутбук ACER",
    category: category.laptop ,
    cost: 50000,
    countProduct: 78,
    imageProduct: "https://items.s1.citilink.ru/1200863_v01_b.jpg",
  },
  {
    _id: "10108",
    name: "Телевизор LG",
    category: category.tv,
    cost: 48000,
    countProduct: 45,
    imageProduct: "https://items.s1.citilink.ru/1092279_v01_b.jpg",
  },
  {
    _id: "10109",
    name: "Холодильник IRBIS",
    category: category.fridge,
    cost: 30000,
    countProduct: 23,
    imageProduct: "https://items.s1.citilink.ru/1530145_v01_b.jpg",
  },
  {
    _id: "10110",
    name: "Телевизор DEXP",
    category: category.tv,
    cost: 25000,
    countProduct: 10,
    imageProduct: "https://items.s1.citilink.ru/1494011_v01_b.jpg",
  },
  {
    _id: "10111",
    name: "Холодильник KRAFT",
    category: category.fridge,
    cost: 72000,
    countProduct: 121,
    imageProduct: "https://items.s1.citilink.ru/480677_v01_b.jpg",
  },
  {
    _id: "10112",
    name: "Ноутбук ASUS",
    category: category.laptop,
    cost: 60000,
    countProduct: 54,
    imageProduct: "https://items.s1.citilink.ru/1522981_v01_s.jpg",
  },

];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products);
    }, 1000);
  });

const getById = (productId) => new Promise((resolve)=>{
  window.setTimeout(function() {
    resolve(products.find((product)=> product._id === String(productId)))
  })
}, 1000)

const pr = {fetchAll,
  getById}



export default pr;
