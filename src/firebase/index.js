import {auth, provider} from "./api";

const signIn = () => {
  console.log('1111');
  auth.signInWithRedirect(provider).catch(alert);
};

export default signIn;
