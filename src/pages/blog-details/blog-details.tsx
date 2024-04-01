import MainLayout from "../../components/main-layout";
import blogImg from "../../assets/blog/blogImg.png";
import userImg from "../../assets/blog/user.svg";

const BlogDetails = () => {
  return (
    <MainLayout>
      <div className="container">
        <p className="text-[#77808B] text-sm capitalize gap-2 my-4">
          Home/ blog/ artical title
        </p>
        <div className="flex flex-col lg:flex-row items-start gap-4 mx-6 lg:mx-0">
          <div className="w-full lg:w-[70%] space-y-12  ">
            <div className="space-y-6">
              <img src={blogImg} alt="blog image" className="w-full" />
              <h3 className="text-primary text-lg font-thin uppercase">
                EDUCATION
              </h3>
              <h1 className="text-2xl font-semibold text-tertiary">
                Help children get better education
              </h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
                sed lectus vestibulum.
              </p>
            </div>
            <div className="flex border rounded p-2 relative  border-primary mb-10">
              <textarea
                name=""
                id=""
                placeholder="Leave your comment here...."
                className="w-full h-24  rounded-md resize-none focus:outline-none border-none"
              />
              <button className="bg-primary text-white my-2 py-2 px-4 rounded flex justify-end items-end absolute right-0 bottom-0 me-4">
                Send
              </button>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-tertiary">
                All Comments (3)
              </h3>
              <div className="flex items-start gap-4">
                <img
                  src={userImg}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-tertiary">
                    Mohammad Rezaii
                  </h3>
                  <p className="text-sm">15 December 2020, 11:40 AM</p>
                  <p className="text-sm text-[#77808B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas erat imperdiet sed euismod nisi
                    porta lorem mollis. Morbi tristique senectus et netus.
                    Mattis pellentesque id nibh tortor id aliquet lectus proin.
                  </p>
                  <div className="flex items-center py-3">
                    <div className="flex items-center gap-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.333 1.83301H3.66634C2.65801 1.83301 1.83301 2.65801 1.83301 3.66634V20.1663L5.49967 16.4997H18.333C19.3413 16.4997 20.1663 15.6747 20.1663 14.6663V3.66634C20.1663 2.65801 19.3413 1.83301 18.333 1.83301ZM18.333 14.6663H5.49967L3.66634 16.4997V3.66634H18.333V14.6663Z"
                          fill="#77808B"
                        />
                      </svg>
                      <p className="text-sm text-[#77808B]">Reply</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[30%] space-y-8 my-10 lg:my-0">
            <h2 className="text-lg font-bold text-tertiary">Latest Article</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={blogImg}
                  alt="blog image"
                  className="w-20 h-20 rounded-lg"
                />
                <div className="space-y-1">
                  <h1 className="text-xl font-semibold text-tertiary ">
                    Help children get better education
                  </h1>
                  <p className="text-sm font-thin">Jun 27, 2022</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={blogImg}
                  alt="blog image"
                  className="w-20 h-20 rounded-lg"
                />
                <div className="space-y-1">
                  <h1 className="text-xl font-semibold text-tertiary ">
                    Help children get better education
                  </h1>
                  <p className="text-sm font-thin">Jun 27, 2022</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-tertiary">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <p className="bg-primary rounded py-2 px-4 text-white text-base">
                  Medical
                </p>
                <p className="bg-primary rounded py-2 px-4 text-white text-base">
                  Lifestyle
                </p>
                <p className="bg-primary rounded py-2 px-4 text-white text-base">
                  Learn
                </p>
                <p className="bg-primary rounded py-2 px-4 text-white text-base">
                  Healthy
                </p>
                <p className="bg-primary rounded py-2 px-4 text-white text-base">
                  Food
                </p>
                <p className="bg-primary rounded py-2 px-4 text-white text-base">
                  Diet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetails;
