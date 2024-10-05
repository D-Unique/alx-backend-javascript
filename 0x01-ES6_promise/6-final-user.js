import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser();
  const photo = uploadPhoto();

  return Promise.all([user, photo])
    .then((value) => { console.log(value); });
}
