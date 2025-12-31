import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @IsString({ message: 'Name has to be a string' })
  @MaxLength(64, { message: 'Name has to be less then 64 chars' })
  @IsNotEmpty({ message: 'Name can not be empty' })
  name: string;

  @IsString({ message: 'Email has to be a string' })
  @IsNotEmpty({ message: 'Email can not be empty' })
  @IsEmail({}, { message: 'This field must contain an email address' })
  email: string;

  @IsString({ message: 'Password has to be a string' })
  @IsNotEmpty({ message: 'Password can not be empty' })
  @MinLength(6, { message: 'Password must contain at least 6 chars' })
  password: string;
}
