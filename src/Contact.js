import React from "react";

const Contact=()=> {

  
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row ">
          <div className="col-md-6 col-10 mx-auto">
          <form >
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
   
    placeholder="Enter your name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contact Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" 
    
    placeholder="Enter your number"/>
              </div>
              <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
   
    placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <textarea type="email" rows="3" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
  
    placeholder="Text-Area"></textarea>
    
  </div>

  
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>

          </div>

        </div>

      </div>
    </>
  );
};

export default Contact;
