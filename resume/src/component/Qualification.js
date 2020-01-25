import React from 'react';

class qualification extends React.Component{
    render(){
        return(
            <div>
                <div class="div-6">
                    <b>EDUCATION QUALIFICATION:</b><br/><br/>
                    <table>
                        <tr>
                            <th>Qulification</th>
                            <th>Name of the Institute</th>
                            <th>Year of passing</th>
                            <th>Percentage/CGP</th>
                        </tr>
                        <tr>
                            <td>MCA</td>
                            <td>NMAM Institute of Techonology, Nitte</td>
                            <td>2020</td>
                            <td>7.5</td>
                        </tr>
                        <tr>
                            <td>BCA</td>
                            <td>Govinda Dasa First Grade College, Surathkal</td>
                            <td>2018</td>
                            <td>71.5%</td>
                        </tr>
                        <tr>
                            <td>PUC (PCMS)</td>
                            <td>Govinda Dasa PU College, Surathkal</td>
                            <td>2015</td>
                            <td>64%</td>
                        </tr>
                        <tr>
                            <td>SSLC</td>
                            <td>Vidyadayinee Englisg Medium School, Surathkal</td>
                            <td>2013</td>
                            <td>68%</td>
                        </tr>
                    </table><br/>
                </div>
                <hr/><br/><br/>
            </div>
        )
    }
}
export default qualification