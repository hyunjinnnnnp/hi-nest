import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('Movies') //@Controller('ENTRY POINT')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after :${searchingYear}  `;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    // (@필요한 걸 요청한다("id")) id라는 argument에:string형태로 저장)
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  delete(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
