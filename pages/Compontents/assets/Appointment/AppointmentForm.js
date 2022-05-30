import { Checkbox } from "nextjs-components/dist/components/Checkbox";
import toast from 'react-hot-toast'
import {useState} from 'react'
import { fs } from "nextjs-components/dist/components/Fieldset";
import { Text } from "nextjs-components/dist/components/Text";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";    

function AppointmentForm({pageContent}) {

    // Make sure the client is over 18
    const [over18, setOver18] = useState(false)
    const [dateTime, setDateTime] = useState(new Date());


    // handle submit request
   function submitRequest(e){
       e.preventDefault()
        
        if (!over18) toast('Hãy chắc chắn rằng bạn đa đủ 18 tuổi', {
            icon: '❌',
          })

        console.log(dateTime)  

   }

    return(
        <div>
              <h3 className="mb-4">Vui lòng điền đầy đủ thông tin</h3>
              <form className="mb-n5 mt-2 pt-4" onSubmit={submitRequest}>
                <div className="form-group">
                    <h6>Tên của bạn</h6>
                    <input className="form-control" id="name" type="text" placeholder="Josh Doe" />
                    </div>
                <div className="form-group">
                 <h6 >Email address</h6>
                    <input className="form-control" id="email" type="email" placeholder="Your email address" />
                </div>

                <div className="form-group">
                 <h6 >Giới tính</h6>
                    <select className="form-control" placeholder="Please select your gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                 <h6 >Phone number</h6>
                 <input className="form-control" id="phone" name="phone" type="text" placeholder="+84 93872 123" />
                </div>


                <div className="form-group">
                <fs.Fieldset>
                <fs.Content>
                    <fs.Title>Thời gian</fs.Title>
                    <fs.Subtitle>Hãy chọn ngày bạn muốn đến</fs.Subtitle>
                <DatePicker  className="form-control" selected={dateTime} onChange={setDateTime} />

                </fs.Content>
                </fs.Fieldset>

                </div>   

                <div className="form-group">
                <fs.Fieldset>
                <fs.Content>
                    <fs.Title>Hình ảnh đính kèm</fs.Title>
                    <fs.Subtitle>
                        <input type="file" className="form-control"></input>
                    </fs.Subtitle>
                    <fs.Subtitle>Đính kèm hình ảnh mẫu nếu có</fs.Subtitle>
                </fs.Content>
                </fs.Fieldset>
                </div>

                 <div className="form-group">
                     <Text size={16} weight={500} >Mô ta chi tiết ý tưởng</Text>
                        <textarea 
                            className="form-control mt-2    " 
                            id="message" rows={5 } 
                            placeholder="Mô tả hình xăm của bạn" 
                            defaultValue={""}
                            required />
                    </div>   

                <div className="form-group mt-4">
                   <Checkbox onChange={(e) => setOver18(e.target.checked)}>
                       <h6>Tôi chắc chắn đã đủ 18 tuổi</h6>
                   </Checkbox>
                </div>  

                <button className="btn btn-xs  mt-4" style={{borderRadius: 100}}  type="submit">Send request</button>
                <button className="btn btn-xs ml-2 mt-4 btn-secondary" style={{borderRadius: 100}}  type="reset">Reset</button>
              </form>
        </div>
    )
}

export default AppointmentForm