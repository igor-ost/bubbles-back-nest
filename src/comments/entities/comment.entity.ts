import { BubbleEntity } from "src/bubbles/entities/bubble.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("bubbles-comments")
export class CommentsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    /* Привязка к пузырю ManyToOne */
    @ManyToOne(()=> BubbleEntity, (bubble)=>bubble.comments,{
        onDelete: "CASCADE",
    })
    @JoinColumn({name: "bubble_id"})
    bubble: BubbleEntity

    /* Комментарий (details) */
    @Column("nvarchar", {length: "max"})
    comment: string;

    /* Автор комментария - по умолчанию anonymous */
    @Column("nvarchar", {length: 80, default: "anonymous"})
    author: string;

    /* Дата создания */
    @CreateDateColumn()
    createdAt: Date;

    /* Дата обновления */
    @UpdateDateColumn()
    updatedAt: Date;
}
