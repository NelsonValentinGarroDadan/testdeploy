import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { Users } from '@modules/users/users.entity';
import { Credentials } from '@modules/credentials/credentials.entity';
import { Category } from '@modules/categories/category.entity';
import { AuthModule } from '@modules/auth/auth.module';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityRepository } from './activity.repository';
import { MailService } from '@modules/mail/mail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity, Users, Credentials, Category]),
    AuthModule,
  ],
  controllers: [ActivityController],
  providers: [
    ActivityService,
    ActivityRepository,
    MailService,
  ],
})
export class ActivityModule {}
