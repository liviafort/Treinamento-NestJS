//import { PartialType } from "@nestjs/mapped-types";
//import { CreateCourseDto } from "./create-course.dto";

//export class UpdateCourseDto extends PartialType(CreateCourseDto){}

import { IsString } from "class-validator";

export class UpdateCourseDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsString({each: true})
    readonly tags: string[];
}
