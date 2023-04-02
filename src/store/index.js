import { createStore } from 'vuex';
import { getAuthFromCookie } from '@/utils/cookies';
// import { getAuthFromCookie, saveAuthToCookie } from '@/utils/cookies';
// import { loginUser } from '@/api/auth';

export default createStore({
  state() {
    return {
      // mailCheck: false,
      token: getAuthFromCookie() || '',
      username: null,
      isAdmin: false,
      state: null,
      page: null,
    };
  },
  actions: {
    // async LOGIN({ commit }, userData) {
    //   const { data } = await loginUser(userData);
    //   if (data.success) {
    //     console.log(data.userData);
    //     this.state.mailCheck = true;
    //     commit('setToken', data.userData.token);
    //     saveAuthToCookie(data.userData.token);
    //   } else {
    //     alert('입력된 정보가 올바르지 않습니다.');
    //   }
    //   console.log(data);
    //   return data;
    // },
  },
  getters: {
    isLogin(state) {
      return state.token !== '';
    },
  },
  mutations: {
    setUser(state, userData) {
      state.user = { ...state.user, ...userData };
    },
    // setCode(state, PK_ID) {
    //   state.PK_ID = PK_ID;
    // },
    // clearCode(state) {
    //   state.PK_ID = "";
    // },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
      state.username = null;
      state.isAdmin = false;
      state.state = null;
      state.page = null;
    },
  },
});
