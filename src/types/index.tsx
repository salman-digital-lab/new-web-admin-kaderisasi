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
  id : number,
  key: string;
  no : number;
  name: string;
  publicUser: {
    id: number;
    email: string;
  };
  whatsapp: string;
  univesity_id: number;
  jenjang: number;
  aktivis?: string[];
}

export interface DataRegistrant extends DataMembers {
  register: string;
}

export interface DataMemberDetail {
  name: string;
  gender: string;
  email: string;
  line: string;
  whatsapp: string;
  instagram: string;
  university: string;
  major: string;
  intake_year: number;
  city: string;
  province: string;
}

export interface DataActivity {
  key: string;
  no : number;
  title: string;
  registration_start: string;
  registration_end: string;
  description: string;
  minimum_level: string;
  activity_type: string;
  questionnaire?: string;
  selection_start: string;
  selection_end: string;
  activity_start: string;
  activity_end: string;
  publish : number;
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