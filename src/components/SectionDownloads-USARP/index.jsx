import React from 'react'
import cartas_usarp from '../../assets/img/materials/cartas_usarp.png';
import checklist from '../../assets/img/materials/checklist.png';
import board_figma from '../../assets/img/materials/board_figma.png';
import first_article from '../../assets/img/materials/first_article.png';
import second_article from '../../assets/img/materials/second_article.png';
import third_article from '../../assets/img/materials/third_article.png';
import fourth_article from '../../assets/img/materials/fourth_article.png';
import first_tcc from '../../assets/img/materials/first_tcc.png';
import second_tcc from '../../assets/img/materials/second_tcc.png';
import './index.scss'
export default function SectionDownloadsUSARP() {
    
    return(
        
    <main>
        <section id="cards">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fw-bold text-primary"> CARTAS, CHECKLIST & BOARD </h3>
                    </div>     
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={cartas_usarp} className="img-fluid rounded-start" alt="..."/>
                                 </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 classNames="card-title">Cartas USARP</h5>
                                        <p className="card-text">Faça o download das cartas USARP atualizadas.</p>
                                        <p className="card-text"><small className="text-muted">Ultima atualização: 23/05/2023</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="/USARP_Cartas_v2.pdf" target="_blank" className="btn btn-outline-primary mx-2 my-3">DOWNLOAD PDF</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={checklist} className="img-fluid rounded-start" alt="..."/>
                                 </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 classNames="card-title">Checklist USARP</h5>
                                        <p className="card-text">Faça o download do checklist USARP.</p>
                                        <p className="card-text"><small className="text-muted">Ultima atualização: 31/05/2023</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="/Cheklist_USARP_PTBR.pdf" target="_blank" className="btn btn-outline-primary mx-2 my-3">DOWNLOAD PDF</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={board_figma} className="img-fluid rounded-start" alt="..."/>
                                 </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 classNames="card-title">Board Figma</h5>
                                        <p className="card-text">Acesse o Board para ter mais contre de suas ações com as cartas USARP e o checklist.</p>
                                        <p className="card-text"><small className="text-muted">Ultima atualização: 30/05/2023</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://www.figma.com/file/PeVFtfWHRBVTSFwhfaaGLK/Untitled?type=whiteboard&node-id=0%3A1&t=bAuDARYD8K1iBPIy-1" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O BOARD</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="artigos">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fw-bold text-primary"> ARTIGOS & TCC's </h3>
                    </div>     
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={first_article} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h6 classNames="card-title">Integrando técnicas de IHC e Engenharia de Software na especificação de requisitos de uma ferramenta de modelagem</h6>
                                        <p className="card-text tamanho"><small className="text-muted">Autores: Anna Beatriz Marques, Alex Alan Santos, Maria Victoria Fiori, Natalia Coelho e Victor Feitosa</small></p>
                                        <p className="card-text"><small className="text-muted">Publicado em: 17/10/2022</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://sol.sbc.org.br/index.php/ihc_estendido/article/view/22033" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O ARTIGO</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={second_article} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h6 classNames="card-title">Enriching user stories with usability features in a remote agile project: a case study</h6>
                                        <p className="card-text tamanho"><small className="text-muted">Autores: Anna Beatriz Marques, Alex Felipe Costa Santos, Ismayle Santos e  Rossana Andrade</small></p>
                                        <p className="card-text"><small className="text-muted">Publicado em: 07/11/2022</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://dl.acm.org/doi/abs/10.1145/3571473.3571496?casa_token=P0A4yiebffsAAAAA:W3ygUerf1U4ajVJhNsSn2Wt65to7VA_E-oZFg6lMYfU9HZl4CCCCGPFHVPoAhUGfoukQbyAohMowuQ" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O ARTIGO</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={third_article} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h6 classNames="card-title">Inserindo um olhar de IHC no ensino de Engenharia de Requisitos: um relato de experiência</h6>
                                        <p className="card-text tamanho"><small className="text-muted">Autores: Anna Beatriz Marques, Alex Alan Santos e Maria Elanne Mendes</small></p>
                                        <p className="card-text"><small className="text-muted">Publicado em: 17/10/2022</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://sol.sbc.org.br/index.php/weihc/article/view/22853" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O ARTIGO</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={fourth_article} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h6 classNames="card-title">USARP method: eliciting and describing USAbility Requirements with Personas and user stories</h6>
                                        <p className="card-text tamanho"><small className="text-muted">Autores: Anna Beatriz Marques, Bruna Ferreira e Gabriel F. de Oliveira</small></p>
                                        <p className="card-text"><small className="text-muted">Publicado em: 21/10/2022</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://dl.acm.org/doi/abs/10.1145/3422392.3422435?casa_token=H4TOZxa0efMAAAAA:dkeMEuPL88_IqX69-XWeI6HcmRQX_PxWpM91UXZO7bPlv1ek3Rl3LU9jeJmRWCY1KuaAyAGEic_ROQ" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O ARTIGO</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={first_tcc} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h6 classNames="card-title">Uso da técnica USARP para elicitação de requisitos de usabilidade e prototipação: um estudo de caso no contexto acadêmico</h6>
                                        <p className="card-text tamanho"><small className="text-muted">Autora: Maria Victoria Soares | Orientação: Anna Beatriz Marques</small></p>
                                        <p className="card-text"><small className="text-muted">Publicado em: 2022</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://repositorio.ufc.br/handle/riufc/70283" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O TCC</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <div className="card style_card">
                            <div className="row g-0 align-items-stretch flex-fill">
                                <div className="col-md-4" style={{"object-fit": "cover"}}>
                                    <img src={second_tcc} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                        <div className="card-body">
                                        <h6 classNames="card-title">Utilizando a Técnica USARP com equipes trabalhando remotamente: um estudo de caso na indústria</h6>
                                        <p className="card-text tamanho"><small className="text-muted">Autora: Joyce da Silva Simões | Orientação: Anna Beatriz Marques</small></p>
                                        <p className="card-text"><small className="text-muted">Publicado em: 2022</small></p>
                                            <div className="col-12 text-center mt-2 d-flex flex-column">
                                                <a href="https://repositorio.ufc.br/handle/riufc/70294" target="_blank" className="btn btn-outline-primary mx-2 my-3">ACESSE O TCC</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </main>         
    )
}