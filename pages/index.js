import Head from 'next/head'
import homeStyles from '../styles/Main.module.css'
import Link from "next/link";
import {useState} from "react";
import {useRouter} from 'next/router'

export default function Home({data}) {

    let [name, setName] = useState("guest");
    let router = useRouter();
    let rankList = [];

    //dataLogic
    for(let i = 0; i<7; i++){
        rankList.push(
            <div className={homeStyles.rankBlock}>
                <p className={homeStyles.nameText}>{data[i].rank}th {data[i].nickname}</p>
                <p className={homeStyles.chainText}>{data[i].max_combo}Chain</p>
            </div>
        )
    }

    //event
    let handleChange = (e) => {
        name = setName(e.target.value);
    };
    let join = (e) => {
        if (e.code == "Enter") {
            router.push("/game?name=" + name).then(r => console.log(r));
        }
    }

    return (
        <div className={homeStyles.container}>
            <Head>
                <title>눈치보며 끝말잇기</title>
                <meta name="description" content="nextGame"/>
            </Head>
            <div className={homeStyles.leftLayer}>
                <p className={homeStyles.sideText}>L</p>
            </div>
            <div className={homeStyles.body}>
                <div>
                    <p className={homeStyles.title}>눈치보며<br/>끝말잇기.io</p>
                </div>
                <div className={homeStyles.centerStyle}>
                    <input className={homeStyles.nameInput} type="text" placeholder={"nickname"} onChange={handleChange}
                           onKeyDown={join}/>
                </div>
                <p className={homeStyles.joinText}>
                    <Link href={{
                        pathname: '/game',
                        query: {name: name},
                    }}><p>입장</p></Link>
                </p>
            </div>
            <div className={homeStyles.rightLayer}>
                <p className={homeStyles.sideText}>R</p>
                {rankList}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3005/ranking/get`);
    const data = await res.json();

    // Pass data to the page via props
    return {props: {data}}
}