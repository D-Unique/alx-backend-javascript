export default function handleResponseFromAPI(promise) {
    promise.then(onsecess(), onreject()).finally(console.log(`Got a response from the API to the console`))

}

function onsecess() {
    return {status: '200', body: 'success'};
}

function onreject() {
    return new Error();
}
