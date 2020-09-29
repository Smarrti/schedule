import {eventsAPI} from "../../api/events-api";

let InitialState = {
    events: [],
    isLoading: false,
    isMentor: false,
    isModalForAddingTaskVisible: false,
    eventChange: {}
};
const eventsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return {
                ...state,
                events: [...action.events]
            }
        case 'TOGGLE_IS_LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        case 'TOGGLE_RIGHTS': {
          return {
            ...state, isMentor: action.isMentor
          }
        }
        case 'MODAL_VISIBLE': {
          return {
            ...state, isModalForAddingTaskVisible: action.isModalForAddingTaskVisible
          }
        }
        case 'SET_EVENT': {
          return {
            ...state, eventChange: action.eventId!==null?{...state.events.filter(item => item.id === action.eventId)[0]}:{}
          }
        }
        default:
            return state;
    }
}
export const actions = {
    setEvents: (events) => ({type: 'SET_EVENTS', events}),
    toggleIsLoading: (isLoading) => ({type: 'TOGGLE_IS_LOADING', isLoading}),
    toggleRights: (isMentor) => ({type:'TOGGLE_RIGHTS', isMentor: isMentor}),
    setModalAddingTaskVisible: (isModalForAddingTaskVisible) => ({type: 'MODAL_VISIBLE', isModalForAddingTaskVisible}),
    setEventChange: (eventId) => ({type: 'SET_EVENT', eventId: eventId})
}
export const requestEvents = () => async (dispatch) => {
    let events = await eventsAPI.getEvents();
    dispatch(actions.setEvents(events.data));
}
export const saveEvent = (event) => async (dispatch) => {
    dispatch(actions.toggleIsLoading(true));
    let data = await eventsAPI.addEvent(event);
    if(data.id!==undefined){
        dispatch(requestEvents())
    }
    dispatch(actions.toggleIsLoading(false));
}
export const deleteEvent = (eventId) => async (dispatch) => {
  dispatch(actions.toggleIsLoading(true));
  let data = await eventsAPI.deleteEvent(eventId);
  if(data.id!==undefined){
    dispatch(requestEvents())
  }
  dispatch(actions.toggleIsLoading(false));
}
export const updateEvent = (event, eventId) => async (dispatch) => {
  dispatch(actions.toggleIsLoading(true));
  let data = await eventsAPI.updateEvent(event, eventId);
  if(data.id!==undefined){
    dispatch(requestEvents())
  }
  dispatch(actions.toggleIsLoading(false));
}
export default eventsReducer;
