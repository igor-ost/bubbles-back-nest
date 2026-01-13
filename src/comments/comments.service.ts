import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BubblesService } from 'src/bubbles/bubbles.service';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(CommentsEntity) 
  private readonly commentsRepository: Repository<CommentsEntity>,
  private readonly bubbleService: BubblesService
){}

  /* Создания записи в бд через DTO */
  async create(createCommentDto: CreateCommentDto) {
    const bubble = await this.bubbleService.findOne(createCommentDto.bubble_id)
    const comment = this.commentsRepository.create({
      bubble: bubble,
      comment: createCommentDto.comment
    })
    return await this.commentsRepository.save(comment);
  }

  /* Поиск всех комментариев + сортировка по дате создания */
  async findAll() {
    return await this.commentsRepository.find({
      order:{
        createdAt: 'ASC'
      }
    })
  }

  /* Поиск комментария по полю ID, + обработка NotFoundException */
  async findOne(id: string) {
    const comment = await this.commentsRepository.findOne({
      where: {
        id: id
      }
    })
    if(!comment){
      throw new NotFoundException(`Не удалось найти comment по id: ${id}`);
    }

    return comment
  }

  /* Обновления комметария через Assing Object */
  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(id)
    Object.assign(comment,updateCommentDto)
    return await this.commentsRepository.save(comment);
  }

   /* Удаление комметария по полю ID */
  async remove(id: string) {
    const comment = await this.findOne(id);
    await this.commentsRepository.remove(comment);
    return { status: true }
  }
}
