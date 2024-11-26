import { Module } from '@nestjs/common';
import ormConfig from 'src/config/orm-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ActivityModule } from 'src/modules/activities/activity.module';
import { CategoryModule } from 'src/modules/categories/category.module';
import { StripeModule } from 'src/modules/stripe/stripe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
    AuthModule,
    ActivityModule,
    CategoryModule,
    StripeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
