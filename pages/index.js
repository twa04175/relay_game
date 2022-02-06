import Head from 'next/head'

export default function Home() {



  return (
    <div style={homeStyles.container}>
      <Head>
        <title>눈치보며 끝말잇기</title>
        <meta name="description" content="nextGame" />
      </Head>
        <div style={homeStyles.leftLayer}>
            <p style={homeStyles.sideText}>L</p>
        </div>
        <div style={homeStyles.body}>
            <div>
                <p style={homeStyles.title}>눈치보며<br/>끝말잇기.io</p>
            </div>
                <input style={homeStyles.nameInput} type ="text" placeholder={"nickname"}/>
            <h1 style={homeStyles.joinText}>입장</h1>
        </div>
        <div style={homeStyles.rightLayer}>
            <p style={homeStyles.sideText}>R</p>
        </div>
    </div>
  )
}

let leftWidth = 5;
let rightWidth = 5;
let mainWidth = 90;

let homeStyles = {
    container:{
        margin: 0,
        padding: 0,
        display: "flex",
    },

    leftLayer:{
        width: leftWidth+"vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "#79FF97",
        display: "flex",
    },

    rightLayer:{
        width: rightWidth+"vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "#79FF97",
        display: "flex",
    },

    body : {
        width: mainWidth+"vw",
        height: "100vh",
        margin: "0%",
        padding: "0%",
        backgroundColor: "black",
        display: "block",
    },

    title : {
        /* 눈치보며 끝말잇기.io */
        fontFamily:"Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "8vw",
        lineHeight: "20vh",
        color: "#94FF28",
        textShadow: "10px 10px 20px rgba(148, 255, 40, 0.49)",
        backdropFilter: "blur(5px)",
        textAlign:"center",
        marginTop: "7vh",
    },

    sideText:{
        width: "5vw",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "5vw",
        color: "#000000",
        textAlign: "center",
        margin: 0,
    },

    nameInput:{
        width: "50vw",
        height: "12vh",
        background: "black",
        border: "6px solid #94FF28",
        boxSizing: "border-box",
        boxShadow: "10px 10px 20px rgba(148, 255, 40, 0.49)",
        backdropFilter: "blur(5px)",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "3.5vw",
        textAlign: "center",
        color: "white",

        marginTop:"-1vh",
        marginLeft: "20vw",
    },

    joinText:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "4vw",
        color: "#94FF28",
        textAlign:"center",
        marginTop: "5vh",
    }
}