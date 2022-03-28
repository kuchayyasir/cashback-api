import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { CashbackModule } from './cashback/cashback.module';
import { RulesetModule } from './ruleset/ruleset.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE,
      // host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT),
      // username: process.env.DATABASE_USERNAME,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TransactionModule,
    CashbackModule,
    RulesetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
