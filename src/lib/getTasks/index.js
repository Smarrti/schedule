export const getTasks = () => {
  return fetch("https://rs-react-schedule.firebaseapp.com/api/team/sh36team/events")
    .then((response) => response.json())
    .then((source) => source.data.map((task) => {
      task.key = task.id;
      return task;
    }))
}
