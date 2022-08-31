import React from 'react'

function Contact() {
  return (
    <div>
      <div className='container py-5'>
        <div className='row justify-content-md-center'>
          <div className='col-sm-6'>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div><br />
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div> <br />

              <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div><br />
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
