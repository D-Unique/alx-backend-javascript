export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (success) {
                const response = {
                    status: '200',
                    body: 'Success',
                };
                resolve(response);
            };
        }
        catch (e){
            reject(`{e} The fake API is not working currently`);  
        }
        }, 2000);
    });
}

