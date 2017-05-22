import * as types from './types';

export default {
  [types.IPT_SHOW]:(state)=>{
    state.iptNu=true;
  },
  [types.IPT_HIDE]:(state)=>{
    state.iptNu=false;
  },
    [types.LOGIN_SHOW]:(state)=>{
        state.loginNu=true;
    },
    [types.LOGIN_HIDE]:(state)=>{
        state.loginNu=false;
    },
  getData:(state,msg)=>{
    state.tsg=msg;
  },
  changeMsg:(state,msg)=>{
    state.msg=msg;
  },
    changeLogin:(state)=>{
    state.login=true;
    },
    changeLogins:(state)=>{
        state.login=false;
    },
    changeUsers:(state,users)=>{
    state.users=users;
    }
}

