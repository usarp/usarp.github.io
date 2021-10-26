import React from 'react'
import {Col , Image, Container, Row} from 'react-bootstrap'
import img from '../../assets/time/teste.jpg'
import './style.scss'

export default function SectionTime() {
    return (

        <section id="time">

            <div className="container">

                <div className="row">

                        <h1 className="fw-bold text-primary"> TIME </h1>
                    </div>

                    <div className="col-12 mt-3">
                    <Container>
                        <Row className='justify-content-center'>
                        <Col xs={6} md={4} className='text-center'>
                                <div className='box mx-auto'>
                                    <Image className='w-100' src={img} />
                                </div>
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>
                            </Col>
                            <Col xs={6} md={4} className='text-center'>
                                <div className='box mx-auto'>
                                    <Image className='w-100' src={img} />
                                </div>
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>
                            </Col>
                            <Col xs={6} md={4} className='text-center'>
                                <div className='box mx-auto'>
                                    <Image className='w-100' src={img} />
                                </div>
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center pt-0 pt-md-5">
                            <Col xs={6} md={4} className='text-center'>
                                <div className='box mx-auto'>
                                    <Image className='w-100' src={img} />
                                </div>
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>
                            </Col>
                            <Col xs={6} md={4} className='text-center'>
                                <div className='box mx-auto'>
                                    <Image className='w-100' src={img} />
                                </div>
                                    <p className="mb-0 fs-5 fw-bold">Maria</p>
                                    <p className="text-muted">Descrition</p>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>

        </section>
        
    )
}