import Vue from 'vue';

export async function fetchEmprendedores({ commit }){
    await Vue.axios.get('/api/emprendedor').then( ({ data }) => {
        console.log("data ", data );
        commit('setemprendedores', data.emprendedors);
    }).catch(err => {
        console.log("err ", err );
        commit('setError', err.message);
    }).finally(() => {
        console.log("Petición de fetchEmprendedor resuelta");
    });
}

export async function addEmprendedor({ commit, dispatch }, emprendedor){
    await Vue.axios.post('/api/emprendedor', {
        identidad:emprendedor.identidad,
        nombre:   emprendedor.nombre,
        apellidos:emprendedor.apellidos,
        fechaNac: emprendedor.fechaNac,
        direccion:emprendedor.direccion,
        telefono: emprendedor.telefono,
        genero:   emprendedor.genero,
        email:    emprendedor.email,
        status:   emprendedor.status
    }).catch( err => {
        commit('setError', err.message);
    }).finally(() => {
        //dispatch('fetchEmprendedor');
        console.log("Petición de addEmprendedor resuelta");
    });
}

export async function updateEmprendedor({ commit }, emprendedor){
    await Vue.axios.put(`/api/emprendedor/${ emprendedor.emprendedorId }`, {
        identidad:emprendedor.identidad,
        nombre:   emprendedor.nombre,
        apellidos:emprendedor.apellidos,
        fechaNac: emprendedor.fechaNac,
        direccion:emprendedor.direccion,
        telefono: emprendedor.telefono,
        genero:   emprendedor.genero,
        email:    emprendedor.email,
        status:   emprendedor.status
    }).catch( err => {
        commit('setError', err.message);
    }).finally(() => {
        console.log("Petición de updateEmprendedor resuelta");
    });
}

export async function deleteEmprendedor({ commit, dispatch }, emprendedor){
    await Vue.axios.delete(`/api/emprendedor/${ emprendedor.emprendedorId }`)
                    .catch( err => {
                        commit('setError', err.message);
                    }).finally(() => {
                        //dispatch('fetchEmprendedor');
                        console.log("Petición de deleteEmprendedor resuelta");
                    });
}

// export async function login({ commit }, user){
//     commit('setLoading', true, { root: true });
//     return Vue.axios.post('/api/users/login', user).then(res => {
//         commit('setUserData', res.data);
//         return res
//     }).catch(err => {
//         commit('setError', err.msg);
//     }).finally(() => {
//         commit('setLoading', false, { root: true });
//     })
// }