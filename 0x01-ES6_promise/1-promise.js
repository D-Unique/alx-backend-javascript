export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        const response = {
          status: '200',
          body: 'Success',
        };
        resolve(response);
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 2000);
  });
}
