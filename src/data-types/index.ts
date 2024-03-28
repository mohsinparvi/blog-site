export type blogCardProps = {
  image: string;
  title: string;
  summary: string;
  userImag: string;
  name: string;
  date: string;
  status: string;
};

export type buttonProps = {
  text: string;
  link?: string;
};
type Items = {
  id: number;
  title: string;
};
export type footerItemProps = { text: Items[]; title: string };
