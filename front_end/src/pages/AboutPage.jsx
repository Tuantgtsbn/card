import CounterItem from "@/components/Counter/CounterItem";
import VideoWithLoading from "@/components/VideoWithLoading/VideoWithLoading";
function AboutPage() {
    const dataAlanytics = [
        {
            title: 'Visits',
            value: 1000
        },
        {
            title: 'Users',
            value: 1500
        },
        {
            title: 'Templates',
            value: 200
        }

    ]
    return (
        <div>
            <div className="relative">
                <VideoWithLoading videoSrc="https://res.cloudinary.com/dctzo9scu/video/upload/v1739787525/video/page/pqofyytju3bxhiqpf3xa.mp4" />
                <div className="absolute text-center px-[20px] py-[32px] bg-[#e2c1be] bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
                    <h1 className="xl:text-[52px] text-white">With you for all life's milestones</h1>
                    <p className="xl:text-[40px] text-white">Bring joy and excitement to all the important moments... big and small</p>
                </div>
            </div>
            <div className="max-w-[1024px] mx-auto flex flex-row flex-wrap justify-center sm:justify-between gap-4 py-8 mt-[100px]">
                <div className="flex flex-col items-center justify-center gap-1 max-w-[356px]">
                    <img src="https://res.cloudinary.com/dctzo9scu/image/upload/v1739787885/video/gif/gfi9ckbjkpwdwbrgqlq0.gif" alt="" />
                    <h2 className="text-2xl">Simplicity</h2>
                    <p className="text-neutral-500 text-center">Design like a pro in minutes, then download, print or send online with a beautiful animated experience!</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 max-w-[356px]">
                    <img src="https://res.cloudinary.com/dctzo9scu/image/upload/v1739787885/video/gif/gfi9ckbjkpwdwbrgqlq0.gif" alt="" />
                    <h2 className="text-2xl">Simplicity</h2>
                    <p className="text-neutral-500 text-center">Design like a pro in minutes, then download, print or send online with a beautiful animated experience!</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 max-w-[356px]">
                    <img src="https://res.cloudinary.com/dctzo9scu/image/upload/v1739787885/video/gif/gfi9ckbjkpwdwbrgqlq0.gif" alt="" />
                    <h2 className="text-2xl">Simplicity</h2>
                    <p className="text-neutral-500 text-center">Design like a pro in minutes, then download, print or send online with a beautiful animated experience!</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 max-w-[356px]">
                    <img src="https://res.cloudinary.com/dctzo9scu/image/upload/v1739787885/video/gif/gfi9ckbjkpwdwbrgqlq0.gif" alt="" />
                    <h2 className="text-2xl">Simplicity</h2>
                    <p className="text-neutral-500 text-center">Design like a pro in minutes, then download, print or send online with a beautiful animated experience!</p>
                </div>
            </div>
            <div className="mx-auto w-[90%] max-w-[1320px] relative">
                <h2 className="text-center text-[32px] mb-8">Working around the clock to help you spread the love</h2>
                <div className="flex gap-3 flex-row flex-wrap">
                    <div className="flex-grow-0 flex-shrink-0 basis-[calc(50%-12px)] lg:basis-[calc(33%-12px)]">
                        <img className="w-full h-full" src="https://static.greetingsisland.com/images/theme/about/team-3-w.png" alt="" />
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-[calc(50%-12px)] lg:basis-[calc(33%-12px)]">
                        <img className="w-full h-full object-none" src="https://static.greetingsisland.com/images/theme/about/team-2-w.jpg" alt="" />
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-[100%] lg:basis-[calc(33%-12px)]">
                        <img className="w-full h-full" src="https://static.greetingsisland.com/images/theme/about/team-3-w.png" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 bg-[#e2c1be] w-[90%] mx-auto mt-8" >
                    {
                        dataAlanytics.map((item, index) => (
                            <CounterItem className="!bg-[#e2c1be]" key={index} label={item.title} endValue={item.value} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutPage;