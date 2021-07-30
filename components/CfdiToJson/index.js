import { useEffect, useState } from "react";
import useSWR,{cache} from "swr"
import styles from "./styles.module.css";

export default function Cfdi({ cfdiUrl }) {
  cache.clear()
 /*  console.log(`https://cfditojson.herokuapp.com/?id=${cfdiUrl}`) */
  const [mounted, setMounted] = useState(false)

 useEffect(() => {
    setMounted(true)
  }, [])

  const fetcher = _ =>
    fetch(`https://nova-erp.vercel.app/api/xmlToJson/?id=${cfdiUrl}`).then((r) => r.json());
  let { data } = useSWR(mounted ? '/api/data' : null, fetcher)


  return (
    <div className={styles.spinnerMain }>
      <h2>{data ? <div>
        Datos del CFDI: {data.timbre}
        <p>RFC emisor: {data.emisor}</p>
        <p>RFC receptor: {data.receptor}</p>
        <p>Total: ${data.total}</p>
        <p>Estatus ante el SAT: {data.estatus}</p>
        </div> : <div className={styles.spinner}></div>}</h2>
    </div>
  );

}
