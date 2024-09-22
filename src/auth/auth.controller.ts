import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() signInDto: { email: string; password: string }) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('/register')
  async register(
    @Body() registerDto: { name: string; email: string; password: string },
  ) {
    return await this.authService.register(
      registerDto.name,
      registerDto.email,
      registerDto.password,
    );
  }
}
