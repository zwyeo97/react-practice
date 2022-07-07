import AncedoteForm from './components/AncedoteForm'
import AncedoteList from './components/AncedoteList'
import Filter from './components/FilterComponent'
import Notification from './components/Notification'

const App = () => {


  return (
    <div>
      <h2>Anecdotes</h2>

      
      <Notification/>
      <Filter/>
      <AncedoteList/>
      <AncedoteForm/>
      
    </div>
  )
}

export default App