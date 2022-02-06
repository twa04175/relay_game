import Head from "next/head";


export default function Game({data}) {



    return (
        <div>
            <Head>
                <title>눈치보며 끝말잇기</title>
                <meta name="description" content="nextGame"/>
            </Head>
            <div style={gameStyles.container}>
                <div style={gameStyles.bodyContainer}>
                    <div style={gameStyles.gameContainer}>
                        <div style={gameStyles.block}>
                            <p style={gameStyles.blockNameText}>kkh</p>
                            <p style={gameStyles.blockValueText}>사과</p>
                            <p style={gameStyles.blockChainText}>1chain</p>
                        </div>
                    </div>
                    <div style={gameStyles.sideContainer}>
                        <div style={gameStyles.roomContainer}>
                            <p style={gameStyles.roomText}>ROOM{data[0].rid}</p>
                        </div>
                        <div style={gameStyles.secondContainer}>
                            <p style={gameStyles.secText}>{data[0].state == 0 ? "Ready":"sec"}</p>
                        </div>
                        <div style={gameStyles.nameContainer}>
                            <ul style={gameStyles.nameList}>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                            </ul>
                            <ul style={gameStyles.nameList}>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                                <li style={gameStyles.nameText}>kkh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={gameStyles.footerContainer}>
                    <p style={gameStyles.inputText}>입력 : </p>
                    <input style={gameStyles.textInput}/>
                    <p style={gameStyles.enterText}>enter</p>
                </div>
            </div>
        </div>
    );
}

let gameStyles = {
    container: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "block",
    },

    bodyContainer: {
        backgroundColor: "black",
        display: "flex",
    },

    gameContainer: {
        width: "65vw",
        height: "85vh",

        background: "black",
        border: "0.5vw solid #94FF28",
        boxSizing: "border-box",
        boxShadow: "5px 5px 5px rgba(148, 255, 40, 0.49)",
        margin: "1vw",

        display: "block",
    },

    block:{
        width: "62vw",
        height: "10vh",
        background: "#7AFFAF",
        margin: "0.9vw",
        boxShadow: "5px 5px 5px rgba(148, 255, 40, 0.49)",
        display: "flex",
    },

    blockValueText:{
        width: "44vw",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "4vw",
        color: "black",
        textAlign: "center",
        alignSelf: "center",
    },

    blockChainText:{
        width:"10vw",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "2vw",
        color: "#FD2020",
        textAlign:"right",
        lineHeight: "8vh",
    },

    blockNameText:{
        width: "10vw",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "2vw",
        color: "gray",
        textAlign:"self",
        lineHeight: "5vh",
        margin: "0.5vw",
    },

    sideContainer: {
        width: "31vw",
        height: "85vh",

        display: "block",
    },

    roomContainer:{
        width: "31vw",
        height: "12vh",

        background: "black",
        border: "0.5vw solid #94FF28",
        boxSizing: "border-box",
        boxShadow: "5px 5px 5px rgba(148, 255, 40, 0.49)",
        marginTop: "1vw",
    },

    secondContainer:{
        width: "31vw",
        height: "30vh",

        background: "black",
        border: "0.5vw solid #94FF28",
        boxSizing: "border-box",
        boxShadow: "5px 5px 5px rgba(148, 255, 40, 0.49)",
        marginTop: "1vw",
    },

    nameContainer:{
        width: "31vw",
        height: "39.5vh",

        background: "black",
        border: "0.5vw solid #94FF28",
        boxSizing: "border-box",
        boxShadow: "5px 5px 5px rgba(148, 255, 40, 0.49)",
        marginTop: "1vw",

        alignContent:"center",

        display: "flex",
    },

    footerContainer: {
        background: "black",
        border: "0.5vw solid #94FF28",
        boxSizing: "border-box",
        boxShadow: "10px 10px 20px rgba(148, 255, 40, 0.49)",
        backdropFilter: "blur(5px)",
        marginLeft: "1vw",
        display: "flex",
        width: "97vw",
        height: "10vh",
    },

    inputText: {
        color: "white",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "2.7vw",
        marginLeft: "1vw",
        marginTop: "0px",
        marginBottom: "0px",
        alignSelf: "center",
        width: "7vw",
    },

    textInput: {
        width: "80vw",
        background: "black",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "2.6vw",
        textAlign: "left",
        color: "white",
        border: "none",
        marginLeft: "1vw",
    },

    enterText: {
        width: "10vw",
        color: "gray",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "2.6vw",
        marginRight: "1vw",
        marginTop: "0px",
        marginBottom: "0px",
        alignSelf: "center",
        textAlign: "right",
    },

    roomText:{
        margin: 0,
        padding: 0,

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "3vw",
        color: "#94FF28",

        textAlign:"center",
        alignSelf:"center",
        lineHeight: "11vh",
    },

    secText:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "6vw",
        color: "#BBFFC2",

        textAlign:"center",
        alignSelf:"center",
        lineHeight: "6vh",
    },

    nameList:{
        width: "12vw",
        marginLeft: "1vw",
    },

    nameText:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "3vw",
        color: "#94FF28",
    },
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