import { AuthModule } from '@modules/auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
