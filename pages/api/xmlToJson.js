const CfdiToJson = require("cfdi-to-json");
let jsonCfdi = null;
let miJson = null;

export default function handler(req, res) {
 const re = req.query.id
 const token = req.query.token
  fetch(`${re}&token=${token}`)
    .then((response) => response.text())
    .then((data) => {
      jsonCfdi = CfdiToJson.parse({
        contentXML: `${data}`,
      })
      fetch(
        `https://nova-erp.vercel.app/api/cfdiToJson?&re=${jsonCfdi.emisor.rfc}&rr=${jsonCfdi.receptor.rfc}&tt=${jsonCfdi.total}&id=${jsonCfdi.timbreFiscal.uuid}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          miJson = {
            timbre: jsonCfdi.timbreFiscal.uuid.toUpperCase(),
            total: jsonCfdi.total,
            emisor: jsonCfdi.emisor.rfc,
            receptor: jsonCfdi.receptor.rfc,
            estatus: data["s:Envelope"]["s:Body"]["ConsultaResponse"]["ConsultaResult"]["a:Estado"]["_text"],
            todo: { jsonCfdi }
          }
          /* console.log(miJson) */
          res
            .status(200)
            .json(miJson)
        }
        );
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}