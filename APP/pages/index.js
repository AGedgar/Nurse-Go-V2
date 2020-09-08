import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";

const Landing = () => {
    return (
        <div>
        <style jsx>{`
                *{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  
                  }
                  .landing{
                    background-image: url(../../static/landImage.jpeg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    height: 90vh;
                  }
                  
                  .landInfo{
                    position: absolute;
                    left: 20%;
                    z-index: 2;
                    margin-top: 8%;
                    font-size: 50px;
                    color: rgb(61, 59, 59);
                  }
                  
                  .imgLandInfo{
                    position: absolute;
                    left: 5%;
                    z-index: 2;
                    margin-top: 11%;
                  }
                  
                  .sections-center{
                    text-align: center;
                    font-size: 30px;
                    margin-top: 40px;
                  }
                  
                  .sections-imgInfo{
                    display: flex;  
                    justify-content: center;
                    justify-content: space-evenly;
                    text-align: center;
                    font-size: 20px;
                    margin-top: 40px;
                  }
        `}</style>
        <Nav/>
        <div className="landing">
            <div className="imgLandInfo">
                <img src='images/imgLandInfo.png' alt="movil" width="200px" />
            </div>
            <div className="landInfo">
                <p>BETTER FOR <br />PACIENTS</p>
                <p>BETTER FOR <br />NURSES</p>
            </div>
        </div>
        <section className="sections-center">
                We are a company formed by nursing,<br /> healthcare, and technology<br /> professionals who are constantly<br /> looking for ways to improve the<br /> healthcare system.        </section>
            <section className="sections-imgInfo">
                <p>
                    The Go RN Platform is the solution to<br /> meet increased demand for all healthcare<br />facilities<br /><br />
              Staffing a hospital is a difficult and constant challenge. Finding the<br /> right staff at the last minute – and having them arrive in time for<br /> the shift – is a costly and time consuming process. Our platform<br /> reduces the uncertainty, cost, and time involved to get registry<br /> nurses on shift.
            </p>
                <img src="images/section1Landing.png" alt="" height="250px" />
            </section>

            <section className="sections-imgInfo">
                <img src="images/section2Landing.png" alt="" height="250px" />
                <p>
                    Filling vacancies has never been easier!<br /> <br />
            We are finding better ways for healthcare facilities to staff<br />  on demand, schedule, and maximize patient experience. The Go RN<br />  platform aims to cut costs up to 30% for healthcare facilities while<br />  increasing the average registry salary by up to 25%.
             </p>
            </section>
            <Footer/>
        </div>

    )
}

export default Landing;