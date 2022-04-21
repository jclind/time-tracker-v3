import AuthProvider from './context/AuthContext'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <AuthProvider>
      <div className='app' id='#app'>
        <Navbar />
      </div>
    </AuthProvider>
  )
}

export default App
