module.exports = {
    type: 'postgres', //tipo de banco de dados
    host: 'localhost', //rodando na própria maquina
    port: 5432,
    username: 'postgres', //usuarios default
    password: 'sttp2022', 
    database: 'postgres', //banco de dados padrão - serviço
    autoLoadEntities: true, //carregamento automatico de entidades
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
        
    }
}