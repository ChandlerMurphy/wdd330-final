import {
  updateCartCount,
  loadHeaderFooter,
  getParam,
  updateBreadcrumb,
} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

productList.init().then(() => {
  updateBreadcrumb(); // Ensure breadcrumb update happens after products are rendered
});

// updateCartCount();
