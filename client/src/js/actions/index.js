import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_AGE } from "../constants/action-types";
import { ADD_USER } from "../constants/action-types";


export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function addAge(age) {
    return { type: ADD_AGE, age };
}

export function addUser(user) {
  return { type:ADD_USER, user}
}