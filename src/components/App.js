import SuppControl from './SuppControl'
import { useGetAllSupplementsQuery } from "../store/supplementApi"
import { Link } from "react-router-dom"

const App = () => {
  <SuppControl />
  const {
    data: allSupplements,
    error: allSupplementsError,
    isLoading: allSupplementsIsLoading
  } = useGetAllSupplementsQuery();
  if (allSupplementsIsLoading) return <div>Loading...</div>;
  if (allSupplementsError) return <div>Unable to load supplements.</div>
  return (
    <ul>
      {allSupplements.map((supplement, idx) => (
        <li key={idx}>
          <Link to={`/details/${supplement.id}`}>{supplement.name}</Link>
        </li>
      ))}
    </ul>
  )
} 

export default App