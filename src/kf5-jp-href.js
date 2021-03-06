'use strict'
const dzobj = [
  { ja: '201941754', zh: '200733' },
  { ja: '201979820', zh: '199968' },
  { ja: '201793484', zh: '199993' },
  { ja: '202166330', zh: '201593' },
  { ja: '203185730', zh: '202061' },
  { ja: '201919400', zh: '200180' },
  { ja: '201354290', zh: '202730' },
  { ja: '200730174', zh: '202926' },
  { ja: '201941794', zh: '201606' },
  { ja: '201941784', zh: '201605' },
  { ja: '200929540', zh: '204093' },
  { ja: '202166160', zh: '201603' },
  { ja: '201512734', zh: '204864' },
  { ja: '202331474', zh: '201594' },
  { ja: '202166180', zh: '205166' },
  { ja: '201941824', zh: '205369' },
  { ja: '201941954', zh: '205422' },
  { ja: '201941964', zh: '206857' },
  { ja: '210064823', zh: '205473' },
  { ja: '202960194', zh: '206405' },
  { ja: '204442970', zh: '206404' },
  { ja: '201941984', zh: '206878' },
  { ja: '209732286', zh: '206888' },
  { ja: '201941974', zh: '206907' },
  { ja: '202166270', zh: '206917' },
  { ja: '201942014', zh: '206920' },
  { ja: '202166300', zh: '206918' },
  { ja: '201942024', zh: '206921' },
  { ja: '202166320', zh: '206406' },
  { ja: '202166310', zh: '207506' },
  { ja: '207721773', zh: '207771' },
  { ja: '201942004', zh: '206919' },
  { ja: '202161864', zh: '208738' },
  { ja: '211029283', zh: '215327' },
  { ja: '202086734', zh: '210145' },
  { ja: '20164977', zh: '206038' },
  { ja: '201755040', zh: '210790' },
  { ja: '201952870', zh: '210347' },
  { ja: '201767270', zh: '210761' },
  { ja: '202422244', zh: '211058' },
  { ja: '202905604', zh: '211057' },
  { ja: '202640940', zh: '211164' },
  { ja: '202341844', zh: '211149' },
  { ja: '203350744', zh: '211165' },
  { ja: '202341944', zh: '211320' },
  { ja: '200752984', zh: '211417' },
  { ja: '201649770', zh: '211448' },
  { ja: '201941054', zh: '211456' },
  { ja: '200295019', zh: '211647' },
  { ja: '201533294', zh: '211998' },
  { ja: '201883830', zh: '212104' },
  { ja: '204174194', zh: '212190' },
  { ja: '202982064', zh: '213177' },
  { ja: '204790870', zh: '213452' },
  { ja: '203331050', zh: '215135' },
  { ja: '203727120', zh: '222152' },
  { ja: '204537310', zh: '223093' },
  { ja: '202931674', zh: '222308' },
  { ja: '203655530', zh: '220824' },
  { ja: '204695384', zh: '223995' },
  { ja: '201941814', zh: '226041' },
  { ja: '204791550', zh: '1000347' },
  { ja: '208243696', zh: '1000643' },
  { ja: '204694170', zh: '1001375' },
  { ja: '204730520', zh: '1001572' },
  { ja: '203661160', zh: '1000539' },
  { ja: '203480420', zh: '1000547' },
  { ja: '203283794', zh: '1000576' },
  { ja: '203455680', zh: '1000664' },
  { ja: '203302214', zh: '1001101' },
  { ja: '204529754', zh: '1001959' },
  { ja: '201941844', zh: '1002243' },
  { ja: '204791510', zh: '1002275' },
  { ja: '201941854', zh: '1002876' },
  { ja: '204791520', zh: '1003298' },
  { ja: '201941864', zh: '1004008' },
  { ja: '202738940', zh: '1006748' },
  { ja: '202388664', zh: '1006788' },
  { ja: '202166280', zh: '1006793' },
  { ja: '201941924', zh: '1004319' },
  { ja: '201941934', zh: '1004305' },
  { ja: '202708214', zh: '1004318' },
  { ja: '202640770', zh: '1004320' },
  { ja: '202341774', zh: '1004394' },
  { ja: '201850320', zh: '1004430' },
  { ja: '201308690', zh: '1004431' },
  { ja: '207613916', zh: '1004432' },
  { ja: '212164906', zh: '1005063' },
  { ja: '204783170', zh: '1007811' },
  { ja: '204529724', zh: '1009113' },
  { ja: '204529784', zh: '1009230' },
  { ja: '204529794', zh: '1009275' },
  { ja: '203711920', zh: '1007993' },
  { ja: '203501094', zh: '1007996' },
  { ja: '203716110', zh: '1007997' },
  { ja: '205452653', zh: '1010754' },
  { ja: '203501084', zh: '1011205' },
  { ja: '208236353', zh: '1011206' },
  { ja: '209715393', zh: '1011207' },
  { ja: '115000002686', zh: '1011301' },
  { ja: '212155743', zh: '1013114' },
  { ja: '208797666', zh: '1399262' },
  { ja: '209122546', zh: '1013120' },
  { ja: '208458786', zh: '1013129' },
  { ja: '208458696', zh: '1014085' },
  { ja: '206959893', zh: '1015004' },
  { ja: '204889914', zh: '1015249' },
  { ja: '205080054', zh: '1015250' },
  { ja: '204930710', zh: '1015258' },
  { ja: '204851030', zh: '1015259' },
  { ja: '200283219', zh: '1015838' },
  { ja: '200724665', zh: '1015839' },
  { ja: '200814380', zh: '1016517' },
  { ja: '202122544', zh: '1016530' },
  { ja: '211655046', zh: '1016531' },
  { ja: '212208463', zh: '1016538' },
  { ja: '211583223', zh: '1016540' },
  { ja: '205935950', zh: '1017526' },
  { ja: '211429603', zh: '1021540' },
  { ja: '209650666', zh: '1021541' },
  { ja: '210000383', zh: '1021543' },
  { ja: '209998843', zh: '1021555' },
  { ja: '207808873', zh: '1021992' },
  { ja: '208220646', zh: '1021999' },
  { ja: '212152403', zh: '1022041' },
  { ja: '202181714', zh: '1022084' },
  { ja: '208399613', zh: '1026331' },
  { ja: '207377396', zh: '1026332' },
  { ja: '204972070', zh: '1026340' },
  { ja: '204564604', zh: '1026342' },
  { ja: '204730600', zh: '1026343' },
  { ja: '202376464', zh: '1032743' },
  { ja: '203203770', zh: '1032748' },
  { ja: '203236240', zh: '1032756' },
  { ja: '203030394', zh: '1032767' },
  { ja: '203702800', zh: '1036362' },
  { ja: '203605844', zh: '1036363' },
  { ja: '204014210', zh: '1036364' },
  { ja: '115001900926', zh: '1040808' },
  { ja: '115004607246', zh: '1083078' },
  { ja: '115004954623', zh: '1092760' },
  { ja: '208242326', zh: '1099206' },
  { ja: '209758903', zh: '1099207' },
  { ja: '209758703', zh: '1099208' },
  { ja: '205609584', zh: '1100126' },
  { ja: '205382204', zh: '1100127' },
  { ja: '205382184', zh: '1100128' },
  { ja: '205382194', zh: '1100130' },
  { ja: '205957640', zh: '1100131' },
  { ja: '202111384', zh: '1100219' },
  { ja: '5157', zh: '1117583' },
  { ja: '115005946966', zh: '1124712' },
  { ja: '360000511243', zh: '1146194' },
  { ja: '360000098886', zh: '1176602' },
  { ja: '360000511023', zh: '1228393' },
  { ja: '360015955171', zh: '1127980' },
  { ja: '204529724', zh: '1236979' },
  { ja: '360015513211', zh: '1291936' },
  { ja: '360029152012', zh: '1300894' },
  { ja: '204693590', zh: '1300355' },
  { ja: '216972946', zh: '1300325' },
  { ja: '217905503', zh: '1300031' },
  { ja: '204529824', zh: '1300016' },
  { ja: '204529834', zh: '1299779' },
  { ja: '360000869566', zh: '1299736' },
  { ja: '204699420', zh: '1299471' },
  { ja: '210100886', zh: '1299470' },
  { ja: '360028785452', zh: '1301785' },
  { ja: '360028785552', zh: '1301273' },
  { ja: '202166200', zh: '1303901' },
  { ja: '202166250', zh: '1303902' },
  { ja: '202166210', zh: '1303911' },
  { ja: '201941884', zh: '1303912' },
  { ja: '201941894', zh: '1303913' },
  { ja: '209732306', zh: '1303914' },
  { ja: '202166220', zh: '1303915' },
  { ja: '202166230', zh: '1303923' },
  { ja: '201941914', zh: '1303925' },
  { ja: '202166240', zh: '1303926' },
  { ja: '201941904', zh: '1303927' },
  { ja: '201793494', zh: '1303954' },
  { ja: '360000313406', zh: '1303627' },
  { ja: '360000361686', zh: '1303568' },
  { ja: '360025484571', zh: '1301794' },
  { ja: '360030757312', zh: '1307130' },
  { ja: '360023242171', zh: '1312896' },
  { ja: '360000910783', zh: '1307833' },
  { ja: '360022262472', zh: '1312897' },
  { ja: '202111374', zh: '1321382' },
  { ja: '205309740', zh: '1321556' },
  { ja: '202111404', zh: '1321617' },
  { ja: '202361180', zh: '1322123' },
  { ja: '202350640', zh: '1322138' },
  { ja: '202362870', zh: '1323594' },
  { ja: '202362860', zh: '1323583' },
  { ja: '202362890', zh: '1323635' },
  { ja: '202124734', zh: '1324437' },
  { ja: '205452613', zh: '1320861' },
  { ja: '202363040', zh: '1324498' },
  { ja: '202124754', zh: '1324805' },
  { ja: '202363060', zh: '1326554' },
  { ja: '202124774', zh: '1326577' },
  { ja: '202124784', zh: '1326647' },
  { ja: '203881650', zh: '1327030' },
  { ja: '208251616', zh: '1327053' },
  { ja: '360017819551', zh: '1314456' },
  { ja: '360019834671', zh: '1314677' },
  { ja: '360020364531', zh: '1314443' },
  { ja: '360001296186', zh: '1313189' },
  { ja: '360000947326', zh: '1313163' },
  { ja: '360000877946', zh: '1313109' },
  { ja: '217937443', zh: '1313047' },
  { ja: '360000975763', zh: '1313939' },
  { ja: '360023047852', zh: '1319666' },
  { ja: '215029846', zh: '1316511' },
  { ja: '213504206', zh: '1338514' },
  { ja: '360037460171', zh: '1339073' },
  { ja: '202957070', zh: '1339461' },
  { ja: '360029930952', zh: '1340005' },
  { ja: '360030856652', zh: '1341616' },
  { ja: '204529724', zh: '1347953' },
  { ja: '360037831392', zh: '1348715' },
  { ja: '360035992312', zh: '1350181' },
  { ja: '360035098072', zh: '1350450' },
  { ja: '360038915812', zh: '1357245' },
  { ja: '360040420631', zh: '1366684' },
  { ja: '212117746', zh: '1366759' },
  { ja: '360029783812', zh: '1375474' },
  { ja: '360022502911', zh: '1375505' },
  { ja: '360023979211', zh: '1377237' },
  { ja: '900000463386', zh: '1377234' },
  { ja: '208217653', zh: '1378516' },
  { ja: '115001506986', zh: '1378683' },
  { ja: '202361320', zh: '1381878' },
  { ja: '208237433', zh: '1382202' },
  { ja: '360039756431', zh: '1383387' },
  { ja: '900000732023', zh: '1383727' },
  { ja: '203480420', zh: '1388854' },
  { ja: '900000767263', zh: '1389642' },
  { ja: '208237433', zh: '1390215' },
  { ja: '360040285292', zh: '1391298' },
  { ja: '900001121946', zh: '1392288' },
  { ja: '201732180', zh: '1399275' },
  { ja: '360026502091', zh: '1396588' },
  { ja: '900001575326', zh: '1399030' },
  { ja: '202463840', zh: '1400006' },
  { ja: '900001189666', zh: '1400706' },
  { ja: '360017821071', zh: '1399811' },
  { ja: '360028843531', zh: '1409214' },
  { ja: '900002015923', zh: '1410566' },
  { ja: '360015889812', zh: '1410280' },
  { ja: '360040220451', zh: '1412604' },
  { ja: '360040313151', zh: '1415298' },
  { ja: '360022880491', zh: '1414482' },
  { ja: '900002550163', zh: '1419033' },
  { ja: '900002412046', zh: '1419069' },
  { ja: '900002948163', zh: '1423519' },
  { ja: '900002946703', zh: '1423578' },
  { ja: '900001244323', zh: '1425726' },
  { ja: '900001933483', zh: '1426229' },
  { ja: '360023293091', zh: '1427187' },
  { ja: '360030433312', zh: '1427186' },
  { ja: '900003339206', zh: '1433121' },
  { ja: '360000882123', zh: '1434396' },
  { ja: '360034632491', zh: '1438850' },
  { ja: '360001038846', zh: '1440943' },
  { ja: '360031191791', zh: '1451558' },
  { ja: '900000985463', zh: '1451684' },
  { ja: '900004404123', zh: '1441198' },
  { ja: '900003975226', zh: '1449862' },
  { ja: '900005199263', zh: '1458480' },
  { ja: '900003818286', zh: '1461741' },
  { ja: '900003822626', zh: '1463193' },
  { ja: '900005122323', zh: '1463972' },
  { ja: '900004168566', zh: '1464964' },
  { ja: '900004873643', zh: '1460826' },
  { ja: '900004873663', zh: '1461083' },
  { ja: '900004873723', zh: '1461449' },
  { ja: '900004873703', zh: '1461563' },
  { ja: '900004338923', zh: '1463250' },
]
const jpDevPerfix = 'https://developer.cybozu.io/hc/ja/articles/'
function findjaid(zhid) {
  for (const v of dzobj) {
    if (v.zh === zhid) {
      return v.ja
    }
  }
  return null
}
const regex = /\d+(?=\/?$)/
const matched = regex.exec(window.location.pathname)
if (matched) {
  console.log(matched[0])
  const jaid = findjaid(matched[0])
  if (jaid) {
    const eles = document.getElementsByTagName('h2')
    if (eles.length > 0) {
      const linka = document.createElement('a')
      linka.setAttribute('href', jpDevPerfix + jaid)
      linka.setAttribute(
        'style',
        'box-sizing: border-box;margin: 0;font-family: inherit;display: inline-block;padding: 6px 12px;line-height: 1.428571429;text-align: center;vertical-align: middle;cursor: pointer;border: 1px solid transparent;border-radius: 4px;user-select: none;color: #fff;background-color: #f0ad4e;border-color: #eea236;font-size:1.02',
      )
      linka.innerText = '????????????'
      eles[0].insertBefore(linka, eles[0].children[1])
    }
  }
}
