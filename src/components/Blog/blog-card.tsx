import blogImage from "../../assets/blog/blogImage.png";
// import blogImage01 from "../../assets/blog/blogImage01.png";
// import blogImage02 from "../../assets/blog/blogImage02.png";
import userImage from "../../assets/blog/userImage.svg";
import verifiedIcon from "../../assets/icons/verified.svg";

const BlogCard = () => {
  return (
    <div>
      <img src={blogImage} alt="blog Image" />
      <div className="p-3 space-y-2">
        <h1 className="text-xl font-bold text-tertiary">Future of Work</h1>
        <p className="text-sm text-tertiary">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={userImage} alt="user Image" />
            <div className="space-y-1">
              <h2 className="text-base font-semibold text-tertiary capitalize">
                Johanna Murray
              </h2>
              <p className="flex items-center gap-2">
                <img src={verifiedIcon} alt="blog Image" />
                <span className="text-sm text-secondary capitalize">
                  verified writer
                </span>
              </p>
            </div>
          </div>
          <p className="text-base font-bold text-secondary">02 May</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
