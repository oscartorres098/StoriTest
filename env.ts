import 'dotenv/config'

export const configDB = {
    ENVIROMENT: process.env.ENVIROMENT,
    DB_SYNC: process.env.DB_SYNC,
}

export const configSG = {
    Key: process.env.SG_KEY,
}
