function AppointmentForm() {
    return(
        <div>
              <h3 className-="mb-6">Gravity Invulnerability</h3>
              <form className="mb-n5 mt-2">
                <div className="form-group"><input className="form-control" id="name" type="text" placeholder="John Doe" /></div>
                <div className="form-group"><input className="form-control" id="email" type="email" placeholder="Email" /></div>
                <div className="form-group"><textarea className="form-control" id="message" rows={8} placeholder="Message" defaultValue={""} /></div><button className="btn btn-primary" type="submit">Send</button>
              </form>
        </div>
    )
}

export default AppointmentForm