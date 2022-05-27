/**
 * this file connects with the backend to fetch and update data related to user. 
 */

import axios from 'axios'

const baseURL =  "http://127.0.0.1:5000"

/**
 * create a user with given information
 * @param {*} info 
 * @returns {user = NewUser}, {user = None} if failed
 */
export const createUser = async (info) => {
  const resp = await axios.get(`${baseURL}/user`, info)
  return resp.data
}

/**
 * Get a user dict by id
 * 
 * @param {*} id 
 * @returns json format of user
 */
export const getUser = async (id) => {
  const resp = await axios.get(`${baseURL}/user/${id}`)
  return resp.data
}

/**
 * get all users
 * 
 * @returns a list of all users in json format
 */
export const getAllUsers = async () => {
  const resp = await axios.get(`${baseURL}/user`)
  return resp.data
}

/**
 * find the user with given id and update it with given information
 * 
 * @param {*} id 
 * @param {*} info 
 * @returns updated user in json format
 */
export const updateUser = async (id, info) => {
  const resp = await axios.patch(`${baseURL}/user/${id}`, info)
  return resp.data
}

/**
 * delete the user with given id
 * 
 * @param {*} id 
 * @returns String of user of id... is deleted
 */
export const deleteUser = async (id) => {
  const resp = await axios.delete(`${baseURL}/user/${id}`)
  return resp.data
}


/**
 * validate the user with given information
 * 
 * @param {email, password} info 
 * @returns {verification : true, id : user.id} on success, {verification : false} on failure
 */
 export const validateUser = async (info) => {
  return await axios.post(`${baseURL}/user/validate`, info).data
}

