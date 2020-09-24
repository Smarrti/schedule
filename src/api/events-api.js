import {instance} from "./api";

export const eventsAPI = {
    getEvents(){
        return instance.get(`events`).then(response => response.data)
    },
    getEvent(eventId){
        return instance.get(`event/${eventId}`).then(response => response.data)
    },
    addEvent(event){
        return instance.post(`event`, event).then(response => response.data);
    },
    updateEvent(event, eventId){
      console.log(eventId);
        return instance.put(`event/${eventId}`, event).then(response => response.data)
    },
    deleteEvent(eventId){
        return instance.delete(`event/${eventId}`).then(response => response.data)
    }

}
