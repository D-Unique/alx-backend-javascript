import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.all([user, photo])
    .then((value) => { console.log(value); });
}
