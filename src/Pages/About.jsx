import AboutSection from '../Components/About/AboutSection';
import Location from '../Components/Location/Location';

   const About = () => {
  return (
    <div className='pt-14'>
      <AboutSection />
      <div className='container'>       
        <div className="py-8">
            <h1 className='my-8 border-l-8 border-gray-400 mb-4 pl-2 py-2 text-3xl font-bold'>
                About Us
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod veritatis,
                soluta excepturi ratione velit cupiditate fugit accusantium recusandae accusamus 
                omnis similique iusto cumque quis ezor consectetur numquam ipsam? Dolor animi expedita 
                sapiente eius, distinctio provident excepturi omnis sint ad dolorum harum adipisci numquam 
                temporibus nulla deserunt quos fugit in officia odio porro qui, ipsa hic similique accusantium. Obcaecati, tempore.
               
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod veritatis,
                soluta excepturi ratione velit cupiditate fugit accusantium recusandae accusamus 
                omnis similique iusto cumque quis error consectetur numquam ipsam? Dolor animi expedita 
                sapiente eius, distinctio provident excepturi omnis sint ad dolorum harum adipisci numquam 
                temporibus nulla deserunt quos fugit in officia odio porro qui, ipsa hic similique accusantium. Obcaecati, tempore.
            </p>
            <br/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quod veritatis,
                 soluta excepturi ratione velit cupiditate fugit accusantium recusandae accusamus 
                 omnis similique iusto cumque quis error consectetur numquam ipsam? Dolor animi expedita 
                 sapiente eius, distinctio provident excepturi omnis sint ad dolorum harum adipisci numquam 
                 temporibus nulla deserunt quos fugit in officia odio porro qui, ipsa hic similique accusantium. Obcaecati, tempore.
            </p>
        </div>
       <Location />
      </div>
    </div>
  );
};

export default About;
