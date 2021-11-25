export function setplandenegocio(state, plandenegocio) {
   console.log(state, plandenegocio);
   state.plandenegocios = plandenegocio;
}

export function setemprendedor(state, plandenegocio) {
   state.selecttedPlandenegocio = plandenegocio;
   

}

export function setError(state, payload){
   state.error=true;
   state.errorMessage= payload;
   state.plandenegocios=[];
}