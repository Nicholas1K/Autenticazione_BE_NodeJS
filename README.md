# Autenticazione_BE_NodeJS
questo è un semplice backend fatto con node JS in cui viene gestita l'autenticazione utente, ovvero la sua registrazione alla piattaforma e il login per accedervi, la password immessa nel BE verrà codificata come da prassi

##### per avviare il programma bisogna digitare nel terminale npm run dev

###### INDEX.JS

in questo file ci sono i collegamenti al database e alla porta, qui c'è l'applicazione intera 

###### CARTELLA MIDDLEWARE

in questa cartella c'è un file che si interpone nelle chiamate per mostrare gli errori

###### CARTELLA MODELS

in questa cartella ci sono i modelli che vanno a formare gli schema che compongono il db
attualmente di presentazione c'è Users che rappresenta la tabella degli utenti

###### CARTELLA ROUTERS

in questa cartella ci sono i file riguardanti le route e le varie API che servono ad interagire con le tabelle che verranno create,
attualmente c'è UsersRoute in cui sono scritte le API di GET, POST, DELETE e PETCH (PUT).

NB. nella POST queste righe di codice 
const salt = await bcrypt.genSalt();
const hashedPassword = await bcrypt.hash(password,salt);

servono per occultare la password nel database mettendo un hash che crittografa la password da noi messa

#### Mlab

il server che uso per fare girare l'applicazione si chiama Mlab, ed è un server mongodb situato online, si possono usare massomo 500MB e il server sulla quale gira questa applicazione si chiama TEST
