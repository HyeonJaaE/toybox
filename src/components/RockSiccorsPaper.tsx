import React, { useState, useEffect, useDebugValue } from "react";

const HONEST = 101; // 0 ~ 101 => 0% ~ 100%

const getRandomInt = (n: number) => {
    return Math.floor(Math.random() * n);
};

const getStatus = (ud: any) => {
    return (
        <div>
            <p>
                {ud[0]} 승 {ud[1]} 무 {ud[2]} 패{" "}
            </p>
        </div>
    );
};

const RockSiccorsPaper = () => {
    const [reset, setReset] = useState(false);
    const [userData, setUserData] = useState([0, 0, 0]);
    const [info, setInfo] = useState({
        honesty: 0,
        choose: 0,
        done: false,
        result: -1,
    });

    useEffect(() => {
        setInfo({
            honesty: getRandomInt(HONEST),
            choose: getRandomInt(3),
            done: false,
            result: -1,
        });
    }, [reset]);

    useEffect(() => {
        //console.log("info", info);
        if (info.result !== -1) {
            var foo = userData;
            foo[info.result] += 1;
            setUserData([...foo]);
        }
    }, [info]);

    const handleClick = (e: any) => {
        if (!e.target.value) {
            return;
        }
        //console.log("내가 낸 것:", e.target.value);
        var lie = getRandomInt(101),
            newChoose = info.choose,
            res = 0;

        if (info.honesty >= lie) {
            //lie 가 honesty 보다 낮으면 거짓말
            //console.log("거짓말이다");
            while (info.choose === newChoose) {
                newChoose = getRandomInt(3);
            }
        }

        switch (e.target.value) {
            case "r":
                if (newChoose === 0) res = 1;
                if (newChoose === 1) res = 0;
                if (newChoose === 2) res = 2;
                break;
            case "s":
                if (newChoose === 0) res = 2;
                if (newChoose === 1) res = 1;
                if (newChoose === 2) res = 0;
                break;
            case "p":
                if (newChoose === 0) res = 0;
                if (newChoose === 1) res = 2;
                if (newChoose === 2) res = 1;
                break;
            default:
                break;
        }
        setInfo({
            honesty: info.honesty,
            choose: newChoose,
            done: true,
            result: res,
        });
    };

    const rspMsg = ["나 이번에 바위 낼꺼야~", "이번엔 가위 낼거야", "보자기 낼거야"];
    const rsp = ["바위", "가위", "보"];
    const msg = ["승리", "비김", "패배"];
    const bonobono = ["(⁻∞⁻)", "(・∞・)", "(❛ ∞ ❛)"];
    return (
        <div className="rsp">
            <div>
                <h1>보노보노랑 가위바위보하기</h1>
                <p>보노보노가 거짓말 했을 확률 {info.honesty}%</p>
                <h3>
                    {info.done ? (
                        <>
                            {bonobono[info.result]} {rsp[info.choose]}
                        </>
                    ) : (
                        <> (・∞・) :{rspMsg[info.choose]}</>
                    )}
                </h3>

                {info.done ? (
                    <p>
                        {msg[info.result]}
                        <br />
                        <button onClick={() => setReset(!reset)}>계속</button>
                        <br />
                    </p>
                ) : (
                    <p onClick={handleClick}>
                        나는 무얼 낼까 :
                        <br />
                        <br />
                        <button value="r">바위</button>
                        <button value="s">가위</button>
                        <button value="p">보</button>
                    </p>
                )}
                {getStatus(userData)}
            </div>
            <div>{/*
                <p>(❛∞❛)</p>
                <p>(⁻∞⁻)</p>
               */}</div>
        </div>
    );
};

export default RockSiccorsPaper;
