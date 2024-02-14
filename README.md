# Buildweek-1-G6

Piattaforma del benchmark di Epicode, presente di quiz a risposta multipla, risultato finale e pagina di feedback.

## Step di avvio

### 1. Clonazione repository

```bash
git clone https://github.com/TunaSandwichhh/davide-faggionato-repo.git
```

## Descrizione HTML

#### - index.html

Pagina iniziale dell'applicazione. Dopo aver spuntato una checkbox obbligatoria, l'utente può passare alla pagina del quiz vero e proprio.

#### - page2.html

Pagina del quiz. Una domanda e quattro opzioni di risposta vengono generate dinamicamente. Un timer informa l'utente del tempo a disposizione.
Un bottone 'Next' permette di passare alla domanda successiva. Se non ci sono più domande, si passerà direttamente alla sezione dei risultati.

#### - page3.html

Pagina dei risultati. Le sezioni laterali informano l'utente sulla percentuale di risposte corrette e sbagliate.
La sezione centrale informa l'utente sull'eventuale superamento del test.
Un bottone 'Rate Us' porta l'utente alla sezione di feedback.

#### - page4.html

Pagina di feedback. L'utente può valutare il test con un punteggio da 1 a 10 stelle, cliccandoci sopra.
Un bottone 'More Info' permette all'utente di inviare il form, una volta scritto un messaggio di feedback.

## Descrizione Script

### 1. script-index.js

#### - checkCheckbox()

Controlla che la checkbox sia stata spuntata
Altrimenti
Blocca l'avanzamento alla pagina successiva
Setta il display del messaggio di errore a 'block'

### 2. script-page2.js

#### - questions -array

Struttura dati delle domande
un array contenente domande sotto forma di oggetti, con le seguenti caratteristiche:

```javascript
{
    questionNumber: number
    questionText: string
    answerOptions: array di oggetti
    {
        text: string,
        isCorrect: boolean,
        id: string
    }
}
```

#### - eventHandler()

Chiamata come callback all'evento 'Click' sul button 'Next'

Azzera timer
Controlla il punteggio
Popola la sezione del quiz dedicata alle domande e alle opzioni di risposta finchè sono presenti domande nell'array 'questions'
Riavvia timer per ogni domanda

Se non ci sono domande, salva punteggio e lunghezza array domande nel local storage
Passa alla pagina dei risultati

#### - init()

Chiamata come callback al caricamento della pagina

Crea la prima domanda e avvia il timer
