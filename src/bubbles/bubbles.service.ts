import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBubbleDto } from './dto/create-bubble.dto';
import { UpdateBubbleDto } from './dto/update-bubble.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BubbleEntity } from './entities/bubble.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BubblesService {
  constructor(@InjectRepository(BubbleEntity) private readonly bubblesRepository: Repository<BubbleEntity>){}

  /* Создания записи в бд через DTO */
  async create(createBubbleDto: CreateBubbleDto) {
    const bubble = this.bubblesRepository.create(createBubbleDto)
    return await this.bubblesRepository.save(bubble);
  }

  /* Поиск всех пузырей + сортировка по дате создания */
  async findAll() {
    return await this.bubblesRepository.find({
      order:{
        createdAt: 'ASC'
      },
      relations: {
        comments: true,
        likes: true,
      }
    })
  }

  /* Поиск пузыря по полю ID, + обработка NotFoundException */
  async findOne(id: string) {
    const bubble = await this.bubblesRepository.findOne({
      where: {
        id: id
      },
    relations: {
        comments: true,
        likes: true
      }
    })
    if(!bubble){
      throw new NotFoundException(`Не удалось найти bubble по id: ${id}`);
    }

    return bubble
  }

  /* Обновления пузыря через Assing Object */
  async update(id: string, updateBubbleDto: UpdateBubbleDto) {
    const bubble = await this.findOne(id)
    Object.assign(bubble,updateBubbleDto)
    return await this.bubblesRepository.save(bubble);
  }

   /* Удаление пузыря по полю ID */
  async remove(id: string) {
    const bubble = await this.findOne(id);
    await this.bubblesRepository.remove(bubble);
    return { status: true }
  }
}
