export default function getListStudentIds(element) {
  if (!Array.isArray(element)) {
    return {};
  }
  console.log(element.length);
  return element.map((item) => item.id);
}
