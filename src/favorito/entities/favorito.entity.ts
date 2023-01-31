import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from '../../producto/entities/producto.entity';
import { Clientes } from '../../clientes/entities/clientes.entity';

@Entity({ name: 'favoritos_products' })
export class FavoritoProducts {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'producto_id' })
    public productoId: number;

    @ManyToMany(() => Producto)
    @JoinColumn({ name: 'producto_id' })
    public producto: Producto;

    @Column({ name: 'cliente_id' })
    public clienteId: number;

    @ManyToMany(() => Clientes)
    @JoinColumn({ name: 'cliente_id' })
    public Clientes: Clientes;

    constructor(data: Partial<FavoritoProducts>) {
        Object.assign(this, data);
    }

}