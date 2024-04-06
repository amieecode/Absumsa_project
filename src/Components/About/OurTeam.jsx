import Slider from "react-slick";

const TeamData = [
    {
        id:1,
        name:"Stan Smith",
        title:"President",
        img: "https://picsum.photos/101/101",
    },
    {
        id:2,
        name:"Stan Smith",
        title:"Director of Academics",
        img: "https://picsum.photos/101/101",
    },
    {
        id:3,
        name:"Stan Smith",
        title: "Director of Sport",
        img: "https://picsum.photos/102/101",
    },
    {
        id:4,
        name:"Stan Smith",
        title:"Director of Financial",
        img: "https://picsum.photos/104/104",
    },
    {
        id:5,
        name:"Stan Smith",
        title: "Director of Social",
        img: "https://picsum.photos/101/101",
    },
    {
        id:6,
        name:"Stan Smith",
        title: "Secretary",
        img: "https://picsum.photos/102/102",
    }
]

const OurTeam = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            
        ]
    };
  return (
    <div>
      <div className="py-10 mb-10">
        <div className="container">
            {/* Team header section */}
            <div data-aos="fade-up" className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    Our Excos
                </h1>
            </div>
            {/* Team card section */}
            <div data-aos="zoom-in">
            <Slider {...settings}>
                {TeamData.map((data, index) => {
                    return(
                        <div className="my-6" key={data.id}>
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                {/*Image Section*/}
                                <div className="mb-4">
                                    <img 
                                        src={data.img}
                                        alt=""
                                        className="rounded-full w-20 h-20 items-center"
                                    />
                                </div>
                                {/* Content section */}
                                <div className="flex flex-col item-center gap-4">
                                    <div className="space-y-3">
                                        <h1 className="text-xl font-bold text-black/70">{data.name}</h1>
                                        <p className="text-sm text-gray-500">{data.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                
                )}
            
            </Slider>

            </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam;
