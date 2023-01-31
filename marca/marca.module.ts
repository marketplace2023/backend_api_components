import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { MarcaController } from './marca.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [MarcaController],
  providers: [MarcaService]
})
export class MarcaModule { }
