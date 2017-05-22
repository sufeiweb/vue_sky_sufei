import * as types from './types';
export default {
  showIpt:({
    commit,state
  })=>{
    commit(types.IPT_SHOW);
  },
  hideIpt:({
    commit,state
  })=>{
    commit(types.IPT_HIDE);
  },
    showLogin:({
                 commit,state
             })=>{
        commit(types.LOGIN_SHOW);
    },
    hideLogin:({
                 commit,state
             })=>{
        commit(types.LOGIN_HIDE);
    }
}

