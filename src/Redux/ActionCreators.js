import * as ActionTypes from "./Actiontypes";
import { DISHES } from "../shared/dishes"
import {baseUrl} from '../shared/baseurl'


export const addComment = (comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComments = (dishId , rating, author, comment) => (dispatch) => {
    const newComment = {
        
        dishId : dishId,
        rating : rating,
        author : author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
    method : 'post',
    body: JSON.stringify(newComment),
    headers: {
        'content-Type' : 'application/JSON'
    },
    credentials: 'same-origin'
    })
    .then(response =>{
        console.log(response, 'zeeshan then me arha he')

        if(response.ok) {
            return response;
        }
        else{

            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post Comment :' + error.message )
    alert("your Comment couldnt be posted\nError:" + error.message);   
})

}

export const fetchDishes = ( ) => (dispatch) => {
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl + 'dishes')
        .then(response =>{
            if(response.ok) {
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))

}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ( {
    type:ActionTypes.ADD_DISHES,
    payload: dishes
});

// export const fetchComments = ( ) => (dispatch) => {
    
//     return fetch(baseUrl + 'comments')
//     .then(response =>{
//         if(response.ok) {
//             return response;
//         }
//         else{
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         var errmess = new Error(error.message);
//         throw errmess;
    
//     })
//         .then(response => response.json())
//         .then(comments => dispatch(addComments(comments)))
//         .catch(error => dispatch(commentsFailed(error.message)))
// }
export const fetchComments = () => (dispatch) => {    
    // console.log(dispatch, 'dispatch')
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ( {
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
});

// export const fetchPromos = ( ) => (dispatch) => {
//     dispatch(promosLoading(true));
    
//     return fetch(baseUrl + 'promotions')
//     .then(response =>{
//         if(response.ok) {
//             return response;
//         }
//         else{
//             var error = new Error('Error ' + response.status + ': ' + response.statusText)
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         var errmess = new Error(error.message);
//         throw errmess;
    
//     })
//         .then(response => response.json())
//         .then(promos => dispatch(addPromos(promos)))
//         .catch(error => dispatch(promosFailed(error.message)))
// }

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}



export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const addPromos = (promos) => ( {
    type:ActionTypes.ADD_PROMOS,
    payload: promos
});

