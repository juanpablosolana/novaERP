import useFirestore from "../../hooks/useFirestore";
import Link from 'next/link'
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs, loading } = useFirestore("cfdi");
  console.log(docs)
  return (
    <div className="top">
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.h2>
                <Link href={doc.url}>
                <a>
                {doc.name}
                </a>
                </Link>
              </motion.h2>
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