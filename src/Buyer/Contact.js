import React ,{useState} from 'react';
import {toast} from 'react-toastify';

function Contact() {
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Mobile,setMobile] = useState('');
    const [Message,setMessage] = useState('');

    const ContactUs =async  e=>{
        e.preventDefault();
        if(Name === "" ){
            return toast.error("please enter your name..!")
        }
        if(Email === "" ){
            return toast.error("please enter your email..!")
        }
        if(Mobile === "" ){
            return toast.error("Please enter your mobile number.!")
        }
        if(Message === "" ){
            return toast.error("Write Message..!")
        }
        else{
        let Adddata = {Name,Email,Mobile,Message}
        let result = await fetch("http://localhost:3000/ContactUs",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },  
            body:JSON.stringify(Adddata)
        }).then(()=>{
          window.location.reload(false);

        })
    }
      }
    return (
        <>
    <h4 className="section-heading text-center mt-3 py-4">Contact</h4>
            <div className="contactpage">
                <section className="contact-us container  justify-content-around  ">
                   
                    <div className="col-1 ">
                    <form>
                    <input type="text" className='contactInput mt-3 pl-4' value={Name} onChange={(e) =>setName(e.target.value)}  placeholder="Name..." required/>
                    <input type="email" className='contactInput my-3 pl-4' value={Email} onChange={(e) =>setEmail(e.target.value)} placeholder="Email..." required />
                    <input type="number" className='contactInput mb-3 pl-4'  value={Mobile} onChange={(e) =>setMobile(e.target.value)} placeholder="Mobile Number..." required/>
                    <textarea className="contactTextarea mb-2 pl-4" value={Message} onChange={(e) =>setMessage(e.target.value)} placeholder="Message..." required></textarea>
                    <button className="navy-blue-btn " type="submit" onClick={ContactUs}>Submit</button>
                    </form>
                    </div>
                    
                                
                          
                    
                    <div className="map align-self-center mt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137241463!2d73.72253348652927!3d18.524890171607453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623409472221!5m2!1sen!2sin" 
                        width="100%" height="100%"  loading="lazy"></iframe>
                    </div>
                </section>

        </div>
        </>
    )
}

export default Contact
