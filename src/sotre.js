userLogin({ commit }, { email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit('setUser', user);
        commit('setIsAuthenticated', true);
      })
      .catch(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
      });
      .then(user => {
        commit('setUser', user);
        commit('setIsAuthenticated', true);
        router.push('/about'); //追加
      })
      .catch(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');　//追加
      });
      
}