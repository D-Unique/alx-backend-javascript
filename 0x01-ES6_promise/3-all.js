import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  photo.then((value) => { console.log(value.body); }).catch(Error('Signup system offline'));

  user.then((value) => { console.log(`${value.firstName} ${value.lastName}`); }).catch(Error('Signup system offline'));
}
