import { IsString, Length } from 'class-validator';

export class CreateLikeDto {
  /* ID пузыря (обязательное поле)*/
  @IsString()
  bubble_id: string;

  /* Автор (не обязательное поле)*/
  @IsString()
  @Length(2, 80)
  author: string;
}
