import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';


export async function getTypeORMConfig(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  const port = Number(configService.getOrThrow('MSSQL_PORT'));
  return {
    type: 'mssql',
    host: configService.getOrThrow('MSSQL_HOST'),
    port,
    username: configService.getOrThrow('MSSQL_USER'),
    password: configService.getOrThrow('MSSQL_PASS'),
    database: configService.getOrThrow('MSSQL_DB'),
    synchronize: true,
    autoLoadEntities: true,
    options: {
      encrypt: true, 
      enableArithAbort: true,
      trustServerCertificate: true, 
    },
  };
}