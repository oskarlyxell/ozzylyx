import React, { Component } from 'react'
import Navbar from './Navbar'
import logo from "./profilbild.png";
import Boiler from "./boiler.png";
import Murloc from "./murloc_mayhem.png";
import spsm from "./SPSM.png";
import sverigesradio from "./radio.jpg";
import cgi from "./Screenshot_1.png";
import orginal from "./scissors.png";

export default class Experiences extends Component {

   

    
    render() {
        return (
            <div className="header-wraper">
                <Navbar/>

                <div className="experience">

                    <div className="exp">
                        <img className="bilder" src={Boiler} width="266" height="150"/>
                        <div className="text">
                            <h2>BoilerScan</h2>
                            <p>
                                A project where in a project group of three were given the task to create a website where the company 
                                can upload files like customer reports to their customers.
                            </p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={Murloc} width="150" height="150"/>
                        <div className="text">
                            <h2>Murloc Mayhem</h2>
                            <p>This is a project written in Java. It is an anti tower defense game where you attack with murlocs, scuttlecrabs and teleporters.</p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={sverigesradio} width="150" height="150"/>
                        <div className="text">
                            <h2>Sveriges radio</h2>
                            <p>A radio application written in Java with Java Swing as GUI. The program uses Sveriges radios API to show channels and programs.</p>
                        </div>
                    </div>

                    
             </div>
             <div className="experience2">
                    <div className="exp">
                        <img src={cgi} width="150" height="150"/>
                        <div className="text">
                            <h2>CGI</h2>
                            <p>
                                In a project group of five people we were given the task to bring CGI a concept. A concept of how to include 
                                children that are abscent from school because of a disease for example cancer. This project is on going.
                            </p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={spsm} width="150" height="150"/>
                        <div className="text">
                            <h2>SPSM</h2>
                            <p>A project to update SPSM's website. We were given the task to bring them a prototype of a potential outcome.</p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={orginal} width="150" height="150"/>
                        <div className="text">
                            <h2>The Originals</h2>
                            <p>
                                A website for a barber shop booking service. I created the because I wanted to make a in my opinion poor website better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
