// Product Array
const products = [
  { id: "p1", name: "Laptop Pro 15" },
  { id: "p2", name: "Smartphone X" },
  { id: "p3", name: "Wireless Headphones" },
  { id: "p4", name: "Smartwatch 2" },
  { id: "p5", name: "Gaming Console" }
];

// Populate product select
const productSelect = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});