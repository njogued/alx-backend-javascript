import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data1 = uploadPhoto();
  const data2 = createUser();
  return Promise.all([data1, data2])
    .then((results) => {
      console.log(
        `${results[0].body} ${results[1].firstName} ${results[1].lastName}`,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
