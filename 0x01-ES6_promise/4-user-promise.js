export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject(new Error('Missing first or last name'));
    }
    resolve({ firstName, lastName });
  });
}
