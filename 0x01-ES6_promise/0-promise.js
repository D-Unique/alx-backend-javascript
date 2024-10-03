export function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        data: 'Success',
        status: '200',
      };
      resolve(response);
    }, 2000);
  });
}

export default getResponseFromAPI;
