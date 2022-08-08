import React from 'react'
import mission from '../assets/images/mission.jpg'

const Mission = () => {
  return (
    <div>
      <section className="mission mt-5 mb-5">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 mission-txt">
                    <h5>OUR MISSION</h5>
                    <h1>Get In. Get Fit. Get on with Life.</h1>
                    <p>Nibh volutpat rhoncus tortor ac. Posuere mattis orci, scelerisque volutpat
                        dignissim nullam nascetur feugiat tortor. Potenti viverra a sed in felis.
                        Tincidunt habitant et scelerisque sit at sit risus neque tincidunt.
                        A tempor malesuada eget enim, eleifend. Tincidunt feugiat risus, euismod et nullam.
                        Interdum lectus hendrerit nibh cursus diam viverra facilisis in.
                    </p>
                </div>
                <div className="col-md-6 mission-img">
                    <div className="img">
                        <img src={mission} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Mission