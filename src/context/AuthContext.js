import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../auth/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleSignup = async (email, password) => {
    let error = null
    createUserWithEmailAndPassword(auth, email, password).catch(err => {
      error = err
    })
    return error
  }
  const handleLogin = async (email, password) => {
    let error = null
    await signInWithEmailAndPassword(auth, email, password).catch(err => {
      error = err
    })
    return error
  }
  const handleLogout = async (email, password) => {
    let error
    await signOut(auth).catch(err => {
      error = err
    })
    return error
  }

  // Detect auth status change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userInstance => {
      if (userInstance) {
        console.log('logged in')
        setUser(userInstance)
      } else {
        console.log('logged out')
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = { user, handleSignup, handleLogin, handleLogout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
