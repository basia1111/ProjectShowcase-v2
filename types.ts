import { Date } from "mongoose";

export type User = {
  id: string;
  _id?: string;
  name: string;
  email: string;
  image?: string;
  professionalTitle?: string;
  city?: string;
  about?: string;
  socialMedia?: {
    twitter?: string;
    linkedIn?: string;
    github?: string;
  };
  coverImage?: string;
};

export type Project = {
  _id: string;
  id: string;
  title: string;
  description: string;
  author: User;
  cover?: string;
  email: string;
  status: string;
  category: string;
  techStack: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  gitHub?: string[];
  documentation?: string[];
  liveDemo?: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type ProfileComponentProps = {
  user: User;
  isOwner: boolean;
};
