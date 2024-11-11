// adduser

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL.js"

export const addUserAPI=async (userDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/users`,userDetails)
}

export const getUserAPI=async (userDetails)=>{
    return await commonAPI("GET",`${SERVERURL}/users`,userDetails)
}

export const deleteUserAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/users/${id}`,{})
}

export const updateUserAPI=async (id,data)=>{
    return await commonAPI("PUT",`${SERVERURL}/users/${id}`,data)
}



