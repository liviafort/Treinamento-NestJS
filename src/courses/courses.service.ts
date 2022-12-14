import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = 
    [
        {
        id: 1,
        name: "Fundamenos do framework NesJS",
        description: "Fundamentos do framework JS",
        tags: ["node.js", "nest.js", "javascript"],
        }
    ];

    findAll(){
        return this.courses;
    }

    findOne(id: string){
        const course = this.courses.find((course: Course) => course.id === Number(id));
        if(!course){
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
        }
        return course;
    }

    create(createCourseDto: any){
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any){
        //se o valor não for encontrado ele retorna -1
        const indexCourse = this.courses.findIndex(course => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string){
        //se o valor não for encontrado ele retorna -1
        const indexCourse = this.courses.findIndex(course => course.id === Number(id));
        if(indexCourse >= 0){
            this.courses.splice(indexCourse, 1);
        }
    }
}
