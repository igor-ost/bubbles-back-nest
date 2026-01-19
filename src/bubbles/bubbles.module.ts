import { Module } from '@nestjs/common';
import { BubblesService } from './bubbles.service';
import { BubblesController } from './bubbles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BubbleEntity } from './entities/bubble.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BubbleEntity])],
  controllers: [BubblesController],
  providers: [BubblesService],
  exports: [BubblesService],
})
export class BubblesModule {}
