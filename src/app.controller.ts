import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  /* Получение данных о сервиса (uptime, name, machine и тд.) */
  @Get("status")
  getStatus() {
    return this.appService.getStatus();
  }
}
