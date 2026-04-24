import bannerImg from '../../../B11A7-Simple-React-Assignment/assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div>
            <div className="main-banner relative">
                <img className='w-full h-96 object-cover'
                    src={bannerImg}
                    alt="Banner"
                />

                <p className='absolute top-2/6 left-10 text-2xl font-bold'>
                    <p>Bid on Unique Items from</p>
                    <p>Around the World</p>
                </p>

                <p className='absolute top-55 left-10 text-sm '>
                    <p>Discover rare collectibles, luxury goods, and vintage </p>
                    <p>treasures in our curated auctions</p>

                </p>

                <button className='absolute w-45 h-12 top-3/4 left-10 border-2 p-2 text-black bg-white rounded-4xl'>
                    Explore Auctions
                </button>

                
            </div>
        </div>
    );
};

export default Banner;