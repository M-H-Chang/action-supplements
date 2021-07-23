import React from 'react';
import { useSelector } from 'react-redux';
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded
} from 'react-redux-firebase'
import { useParams } from 'react-router';

const Cart = () => {
  const history = useHistory()
  const firestore = useFirestore()
  const { id: selectedSuppId } = useParams()

  useFirestoreConnect([
    { collection: 'cartSupplments'}
  ])

  const deleteSupplement = () => {
    history.push('/supplements/cart') //need to make a route for the cart
    return firestore.delete({ collection: 'cartSupplements', doc: selectedSuppId })
  }

  const supplement = useSelector(
    state => state.firestore.data.cartSupplements[selectedSuppId]
  )
  return (
    <>
      <h4>Current Cart</h4>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button type='submit'>Checkout</button>
    </>
  )
}