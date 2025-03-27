import {
  getParam,
  updateCartCount,
  loadHeaderFooter,
  updateBreadcrumb,
} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const productId = getParam("product");
const dataSource = new ExternalServices();
const product = new ProductDetails(productId, dataSource);
product.init();

// updateCartCount();
// updateBreadcrumb();
