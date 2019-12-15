import { COMMENTS } from "../shared/comments"
import { DISHES } from "../shared/dishes"
import { LEADERS } from "../shared/leaders"
import { PROMOTIONS } from "../shared/promotions"


export const initialState = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
}