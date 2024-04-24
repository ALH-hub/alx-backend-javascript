import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto().catch((error) => {
      console.error('Error uploading photo:', error);
      throw error;
    }),
    createUser().catch((error) => {
      console.error('Error creating user:', error);
      throw error;
    }),
  ])
    .then((values) => {
      console.log(values[0].body, values[1].firstName, values[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
