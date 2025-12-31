import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    console.log('Database URL:', process.env.DATABASE_URL);
    const pool = new Pool({ 
      connectionString: process.env.DATABASE_URL 
    });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }
}