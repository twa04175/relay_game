import Head from "next/head";
import {useState} from "react";
import gameStyles from "../styles/Game.module.css";


export default function Game({data}) {

    let [users, SetUsers] = useState([{name:"", state:0}]);

    return (
        <div>
            <Head>
                <title>눈치보며 끝말잇기</title>
                <meta name="description" content="nextGame"/>
            </Head>
            <div className={gameStyles.container}>
                <div className={gameStyles.bodyContainer}>
                    <div className={gameStyles.gameContainer}>
                        <div className={gameStyles.block}>
                            <p className={gameStyles.blockNameText}>kkh</p>
                            <p className={gameStyles.blockValueText}>사과</p>
                            <p className={gameStyles.blockChainText}>1chain</p>
                        </div>
                    </div>
                    <div className={gameStyles.sideContainer}>
                        <div className={gameStyles.roomContainer}>
                            <p className={gameStyles.roomText}>ROOM{data[0].rid}</p>
                        </div>
                        <div className={gameStyles.secondContainer}>
                            <p className={gameStyles.secText}>{data[0].state == 0 ? "Ready":"sec"}</p>
                        </div>
                        <div className={gameStyles.nameContainer}>
                            <ul className={gameStyles.nameList}>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                            </ul>
                            <ul className={gameStyles.nameList}>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                                <li className={gameStyles.nameText}>kkh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={gameStyles.footerContainer}>
                    <p className={gameStyles.inputText}>입력 : </p>
                    <input className={gameStyles.textInput}/>
                    <p className={gameStyles.enterText}>enter</p>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps({query}) {

    // Fetch data from external API
    const userRes = await fetch(`http://localhost:3005/users/join?name=`+query.name);
    const userData = await userRes.json();

    const roomRes = await fetch(`http:/localhost:3005/room/get?rid=`+userData.rid);
    const data = await roomRes.json();
    console.log(data);

    // Pass data to the page via props
    return {props: {data}}
}