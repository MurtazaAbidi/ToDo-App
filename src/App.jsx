import React, { useEffect, useState } from 'react'
import LoginPage from './Pages/Login Page'
import HomePage from './Pages/Home Page';

const App = () => {
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setUserLogin(localStorage.getItem('to-do-app-logged-in'));
    console.log(localStorage.getItem('to-do-app-logged-in'));
    setLoading(false);
  }, [])
  return (
    <>
      {loading ? null
        :
        <div>
          {userLogin ? <HomePage /> : <LoginPage setUserLogin={setUserLogin} />}
        </div>
      }
    </>
  )
}

export default App