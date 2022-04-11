import { Pool } from "pg";

const connectionString = 'postgres://niwghuoj:Ffk8ZGxHaJOKz66CFt5WCjJ_UXaKTMS5@kesavan.db.elephantsql.com/niwghuoj'

const db = new Pool({ connectionString })

export default db