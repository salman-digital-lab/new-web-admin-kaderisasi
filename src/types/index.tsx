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
  aktivis?: string[];
}

export interface DataRegistrant extends DataMembers {
  register: string;
}

export interface DataMemberDetail {
  email: string;
  idLine: string;
  whatsapp: string;
  instagram: string;
  universitas: string;
  jurusan: string;
  angkatan: number;
  address: string;
  kota: string;
  provinsi: string;
}

export interface DataActivity {
  key: string;
  no : number;
  title: string;
  registrationDate: string;
  description: string;
  minRole: string;
  activityType: string;
  questionnaire?: string;
  selectionDate: string;
  activityDate: string;
  publish : string;
}

export interface DataActivityDetail {
  activity_name: string;
  description: string;
  minimum_role: string;
  activity_type: string;
  additional_questionnaire: string;
  registration_start: string;
  registration_end: string;
  selection_start: string;
  selection_end: string;
  activity_start: string;
  activity_end: string;
  is_published: boolean;
}

export interface DataMaster {
  key: string;
  no : number;
  province_id?: string;
  name: string;
}