import { Navigate } from 'react-router-dom'

import Home from '../components/Home.js'
import About from '../components/About.js'

const routes=[
  {
    path:'/',
    element:<Navigate to='/home'></Navigate>
  },
  {
    path:'/home',
    element:<Home></Home>
  },
  {
    path:'/about',
    element:<About></About>
  }
]

export default routes