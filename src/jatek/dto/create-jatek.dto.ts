import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateJatekDto {
  @IsNotEmpty()
  @IsString()
  megnevezes : string
  @IsNotEmpty()
  @IsString()
  anyag : string
  @IsNotEmpty()
  @IsInt()
  suly : number
  gyerekId : number
}
