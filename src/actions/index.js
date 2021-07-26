import * as c from './ActionTypes'

const deleteSupplement = id => ({
  type: c.DELETE_SUPP,
  id
})

const addSupp = id => ({
  type: c.ADD_SUPP,
  id
})