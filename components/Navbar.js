import './Navbar.css' 
const Navbar=()=>
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" className="food-munch-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-link active" id="navItem1" href="#">
                                HOME
                                <span className="sr-only">(current)</span>
                            </a>
                            <a className="nav-link" href="#" id="navItem2">SERVICES</a>
                            <a className="nav-link" href="#" id="navItem3">PRODUCTS</a>
                            <a className="nav-link" href="#" id="navItem4">AI INTERNSHIP</a>
                            <a className="nav-link" href="#" id="navItem4">CARRER</a>
                            <a className="nav-link" href="#" id="navItem4">BLOG</a>
                            <a className="nav-link" href="#" id="navItem4">ABOUT</a>
                            <a className="nav-link" href="#" id="navItem4">CONTACT US</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
    
}
export default Navbar;