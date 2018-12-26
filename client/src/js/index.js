import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
import { addAge } from "../js/actions/index";
import { addUser } from "../js/actions/index";



window.store = store;
window.addArticle = addArticle;
window.addAge = addAge;
window.addUser = addUser;