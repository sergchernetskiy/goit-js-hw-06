const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

const categoryName = itemRef.forEach((item) => {
  const titleCategory = item.querySelector("h2");
  const elementsQuantity = item.querySelectorAll("li");
  console.log(`Category: ${titleCategory.textContent}`);
  console.log(`Elements: ${elementsQuantity.length}`);
});
