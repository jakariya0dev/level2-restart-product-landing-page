// load the products from api
const loadProducts = async () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayTrendingProducts(data));
};

loadProducts();

// display trending products
const displayTrendingProducts = async (products) => {
    
  const trendingProducts = products.slice(0, 3);  
  let tpContainer = document.getElementById("tp-container");

  trendingProducts.forEach((product) => {
    const { image, title, price, category, rating } = product;

    tpContainer.innerHTML += `
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
                  <button class="btn btn-outline flex-1" onclick="loadProductById(${product.id})">
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
};

displayTrendingProducts();

const loadProductById = async (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => showProductDetailsInModal(data));
}

const showProductDetailsInModal = async (product) => {
  const { image, title, price, category, rating, description } = product;
    let modalBody = document.getElementById("modal_body");
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
    modalBody.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
              <figure class="h-60">
                <img
                  src="${image}"
                  alt="Product 1"
                  class="object-contain h-full w-full p-5"
                />
              </figure>

              <div class="card-body">
                <h2 class="card-title">${title}</h2>
                <p>${description}</p>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-green-500">${category}</span>
                   <span>
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    ${rating.rate} (${rating.count})
                   </span>
                </div>
                <p>Price: $<span class="font-bold text-lg">${price}</span></p>
                <div class="flex gap-2">
                  <button class="btn btn-outline flex-1">
                    <i class="fa-solid fa-bag-shopping"></i> Buy Now
                  </button>
                  <button class="btn btn-primary flex-1">
                    <i class="fa-solid fa-cart-shopping"></i> Add
                  </button>
                </div>
              </div>
            </div>
    `;
}