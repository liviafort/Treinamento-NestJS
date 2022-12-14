import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){} //coursesServices declarados aqui permitem usar a variável nas outras funções do controller
    @Get()
    findAll(){
        return this.coursesService.findAll(); //implementar no serviço
    }
    //nova rota com cursos específicos ---- a partir do ID
    @Get(':id')
    //pegar id específico em Param(id)
    findOne(@Param('id') id:string){
        return this.coursesService.findOne(id);
    }

    @Post() 
    //NO_CONTENT = 204 -> constante de status code http
    //definindo o post sem retorno de conteúdo
    //@HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() createCourseDto: CreateCourseDto){
        return this.coursesService.create(createCourseDto);
    }
    //rotas de atualização
    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCourseDto: UpdateCourseDto){
        return this.coursesService.update(id, UpdateCourseDto);
    }
    @Delete(':id')
    //deletar curso com id específico em Param(id)
    remove(@Param('id') id:string){
        return this.coursesService.remove(id);
    }
}
