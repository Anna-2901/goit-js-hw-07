// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const createElements = ingredient => {
 const elem = document.createElement('li');
  elem.textContent = ingredient;
  return elem
};
const allElements = ingredients.map(ingredient => createElements(ingredient));

const vegetables = document.querySelector('#ingredients');
 vegetables.append(...allElements);
console.log(vegetables)


// const vegetables = document.querySelector('#ingredients');
// const listIngredients = (ingredient) => {
//   const creatIngredient = document.createElement('li');
//   creatIngredient.textContent = ingredient;
//   vegetables.append(creatIngredient);
//  return creatIngredient;
// }
// ingredients.map(ingredient => listIngredients(ingredient));
// console.log(vegetables)





