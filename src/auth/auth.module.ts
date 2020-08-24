import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { configuration } from '../configuration';
import { JwtStrategy } from './JwtStrategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: configuration.getJwtSecret(),
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [JwtStrategy],
    exports: [JwtStrategy]
})
export class AuthModule {}
