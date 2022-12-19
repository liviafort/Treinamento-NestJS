import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  //typeormodule serve para fazer conexão com o banco, deve inserir os parametros para a criação do database
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres', //tipo de banco de dados
    host: 'localhost', //rodando na própria maquina
    port: 5432,
    username: 'postgres', //usuarios default
    password: 'sttp2022', 
    database: 'postgres', //banco de dados padrão - serviço
    autoLoadEntities: true, //carregamento automatico de entidades
    // não usar synchronize: true ---> perde todas as alterações, informações NÃO É SEGURO!!!!
    //USAR MIGRAÇÃO!
    //------>migração é apenas um único arquivo com consultas sql para atualizar um esquema de banco de dados 
    //e aplicar novas alterações a um banco de dados existente
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
