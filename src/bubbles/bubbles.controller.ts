import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BubblesService } from './bubbles.service';
import { CreateBubbleDto } from './dto/create-bubble.dto';
import { UpdateBubbleDto } from './dto/update-bubble.dto';

@Controller('bubbles')
export class BubblesController {
  constructor(private readonly bubblesService: BubblesService) {}

  /* Создание нового пузыря */
  @Post()
  create(@Body() createBubbleDto: CreateBubbleDto) {
    return this.bubblesService.create(createBubbleDto);
  }

  /* Получение списка пузырей */
  @Get()
  findAll() {
    return this.bubblesService.findAll();
  }

  /* Получение пузыря по ID */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bubblesService.findOne(id);
  }

  /* Обновить пузырь по ID */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBubbleDto: UpdateBubbleDto) {
    return this.bubblesService.update(id, updateBubbleDto);
  }

  /* Удалить пузырь по ID */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bubblesService.remove(id);
  }
}
