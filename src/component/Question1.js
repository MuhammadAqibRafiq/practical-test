import React from 'react'
import Section1 from './images/section1.png'
import Section2 from './images/section2.png';
import Section3 from './images/section3.svg';
import Section4 from './images/visual-design.svg';


import './page.css'

const Question1 = () => {

    return (
        <div>
            <div className='row__1'>
                <div className='col__1'>

                    <a href='#home' >go back</a>

                    <div className='col__1sub' >
                        <h1>Product Design</h1>

                        <p style={{ marginTop: '15px' }}>Our multifaceted apps are custom built and developed to support multiPle platforms including both Android and iOS making apps accessible for all</p>
                    </div>
                </div>

                <div className='col__2'>
                    <img src={Section1} width='100%' alt='' />
                </div>
            </div>



            <div className='row__2'>

                <div className='col__22'>
                    <img src={Section2} width='80%' alt='' />
                </div>

                <div className='col__21'>

                    <div className='col__21sub'>
                        <h1>More Than Visual design, More Than Interaction</h1>

                        <p style={{ marginTop: '15px' , marginRight:"20px" }}>
                            We take pride in our craft.Drawing on our deep expertise in design, our product
                            Design team cares for tour users experience over teh entire customer journey , at every
                            touchpoint with your company.
                        </p>
                        <p>
                            We take pride in our craft.Drawing on our deep expertise in design, our product
                            Design team cares for tour users experience over teh entire customer journey , at every
                            touchpoint with your company.
                        </p>
                    </div>
                </div>

            </div>



            <div className='row__3'>
                <h2>OUR DESIGN PROCESS</h2>
                <p style={{ marginTop: '15px' ,paddingLeft:'10px' }}>Every decesion we make is informed and goal oriented with user journey in ind . Designing with a</p>

            </div>




            <div className='row__5'>

                <h2>Product Design Services</h2>

                <div className='row__5btnmain'>

                    <div className='row__5btn'><p>User experience design</p></div>
                    <div className='row__5btn'><p>visual design</p></div>
                    <div className='row__5btn'><p>Proto Typing</p></div>
                    <div className='row__5btn'><p>Design system</p></div>
                    <div className='row__5btn'><p>Content design</p></div>
                    <div className='row__5btn'><p>Voice , chatbox </p></div>

                </div>

            </div>




            <div className='row__6'>

                <div className='col__61'>

                    <div className='col__61sub'>
                        <h1>User Experience Design</h1>

                        <p style={{ marginTop: '15px' }}>
                            Even after Product Strategy phase , we maintain a relentless focus on your business goals .
                            Our Product design team ensures the product we deliver will solve your challenge while metting your user's
                            needs.
                        </p>
                        <h4 style={{ marginTop: '15px' }}>Tactics</h4>
                        <p style={{ marginTop: '15px' }}>
                            Behaviour data analysis        Wireframe
                            Peronalization architecture    user Flow
                        </p>
                    </div>

                </div>


                <div className='col__62'>
                    <img src={Section3} width='80%' alt='' />
                </div>

            </div>



            <div className='row__7' style={{ marginBottom: '35px' }}>

                <div className='col__71'>
                    <img src={Section4} width='80%' alt='' />
                </div>

                <div className='col__72' >

                    <div className='col__72sub'>
                        <h1>Visual design</h1>

                        <p style={{ marginTop: '15px', marginRight:"20px" }}>
                            Yes we make your software product beautiful. We also make it easy-to-use
                            compiling and delightful.
                        </p>
                        <h4 style={{ marginTop: '15px', marginRight:"20px" }}>Tactics</h4>
                        <p style={{ marginTop: '15px', marginRight:"20px" }}>
                            Behaviour data analysis        Wireframe
                            Peronalization architecture    user Flow
                        </p>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Question1
