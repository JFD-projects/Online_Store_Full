export const category = {
  phone: { _id: "67rdca3eeb7f6fgeed471818", name: "Смартфоны" },
  laptop: { _id: "67rdca3eeb7f6fgeed471820", name: "Ноутбуки" },
  tv: { _id: "67rdca3eeb7f6fgeed471814", name: "Телевизоры" },
  fridge: { _id: "67rdca3eeb7f6fgeed471822", name: "Холодильники" },
};
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(category);
    }, 1000);
  });
const prt = { fetchAll }

export default prt;
