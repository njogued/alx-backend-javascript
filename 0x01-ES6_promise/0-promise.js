export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('This is a resolve');
    reject(new Error('This is a reject'));
  });
}
