import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  SerializeOptions,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from '@prisma/client';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  @SerializeOptions({ type: LoginResponseDto })
  async register(@Body() createUserDto: CreateUserDto): Promise<LoginResponseDto> {
    // 서버 안정성을 위해 일시적으로 회원가입을 중단합니다
    throw new HttpException('안정적인 운영을 위해 현재 회원가입을 일시 중단합니다.', HttpStatus.SERVICE_UNAVAILABLE);

    // const user = await this.usersService.create(createUserDto);
    // return this.authService.login(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @SerializeOptions({ type: LoginResponseDto })
  async login(@Request() req: { user: User }): Promise<LoginResponseDto> {
    // console.log(req);
    return this.authService.login(req.user);
  }
}
