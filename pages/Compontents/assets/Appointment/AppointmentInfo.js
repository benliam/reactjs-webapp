// import container content
import Vietnamese from '../../../../utils/Vietnamese'
import English from '../../../../utils/English'




function AppointmentInfo({pageContent}) {

     // Checking component language
     const  dataPage = (pageContent == 'vi') ? Vietnamese : English
     const  Content = dataPage[0].info

    return(
        <div>
               <h3 className="mb-4">{Content.heading}</h3>
               <div dangerouslySetInnerHTML={{ __html: Content.description }}></div>
        </div>
    )
}

export default AppointmentInfo
