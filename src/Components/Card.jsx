

function Card({ name, imageUrl, role, location }) {
    return (
        <div className="relative max-w-lg min-w-[320px] mt-5  backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
            <div className="absolute top-0 right-2 flex items-center space-x-2 mt-1 cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mt-1 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>


            </div>
            <div className="flex gap-4 px-4  py-4 mt-2">
                <img
                    className="max-w-[60px] max-h-[60px] rounded-full"
                    src={imageUrl}
                    alt=""
                />
                <hr className="border-l border-solid h-14 opacity-30" />
                <div className="font-[400] leading-[16px]">
                    <h1 className="text-white text-[1rem] md:text-[1.2rem]">{name}</h1>
                    <p className="text-[1rem] md:text-[1.2rem] text-white mt-2">
                        {role}
                    </p>
                    <p className="text-[0.9rem] text-gray-500 dark:text-gray-400 mt-2">
                        {location}
                    </p>
                </div>
            </div>
        </div>

    );
}

function App() {
    // Array of data
    const data = [
        {
            name: 'Andreas Wohlers Fotografie',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
            role: 'Photographer',
            location: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur sunt expedita repudiandae odit quas minima quis. Nisi, quo accusantium.'
        }

    ];

    return (
        <div>
            {data.map((item, index) => (
                <Card
                    key={index}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    role={item.role}
                    location={item.location}
                />
            ))}
        </div>
    );
}

export default App;
