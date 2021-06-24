const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database() // espera o db terminar de executar

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY, 
      pass TEXT
    )`);

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      read INT 
    )`);

    await db.close() // fecha a consexao com o BD
  }
}

initDb.init(); // executa a initDb