import React from 'react';
import image from './j1.jpg';
class header extends React.Component{
    render(){
        return(
            <div>   
                 
                    <div class="div-2">
                        <h3>Resume</h3>
                    </div>
                    <div class="side">
                        <div class="div-3">
                            <b>Jayashree H Acharya</b><br/>
                            <b>Email:</b>jayaacharya1997@gmail.com<br/>
                            <b>Phone:</b>9741568375<br/>
                        </div>
                        <div class="div-4">
                            <img src={image}/>
                        </div>
                    </div>
                    <hr/><br/><br/>
            </div>
        )
    }
}
export default header