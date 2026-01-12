import { PartialType } from '@nestjs/mapped-types';
import { CreateBubbleDto } from './create-bubble.dto';
import { IsNumber, IsString, Length } from 'class-validator';

export class UpdateBubbleDto extends PartialType(CreateBubbleDto) {
    /* Названи пузыря (обязательное поле)*/
    @IsString()
    name: string | undefined;
    
    /* Короткое имя пузыря (обязательное поле), мин длинна 3 - макс длинна 20*/
    @IsString()
    @Length(3,20)
    shortName: string | undefined;
    
    /* Описание пузыря (необязательное поле)*/
    @IsString()
    description?: string | undefined;
    
    /* Назначеные действия (необязательное поле)*/
    @IsString()
    assignedAction?: string | undefined;
    
    /* Изначальная Причина (необязательное поле)*/
    @IsString()
    rootCause?: string | undefined;
    
    /* Когда планируеться выполнить -дата- (yyyy/mm/dd dd/mm/yyyy Q1-Q2-Q3-Q4) мин длинна - 2 макс длинна - 12 (необязательное поле - /// по умолчанию)*/
    @IsString()
    @Length(2,12)
    when?: string | undefined;
    
    /* Кто ответсвенный за пузырь (ФИО/Email/LDAP), мин длинна - 2 макс длинна - 80 (необязательное поле - null по умолчанию)*/
    @IsString()
    @Length(2,80)
    person?: string | undefined;
    
    /* Статус пузыря, мин длинна - 2 макс длинна - 20 (обязательное поле)*/
    @IsString()
    @Length(2,20)
    status: string | undefined;
    
    /* Пометка - являеться ли проблема изначальной (необязательное поле - 0 по умолчанию)*/
    @IsNumber()
    @Length(0,1)
    isRCA?: boolean | undefined
    
    /* Пометка - получили бонус (необязательное поле - 0 по умолчанию)*/
    @IsNumber()
    @Length(0,1)
    gotBonus?: boolean | undefined
    
    /* Автор идеи (необязательное поле - "anonymous" по умолчанию)*/
    @IsString()
    @Length(2,80)
    author?: string | undefined
}
