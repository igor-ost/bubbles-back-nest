import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsEntity } from './entities/comment.entity';
import { BubblesModule } from 'src/bubbles/bubbles.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommentsEntity]),BubblesModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
