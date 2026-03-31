// import { Estudiante } from 'src/modules/estudiantes/entities/estudiante.entity';
// import {
//   Column,
//   CreateDateColumn,
//   OneToMany,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// export class Sexo {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'varchar', nullable: false, length: 60 })
//   sexo: string;

//   @OneToMany(() => Estudiante, (estudiante) => estudiante.sexo)
//   estudiantes: Estudiante[];

//   @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;

//   @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   updatedAt: Date;
// }
