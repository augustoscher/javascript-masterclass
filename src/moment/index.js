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
  console.log('1: ', moment(time).utc().format('LL'))
  console.log('2: ', moment(time).format('DD [de] MMM [de] YYYY')); 
  console.log('3: ', moment().format('LL'))
}



journalDocumentTitle();