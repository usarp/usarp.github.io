import React from 'react'
import alex from '../../assets/img/team/Alex.jpg'
import ana from '../../assets/img/team/Ana.jpg'
import liliane from '../../assets/img/team/Liliane.jpg'
import mavi from '../../assets/img/team/Mavi.jpeg'
import victor from '../../assets/img/team/Victor.jpg'
import natalia from '../../assets/img/team/Natália.jpg'
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
                                        <img className='w-100' src={alex} />
                                    </div>
                                    
                                    <p className="mb-0 fs-5 fw-bold">Alex Alan</p>
                                    <p className="text-muted">Estudante de Engenharia de Software na Universidade Federal do Ceará. Pesquisador de Interação Humano Computador, interessado em Data Science, Engenharia de Software e Testes de Software</p>
                                    
                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={ana} />
                                    </div>
                                    
                                    <p className="mb-0 fs-5 fw-bold">Ana Beatriz</p>
                                    <p className="text-muted">Profa. Dra. Anna Beatriz Marques é coordenadora do projeto USINN e orienta a pesquisa sobre elicitação de requisitos de usabilidade, que resultou na técnica USARP. Anna Beatriz atua na área de IHC, com ênfase no design e avaliação de sistemas interativos com foco na usabilidade, experiência do usuário e acessibilidade.</p>

                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={liliane} />
                                    </div>
                                    
                                    <p className="mb-0 fs-5 fw-bold">Liliane</p>
                                    <p className="text-muted">Estudante de Engenharia de Software na Universidade Federal do Ceará. Atuou como desenvolvedora no núcleo de soluções em software (N2S). E agora atuante como desenvolvedora front-end e back-end no projeto USINN.</p>

                                </div>
                            </div>

                            <div className="row justify-content-center pt-0 pt-md-5">
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={mavi} />
                                    </div>

                                    <p className="mb-0 fs-5 fw-bold">Maria Vitória</p>
                                    <p className="text-muted">Descrition</p>

                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={natalia} />
                                    </div>

                                    <p className="mb-0 fs-5 fw-bold">Natália</p>
                                    <p className="text-muted">Descrition</p>

                                </div>
                                <div className='col-6 col-md-4 text-center'>

                                    <div className='box mx-auto'>
                                        <img className='w-100' src={victor} />
                                    </div>

                                    <p className="mb-0 fs-5 fw-bold">Victor</p>
                                    <p className="text-muted">Estudante de Engenharia de Software na Universidade Federal do Ceará. Estudante de UX|UI Designer e interação humano computador.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    )
}