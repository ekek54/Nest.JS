import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAll() {
    return 'This will return all movie';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieID: string) {
    return `This will return one movie with the id:${movieID}`;
  }
  @Post()
  create(@Body() movieData) {
    return movieData;
  }
  @Delete(':id')
  remove(@Param('id') movieID: string) {
    return `This will delete a movie with the id: ${movieID}`;
  }
  @Patch(':id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return {
      updatedMovie: movieID,
      ...updateData,
    };
  }
}
