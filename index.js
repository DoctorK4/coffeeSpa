const productListUrl = 'https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products';

const getProductList = async () => {
  const res = await fetch(productListUrl)
  const productList = await res.json();
  return productList;
};

const productListPage = document.querySelector('.ProductListPage');
// {/* <li class="Product">
//   <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
//   <div class="Product__info">
//     <div>커피잔</div>
//     <div>10,000원~</div>
//   </div>
// </li> */}

// // id: 1
// // imageUrl: "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
// // name: "커피 컵"
// // price: 10000

const makeSingleProduct = (product) => {
  const li = document.createElement('li');
  li.className = "Product";

  const img = document.createElement('img');
  img.src = product.imageUrl;

  const info = document.createElement('div');
  info.className = 'Product__info';

  const title = document.createElement('div');
  title.innerText = product.name;

  const price = document.createElement('div');
  price.innerText = `${product.price.toLocaleString()}원~`;

  li.appendChild(img);
  li.appendChild(info);

  info.appendChild(title);
  info.appendChild(price);

  productListPage.appendChild(li);
};

const renderProductList = async () => {
  await getProductList()
    .then(data => data.map(item => makeSingleProduct(item)));
};

renderProductList();