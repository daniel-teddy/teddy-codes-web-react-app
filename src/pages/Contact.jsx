import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="mt-8 p-8 flex flex-col items-center justify-center">
      <div className="">
        <h1>Contact Us</h1>
      </div>
      <div className="p-8 flex items-start justify-center flex-col">
        <div className="mb-8">
          If you have any questions or feedback about our content, please don’t
          hesitate to reach out to us. You can contact us through the contact
          form on our website or directly email us at{" "}
          <a href="http://">contact@teddycodesweb.click</a>
        </div>
        <div className="mb-8">
          If your inquiry is related to guest posts, please visit our{" "}
          <span>Write For Us</span> page for more information on how to submit
          your guest post.
        </div>
        <div>
          Thank you for your interest in Our Work, and we look forward to
          hearing from you.
        </div>
      </div>
      <form className="contact-form flex flex-col mb-8 p-6 bg-slate-100 justify-center items-center" netlify>
      <div className="flex flex-col mb-8 p-6  bg-slate-100 justify-center items-start">
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" className="rounded-lg" placeholder="Enter your name" />
        </div>
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
          <label htmlFor="">Email*</label>
          <input type="text" name="" id="" required className="rounded-lg" placeholder="Enter your Email" />
        </div>
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
          <label htmlFor="">Subject*</label>
          <input type="text" name="" id="" required className="rounded-lg" placeholder="Enter the Subject" />
        </div>
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
          <label htmlFor="">Message*</label>
          <textarea name="" className="rounded-lg" id="" cols="30" rows="7"></textarea>
        </div>
        <div className="flex justify-center p-3 bg-slate-800 text-slate-100 rounded">
          <button type="submit" className="flex items-center justify-center">
            SEND MESSAGE
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
