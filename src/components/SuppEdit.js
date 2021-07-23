import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useParams, useHistory, } from 'react-router-dom';

const SuppEdit = () => {
  const firestore = useFirestore()
  const history = useHistory()
  const { id: selectedSupplementId } = useParams()

  const [selectedSupplement, setSelectedSupplement] = useState ({
    title: '',
    description: '',
    price: ''
  })

  useFirestoreConnect([{ collection: 'supplements'}])
  
  const supplement = useSelector(
    state => state.firestore.data.supplements[selectedSupplementId]
  )

  useEffect(() => {
    if (supplement) setSelectedSupplement(supplement)
  }, [supplement]) //second argument fedines the variable on which the hook depends on

  const handleChange = (e) => {
    const { value, name } = e.target
    const updatedSupplement = { ...selectedSupplement }
    updatedSupplement[name] = value
    setSelectedSupplement(updatedSupplement)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSupplementId) updateSupplement()
    else addNewSupplementToFireStore()
  }
  
  const addNewSupplementToFireStore = () => {
    history.push('/supplements')
    return firestore.collection('supplements').add(selectedSupplement)
  }

  const updateSupplement = (e) => {
    history.push('/supplements')
    return firestore.update(
      {
        collection: 'supplements',
        doc: selectedSupplementId
      }
    )
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        name='title'
        placeholder='Supplment Title'
        defaultValue='selectedSupplement.title'
      />
      <input
        onChange={handleChange}
        type='text'
        name='description'
        placeholder='Add Supplement Description'
        defaultValue='selectedSupplement.description'
        />
        <input
          onChange={handleChange}
          type='text'
          name='price'
          placeholder='Add Price'
          defaultValue='selectedSupplement.price'
          />
          <button type='submit'>Done</button>
    </form>
    </>
  )
}

export default SuppEdit;