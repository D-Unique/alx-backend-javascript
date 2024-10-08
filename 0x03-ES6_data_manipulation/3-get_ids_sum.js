export default function getStudentIdsSum(list) {
  const reducer = (accumulator, list) => accumulator + list.id;

  return list.reduce(reducer, 0);
}
