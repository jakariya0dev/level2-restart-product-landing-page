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
};

displayTrendingProducts();