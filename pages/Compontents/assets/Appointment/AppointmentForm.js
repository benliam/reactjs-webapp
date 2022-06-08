import { Checkbox } from "nextjs-components/dist/components/Checkbox";
import { Button } from "nextjs-components/dist/components/Button";
import toast from 'react-hot-toast'
import {useState, useRef} from 'react'
import { fs } from "nextjs-components/dist/components/Fieldset";
import { Text } from "nextjs-components/dist/components/Text";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";    

// import container content
import Vietnamese from '../../../../utils/Vietnamese'
import English from '../../../../utils/English'


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



// EmailJS Configurtion
import emailjs, {  init as EmailJSInit } from 'emailjs-com'

// Import Supabase 
import { createClient } from '@supabase/supabase-js'


function AppointmentForm({pageContent}) {

    // EmailJs initial
    EmailJSInit("user_crUpvU6k3l3gRbmttSgbQ")




    // Make sure the client is over 18
    const [over18, setOver18] = useState(false)
    const [dateTime, setDateTime] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);

    const supabaseAdmin = createClient(`https://nlgyqjadljvfirahwojf.supabase.co`,`${process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ADMIN_ROLE_KEY}`)


    const formRef = useRef()

    // Checking component language
    const dataPage = (pageContent == 'vi') ? Vietnamese : English
    // Get only data from "Form"
    const  formContent = dataPage[0].form
    const validationText = dataPage[0].validate
   
     // form validation rules 
     const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required(validationText.name),
        email: Yup.string()
            .required(validationText.email)
            .email(validationText.email_invail),
        phone: Yup.string()
            .required(validationText.phone_number),
        gender: Yup.string()
            .required(validationText.gender),
        message: Yup.string()
            .min(6, validationText.description_short)
            .required(validationText.description),   

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState; 


    // handle submit request
    async function submitRequest(data){
        if (!over18){ toast(formContent.make_sure_over_18, {
            icon: '❌',
          })
       return false
        }

    


       // Set loading button
       setIsLoading(true) 

         // Add datetime to object   
        data = { ...data, date : `${dateTime}` }

        
        // if attachment available
        if(data.attachment.length > 0){
            const attachmentFile = data.attachment[0]
            const uploadFile = await supabaseAdmin
            .storage
            .from('attachments')
            .upload(`/${data.email}_${data.attachment[0].name}`, attachmentFile, {
                cacheControl: '3600',
                upsert: false
            })  
         
            //console.log(uploadFile)

            // // if file uploaded successfully
            if(uploadFile){
                const fileData = uploadFile.data
                const fileName = fileData.Key 
                
                const { publicURL, error } = supabaseAdmin
                .storage
                .from('attachments')
                .getPublicUrl(`${data.email}_${data.attachment[0].name}`)
                
                data = { ...data, attachmentUrl : `${publicURL}` }
            }
        } 
           
        
       // Processing sending request 
       const processing = await sendEmail(data);
        if(processing){
            toast((t) => (
                <span>
                  <p>{formContent.msg_success}</p>
                  <Button size="small" type="secondary" onClick={() => toast.dismiss(t.id) }> Close</Button>
                </span>
              ),{
                icon: '👏',  
                duration: 7000,
                style: {
                    border: '5px solid #4C2889',
                    padding: '16px',
                  },
              });
            // Set loading button as false 
            setIsLoading(false) 
            // Reset form when successed
            formRef.current.reset()

        }
        else{
            toast.error("We cannot sent your appointment at the moment! Please contact us through Instagram or Facebook")
            setIsLoading(false) 
        }

        console.log(data)


   }

     // promise functio
     async function sendEmail(data){
        const request = await emailjs.send('service_pg1nrl7', 'template_cvh8hap', data)
        if(request){
          return {success: 'OK', data: request}
        }
        else{
          return request
        }
      }

    return(
        <div>
              <h3 className="mb-4">{formContent.heading1}</h3>
              <form  ref={formRef} encType="multipart/form-data"  className="mb-n5 mt-2 pt-4" onSubmit={handleSubmit(submitRequest)}>
                <div className="form-group">
                    <h6>{formContent.name}</h6>
                    <input {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`}   id="name" type="text" placeholder="Josh Doe" />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                    </div>
                <div className="form-group">
                 <h6 >Email address</h6>    
                    <input  {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}  id="email" type="email" placeholder="Your email address" />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>

                <div className="form-group">
                 <h6 >{formContent.gender}</h6>
                    <select {...register('gender')} className={`form-control ${errors.gender ? 'is-invalid' : ''}`}  id="gender" name="gender" placeholder="Please select your gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div className="invalid-feedback">{errors.gender?.message}</div>
                </div>

                <div className="form-group">
                 <h6 >{formContent.phone_number}</h6>
                 <input {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`}  id="phone" name="phone" type="text" placeholder="+84 93872 123" />
                 <div className="invalid-feedback">{errors.phone?.message}</div>
                </div>
                <div className="form-group">
                <fs.Fieldset>
                <fs.Content>
                    <fs.Title>{formContent.time}</fs.Title>
                    <fs.Subtitle>{formContent.please_select_date}</fs.Subtitle>
                <DatePicker  className="form-control" type='date' id="date" name="date" {...register('date')} selected={dateTime} onChange={setDateTime} />

                </fs.Content>
                </fs.Fieldset>
                </div>   
                <div className="form-group">
                <fs.Fieldset>
                <fs.Content>
                    <fs.Title>{formContent.attachment}</fs.Title>
                    <fs.Subtitle>
                        <input type="file" name="attactment" id="attachment"  {...register('attachment')} className="form-control" accept="image/png, image/gif, image/jpeg"></input>
                    </fs.Subtitle>
                    <fs.Subtitle>{formContent.please_attach_image}</fs.Subtitle>
                </fs.Content>
                </fs.Fieldset>
                </div>
                 <div className="form-group">
                     <Text size={16} weight={500} >{formContent.description}</Text>
                        <textarea 
                            {...register('message')}
                            className={`form-control mt-2 ${errors.message ? 'is-invalid' : ''}`} 
                            id="message" name="message" rows={5 } 
                            placeholder={formContent.write_a_description}
                            defaultValue={""}
                             />
                            <div className="invalid-feedback">{errors.message?.message}</div>
                    </div>   
                <div className="form-group mt-4">
                   <Checkbox onChange={(e) => setOver18(e.target.checked)}>
                       <h6>{formContent.over_18_required}</h6>
                   </Checkbox>
                </div>  

                {!isLoading ? <button className="btn btn-xs  mt-4" style={{borderRadius: 100}}  type="submit">{formContent.btn_submit}</button> :  <button className="btn btn-xs  mt-4" style={{borderRadius: 100}}  type="button" disabled >{formContent.btn_sending}</button> }
                <button className="btn btn-xs ml-2 mt-4 btn-secondary" style={{borderRadius: 100}}  type="reset">{formContent.btn_reset}</button>
              </form>
        </div>
    )
}

export default AppointmentForm