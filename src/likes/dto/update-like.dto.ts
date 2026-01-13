import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeDto } from './create-like.dto';
import { IsString, Length } from 'class-validator';

export class UpdateLikeDto extends PartialType(CreateLikeDto) {
  /* Комментарий (обязательное поле)*/
  @IsString()
  type: string | undefined;

  /* Автор (не обязательное поле)*/
  @IsString()
  @Length(2,80)
  author: string | undefined;
}
