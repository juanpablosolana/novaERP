import useSWR from "swr"

export default function Cfdi({ cfdiUrl }) {
  console.log(`https://cfditojson.herokuapp.com/?id=${cfdiUrl}`)

  const fetcher = (url) =>
    fetch(`https://cfditojson.herokuapp.com/?id=${cfdiUrl}`).then((r) => r.json());
  const { data } = useSWR('/api/data', fetcher)
 console.log(data);

  if (!data) return <div>Loading... wait patiently</div>;

  return (
    <div>
      <h2>Información de : {data.timbreFiscal.uuid.toUpperCase()}</h2>
      <ul>

      </ul>
    </div>
  );
}
