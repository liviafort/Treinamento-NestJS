import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';


describe('CoursesService', () => {
  let service: CoursesService;
  let id, date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '';
    date = new Date();
  })
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('buscar curso pelo ID', () => {
      it('deve retornar o objeto Course', async () => {
        const courseId = '1';
        const expectedCourse = {};
        courseRepository.findOne.mockReturnValue(expectedCourse);
        const course = await service.findOne(courseId);
        expect(course).toEqual(expectedCourse);
      });
      it('deve retornar um NotFoundException', async () => {
        const courseId = '1';
        courseRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(courseId);
        } catch (error) {
          expect(error).toBeInstanceOf(NotFoundException);
          expect(error.message).toEqual(`Course ID ${courseId} not found`);
        }
      });
    });
  });
});