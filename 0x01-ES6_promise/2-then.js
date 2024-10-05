export function onsecess() {
  return { status: '200', body: 'success' };
}

export function onreject() {
  return new Error();
}

export default function handleResponseFromAPI(promise) {
  return promise.then(onsecess(), onreject()).finally(console.log('Got a response from the API to the console'));
}
