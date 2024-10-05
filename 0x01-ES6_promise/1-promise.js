export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (success) {
                const response = {
                    status: '200',
                    body: 'Success',
                };
                resolve(response);
            }
            else {
            reject(`{e} The fake API is not working currently`);  
        }
        }, 2000);
    });
}

getFullResponseFromAPI(success).then(value => console.log(value)).catch(error => console.error(error));

