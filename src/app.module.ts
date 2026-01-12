import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeORMConfig } from './config/typeorm.config';
import { BubblesModule } from './bubbles/bubbles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeORMConfig,
      inject: [ConfigService], 
    }),
    BubblesModule,
  ], 
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
