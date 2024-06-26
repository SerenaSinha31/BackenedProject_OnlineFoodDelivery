import React from 'react'
import Layout from '../components/Layout/Layout'
import { RiContactsLine } from "react-icons/ri";

const Contact = () => {
  return (
<Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about any Food services feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            < RiContactsLine/>: www.@TasteBust.com
          </p>
          <p className="mt-3">
          < RiContactsLine/>: 012-3456789
          </p>
          <p className="mt-3">
          < RiContactsLine/>: 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
