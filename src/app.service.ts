import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly startedAt: Date;

  constructor() {
    this.startedAt = new Date();
  }

  isServiceAvailable() {
    const now = new Date();
    const uptimeMs = now.getTime() - this.startedAt.getTime();

    const seconds = Math.floor(uptimeMs / 1000) % 60;
    const minutes = Math.floor(uptimeMs / (1000 * 60)) % 60;
    const hours = Math.floor(uptimeMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));

    return {
      status: 'ok',
      startedAt: this.startedAt.toISOString(),
      now: now.toISOString(),
      uptime: {
        days,
        hours,
        minutes,
        seconds,
        totalMilliseconds: uptimeMs
      }
    };
  }
}