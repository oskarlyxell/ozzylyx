import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Contacts extends Component {

    user = {
        mail: 'mailto:lyxelloskar@gmail.com',
        teleNr: '+46706231553',
        facebook: 'https://www.facebook.com/oskar.lyxell',
        linkedin: 'https://www.linkedin.com/in/oskar-lyxell-899455161/'
    }
    


    render() {
        return (
            <div className="header-wraper">
                <Navbar/>

                <div className="contacts">
                    <h1>Oskar Lyxell</h1>

                    <table>
                        
                      
                        <th>
                            Mail
                        </th>
                        
                       
                        <td >
                            <a href="mailto:lyxelloskar@gmail.com">Mail me!</a>
                        </td>
                        

                    </table>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    
                    <a href="https://www.linkedin.com/in/oskar-lyxell-899455161/" class="fa fa-linkedin"></a>
                    <a href={this.user.facebook} class="fa fa-facebook"></a>
                    
                    
                    
                </div>
            </div>
        )
    }
}
