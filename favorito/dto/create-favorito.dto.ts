import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateFavoritosProductsDto {
    @Expose()
    public readonly producto_id: number;

    @Expose()
    public readonly cliente_id: number;

}