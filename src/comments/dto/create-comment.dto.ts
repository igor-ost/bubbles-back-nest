import { IsString, Length } from 'class-validator';

export class CreateCommentDto {
  /* ID пузыря (обязательное поле)*/
  @IsString()
  bubble_id: string;

  /* Комментарий (обязательное поле)*/
  @IsString()
  comment: string;

  /* Автор (не обязательное поле)*/
  @IsString()
  @Length(2, 80)
  author: string;
}
