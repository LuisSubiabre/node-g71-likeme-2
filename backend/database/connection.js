import pkg from "pg"; // Importa todo el paquete CommonJS
const { Pool } = pkg; // Extrae el objeto Pool

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "la_password_secreta",
  port: 5432,
  allowExitOnIdle: true,
});

export default pool; // Exporta el pool por defecto
