// SITE
import home from "./pages/site/home/home.vue"
import product_category from "./pages/site/product_category/product_category.vue"
import products from "./pages/site/products/products.vue"
import product from "./pages/site/product/product.vue"
import services_category from "./pages/site/services_category/services_category.vue"
import services from "./pages/site/services/services.vue"
import service from "./pages/site/service/service.vue"
import tourist_category from "./pages/site/tourist_category/tourist_category.vue"
import tourists from "./pages/site/tourists/tourists.vue"
import tourist from "./pages/site/tourist/tourist.vue"
import aboutus from "./pages/site/aboutus/aboutus.vue"
import contactus from "./pages/site/contactus/contactus.vue"
import guide from "./pages/site/guide/guide.vue"
import faq from "./pages/site/faq/faq.vue"

// PANEL
import user_home from "./pages/panel/user_home/user_home.vue"
import user_products from "./pages/panel/user_products/user_products.vue"
import add_product from "./pages/panel/add_product/add_product.vue"
import edit_product from "./pages/panel/edit_product/edit_product.vue"
import login from "./pages/panel/login/login.vue"
import register from "./pages/panel/register/register.vue"
import otp from "./pages/panel/otp/otp.vue"
import add_service from "./pages/panel/add_service/add_service.vue"
import edit_service from "./pages/panel/edit_service/edit_service.vue"
import messages from "./pages/panel/messages/messages.vue"



export const Routes = [
  {
    path: '/',
    redirect: '/home',
},

  // SITE
  {
    path: '/home',
    name: "home",
    component :home,
  },
  {
    path: '/product_category',
    name: "product_category",
    component: product_category,
  },
  {
    path: '/products',
    name: "products",
    component :products,
  },
  {
    path: '/product',
    name: "product",
    component :product,
  },
  {
    path: '/services_category',
    name: "services_category",
    component :services_category,
  },
  {
    path: '/services',
    name: "services",
    component :services,
  },
  {
    path: '/service',
    name: "service",
    component :service,
  },
  {
    path: '/tourist_category',
    name: "tourist_category",
    component :tourist_category,
  },
  {
    path: '/tourists',
    name: "tourists",
    component :tourists,
  },
  {
    path: '/tourist',
    name: "tourist",
    component :tourist,
  },
  {
    path: '/aboutus',
    name: "aboutus",
    component :aboutus,
  },
  {
    path: '/contactus',
    name: "contactus",
    component :contactus,
  },
  {
    path: '/guide',
    name: "guide",
    component :guide,
  },
  {
    path: '/faq',
    name: "faq",
    component :faq,
  },
  

  // PANEL
  {
    path: '/user_home',
    name: "user_home",
    component :user_home,
  },
  {
    path: '/user_products',
    name: "user_products",
    component: user_products,
  },
  {
    path: '/add_product',
    name: "add_product",
    component: add_product,
  },
  {
    path: '/edit_product',
    name: "edit_product",
    component: edit_product,
  },
  {
    path: '/login',
    name: "login",
    component: login,
  },
  {
    path: '/register',
    name: "register",
    component: register,
  },
  {
    path: '/otp',
    name: "otp",
    component: otp,
  },
  {
    path: '/add_service',
    name: "add_service",
    component: add_service,
  },
  {
    path: '/edit_service',
    name: "edit_service",
    component: edit_service,
  },
  {
  path: '/messages',
  name: "messages",
  component: messages,
},
  
]
