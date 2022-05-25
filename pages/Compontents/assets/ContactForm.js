// Toast notification
import toast from 'react-hot-toast'
// Import Emailjs Library
import emailjs, {  init as EmailJSInit } from 'emailjs-com'

import {useState} from 'react'  

function ContactForm() {
    
    // Email js initialion
    EmailJSInit("user_crUpvU6k3l3gRbmttSgbQ")

    const [isSending, setIsSending] = useState(false)

    // Handle submit request
   async function handleSubmit(e){
        // set non refresh page
        e.preventDefault()  

        // set loading 
        setIsSending(true)
         
        // get form data
        const dataForm  = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

      const Running = await toast.promise(
          sendEmail(dataForm),
           {
             loading: 'Sending the message...',
             success: 'Thank you! Your message has been sent, we will get in touch with you shortly',
             error:'Something wrong happened! We cannot send your message',
           },
           {
            position: "bottom-center",    
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff'
            },
            success: {
              duration: 5000,
              icon: '🔥',
            }
          }
         ).then((res) => {
             setIsSending(false) 
             e.target.name.value = ''
             e.target.email.value = ''
             e.target.message.value = ''

         }).catch((error) => {
          setIsSending(false) 

         })
        
         
         
        
    }  
     
    // promise functio
    async function sendEmail(data){
      const request = await emailjs.send('service_pg1nrl7', 'template_zjf916v', data)
       
      if(request){
        return {success: 'OK', data: request}
      }
      else{
        return request
      }
    }

    

    return (
        <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="mt-5">Write us a message</h2>
          <form className="mt-4 mb-n10" onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    className="form-control" 
                    id="name" type="text" 
                    required
                    placeholder="Your name" />
            </div>
            <div className="form-group">
                <input 
                    className="form-control" 
                    id="email" type="email" 
                    placeholder="Email" />
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    id="message" rows={8} 
                    placeholder="Message" 
                    defaultValue={""}
                    required />
            </div>
            { isSending ?  <button className="btn btn-dark" type="button" disabled>Sending...</button> :  <button className="btn btn-dark" type="submit">Send</button>}
           
          </form>
        </div>
      </div>
    )
}

export default ContactForm