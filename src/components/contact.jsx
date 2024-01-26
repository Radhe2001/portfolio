import location_logo from "../assets/location.png"
import email_logo from "../assets/email.png"
import linkedin_logo from "../assets/linkedin.png"
import phone_logo from "../assets/phone.png"
import "../css/contact.css"
import { useState } from "react"
import mail from 'emailjs-com';


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [mes,setMes] = useState("")
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const template = {
        to_email: "radheshyamjha469@gmail.com",
        from_email: email,
        from_name: name,
        to_name:"Radheshyam Jha",
        message: message
      };
      
       mail.send(
        'service_mb7l0un', 
        'template_6uwsk4e',
        template,
        'f78uhWkoUAmXlJSsm' 
       )
         .then(res => {
           setMes("Send successfully")
           setName("")
           setEmail("")
           setMessage("")
           setTimeout(()=>setMes(""),10000)
         })
         .catch(err => {
           setMes("Failed to send message , Try again")
           setTimeout(()=>setMes(""),10000)
         });
    } else {
      setMes("Fill all the fields")
      setTimeout(()=>setMes(""),10000)
    }
  }
  return (
    <>
      <center><div className=" text-5xl font-semibold text-fuchsia-900 mt-24 mb-10">Contact Me</div></center>
      <div className="flex place-content-center gap-10 text-white mb-20">
        <div className="details-contact">
          <div className="text-xl text-cyan-400 mb-6 mt-8 w-full text-justify">Feel free to drop a message if you have any suggestion or collaboration ideas and we'll get in touch.</div>
          <div className="flex place-items-center gap-4 mb-3">
            <div className="h-8 w-8 bg-cover" style={{backgroundImage:`url(${phone_logo})`}}></div>
            <div className="">
              <div className="text-xl text-blue-300 font-semibold">Contact-Me</div>
              <div className="">+91 6204293537</div>
            </div>
          </div>
          <div className="flex place-items-center gap-4 mb-3" >
            <div className="h-8 w-8 bg-cover" style={{backgroundImage:`url(${email_logo})`}}></div>
            <div className="">
              <div className="text-xl text-blue-300 font-semibold">Email</div>
              <div className="">radheshyamjha469@gmail.com</div>
            </div>
          </div>
          <div className="flex place-items-center gap-4 mb-3">
            <div className="h-8 w-8 bg-cover" style={{backgroundImage:`url(${location_logo})`}}></div>
            <div className="">
              <div className="text-xl text-blue-300 font-semibold">Address</div>
              <div className="">Phagwara, Punjab, 144401</div>
            </div>
          </div>
          <div className="flex place-items-center gap-4 mb-3">
            <div className="h-8 w-8 bg-cover" style={{backgroundImage:`url(${linkedin_logo})`}}></div>
            <div className="">
              <div className="text-xl text-blue-300 font-semibold">LinkedIn</div>
              <a className="" href="https://www.linkedin.com/in/radheshyam2001/">www.linkedin.com/in/radheshyam2001/</a>
            </div>
          </div>
        </div>
        <div className="form-contact">
          <div className="w-full py-8  px-8">
            <form className="px-8 py-6 border-4 border-cyan-600 rounded-2xl ">
              <input className="h-12 w-full mb-3 py-1 px-3 text-xl placeholder-blue-600 text-slate-800 rounded-lg border-2 border-pink-600" type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              <input className="h-12 w-full mb-3 py-1 px-3 text-xl placeholder-blue-600 text-slate-800 rounded-lg border-2 border-pink-600" type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <textarea className="w-full min-h-28 mb-6 py-1 px-3 text-xl placeholder-blue-600 text-slate-800 rounded-lg border-2 border-pink-600 " type="message" name="text" placeholder="Drop message here" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <center><button className="h-10 border-2 border-cyan-600 rounded-xl px-4 py-1 text-xl font-semibold hover:text-slate-800 hover:bg-cyan-200 hover:border-blue-800" onClick={sendMessage}>Send Message</button></center>
              <center className="mt-4">
                <div className="text-white text-lg ">{mes}</div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
