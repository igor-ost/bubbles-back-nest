import { CommentsEntity } from "src/comments/entities/comment.entity";
import { LikeEntity } from "src/likes/entities/like.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("bubbles")
export class BubbleEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    /* Полное название пузыря (details) */
    @Column("nvarchar", {length: "max"})
    name: string;

    /* Короткое название пузыря (general) */
    @Column("nvarchar", {length: 30})
    shortName: string;

    /* Описание пузыря (details) */
    @Column("nvarchar", {nullable: true, length: "max"})
    description: string;
 
    /* Назначеные действия (details) */
    @Column("nvarchar", {nullable: true, length: "max"})
    assignedAction: string;
    
    /* Изначальная Причина (details) */
    @Column("nvarchar", {nullable: true, length: "max"})
    rootCause: string;
    
    /* Когда -date- -если не указывать /// по умолчанию- (details) */
    @Column("nvarchar",{ length: 12, default: "///"})
    when: string;
    
    /* Ответственный человек (details) */
    @Column("nvarchar",{ length: 80, nullable: true })
    person: string;

    /* Автор пузыря -если не указывать anonymous по умолчанию- (details) */
    @Column("nvarchar",{ length: 80, default: "anonymous"})
    author: string;

    /* Кол-во просмотров -размер пузыря зависит от кол/во- (general) */
    @Column("int", { default: 0 })
    views: number

    /* Статус пузыря (general) */
    @Column("nvarchar",{ length: 20})
    status: string

    /* Является (корневой причиной) (1 = да 0 = нет) */
    @Column("int",{default: 0})
    isRCA: boolean
    
    /* Получил ли пузырь вознаграждение (1 = да 0 = нет) */
    @Column("int",{default: 0})
    gotBonus: boolean

    /* Привязка к комментариям OneToMany */
    @OneToMany(()=>CommentsEntity,(comment)=>comment.bubble)
    comments: CommentsEntity[]
    
    @OneToMany(()=>LikeEntity, (like)=>like.bubble)
    likes: LikeEntity[]

    /* Дата создания */
    @CreateDateColumn()
    createdAt: Date;

    /* Дата обновления */
    @UpdateDateColumn()
    updatedAt: Date;
}
