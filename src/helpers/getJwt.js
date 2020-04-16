export const getToken =() =>{
  return  localStorage.getItem("token")
}

export const delToken =() =>{
    return localStorage.removeItem("token")
}