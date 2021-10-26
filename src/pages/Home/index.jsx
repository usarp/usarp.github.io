import React from 'react';
import SectionCards from '../../components/SectionCards/';
import SectionOverview from '../../components/SectionOverview/';
import SectionInicio from '../../components/SectionInicio/';
import SectionHistory from '../../components/SectionHistory/';
import SectionExamples from '../../components/SectionExamples/';
import SectionTime from '../../components/SectionTime/';
import Footer from '../../components/Footer/';

export default function Home() {
    
    return (
        <div>
            
            <SectionInicio/>    
        
            <SectionOverview/>

            <SectionHistory/>

            <SectionCards/>

            <SectionExamples/>
        
            <SectionTime/>

            <Footer/>

        </div>
    
    )
}
