import { css } from "@emotion/react"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link, useLocation } from "react-router-dom"

const SuppList = () => {
  const{ search } = useLocation()
  const selectedIdFromSearch = queryString.parse(search).selectedIdFromSearch

  useFirestoreConnect([
    { collection: 'supplements' },
  ])

  const [selectedSupplementsId, setSelectedSupplementsId] = useState(selectedIdFromSearch)

  const supplements = useSelector(state => state.firestore.ordered.supplements)

  
  return (
    <>

    </>
  )
}