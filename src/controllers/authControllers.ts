import { config } from "../config";
const { dbUser, dbPassword, dbHost } = config;
const mongoUri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority&appName=Auth`;
