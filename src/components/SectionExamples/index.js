import React, { useState } from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';
import { getCardByKey } from '../../resources/cards'

export default function SectionExamples() {

    const [steps] = useState([
        { 
            title: "Preparação",
            text: "Nesta etapa, a equipe deve produzir as personas que representam o público-alvo do sistema e selecionar as user stories que serão enriquecidas com aspectos de usabilidade.\n\nÉ importante que seja definido uma pessoa mediadora para as sessões de brainstorming. Esta pessoa mediadora irá preparar o material de cada sessão(personas, user stories e cartas) e definir um cronograma para todas as sessões de brainstorming necessárias para discutir todas as histórias de usuário selecionadas. Sugere - se que em cada sessão sejam discutidas histórias de usuário relacionadas.\n\nCaso a equipe esteja trabalhando remotamente, a ferramenta Miro, Jamboard ou Figma podem ser utilizadas para criar um quadro virtual e colaborativo com os artefatos que serão usados na sessão de brainstorming. Desta forma, todos do time conseguirão visualizar os artefatos e contribuir na discussão."
        },
        { 
            title: "Execução",
            text: "Durante o brainstorming com a USARP, a pessoa mediadora explica o objetivo da sessão, apresenta os artefatos que serão considerados(personas e histórias de usuário) e inicia a leitura das questões de cada carta.A resposta para cada questão deve ser registrada de modo que todos do time consigam visualizar e validar a decisão tomada.Com base em nossa experiência, realizar sessões com pessoas de diferentes perfis(design, requisitos, desenvolvimento, testes, etc) contribui para uma discussão mais rica e auxilia na tomada de decisão, pois permite analisar com mais segurança a viabilidade de uma determinada decisão."
        },
        { 
            title: "Documentação",
            text: "Todos os aspectos de usabilidade considerados relevantes para as histórias de usuário devem ser documentados para que sua implementação seja monitorada ao longo do processo de desenvolvimento.Sugere - se a adoção do template 3C de história de usuário que propõe três componentes: (i) o cartão com o texto, (ii) a conversa para detalhar melhor a estória e a(iii) verificação por meio de confirmação.A conversa ocorre por meio da troca de ideias e opiniões entre os clientes e a equipe de desenvolvimento.Assim, os aspectos de usabilidade podem ser registrados como um campo adicional na história de usuário."
        },
    ]);

    const [firsthovered, setFirstHovered] = useState(false);
    const toggleFirstHover = () => { setFirstHovered(!firsthovered); toggleSecondHover() };

    const [secondHovered, setSecondHovered] = useState(true);
    const toggleSecondHover = () => {setSecondHovered(!secondHovered)};

    const [thirdHovered, setThirdHovered] = useState(false);
    const toggleThirdHover = () => { setThirdHovered(!thirdHovered); toggleSecondHover() };


    return (

        <section id="examples">

            <div className="container">

                <div className="row">

                    <div className="col-12 col-md-4 mb-5">
                        <h1 className="fw-bold text-primary">COMO ADOTAR O USARP?</h1>

                        <p className="text-primary">
                            Veja alguns passos necessários para melhor entendimento de como aplicar a USARP em seu
                            contexto.
                        </p>

                        <section id="cards">

                                <div className="row">
        
                                    <div className="col-12">

                                        <div className="cards-examples d-flex justify-content-center align-items-center">

                                            <div 
                                                className={firsthovered ? 'card-example me-n2 hovered' : 'card-example me-n2'}
                                                onMouseEnter={toggleFirstHover}
                                                onMouseLeave={toggleFirstHover}>

                                                <img className="img-fluid" src={getCardByKey('M1').img} alt={getCardByKey('M1').name} />

                                            </div>

                                            <div 
                                                className={secondHovered ? 'card-example hovered' : 'card-example'}>

                                                <img className="img-fluid" src={getCardByKey('M2').img} alt={getCardByKey('M2').name} />

                                            </div>
                
                                            <div 
                                                className={thirdHovered ? 'card-example ms-n2 hovered' : 'card-example ms-n2'}
                                                onMouseEnter={toggleThirdHover}
                                                onMouseLeave={toggleThirdHover}>

                                                <img className="img-fluid" src={getCardByKey('M3').img} alt={getCardByKey('M3').name} />

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                
                        </section>



                    </div>

                    <div className="col-12 col-md">

                        <div className="box-examples p-3 p-md-4">

                            <div className="box-examples-content">

                                <p className="text-center">EXEMPLO</p>

                                {
                                    steps.map((step, index) => {
                                        return (
                                            <div className="h-25 mb-5" key={index}>
                                                <p className="fw-bold"> { step.title } </p>
                                                <p> {step.text} </p> 
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}