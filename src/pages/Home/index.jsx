import React from 'react';
import SectionCards from '../../components/SectionCards/';
import SectionOverview from '../../components/SectionOverview/';
import SectionStart from '../../components/SectionStart/';
import SectionHistory from '../../components/SectionHistory/';
import SectionExamples from '../../components/SectionExamples/';
import SectionTeam from '../../components/SectionTeam/';
import Footer from '../../components/Footer/';

export default function Home() {
    
    return (
        <div>
            
            <SectionStart/>    
        
            <SectionOverview/>

            <SectionHistory/>

            <SectionCards/>

            <SectionExamples/>
        
            <SectionTeam/>

            <Footer/>

        </div>
    
    )
}
