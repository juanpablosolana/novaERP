const CfdiToJson = require("cfdi-to-json");
var jsonCfdi = null;

export default function handler(req, res) {
  console.log(req.__NEXT_INIT_QUERY.id);
  fetch(
    req.__NEXT_INIT_QUERY.id
  )
    .then((response) => response.text())
    .then((data) => {
      jsonCfdi = CfdiToJson.parse({
        contentXML: `
        ${data}}
    `,
      });
        res.status(200).json(jsonCfdi);
    })
    .catch(err=>{
      res.status(500).json(err)
    })
}
