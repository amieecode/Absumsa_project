import React from 'react';
import BlogCard from "./BlogCard.jsx";
import Img1 from "../../assets/blogImages/img2.jpg";
import Img2 from "../../assets/blogImages/img3.jpg";
import Img3 from "../../assets/blogImages/img4.jpg";


const BlogsData = [
    {
        id:1,
        image: Img1,
        title: "Absumsa out reach Day 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam illum laborum id adipisci eius tempora eaque assumenda eveniet distinctio velit magni, beatae accusamus sequi architecto! Similique eos veritatis nostrum magnam corrupti minima libero animi debitis facilis adipisci repudiandae mollitia amet dolorum, earum dignissimos iste saepe veniam culpa quidem eligendi. Esse ex voluptas voluptatem aut ab, odio temporibus sed praesentium numquam cum rerum quasi cumque natus perferendis, iusto repudiandae, accusamus eum ut dolor laudantium maiores? Ipsum itaque dolor, vitae quae tempore sint libero dicta accusantium sapiente maxime cumque distinctio ea consectetur minima quasi suscipit! Quasi autem optio et quibusdam, quia expedita nostrum sit nihil? Cupiditate hic nam amet beatae odio totam optio atque distinctio, neque porro magni modi labore accusantium iusto ullam expedita illo quo aperiam harum fuga soluta doloremque voluptate. Ipsa ducimus hic iure suscipit dolore a deserunt tempore! Repellendus aperiam libero vel debitis unde, nam ipsa inventore tenetur, possimus quidem natus! Voluptates, fuga aut. Maiores maxime obcaecati veritatis, corporis impedit culpa corrupti consequuntur consequatur nihil dignissimos aliquid blanditiis eaque quod sint a cupiditate eos dicta magnam fugiat? Placeat eos ad assumenda molestiae accusamus eius consectetur modi nemo odio nam fugiat sapiente distinctio, quaerat dolore laboriosam ab tempora mollitia quae.",
        author: "John Doe",
        date: "April, 2022",
    }, 
    {
        id:2,
        image: Img2,
        title: "Absumsa out reach Day 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam illum laborum id adipisci eius tempora eaque assumenda eveniet distinctio velit magni, beatae accusamus sequi architecto! Similique eos veritatis nostrum magnam corrupti minima libero animi debitis facilis adipisci repudiandae mollitia amet dolorum, earum dignissimos iste saepe veniam culpa quidem eligendi. Esse ex voluptas voluptatem aut ab, odio temporibus sed praesentium numquam cum rerum quasi cumque natus perferendis, iusto repudiandae, accusamus eum ut dolor laudantium maiores? Ipsum itaque dolor, vitae quae tempore sint libero dicta accusantium sapiente maxime cumque distinctio ea consectetur minima quasi suscipit! Quasi autem optio et quibusdam, quia expedita nostrum sit nihil? Cupiditate hic nam amet beatae odio totam optio atque distinctio, neque porro magni modi labore accusantium iusto ullam expedita illo quo aperiam harum fuga soluta doloremque voluptate. Ipsa ducimus hic iure suscipit dolore a deserunt tempore! Repellendus aperiam libero vel debitis unde, nam ipsa inventore tenetur, possimus quidem natus! Voluptates, fuga aut. Maiores maxime obcaecati veritatis, corporis impedit culpa corrupti consequuntur consequatur nihil dignissimos aliquid blanditiis eaque quod sint a cupiditate eos dicta magnam fugiat? Placeat eos ad assumenda molestiae accusamus eius consectetur modi nemo odio nam fugiat sapiente distinctio, quaerat dolore laboriosam ab tempora mollitia quae.",
        author: "John Doe",
        date: "April, 2022",
    }, 
    {
        id:3,
        image: Img3,
        title: "Absumsa out reach Day 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam illum laborum id adipisci eius tempora eaque assumenda eveniet distinctio velit magni, beatae accusamus sequi architecto! Similique eos veritatis nostrum magnam corrupti minima libero animi debitis facilis adipisci repudiandae mollitia amet dolorum, earum dignissimos iste saepe veniam culpa quidem eligendi. Esse ex voluptas voluptatem aut ab, odio temporibus sed praesentium numquam cum rerum quasi cumque natus perferendis, iusto repudiandae, accusamus eum ut dolor laudantium maiores? Ipsum itaque dolor, vitae quae tempore sint libero dicta accusantium sapiente maxime cumque distinctio ea consectetur minima quasi suscipit! Quasi autem optio et quibusdam, quia expedita nostrum sit nihil? Cupiditate hic nam amet beatae odio totam optio atque distinctio, neque porro magni modi labore accusantium iusto ullam expedita illo quo aperiam harum fuga soluta doloremque voluptate. Ipsa ducimus hic iure suscipit dolore a deserunt tempore! Repellendus aperiam libero vel debitis unde, nam ipsa inventore tenetur, possimus quidem natus! Voluptates, fuga aut. Maiores maxime obcaecati veritatis, corporis impedit culpa corrupti consequuntur consequatur nihil dignissimos aliquid blanditiis eaque quod sint a cupiditate eos dicta magnam fugiat? Placeat eos ad assumenda molestiae accusamus eius consectetur modi nemo odio nam fugiat sapiente distinctio, quaerat dolore laboriosam ab tempora mollitia quae.",
        author: "John Doe",
        date: "April, 2022",
    }, 
];

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className='container'>
        <h1 className='my-8 border-l-8 border-gray-400 pl-2 py-4 pt-2 text-3xl font-bold'>
            Our Latest Blogs
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {BlogsData.map((item, index) => (
                <BlogCard key={index} { ...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
