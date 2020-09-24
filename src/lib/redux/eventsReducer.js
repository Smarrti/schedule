
let InitialState = {
    events: [],
    pageSize: 10,
    totalEventsCount: 0,
    currentPage: 1,
    isLoading: false,
};

const eventsReducer = (state = InitialState, actions) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return {
                ...state,
                events: [...action.events]
            }
        case 'ADD_EVENT': {
            return {
                ...state,
                events: [...state.events, action.newEvent]
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'TOGGLE_IS_LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}
export const actions = {
    setEvents: (events) => ({type: 'SET_EVENTS', events}),
    toggleIsLoading: (isLoading) => ({type: 'TOGGLE_IS_LOADING', isLoading}),
    setCurrentPage: (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage}),
    addEvent: (newEvent) => ({type: 'ADD_EVENT', newEvent})
}
export const requestEvents = (page, pageSize) => async (dispatch) => {
    dispatch(actions.toggleIsLoading(true));
    dispatch(actions.setCurrentPage(page));
    let data = await eventsAPI.getEvents();
    dispatch(actions.toggleIsLoading(false));
    dispatch(actions.setEvents(data));
}