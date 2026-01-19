import { BubbleEntity } from 'src/bubbles/entities/bubble.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bubbles-likes')
export class LikeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /* Привязка к пузырю ManyToOne */
  @ManyToOne(() => BubbleEntity, (bubble) => bubble.likes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'bubble_id' })
  bubble: BubbleEntity;

  /* Автор комментария - по умолчанию anonymous */
  @Column('nvarchar', { length: 80, default: 'anonymous' })
  author: string;

  /* Дата создания */
  @CreateDateColumn()
  createdAt: Date;

  /* Дата обновления */
  @UpdateDateColumn()
  updatedAt: Date;
}
