import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Pagenoyfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-img">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to='/'className='pnf-btn'>
          Go Back
        </Link>



      </div>
    
    </Layout>
  )
}

export default Pagenoyfound
