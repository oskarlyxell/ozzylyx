import React, { Component } from 'react'
import Navbar from './Navbar'
import logo from "./profilbilden.png";

export default class aboutMe extends Component {
    render() {
        return (
            <div className="header-wraper">
                <Navbar/>
                <div className="wrapIt">
                <main className="aboutme">
                    <div className="p-10 lg:pt-48 container mx-auto relative">
                        <section className="bg-orange-800 rounded-lg shadow-2xl lg:flex p-20">
                            <div className="title">
                                <img className="profilepic" src={logo} width="300" height="300"/>
                                <h1>Hi, I'm Oskar Lyxell!</h1>
                            </div> 
                            <div className="description">
                                <h4>I am currently a student at Umeå University and a future graduate from the master program 
                                    interaction and design. My program focuses on front end development. However, my ambition is to graduate as a 
                                    candidate in data science aswell. My strengths are problem solving and to work in a team.

                                </h4>
                            </div>
                        </section>

                    </div>

                </main>
                </div>
            </div>
        )
    }
}
