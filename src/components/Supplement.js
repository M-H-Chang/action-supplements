import React from 'react';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useParams, useHistory, Link } from 'react-router-dom';

const Supplement = () => {
  const firestore = useFirestore()
  const history = useHistory()
  const { id: selectedSupplementId } = useParams()

  const [selectedSupplement, setSelectedSupplement] = useState ({
    title: '',
    description: '',
    price: ''
  })

  useFirestoreConnect([{ collection: 'supplements'}]
  
  )

}