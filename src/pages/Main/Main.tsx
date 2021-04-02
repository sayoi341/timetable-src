import React, { FC, useState} from "react";

import "./Main.module.scss";

import ClassProgram from "../../data/ClassProgram.json";
import MajorProgram from "../../data/MajorProgram.json";
import MinerProgram from "../../data/MinerProgram.json";

const Main:FC = () => {

    const  [Class, setClass] = useState("1");
    const [Major, setMajor] = useState("MM");
    const [Miner, setMiner] = useState("G");

    return (
        <>
            <table className={"table is-bordered is-striped is-narrow is-hoverable"}>
                <thead>
                    <tr>
                        <th>時間</th>
                        <th>月曜日</th>
                        <th>火曜日</th>
                        <th>水曜日</th>
                        <th>木曜日</th>
                        <th>金曜日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>{ClassProgram[Class]["Monday"]["1"]["main"]}</th>
                        <th>{ClassProgram[Class]["Tuesday"]["1"]["main"]}</th>
                        <th>{ClassProgram[Class]["Wednesday"]["1"]["main"]}</th>
                        <th>{ClassProgram[Class]["Thursday"]["1"]["main"]}</th>
                        <th>{MajorProgram[Major]["Friday"]["1"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>{ClassProgram[Class]["Monday"]["2"]["main"]}</th>
                        <th>{ClassProgram[Class]["Tuesday"]["2"]["main"]}</th>
                        <th>{ClassProgram[Class]["Wednesday"]["2"]["main"]}</th>
                        <th>{ClassProgram[Class]["Thursday"]["2"]["main"]}</th>
                        <th>{MajorProgram[Major]["Friday"]["2"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>{ClassProgram[Class]["Monday"]["3"]["main"]}</th>
                        <th>{ClassProgram[Class]["Tuesday"]["3"]["main"]}</th>
                        <th>{ClassProgram[Class]["Wednesday"]["3"]["main"]}</th>
                        <th>{ClassProgram[Class]["Thursday"]["3"]["main"]}</th>
                        <th>{MinerProgram[Miner]["Friday"]["3"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>{ClassProgram[Class]["Monday"]["4"]["main"]}</th>
                        <th>{ClassProgram[Class]["Tuesday"]["4"]["main"]}</th>
                        <th>{ClassProgram[Class]["Wednesday"]["4"]["main"]}</th>
                        <th>{ClassProgram[Class]["Thursday"]["4"]["main"]}</th>
                        <th>{MinerProgram[Miner]["Friday"]["4"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>{ClassProgram[Class]["Monday"]["5"]["main"]}</th>
                        <th>{ClassProgram[Class]["Tuesday"]["5"]["main"]}</th>
                        <th>{MajorProgram[Major]["Wednesday"]["5"]["main"]}</th>
                        <th>{MajorProgram[Major]["Thursday"]["5"]["main"]}</th>
                        <th>{MajorProgram[Major]["Friday"]["5"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>{ClassProgram[Class]["Monday"]["6"]["main"]}</th>
                        <th>{ClassProgram[Class]["Tuesday"]["6"]["main"]}</th>
                        <th>{MajorProgram[Major]["Wednesday"]["6"]["main"]}</th>
                        <th>{MajorProgram[Major]["Thursday"]["6"]["main"]}</th>
                        <th>{MajorProgram[Major]["Friday"]["6"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>{ClassProgram[Class]["Monday"]["7"]["main"]}</th>
                        <th>{}</th>
                        <th>{MajorProgram[Major]["Wednesday"]["7"]["main"]}</th>
                        <th>{MajorProgram[Major]["Thursday"]["7"]["main"]}</th>
                        <th>{MajorProgram[Major]["Friday"]["7"]["main"]}</th>
                    </tr>
                    <tr>
                        <th>8</th>
                        <th>{}</th>
                        <th>{}</th>
                        <th>{MajorProgram[Major]["Wednesday"]["8"]["main"]}</th>
                        <th>{MajorProgram[Major]["Thursday"]["8"]["main"]}</th>
                        <th>{MajorProgram[Major]["Friday"]["8"]["main"]}</th>
                    </tr>
                </tbody>
            </table>

            <h1>クラス</h1>
            <div className="select">
                <select defaultValue={Class} name="Class" onChange={event =>{
                    if (5 >= Number(event.target.value) && Number(event.target.value) >= 1){
                        setClass(event.target.value)
                    }
                }} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>



            <h1>主専攻</h1>
            <div className="select">
                <select defaultValue={Major} name="Major"  onChange={event =>{
                    if (event.target.value == "MM" || event.target.value == "MS" || event.target.value == "E" || event.target.value == "I" || event.target.value == "C"){
                        setMajor(event.target.value)
                    }
                }} >
                    <option value="MM">MM</option>
                    <option value="MS">MS</option>
                    <option value="E">E</option>
                    <option value="I">I</option>
                    <option value="C">C</option>
                </select>
            </div>

            <h1>副専攻</h1>
            <div className="select">
                <select defaultValue={Miner} name="Miner" onChange={event =>{
                    if (event.target.value == "G" || event.target.value == "M" || event.target.value == "E" || event.target.value == "I" || event.target.value == "C"){
                        setMiner(event.target.value)
                    }
                }}>
                    <option value="G">G</option>
                    <option value="M">M</option>
                    <option value="E">E</option>
                    <option value="I">I</option>
                    <option value="C">C</option>
                </select>
            </div>
        </>
    )
}

export default Main;
