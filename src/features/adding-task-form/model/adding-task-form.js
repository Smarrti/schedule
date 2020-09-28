

export const handleAddingTaskForm = ({
  name, date, time, duration, author, format, tags, materials = '', place}, addEvent, updateEvent, isUpdate, eventId
) => {
  let type;
  switch (format) {
    case 'lection':
      type = 'Лекция';
      break;
    case 'practik':
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
  isUpdate?updateEvent(taskContent, eventId):addEvent(taskContent);
}
