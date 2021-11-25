export function setemprendedores(state, emprendedor) {
   console.log(state, emprendedor);
   state.emprendedores = emprendedor;
}

export function setemprendedor(state, emprendedor) {
   state.selecttedEmprendedor = emprendedor;
   

}

export function setError(state, payload){
   state.error=true;
   state.errorMessage= payload;
   state.emprendedores=[];
}

