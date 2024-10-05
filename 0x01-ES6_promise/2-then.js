export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: '200', body: 'Success' }))
    .catch((error) => console.error(error.message))
    .finally(console.log('Got a response from the API to the console'));
}
