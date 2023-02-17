import "./Registrattion.css";

const Registration=()=>{
    return(
        <div className="registrationContainer">
            <div>
            <h2 className="registerHeading">GET IN TOUCH</h2>
            <p className="registerParagraph">Please complete the form and we will get back to you</p>
            </div>
            <div class="vl"></div>
            <div class="container formContainer">
       

        <form id="myForm">
            <div className="mb-2">
                <label  className="registerPara">Name*</label>
                <input type="text" className="form-control" id="name" />
                <p id="nameErrMsg" className="error-message"></p>
            </div>

            <div className="mb-2">
                <label  className="registerPara">Email*</label>
                <input type="text" className="form-control" id="email" />
                <p id="emailErrMsg" className="error-message"></p>
            </div>
            <div className="mb-2">
                <label  className="registerPara">Mobile Number*</label>
                <input type="text" className="form-control" id="number" />
                <p id="emailErrMsg" className="error-message"></p>
            </div>

          
            <button type="submit" className="btn button"> Register Now </button>
        </form>

    </div>
        </div>
    )
}
export default Registration;