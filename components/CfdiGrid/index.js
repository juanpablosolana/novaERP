import useFirestore from "../../hooks/useFirestore";
import Link from 'next/link'
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs, loading } = useFirestore("cfdi");
  // console.log(docs)
  return (
    <div className="top">
      <div className={styles.cfdiGrid}>
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.h5>
                <Link href={doc.url}>
                  <a>{doc.name.toUpperCase().substring(0, 14).slice(0,-4)}</a>
                </Link>
              </motion.h5>
            </motion.div>
          ))}
      </div>
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
