import * as React from "react";
import "../style/Homelanding.scss";

import RockSiccorsPaper from "./RockSiccorsPaper";
const Homelanding = () => {
    return (
        <div>
            <div
                id="page1"
                className="hl-menu d-flex flex-column justify-content-center align-items-center "
            >
                <div className="row">
                    <h2>TOYBOX</h2>
                </div>
                <div className="hl-main">
                    <div className="icon center">
                        <img src="./toybox/box.png"></img>
                    </div>

                    <div className="icon sub a">
                        <a href="#page2">
                            <img src="./toybox/rsp.png"></img>
                        </a>
                    </div>
                    <div className="icon sub b">
                        <img src="./toybox/logo192.png"></img>
                    </div>
                    <div className="icon sub c">
                        <img src="./toybox/logo192.png"></img>
                    </div>
                    <div className="icon sub d">
                        <img src="./toybox/logo192.png"></img>
                    </div>
                </div>

                {
                    // <a href="/toybox/rsp">가위바위보 하러가기</a>
                }
            </div>
            <div id="page2" className="hl-menu d-flex align-items-center ">
                <div className="col-6 text-center text-white mx-auto">
                    <RockSiccorsPaper />
                </div>
            </div>
            <div id="page3" className="hl-menu">
                <p>page3</p>
            </div>
            <div id="sidebar">
                <ul className="p-0 mb-0">
                    <li>
                        <a href="#page1">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#page2">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#page3">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#page4">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#page5">
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="github">
                <img src="/toybox/github.png"></img>
            </div>
        </div>
    );
};

export default Homelanding;
