
const DB = {
    masterDataBase: process.env.MASTER_DATABASE || 'localhost',
    readDataBase : process.env.READ_DATABASE || 'localhost',
    port: process.env.PORT || 3306,
    username: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || 'admin',
    dialect: process.env.DIALECT || 'mysql',
};
const CONFIG ={
    DB,
};
export {
    CONFIG
}