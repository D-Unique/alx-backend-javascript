import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [photo1, user1] = await Promise.all([uploadPhoto(), createUser()]).catch((err) => {
    console.error(err)});
  const p1 = {
    photo: { status: photo1.status, body: photo1.body },
    user: { firstName: user1.firstName, lastName: user1.lastName },
  };
  return p1;
}
