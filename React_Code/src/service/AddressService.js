import axios from 'axios';
const signup_API_BASE_URL = "http://localhost:9090/registerNewUser";
const login_API_BASE_URL = "http://localhost:9090/authenticate";
//const userData_API_BASE_URL="http://localhost:9090/forUser/userName?userName="

const category_API_BASE_URL="http://localhost:9091/category/addCategory"
const allcategory_API_BASE_URL="http://localhost:9091/category/allCategory"
const deletecategory_API_BASE_URL="http://localhost:9091/category/deleteCat"
const updatecategory_API_BASE_URL="http://localhost:9091/category/updateCat"
const getcategorybyid_API_BASE_URL="http://localhost:9091/category/getcat";


const allproducts_API_BASE_URL="http://localhost:9092/product/list"
const product_API_BASE_URL="http://localhost:9092/product/add"
const productByCategory_API_BASE_URL="http://localhost:9092/product/categoryName?categoryName=";
const editProduct_API_BASE_URL="http://localhost:9092/product/updateprod";
const deleteProduct_API_BASE_URL="http://localhost:9092/product/deleteprod";
const getproductbyid_API_BASE_URL="http://localhost:9092/product/getprod";

const addtocart_API_BASE_URL="http://localhost:9093/cart/addToCart";
const deletefromcart_API_BASE_URL="http://localhost:9093/cart/cartDetail";
const GET_CART_DETAIL_BY_USERNAME = "http://localhost:9093/cart/cartDetail?userName=";
const allorders_API_BASE_URL = "http://localhost:9094/orderDetail/allOrder";
const addneworder_API="http://localhost:9094/orderDetail/addOrder";
const deleteorder_API="http://localhost:9094/orderDetail//order";
const updateQuantity_API="http://localhost:9093/cart/updatequantity";

const addfeedback_API_BASE_URL="http://localhost:9094/feedback/addFeedback";
const allfeedback_API_BASE_URL="http://localhost:9094/feedback/allFeedback";



class AddressService {
    createSignup(registerNewUser){
        return axios.post(signup_API_BASE_URL, registerNewUser);
    }

    createLogin(loginData){
        return axios.post(login_API_BASE_URL, loginData);
    }
 
    addcategory(category){
        return axios.post(category_API_BASE_URL, category);
    }
    addproduct(product){
        return axios.post(product_API_BASE_URL, product);
    }
    allcategory(){
        return axios.get(allcategory_API_BASE_URL);

    }
    deleteCategory(categoryId){
        return axios.delete(deletecategory_API_BASE_URL+"/"+categoryId);
    }
    updateCategory(category,categoryId){
        return axios.put(updatecategory_API_BASE_URL+"/"+categoryId,category);
    }
    getCategoryById(categoryId){
        return axios.get(getcategorybyid_API_BASE_URL+"/"+categoryId);
    }

    allproducts(){
        return axios.get(allproducts_API_BASE_URL);
    }
    getProductById(productId){
        return axios.get(getproductbyid_API_BASE_URL+"/"+productId);
    }

    getProductByCategory(categoryName){
        return axios.get(productByCategory_API_BASE_URL+categoryName);
    }
    editProduct(product,productId){
        return axios.put(editProduct_API_BASE_URL+"/"+productId,product);
    }
    deleteProduct(productId){
        return axios.delete(deleteProduct_API_BASE_URL+"/"+productId);
    }

    //cart 
    addToCart(cart){
        return axios.post(addtocart_API_BASE_URL,cart);
    }
    deleteFromCart(cartId){
        return axios.delete(deletefromcart_API_BASE_URL+"/"+cartId);
    }
    getCartByUserName(userName){
        return axios.get(GET_CART_DETAIL_BY_USERNAME + userName);
    }
    updateQuantity(cartDetail,cartId){
        return axios.put(updateQuantity_API+"/"+cartId,cartDetail);
    }

    //order & payment
    allorders(){
        return axios.get(allorders_API_BASE_URL);
    }
    addNewOrder(order){
        return axios.post(addneworder_API,order);
    }
    deleteOrder(oredrId){
        return axios.delete(deleteorder_API+"/"+oredrId);
    }

    addFeedback(feedback){
        return axios.post(addfeedback_API_BASE_URL,feedback);
    }
    allFeedback(){
        return axios.get(allfeedback_API_BASE_URL);
    }
}

export default new AddressService();