import React, { useState } from 'react'
import "./styles.scss"

export default function SectionHistory() {

    const [timeline] = useState([
        {
            title: "Surgimento",
            text: "A ideia inicial do USARP surgiu a partir de uma revisão da literatura sobre elicitação e especificação de requisitos de usabilidade, onde observou- se que(i) user stories têm sido adotadas para especificar requisitos de usabilidade; (ii) existem guidelines baseados em questões para elicitação de requisitos de usabilidade; (iii) personas podem auxiliar a compreender as necessidades e preferências de usuários e, assim apoiar a elicitação de requisitos de usabilidade. Decidiu - se então sugerir o uso combinado de diferentes estratégias (personas, user stories e guidelines de usabilidade) para fornecer um método com maior direcionamento na elicitação de requisitos de usabilidade.\n\nA primeira versão da USARP foi resultado do Trabalho de Conclusão de Curso do estudante Gabriel Fonseca de Oliveira Júnior, sob orientação da Profa.Anna Beatriz Marques e colaboração da doutoranda Bruna Moraes Ferreira. Para a condução da pesquisa, utilizou - se a metodologia de Design Science Research por ser uma metodologia direcionada ao desenvolvimento de artefatos que podem resolver problemas reais. A USARP foi avaliada por meio de um estudo de viabilidade e os resultados do estudo possibilitaram a evolução da proposta inicial."
        },
        {
            title: "Evolução",
            text: "Os resultados do estudo de viabilidade da primeira versão da USARP indicaram que a principal dificuldade no uso combinado das estratégias era compreender as guidelines de usabilidade e aplica- las às histórias de usuário. Os participantes do estudo de viabilidade sugeriram simplificar as guidelines de usabilidade e criar cartas que pudessem ser usadas pela equipe em uma reunião para discussão sobre os requisitos. Seguindo esta proposta, a USARP 2.0 foi criada com a proposta de três tipos de cartas: (i) mecanismos de usabilidade, que fornece uma descrição de cada mecanismo de usabilidade considerado pelo método; (ii) requisitos de usabilidade, que contém questões a serem discutidas pela equipe para definir se um determinado mecanismo de usabilidade é aplicável e relevante para um conjunto de histórias de usuário; e(iii) prototipação, que contém questões sobre como o mecanismo de usabilidade será fornecido pela interface de usuário.As cartas podem ser adotadas em sessões de brainstorming nas quais o time discute sobre um conjunto de histórias de usuário e analisa cada mecanismo de usabilidade com base nas questões fornecidas."
        },
        {
            title: "Onde Estamos",
            text: "A USARP 2.0 está sendo adotada em projetos no ambiente acadêmico e na indústria de software.Espera - se que os resultados obtidos possam fornecer possibilidades de evolução do método e/ ou encorajar sua adoção pela comunidade de Engenharia de Software e Interação Humano - Computador."
        }
    ])

    return (

        <section id="history">

            <div className="container">

                <div className="row">

                    <div className="col-12">
                        <h1 className="fw-bold text-primary"> HISTÓRIA </h1>
                    </div>

                    <div className="col-12 mt-3 timeline">

                        {
                            timeline.map((item, index) => {
                                
                                return (

                                    <div className="row timeline-item" key={index} >
                                        
                                        <div className="line"></div>

                                        <div className={index % 2 === 0 ? 'col col-md-6 ms-auto ps-5' : 'col col-md-6 text-md-end me-md-auto ps-5 ps-md-0 pe-md-5'} >

                                            <h6 className="text-uppercase mb-5 mt-2 mt-md-3" > {item.title} </h6>

                                            <p className="mb-5"> {item.text} </p>

                                        </div>

                                    </div>

                                )

                            })
                        }

                    </div>

                </div>

            </div>

        </section>

    )
}