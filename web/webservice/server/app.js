// webservice_io_programmo_67.js

class Remote {
    constructor() {
      this.libri_transfer = "libri";
      this.catalogo = "catalogo";
      this.const_url = "https://archive.org/details/artsandmusicvideos"; // Sappiamo che non esiste
    }
  
    async findCatalogo(titolo) {
      console.log(`Simulazione ricerca catalogo con titolo: ${titolo}`);
      // Qui in un vero scenario faresti una chiamata di rete (fetch) a un'API
      fetch("https://archive.org/details/artsandmusicvideos")
      .then(response => {
         console.log(response);
      })
      .catch(error => console.log("Si è verificato un errore!"))
  
      // Simula una risposta da un'API (in formato JSON)
      const simulatedResponse = [
        { titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien" },
        { titolo: "Harry Potter e la Pietra Filosofale", autore: "J.K. Rowling" },
        { titolo: "Il Silmarillion", autore: "J.R.R. Tolkien" },
        { titolo: "Harry Potter e la Camera dei Segreti", autore: "J.K. Rowling" }
      ];
  
      // Simula una "ricerca" locale nell'array
      const risultati = simulatedResponse.filter(libro =>
        libro.titolo.toLowerCase().includes(titolo.toLowerCase())
      );
  
      // Invece di restituire un "LibriTransfer[]", restituiamo un array di oggetti JavaScript
      return risultati;
    }
  }
  
  // Esempio di utilizzo della "classe" Remote
  async function esempioRicerca() {
    const servizioCatalogo = new Remote();
    const risultatiHarry = await servizioCatalogo.findCatalogo("Harry");
    console.log("Risultati ricerca per 'Harry':", risultatiHarry);
  
    const risultatiSignore = await servizioCatalogo.findCatalogo("Signore");
    console.log("Risultati ricerca per 'Signore':", risultatiSignore);
  }
  
  esempioRicerca();
