export default function getStudentsByLocation(list, state) {
  return list.filter((item) => item.location === state);
}
