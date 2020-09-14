export const handleAddingTaskForm = ({
  name, date, time, duration, author, format, tags, materials = '', place
}) => {
  debugger;
  let type;
  switch (format) {
    case 'lection':
      type = 'Лекция';
      break;
    case 'pactik':
      type = 'Практическое занятие';
      break;
    default:
      break;
  }
  const taskContent = {
    name,
    date: date._d.toLocaleDateString(),
    time: time._d.toLocaleTimeString().slice(0, 5),
    duration: `${duration} часа`,
    author,
    type,
    tags: tags.split(', '),
    place,
    optional: materials
  };
  console.log(JSON.stringify(taskContent));
  fetch(
    `https://rs-react-schedule.firebaseapp.com/api/team/sh36team/event/`,
    {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskContent)
    }
  )
  .then(() => console.log('Good!'))
  .catch(() => console.log('bad'))
}