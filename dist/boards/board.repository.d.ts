import { User } from 'src/auth/user.entity';
import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardRepository extends Repository<Board> {
    private dataSource;
    constructor(dataSource: DataSource);
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
}
