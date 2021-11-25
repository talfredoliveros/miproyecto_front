import Vue from 'vue';

export async function fetchplandenegocios({ commit }){
    await Vue.axios.get('/api/plandenegocio').then( ({ data }) => {
        console.log("data ", data );
        commit('setplandenegocios', data.plandenegocios);
    }).catch(err => {
        console.log("err ", err );
        commit('setError', err.message);
    }).finally(() => {
        console.log("Petición de fetchplandenegocio resuelta");
    });
}

export async function addplandenegocio({ commit, dispatch }, plandenegocio){
    await Vue.axios.post('/api/plandenegocio', {
        //id: Date.now(),
        identidad:plandenegocio.identidad,
        nombre:   plandenegocio.nombre,
        apellidos:plandenegocio.apellidos,
        fechaNac: plandenegocio.fechaNac,
        direccion:plandenegocio.direccion,
        telefono: plandenegocio.telefono,
        genero:   plandenegocio.genero,
        email:    plandenegocio.email,
        status:   plandenegocio.status
    }).catch( err => {
        commit('setError', err.message);
    }).finally(() => {
        //dispatch('fetchplandenegocio');
        console.log("Petición de addplandenegocio resuelta");
    });
}

export async function updateplandenegocio({ commit }, plandenegocio){
   await Vue.axios.put(`/api/plandenegocio/${ plandenegocio.plandenegocioId }`, {
        //id: Date.now(),
        //identidad:plandenegocio.identidad,

   }).catch( err => {
      commit('setError', err.message);
   }).finally(() => {
      console.log("Petición de updateplandenegocio resuelta");
   });
}


export async function deleteplandenegocio({ commit, dispatch }, plandenegocio){
    await Vue.axios.delete(`/api/plandenegocio/${ plandenegocio.plandenegocioId }`)
                    .catch( err => {
                        commit('setError', err.message);
                    }).finally(() => {
                        //dispatch('fetchplandenegocio');
                        console.log("Petición de deleteplandenegocio resuelta");
                    });
}

