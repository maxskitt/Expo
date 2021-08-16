import {axiosClient} from "../api";

const fetchUser = () => axiosClient().get('/users')

export {fetchUser}
