import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((items) => {
    console.log(`${items[0].body} ${items[1].firstName} ${items[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
