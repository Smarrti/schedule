export const handleDelete = (id) => {
  fetch(
    `https://rs-react-schedule.firebaseapp.com/api/team/sh36team/event/${id}`,
    {
      method: "DELETE",
    }
  )
    .then(() => console.log("done"))
    .catch(() => console.log("not done"))
}
