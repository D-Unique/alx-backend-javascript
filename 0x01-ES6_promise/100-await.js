import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [photo1, user1] = await Promise.all([uploadPhoto(), createUser()]);
  const p1 = {
    photo: { status: photo1.status, body: photo1.body },
    user: { firstName: user1.firstName, lastName: user1.lastName },
  };
  return p1;
}
