import { useRouter } from "next/router";
import Cfdi from '../../components/CfdiToJson'

export default function xmlPage() {
 const router = useRouter()
//  console.log(router.query);
  const { cfdiCode, token } = router.query;
  const url = `${cfdiCode}&token=${token}`
  // console.log(url)
  return(
    <Cfdi cfdiUrl={url}/>
  )
}
