import {auth, provider} from "./api";

const signIn = () => {
  auth.signInWithRedirect(provider).catch(alert);
};

export default signIn;
