// Istruzioni:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus: Aggiungere un'immagine presa anch'essa da un data.

let app = new Vue({
  el: '#root',
  data: {
    message: 'Buon Natale Tutor',
    image: 'data:image/jpeg;base64,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'
  }
});

let tree = new Vue({
  el: '#albero',
  data: {
    backgroundImage: null
  },
  methods: {
    getImage () {
      this.backgroundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR672Jq7U7ZyDw2g1Hdr7vpFdVAbiU038zbVQ&usqp=CAU'
    }
  }
});