import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credentials } from '@modules/credentials/credentials.entity';
import { Users } from './users.entity';
import { MailModule } from '@modules/mail/mail.module';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Credentials]),
    MailModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
