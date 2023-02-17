import './Intro.css';
const Intro=()=>{
    return(
        <div className="intro">
            <div >
                <h2>WHO WE ARE</h2>
                <div><p>
                    Rubixe<sup>TM</sup> is a global technology company specializing in disruptive technologies-Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain, and Internet of Things(IoT).
                </p>
                <p>
                Rubixe<sup>TM</sup> mission is to enable business to leverage the full potential of disruptive technologies ad stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable
                </p></div>
                
            </div>
            <div >
                <img id="intro" src="/images/intro.jpg" alt="image"/>
            </div>
        </div>
    );
}
export default Intro;