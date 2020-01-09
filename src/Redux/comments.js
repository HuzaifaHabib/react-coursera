import { COMMENTS } from "../shared/comments"
import * as ActionTypes from "./Actiontypes";


export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log(state.concat(comment));
            return state.concat(comment);
        default :
            return state;
    
    }
};

