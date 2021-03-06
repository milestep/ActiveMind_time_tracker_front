import { LOAD_PROJECTS } from '../actions/actionTypes'

function projectReducer(state = [], action) {
    switch (action.type) {
        case LOAD_PROJECTS:
            return action.projects;

        default:
            return state;
    }
}

export default projectReducer
