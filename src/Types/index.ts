export type Color = "lightblue" | "red" | "green" | "";
export type Disk = number;

// export type TowerT = {
//   disks: Array<Disk>;
//   color: Color;
// }

export type TowerT = Array<Disk>;

export type Towers = {
  [key: string]: TowerT
};