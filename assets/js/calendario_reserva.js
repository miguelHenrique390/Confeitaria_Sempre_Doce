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

    
    const nome = evento.title;
    const telefone = evento.extendedProps.telefone;
    const produto = evento.extendedProps.produto;
    const quantidade = evento.extendedProps.quantidade;
    const comentario = evento.extendedProps.comentario;
    const data = evento.start;

    
    alert(
      ` Reserva: ${nome}\n` +
      ` Telefone: ${telefone}\n` +
      ` Produto: ${produto}\n` +
      ` Quantidade: ${quantidade}\n` +
      ` Informações adicionais: ${comentario}\n`+
      `Data da reserva: ${data}\n`
    );

    info.jsEvent.preventDefault(); 
  }
};

const reservaJS = new FullCalendar.Calendar(calendario_r, opcoes);


let reservaLS = window.localStorage.getItem('reservas');
reservaLS = JSON.parse(reservaLS);


for (let i = 0; i < reservaLS.length; i++) {
  const reserva = reservaLS[i];

  reservaJS.addEvent({
    title: reserva['nome'],
    start: reserva['data'],
    extendedProps: {
      telefone: reserva['telefone'],
      produto: reserva['produto'],
      quantidade: reserva['quantidade'],
      comentario: reserva['comentario']
      
    }
  });
}

reservaJS.render();