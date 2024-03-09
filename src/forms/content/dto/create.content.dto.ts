import { IsJSON, IsUUID } from "class-validator"

export class CreateContentDTO {
    @IsUUID()
    formId: string

    @IsJSON()
    content: string
}