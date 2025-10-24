const calendario_r = document.getElementById('reserva-calendario');

const opcoes = {
  initialView: 'dayGridMonth',
  locale: 'pt-br',
  height: 500,
  headerToolbar: {
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    center: 'title',
    left: ''
  },
  eventClick: function(info) {
    const evento = info.event;

    // Acessa os dados personalizados
    const nome = evento.title;
    const telefone = evento.extendedProps.telefone;
    const produto = evento.extendedProps.produto;
    const quantidade = evento.extendedProps.quantidade;
    const adicionais = evento.extendedProps.adicionais;
    const data = evento.extendedProps.start

    // Exibe os dados em um alerta (pode trocar por modal se quiser)
    alert(
      ` Reserva: ${nome}\n` +
      ` Telefone: ${telefone}\n` +
      ` Produto: ${produto}\n` +
      ` Quantidade: ${quantidade}\n` +
      ` Informações adicionais: ${adicionais}`+
      `Data da reserva: ${data}`
    );

    info.jsEvent.preventDefault(); // Impede redirecionamento, se houver
  }
};

const reservaJS = new FullCalendar.Calendar(calendario_r, opcoes);

// Buscando os compromissos no LS
let reservaLS = window.localStorage.getItem('reservas');
reservaLS = JSON.parse(reservaLS);

// Adiciona os eventos no calendário
for (let i = 0; i < reservaLS.length; i++) {
  const reserva = reservaLS[i];

  reservaJS.addEvent({
    title: reserva['nome'],
    start: reserva['data'],
    extendedProps: {
      telefone: reserva['telefone'],
      produto: reserva['produto'],
      quantidade: reserva['quantidade'],
      adicionais: reserva['adicionais']
      
    }
  });
}

reservaJS.render();