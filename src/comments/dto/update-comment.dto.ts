import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsString, Length } from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
    /* Комментарий (обязательное поле) */
    @IsString()
    comment: string | undefined;

    /* Автор (не обязательное поле) */
    @IsString()
    @Length(2,80)
    author: string | undefined;
}
