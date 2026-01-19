import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';

@Injectable()
export class AppService {
  private readonly startedAt: Date;
  private readonly serviceName: string;
  constructor(private readonly config: ConfigService) {
    this.startedAt = new Date();
    this.serviceName = config.getOrThrow("SERVICE_NAME");
  }

  getStatus() {
    const now = new Date();
    const uptimeMs = now.getTime() - this.startedAt.getTime();

    const seconds = Math.floor(uptimeMs / 1000) % 60;
    const minutes = Math.floor(uptimeMs / (1000 * 60)) % 60;
    const hours = Math.floor(uptimeMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));

    return {
      serviceName: this.serviceName,
      serverTimeUtc: now.toISOString(),
      serverTimeLocal: now.toString(),
      startedAtUtc: this.startedAt.toISOString(),
      uptime: {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        totalSeconds: Math.floor(uptimeMs / 1000),
      },
      machine: {
        name: os.hostname(),
        os: `${os.type()} ${os.release()}`,
        architecture: os.arch(),
        nodeVersion: process.version,
      },
      process: {
        pid: process.pid,
        memoryMb: +(process.memoryUsage().rss / 1024 / 1024).toFixed(2),
      },
    };
  }
}
