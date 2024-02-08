import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: Abhi,
    role: softwaredeveloper,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: Abhi,
    role: softwaredeveloper,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: Abhi,
    role: softwaredeveloper,
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)
export default App
