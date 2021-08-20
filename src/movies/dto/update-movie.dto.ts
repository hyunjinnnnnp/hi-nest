import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
//partial types
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
