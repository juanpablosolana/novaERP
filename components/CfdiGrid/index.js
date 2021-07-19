import useFirestore from "../../hooks/useFirestore";
import Link from "next/link";
import styles from "./styles.module.css";
import Modal from "react-modal";
import CfdiToJson from '../../pages/cfdi/[cfdiCode]'
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const ImageGrid = () => {
  const router = useRouter()
  const { docs, loading } = useFirestore("cfdi");
  // console.log(docs);
  return (
    <div className="top">
      <div className={styles.cfdiGrid}>
        {docs &&
          docs.map((doc) => (
            <div className="img-wrap" key={doc.id}>
              <h5>
                <Link href={`/?cfdiCode=${doc.url}`} as={`/cfdi/${doc.url}`}>
                  <a>{doc.name.toUpperCase().substring(0, 14).slice(0, -4)}</a>
                </Link>
              </h5>
            </div>
          ))}
      </div>
      <Modal
        isOpen={!!router.query.cfdiCode}
        onRequestClose={() => router.push("/")}
      >
        <CfdiToJson cfdiUrl={router.query.cfdiCode} />
      </Modal>
    </div>
  );
};



// const LazyTrending = ()=>{
//   const [show, setShow] = useState(false)

//     useEffect(()=>{
//       const onChange = (entries)=>{
//           const el = entries[0]
//           console.log(el)
//       }
//       const observer = new IntersectionObserver(
//         onChange,{
//           rootMargin:'100px'
//         }
//       )
//       observer.observe(document.getElementById('lazy'))
//     })
//     return <div id="lazy">
//       {show ? 'Hola' : null}
//     </div>
// }

export default ImageGrid;
