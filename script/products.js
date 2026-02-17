// load products category
const loadProductsCategory = async () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayProductsCategory(data));
}

loadProductsCategory();

// display products category
const displayProductsCategory = async (categories) => {
  let categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    categoryContainer.innerHTML += `<button class="btn btn-outline btn-sm rounded-full hover:bg-blue-600 hover:text-white">${category}</button>`;
  });
};

// load products
const loadProducts = async () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
}

loadProducts();

// display products
const displayProducts = async (products) => {
  let productContainer = document.getElementById("product-container");
  products.forEach((product) => {
    const { image, title, price, category, rating } = product;

    productContainer.innerHTML += `
      <div class="card bg-base-100 shadow-xl ">
              <figure class="h-60 bg-slate-100">
                <img
                  src="${image}"
                  alt="Product 1"
                  class="object-contain h-full w-full p-5"
                />
              </figure>

              <div class="card-body">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm bg-blue-100 rounded-full px-4 py-2">${category}</span>
                   <span>
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    ${rating.rate} (${rating.count})
                   </span>
                </div>
                <h2 class="card-title">${title}</h2>
                <p>Price: $50</p>
                <div class="flex gap-2">
                  <button class="btn btn-outline flex-1">
                    <i class="fa-solid fa-eye"></i> Details
                  </button>
                  <button class="btn btn-primary flex-1">
                    <i class="fa-solid fa-cart-shopping"></i> Add
                  </button>
                </div>
              </div>
            </div>
    `;
  });
}