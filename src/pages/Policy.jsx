import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
       <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At Taste-Bust, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          <p> Information We Collect</p>
          <p>Sharing Your Information</p>
          <p>Security of Your Information</p>
          <p>Changes to This Privacy Policy</p>
          <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible.

If you have any questions about this Privacy Policy, please contact us at support@foodiesdelight.com.</p>
          
        </div>
      </div>
 
      
    </Layout>
  )
}

export default Policy
