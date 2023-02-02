import React from "react";
//import React, {useState} from "react";
//import {CopyToClipboard} from 'react-copy-to-clipboard';

function Support() {
  return (
    <div className="mt-8 p-8 flex flex-col items-center justify-center">
      <div className="">
        <h1>Support | Donate</h1>
      </div>
      <div className="p-8 flex items-start justify-center flex-col">
        <div className="mb-8">
          For all your support and donations please get the informations below. You can contact us for more infos through
          the contact form on our website or directly email us at{" "}
          <a href="https://">oh.dear.teddy@gmail.com</a>
        </div>

        <div>
          We really appreciate your support and donations to
          help us grow and provide more and better content.
        </div>
        <div className="mt-4 flex items-center justify-center w-full">
          <h3>Here are some ways to support and donate funds to us.</h3>
        </div>
      </div>
      <div
        name="Advertise"
        className="contact-form flex flex-col mb-8 p-6 bg-slate-100 justify-center items-center">
        <div className="flex flex-col mb-8 p-6  bg-slate-100 justify-center items-start">
          
          <div className="mb-6 flex flex-col items-start gap-1 justify-center">
            <label className="text-3xl font-semibold">USDT ( TRC20 ) Address</label>
            <h3
              name=""
              id=""
              className="rounded-lg bg-slate-300 p-3 w-full"
              value="TQPcWZLRhuwHfJKzFT9qcXxZVzhGA4Zgsg"
            >
              {" "}
              TQPcWZLRhuwHfJKzFT9qcXxZVzhGA4Zgsg{" "}
              <i class=" hide ri-file-copy-2-fill text-slate-500 ml-6 cursor-pointer hover:text-slate-900 transition"></i>
            </h3>
          </div>
          <div className="mb-6 flex flex-col items-start gap-1 justify-center">
            <label className="text-3xl font-semibold">BTC ( BEP20 ) Address</label>
            <h3
              name=""
              id=""
              className="rounded-lg bg-slate-300 p-3 w-full"
              value="0x30afa2f50af760585e5bc5a97bce307abf59e38e"
            >
              {" "}
              0x30afa2f50af760585e5bc5a97bce307abf59e38e{" "}
              <i class=" hide ri-file-copy-2-fill text-slate-500 ml-6 cursor-pointer hover:text-slate-900 transition"></i>
            </h3>
          </div>
          <div className="mb-6 flex flex-col items-start gap-1 justify-center">
            <label className="text-3xl font-semibold">LTC (Litecoin) Address</label>
            <h3
              name=""
              id=""
              className="rounded-lg bg-slate-300 p-3 w-full"
              value="LZn1hZLiUjPfY5KpuFh4XckB1u25EpX6Hw"
            >
              {" "}
              LZn1hZLiUjPfY5KpuFh4XckB1u25EpX6Hw{" "}
              <i onClick={() => {}} class=" hide ri-file-copy-2-fill text-slate-500 ml-6 cursor-pointer hover:text-slate-900 transition"></i>
            </h3>
          </div>
        </div>
        <div className="hide">
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
            internatitonal banks 
        </div>
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
            turkish banks 
        </div>
        <div className="mb-6 flex flex-col items-start gap-1 justify-center">
            cyprus banks 
        </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
