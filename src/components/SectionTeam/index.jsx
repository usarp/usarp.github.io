import React from 'react'
import img from '../../assets/time/teste.jpg'
import './style.scss'

export default function SectionTeam() {
    return (

        <section id="team">

            <div className="container">

                <div className="row">

                    <h1 className="fw-bold text-primary"> TIME </h1>
                    
                    <div className="col-12 mt-3">
                        <div className="container">
                            <div className='row justify-content-center'>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={img} />
                                    </div>
                                    
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>
                                    
                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={img} />
                                    </div>
                                    
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>

                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={img} />
                                    </div>
                                    
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>

                                </div>
                            </div>

                            <div className="row justify-content-center pt-0 pt-md-5">
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={img} />
                                    </div>

                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>

                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={img} />
                                    </div>

                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    )
}