import { ReactNode } from 'react';

export type MenuItem = {
  key: string;
  icon?: ReactNode;
  label: string;
  children?: MenuItem[];
};

export interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export interface DataMembers {
  key: string;
  no : number;
  name: string;
  email: string;
  phone: string;
  univ: string;
  jenjang: string;
  aktivis: string[];
}

export interface DataMemberDetail {
  email: string;
  idLine: string;
  whatsapp: string;
  instagram: string;
  universitas: string;
  fakultas: string;
  jurusan: string;
  angkatan: number;
  address: string;
  kecamatan: string;
  kota: string;
  provinsi: string;
}