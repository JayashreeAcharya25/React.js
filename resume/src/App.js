import React from 'react';
import Header from './component/Header';
import Objective from './component/Objective';
import Qualification from './component/Qualification';
import Projects from './component/Projects';
import Skills from './component/Skills';
import OtherQ from './component/OtherQualification';
import Achievements from './component/Achievements';
import Qualities from './component/Qualities';
import Details from './component/Details';

class app extends React.Component{
  render(){
    return(
      <div>
        <form class="form-1">
            <Header></Header>
            <Objective></Objective>
            <Qualification></Qualification>
            <Projects></Projects>
            <Skills></Skills>
            <OtherQ></OtherQ>
            <Achievements></Achievements>
            <Qualities></Qualities>
            <Details></Details>
         </form>
      </div>
    )
  }
}
export default app;