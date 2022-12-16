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
    synchronize: true, //vai criar automaticamente as tabelas no banco de dados
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
