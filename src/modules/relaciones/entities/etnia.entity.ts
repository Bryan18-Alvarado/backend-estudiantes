// import { Estudiante } from 'src/modules/estudiantes/entities/estudiante.entity';
// import {
//   Column,
//   CreateDateColumn,
//   OneToMany,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// export class Etnia {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'varchar', nullable: false, length: 60 })
//   etnia: string;

//   @OneToMany(() => Estudiante, (estudiante) => estudiante.etnia)
//   estudiantes: Estudiante;

//   @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;

//   @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   updatedAt: Date;
// }
