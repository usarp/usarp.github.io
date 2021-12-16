import React, {useState} from 'react'
import alex from '../../assets/img/team/Alex.jpg'
import anna from '../../assets/img/team/Ana.jpg'
import bruna from '../../assets/img/team/BRUNAMORAES.jpeg'
import gabriel from '../../assets/img/team/GABRIELJUNIOR.jpeg'
import liliane from '../../assets/img/team/Liliane.jpg'
import mavi from '../../assets/img/team/Mavi.jpeg'
import victor from '../../assets/img/team/Victor.jpg'
import natalia from '../../assets/img/team/Natália.jpg'
import './style.scss'

export default function SectionTeam() {

    const [team] = useState([
        {
            name: 'Anna Beatriz Marques',
            photo: anna,
            description: 'Profa. Dra. Anna Beatriz Marques é coordenadora do projeto USINN e orienta a pesquisa sobre elicitação de requisitos de usabilidade, que resultou na técnica USARP. Anna Beatriz atua na área de IHC, com ênfase no design e avaliação de sistemas interativos com foco na usabilidade, experiência do usuário e acessibilidade'
        },
        {
            name: 'Gabriel Fonseca',
            photo: gabriel,
            description: 'Bacharelado em Engenharia de Software (UFC). Áreas de interesse: Engenharia de Software, IHC.'
        },
        {
            name: 'Bruna Moraes Ferreira',
            photo: bruna,
            description: 'Bacharelado em Ciência da Computação (UFAM), Mestrado em informática (UFAM). Áreas de interesse: Engenharia de Software, IHC, ciência de dados.'
        },
        {
            name: 'Alex Alan',
            photo: alex,
            description: 'Estudante de Engenharia de Software na Universidade Federal do Ceará. Pesquisador de Interação Humano Computador, interessado em Data Science, Engenharia de Software e Testes de Software'
        },
        {
            name: 'Liliane Silva',
            photo: liliane,
            description: 'Estudante de Engenharia de Software na Universidade Federal do Ceará. Atuou como desenvolvedora no núcleo de soluções em software (N2S). E agora atuante como desenvolvedora front-end e back-end no projeto USINN'
        },
        {
            name: 'Maria Victoria Fiori',
            photo: mavi,
            description: 'Estudante de Engenharia de Software, integrante do projeto de extensão Meninas Digitais do Vale e do projeto de pesquisa e inovação USINN: A USability- Oriented INteraction and Navigation model.Tenho interesse em pesquisas nas áreas de ensino com gamificação, experiência do usuário, usabilidade e qualidade de sistemas'
        },
        {
            name: 'Natália Lídia Coelho',
            photo: natalia,
            description: 'Estudante de Ciência da Computação na Universidade Federal do Ceará. Desenvolvedora Web no projeto USINN'
        },
        {
            name: 'Victor Coelho',
            photo: victor,
            description: 'Estudante de Engenharia de Software na Universidade Federal do Ceará. Estudante de UX|UI Designer e interação humano computador'
        }
    ])

    return (

        <section id="team">

            <div className="container">

                <div className="row">

                    <h1 className="fw-bold text-primary"> TIME </h1>
                    
                    <div className="col-12 mt-3">
                        <div className="container">

                            <div className='row justify-content-center'>

                                {
                                    team.map((item, index) => {
                                        return (

                                            <div key={index} className='col-6 col-md-4 py-3 text-center'>

                                                <div className='box mx-auto'>
                                                    <img className='w-100' src={item.photo} />
                                                </div>

                                                <p className="mb-0 fs-5 fw-bold"> { item.name } </p>
                                                <p className="text-muted team-description"> {item.description} </p>

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