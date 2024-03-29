const moment = require('moment');

moment.locale('pt-br');
moment.updateLocale('pt', {
  months : [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ],
  monthsShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul',
    'Ago', 'Set', 'Out', 'Nov', 'Dez',
  ],
});

const journalDocumentTitle = () => {
  const time = 1424354400000
  console.log(moment(time).utc().format('LL'))
  // console.log('2: ', moment(time).format('DD [de] MMM [de] YYYY')); 
  // console.log('3: ', moment().format('LL'))
}



// journalDocumentTitle();

const snapshotDateFrom = 1577844000000
const snapshotDateTo = 1577930400000
const receivedDateFrom = 1577847600000
const receivedDateTo = 1577934000000

console.log('snapshot dateFrom: ', moment(snapshotDateFrom))
console.log('received dateFrom: ', moment(receivedDateFrom))
console.log('snapshot dateTo: ', moment(snapshotDateTo))
console.log('received dateTo: ', moment(receivedDateTo))
