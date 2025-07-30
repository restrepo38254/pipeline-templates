//import { group, sleep, check } from 'k6';
import { check } from 'k6';
import http from 'k6/http';
import { group } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
//import { Counter, Rate } from "k6/metrics";
//import encoding from 'k6/encoding';
export let options = {
    scenarios: {
    prueba_scenario: {
    executor: 'ramping-vus',
    startVUs: 2,
    stages: [
        { duration: "1m", target: 3},
        { duration: "1m", target: 4},
        // { duration: "1m", target: 50},
        // { duration: "1m", target: 600},
        // { duration: "1m", target: 800},
        // { duration: "1m", target: 100},
        // { duration: "1m", target: 120},
        // { duration: "1m", target: 140},
        // { duration: "5m", target: 5},
        // { duration: "20m", target: 0}
      ],
    }
      
    //   prueba_scenario: {
    //   executor: 'externally-controlled',
    //   vus: 1,
    //   duration: '500s',
    //   maxVUs: 5,
    // }
    }  
  };

export default function (){
    const params = {
        headers: { 'authorization': '8A043F64763381C9A10AE31C19736573', 'Cookie':'JSESSIONID=861522FA6A0826B097B970F6069E07DE; _gcl_au=1.1.1202625351.1690985272; initialTrafficSource=utmcsr=(direct)|utmcmd=(none)|utmccn=(not set); _ga=GA1.3.981450227.1690985273; _hjSessionUser_2365011=eyJpZCI6IjE2MTU3YTVmLTU5MTktNTFmNi1hZTc4LWEzNTQyMTNkYjVmYSIsImNyZWF0ZWQiOjE2OTA5ODUyNzI3MzIsImV4aXN0aW5nIjp0cnVlfQ==; _ga_CQEX0SZYLS=GS1.1.1692205212.3.0.1692205212.60.0.0; _ga_SWN50WM8S9=GS1.1.1691155751.4.0.1691155755.56.0.0; _ga_CZT0HZ3PQP=GS1.1.1691155751.4.0.1691155755.56.0.0; _hjSessionUser_2671111=eyJpZCI6ImUxYWNiMTVjLTRjMzMtNTQ3My1iNmJkLTI3ZTBjODJlMjQ3NCIsImNyZWF0ZWQiOjE2OTExMTI4OTEyNzYsImV4aXN0aW5nIjp0cnVlfQ==; _hjSessionUser_2365008=eyJpZCI6IjYyYzg0MzhlLWEwMmItNWUzYi1iYTBjLTE3OTE4YmRlNzdmOSIsImNyZWF0ZWQiOjE2OTExMTY5MDI4ODMsImV4aXN0aW5nIjp0cnVlfQ==; _gid=GA1.3.325668547.1692202257; __utmzzses=1; MANSession=%7B%22id%22%3A%228A043F64763381C9A10AE31C19736573%22%7D' },
        timeout: 1800000,
      };

    const route = 'https://managerqa2.novaventa.com.co/Manager/'

    // group('groupabastecimiento', function () {

    // let  dataSet = {
    //     "panelId": "OlaAbastecimientoTable",
    //     "firstRow": 0,
    //     "rowCount": 10,
    //     "referenceRow": -1,
    //     "totals": true,
    //     "columnData": [
    //         {
    //             "field": "uuid",
    //             "visible": false
    //         },
    //         {
    //             "field": "codigo",
    //             "visible": true
    //         },
    //         {
    //             "field": "fechaCreacion",
    //             "visible": true,
    //             "filter": "09/08/2023 10/32:23/08/2023 10/32"
    //         },
    //         {
    //             "field": "nombreCentroDistribucion",
    //             "visible": true
    //         },
    //         {
    //             "field": "modeloNegocio",
    //             "visible": true
    //         },
    //         {
    //             "field": "totalSolicitudes",
    //             "visible": true
    //         },
    //         {
    //             "field": "abastecimientoManual",
    //             "visible": false
    //         }
    //     ]
    // };

    // const abastecimiento = http.post(route+'/rest/dataset/load',JSON.stringify(dataSet), params
    //   );
    //   console.log('Response time de '+ abastecimiento.url + ' was ' + String(abastecimiento.timings.duration) + ' ms');

    //   check(abastecimiento, {
    //     'abastecimiento status is 200': (r) => r.status === 200,
    // })
    // });

    // group('GroupproductosServicio', function () {
    // let productoServicio = {
    //     "panelId": "ProductosTable",
    //     "firstRow": 0,
    //     "rowCount": 10,
    //     "referenceRow": -1,
    //     "totals": true,
    //     "columnData": [
    //         {
    //             "field": "uuid",
    //             "visible": false
    //         },
    //         {
    //             "field": "tags",
    //             "visible": false
    //         },
    //         {
    //             "field": "contenidoUuid",
    //             "visible": false
    //         },
    //         {
    //             "field": "codigoBarras",
    //             "visible": true
    //         },
    //         {
    //             "field": "codigo",
    //             "visible": true
    //         },
    //         {
    //             "field": "descripcion",
    //             "visible": true
    //         },
    //         {
    //             "field": "unidadMedida",
    //             "visible": true
    //         },
    //         {
    //             "field": "requiereEmpaque",
    //             "visible": true
    //         },
    //         {
    //             "field": "requiereInspeccion",
    //             "visible": true
    //         },
    //         {
    //             "field": "ambiente",
    //             "visible": true
    //         },
    //         {
    //             "field": "dimensionado",
    //             "visible": true
    //         },
    //         {
    //             "field": "largo",
    //             "visible": true
    //         },
    //         {
    //             "field": "alto",
    //             "visible": true
    //         },
    //         {
    //             "field": "ancho",
    //             "visible": true
    //         },
    //         {
    //             "field": "volumen",
    //             "visible": true
    //         },
    //         {
    //             "field": "peso",
    //             "visible": true
    //         },
    //         {
    //             "field": "factor",
    //             "visible": true
    //         },
    //         {
    //             "field": "usaSeries",
    //             "visible": true
    //         },
    //         {
    //             "field": "descripcionProductoContenido",
    //             "visible": true
    //         },
    //         {
    //             "field": "codigoBarrasProductoContenido",
    //             "visible": true
    //         },
    //         {
    //             "field": "codigoProductoContenido",
    //             "visible": true
    //         },
    //         {
    //             "field": "unidadesContenidas",
    //             "visible": true
    //         },
    //         {
    //             "field": "usaLotesSincronizacion",
    //             "visible": false
    //         }
    //     ]
    // };
    // const productos = http.post(route+'/rest/ProductoService/load',JSON.stringify(productoServicio), params
    // );
    //   console.log('Response time de '+ productos.url + ' was ' + String(productos.timings.duration) + ' ms');

    //   check(productos, {
    //     'productos status is 200': (r) => r.status === 200,
    // })
    // });

    // group('Groupdespachopadre', function () {
    // let solicitudDespachoPadreService = {
    //     "panelId": "SolicitudDespachoPadreTable",
    //     "firstRow": 0,
    //     "rowCount": 10,
    //     "referenceRow": -1,
    //     "totals": true,
    //     "columnData": [
    //         {
    //             "field": "uuid",
    //             "visible": false
    //         },
    //         {
    //             "field": "codigoSolicitud",
    //             "visible": true
    //         },
    //         {
    //             "field": "numeroPedido",
    //             "visible": true
    //         },
    //         {
    //             "field": "estadoSolicitud",
    //             "visible": true
    //         },
    //         {
    //             "field": "abastecimientoSolicitada",
    //             "visible": true
    //         },
    //         {
    //             "field": "modeloNegocio",
    //             "visible": true
    //         },
    //         {
    //             "field": "tipoEnvio",
    //             "visible": true
    //         },
    //         {
    //             "field": "codigoTipoSolicitud",
    //             "visible": true
    //         },
    //         {
    //             "field": "ambiente",
    //             "visible": true
    //         },
    //         {
    //             "field": "fechaCreacion",
    //             "visible": true
    //         },
    //         {
    //             "field": "fechaPromesaEntrega",
    //             "visible": true
    //         },
    //         {
    //             "field": "nombreClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "documentoClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "paisClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "departamentoClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "ciudadClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "barrioClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "reqChequeoComercial",
    //             "visible": true
    //         },
    //         {
    //             "field": "liberada",
    //             "visible": true
    //         },
    //         {
    //             "field": "tags",
    //             "visible": false
    //         }
    //     ]
    // };
    // const solicitudDespachoPadre = http.post(route+'/rest/SolicitudDespachoPadreService/load',JSON.stringify(solicitudDespachoPadreService), params
    // );
    //   console.log('Response time de '+ solicitudDespachoPadre.url + ' was ' + String(solicitudDespachoPadre.timings.duration) + ' ms');

    //   check(solicitudDespachoPadre, {
    //     'solicitudDespachoPadre status is 200': (r) => r.status === 200,
    // })
    // });

    // group('Grouprecogidapadre', function () {
    // let solicitudRecogidaPadreService = {
    //     "panelId": "SolicitudRecogidaPadreTable",
    //     "firstRow": 0,
    //     "rowCount": 10,
    //     "referenceRow": -1,
    //     "totals": true,
    //     "columnData": [
    //         {
    //             "field": "uuid",
    //             "visible": false
    //         },
    //         {
    //             "field": "codigoSolicitud",
    //             "visible": true
    //         },
    //         {
    //             "field": "numeroRecogida",
    //             "visible": true
    //         },
    //         {
    //             "field": "numeroPedido",
    //             "visible": true
    //         },
    //         {
    //             "field": "estadoSolicitud",
    //             "visible": true
    //         },
    //         {
    //             "field": "modeloNegocio",
    //             "visible": true
    //         },
    //         {
    //             "field": "tipoRecogida",
    //             "visible": true
    //         },
    //         {
    //             "field": "fechaCreacion",
    //             "visible": true
    //         },
    //         {
    //             "field": "nombreClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "documentoClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "paisClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "departamentoClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "ciudadClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "barrioClientePpal",
    //             "visible": true
    //         },
    //         {
    //             "field": "tags",
    //             "visible": false
    //         },
    //         {
    //             "field": "liberada",
    //             "visible": true
    //         }
    //     ]
    
    // };
    // const solicitudRecogidaPadre = http.post(route+'/rest/SolicitudRecogidaPadreService/load',JSON.stringify(solicitudRecogidaPadreService), params
    // );
    //   console.log('Response time de '+ solicitudRecogidaPadre.url + ' was ' + String(solicitudRecogidaPadre.timings.duration) + ' ms');

    //   check(solicitudRecogidaPadre, {
    //     'solicitudRecogidaPadre status is 200': (r) => r.status === 200,
    // })
    // });
    
    
    let index = http.get(route)
    check(index, {
        'index status is 200': (r) => r.status === 200,
    })
    
}  
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }