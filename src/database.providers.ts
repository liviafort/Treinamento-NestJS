import { DataSource } from 'typeorm';
import { CourseRefactoringTest1671740058628 } from './migrations/1671740058628-CourseRefactoringTest';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () =>{
            const dataSource = new DataSource({
                type: 'postgres', //tipo de banco de dados
                host: 'localhost', //rodando na própria maquina
                port: 5432,
                username: 'postgres', //usuarios default
                password: 'sttp2022', 
                database: 'postgres', //banco de dados padrão - serviço
                entities: [
                    __dirname + '/../**/*.entity.js'
                ],
                synchronize: true,
        });
        return dataSource.initialize();
        }
    }
];

export const dataSource = new DataSource({
    type: 'postgres', //tipo de banco de dados
    host: 'localhost', //rodando na própria maquina
    port: 5432,
    username: 'postgres', //usuarios default
    password: 'sttp2022', 
    database: 'postgres', //banco de dados padrão - serviço
    entities: [
        __dirname + '/../**/*.entity.js'
    ],
    synchronize: true,
    migrations: [CourseRefactoringTest1671740058628],
});