import BlogCard from "../../../components/Blog/blog-card";

const Articles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Articles;
