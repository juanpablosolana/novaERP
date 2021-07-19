import useSWR from "swr"
import styles from "./styles.module.css";

export default function Cfdi({ cfdiUrl }) {
  console.log(`https://cfditojson.herokuapp.com/?id=${cfdiUrl}`)

  const fetcher = (url) =>
    fetch(`https://cfditojson.herokuapp.com/?id=${cfdiUrl}`).then((r) => r.json());
  const { data } = useSWR('/api/data', fetcher)


  if (!data) return <div className={styles.spinner}></div>;


  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
}
