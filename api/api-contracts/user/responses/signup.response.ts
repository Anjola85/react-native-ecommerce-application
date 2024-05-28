import { UserInformationRespDto } from "./user.information.response";

export class SignupResponseDto {
  token: string;
  userInfo: UserInformationRespDto;

  constructor(token: string, userInfo: UserInformationRespDto) {
    this.token = token;
    this.userInfo = userInfo;
  }
}
