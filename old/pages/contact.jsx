import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
function contact() {
  return (
    <>
    <Navbar />
    <div className='contForm'>
        <form method='POST' name='contact'><input type='hidden' name='form-name' value='contact' />
            <div className="field" tabindex="1">
                <label for="username">
                    <i className="ri-user-line"></i>Your Name
                </label>
                <input name="username" type="text" placeholder="e.g. john doe" required />
            </div>
            <div className="field" tabindex="2">
                <label for="email">
                    <i className="ri-mail-line"></i>Your Email
                </label>
                <input name="email" type="text" placeholder="email@domain.com" required />
            </div>
            <div className="field" tabindex="3">
                <label for="message">
                    <i className="ri-edit-line"></i>Your Message
                </label>
                <textarea name="message" placeholder="type here" required></textarea>
            </div>
            <button type="submit">Send Me Message</button>
            
        </form>
    </div>
    <Footer />
    </>
  )
}

export default contact