import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeEntity } from './entities/like.entity';
import { BubblesModule } from 'src/bubbles/bubbles.module';

@Module({
  imports: [TypeOrmModule.forFeature([LikeEntity]), BubblesModule],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
