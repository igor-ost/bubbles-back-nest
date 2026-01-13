import { NotFoundException } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeEntity } from './entities/like.entity';
import { BubblesService } from 'src/bubbles/bubbles.service';
import { Repository } from 'typeorm';

export class LikesService {
  constructor(@InjectRepository(LikeEntity) 
    private readonly likeRepository: Repository<LikeEntity>,
    private readonly bubbleService: BubblesService
  ){}

  /* Создания записи в бд через DTO */
  async create(сreateLikeDto: CreateLikeDto) {
    const bubble = await this.bubbleService.findOne(сreateLikeDto.bubble_id)
    const like = this.likeRepository.create({
      bubble: bubble,
      author: сreateLikeDto.author,
    })
    return await this.likeRepository.save(like);
  }

  /* Поиск всех комментариев + сортировка по дате создания */
  async findAll() {
    return await this.likeRepository.find({
      order:{
        createdAt: 'ASC'
      }
    })
  }

  /* Поиск комментария по полю ID, + обработка NotFoundException */
  async findOne(id: string) {
    const like = await this.likeRepository.findOne({
      where: {
        id: id
      }
    })
    if(!like){
      throw new NotFoundException(`Не удалось найти like по id: ${id}`);
    }

    return like
  }

  /* Обновления комметария через Assing Object */
  async update(id: string, updateLikeDto: UpdateLikeDto) {
    const like = await this.findOne(id)
    Object.assign(like,updateLikeDto)
    return await this.likeRepository.save(like);
  }

   /* Удаление комметария по полю ID */
  async remove(id: string) {
    const like = await this.findOne(id);
    await this.likeRepository.remove(like);
    return { status: true }
  }
}
