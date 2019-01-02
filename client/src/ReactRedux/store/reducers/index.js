import {ADD_ARTICLE} from '../constants/action-types'
import {ADD_AGE} from '../constants/action-types'
import {ADD_USER} from '../constants/action-types'



const initialState = {
    articles: [{title:"azhar", id: Math.random()}],
    age: 0,
    user: []
  };

  function rootReducer(state = initialState, action) {
    if(action.type===ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
    } else if (action.type === ADD_AGE) {
        state.age += action.age
    } else if (action.type === ADD_USER) {
        state.user.push(action.user)
    }
    return state;
  };
  export default rootReducer;