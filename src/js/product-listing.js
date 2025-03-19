import { updateCartCount, loadHeaderFooter, getParam, updateBreadcrumb } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

productList.init().then(() => {
    updateBreadcrumb();  // Ensure breadcrumb update happens after products are rendered
});

updateCartCount();