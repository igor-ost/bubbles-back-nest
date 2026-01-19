import { IsNumber, IsString, Length } from 'class-validator';

export class CreateBubbleDto {
  /* Названи пузыря (обязательное поле)*/
  @IsString()
  name: string;

  /* Короткое имя пузыря (обязательное поле), мин длинна 3 - макс длинна 20*/
  @IsString()
  @Length(3, 20)
  shortName: string;

  /* Описание пузыря (необязательное поле)*/
  @IsString()
  description?: string;

  /* Назначеные действия (необязательное поле)*/
  @IsString()
  assignedAction?: string;

  /* Изначальная Причина (необязательное поле)*/
  @IsString()
  rootCause?: string;

  /* Когда планируеться выполнить -дата- (yyyy/mm/dd dd/mm/yyyy Q1-Q2-Q3-Q4) мин длинна - 2 макс длинна - 12 (необязательное поле - /// по умолчанию)*/
  @IsString()
  @Length(2, 12)
  when?: string;

  /* Кто ответсвенный за пузырь (ФИО/Email/LDAP), мин длинна - 2 макс длинна - 80 (необязательное поле - null по умолчанию)*/
  @IsString()
  @Length(2, 80)
  person?: string;

  /* Статус пузыря, мин длинна - 2 макс длинна - 20 (обязательное поле)*/
  @IsString()
  @Length(2, 20)
  status: string;

  /* Пометка - являеться ли проблема изначальной (необязательное поле - 0 по умолчанию)*/
  @IsNumber()
  @Length(0, 1)
  isRCA?: boolean;

  /* Пометка - получили бонус (необязательное поле - 0 по умолчанию)*/
  @IsNumber()
  @Length(0, 1)
  gotBonus?: boolean;

  /* Автор идеи (необязательное поле - "anonymous" по умолчанию)*/
  @IsString()
  @Length(2, 80)
  author?: string;
}
