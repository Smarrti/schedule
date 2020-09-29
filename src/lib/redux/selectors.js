export const getEvents = (state) => {
  return state.eventsPage.events
};
export const getIsLoading = (state) => {
  return state.eventsPage.isLoading
};
export const getModalForAddingTaskVisible = (state) => {
  return state.eventsPage.isModalForAddingTaskVisible
};
export const getEventChange = (state) => {
  return state.eventsPage.eventChange
};
export const getRights = (state) => {
  return state.eventsPage.isMentor
};
