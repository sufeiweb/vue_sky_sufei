export default {
  iptState(state){
    return state.iptNu;
  },
    loginClose(state){
      return state.loginNu;
    },
  getState(state){
    return state.tsg;
  },
  changeState(state){
    return state.msg;
  },
    changeLogin(state){
      return state.login;
    },
    changeLogins:(state)=>{
        return state.login;
    },
    changeUsers(state){
        return state.users;
    }
}

