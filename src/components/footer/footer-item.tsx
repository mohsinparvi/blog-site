import { footerItemProps } from "../../data-types/index.ts";

const FooterItem = (data: footerItemProps) => {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-[#5A7184]">{data.title}</h1>
      {data.text.map((text) => (
        <ul className="text-base text-[#959EAD] space-y-2" key={text.id}>
          <li>{text.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default FooterItem;
