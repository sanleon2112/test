import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Table({ tableName: 'UsersAPI' })
export class UsersAPI extends Model<UsersAPI> {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID, allowNull: false })
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Column({ allowNull: false })
    name: string;

    @Column({ allowNull: false, unique: true })
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column({ allowNull: false })
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}
