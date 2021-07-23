import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, useHistory } from 'react-router-dom'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
} from 'react-redux-firebase'

function SuppDetail() {
  const history = useHistory()
  const firestore = useFirestore()
  const { id: selectedSuppId } = useParams() //has to match selectedSuppId route

  useFirestoreConnect([
    { collection: 'supplements'}
  ])

  const deleteSupplement = () => {
    history.push('/supplements')
    return firestore.delete({ collection: 'supplements', doc: selectedSuppId})
  }

  const supplement = useSelector(
    state => state.firestore.data.supplements[selectedSuppId]
  )

  const { title, description, price } = supplement

  return (
    <>
      {isLoaded(supplement) ?
      (
        <>
          <Link to={`/supplements/${selectedSuppId}/edit`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
          </Link>
          <button type='button' onClick={() => deleteSupplement()}>Delete</button>
        </>
      )
      : <h3>Loading...</h3>
      }
    </>
  )
}

export default SuppDetail