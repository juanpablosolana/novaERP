const convert = require('xml-js');
const soapRequest = require('easy-soap-request');

export default function handler(req, res) {
  let {re,rr,tt,id} = req.query


  const url = 'https://consultaqr.facturaelectronica.sat.gob.mx/ConsultaCFDIService.svc';
  const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://tempuri.org/IConsultaCFDIService/Consulta',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
     <soapenv:Header/>
     <soapenv:Body>
        <tem:Consulta>
           <!--Optional:-->
           <tem:expresionImpresa><![CDATA[?re=${re}?rr=${rr}?tt=${tt}?id=${id}]]>
           </tem:expresionImpresa>
        </tem:Consulta>
     </soapenv:Body>
  </soapenv:Envelope>`;

  const data = async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml });
    const { body } = response;
    res.send(convert.xml2json(body, { compact: true, spaces: 4 }))
  }
  data()


  // console.log(rr, re, tt, id)
  //  res.status(200).json(re,rr,tt,id)
}
