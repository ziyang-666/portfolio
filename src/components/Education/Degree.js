import React from "react";

import "./degree.css";
import image from "../asset/uptu_logo.png";

function Degree(props) {

    let color=props.theme.color;
    let myStyle = {
        boxShadow: "1px 1px 5px "+color,
        borderBottom: "1px solid "+color,
        borderLeft: "1px solid "+color,
        borderRight: "1px solid "+color
    }

    return (
        <div className="degree">
            <div id="title">
                Degree Pursuing
            </div>
            <div className="degree-card">
                <div id="img">
                    <img src={image} alt="degree" srcset="" />
                </div>
                <div className="degree-wrapper" style={myStyle}>
                    <div className="degree-info" style={{color:"purple"}}>
                        <div id="course-duration">2021 - Present</div>
                        <div id="college-name">Rajkiya Engineering College, Ambedkar Nagar</div>
                        <div id="course">B.Tech in Information Technology</div>
                    </div>
                    <div className="details">
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Degree;