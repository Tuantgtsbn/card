import { Breadcrumb, Structure } from "@/components/Breadcrumb/Breadcrumb";
import Button from "@/components/Button/Button";
import { CardContext } from "@/contexts/CardProvider";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Loading from "@/components/Loading/Loading";
import { findRelatedCards, getCardById } from "@/apis/cardService";
import CardItem from "@/components/CardItem/CardItem";
import { set } from "react-hook-form";
function PreviewCardPage() {
    const { chooseCard, setChooseCard } = useContext(CardContext);
    console.log('chooseCard', chooseCard);
    const [relatedCards, setRelatedCards] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    document.title = chooseCard ? chooseCard.name : 'Preview Card';
    useEffect(() => {
        const id = window.location.pathname.split('/')[4];
        if (!chooseCard || chooseCard._id !== id) {
            getCardById(id).then(res => {
                setChooseCard(res.data.data);
                findRelatedCards(id).then(res => {
                    setRelatedCards(res.data.data);
                }).catch(err => console.log(err))
                    .finally(() => setIsLoading(false));
            }).catch(err => setIsError(true))
                .finally(() => setIsLoading(false));
        } else {
            findRelatedCards(id).then(res => {
                setRelatedCards(res.data.data);
            }).catch(err => setIsError(true))
                .finally(() => setIsLoading(false));

        }
    }, []);


    return (

        chooseCard ? (
            <>
                <div className="flex justify-center flex-col lg:flex-row mx-4 gap-4 sm:mx-8 lg:mx-16">
                    <div className="flex-1 lg:max-w-[900px]">
                        <div>
                            <Breadcrumb items={[Structure['home'], Structure['cards'], { ...Structure['cards'].children[chooseCard.type], active: true }, { name: chooseCard.name, active: false }]} />
                        </div>
                        <div className=" rounded-3xl flex justify-center items-center h-[300px] lg:h-[600px] bg-gray-100" >
                            <div className="relative w-1/2">
                                <img className="h-[200px] lg:h-[400px] w-full object-contain" src="https://static.greetingsisland.com/images/theme/preview-envelope-portrait.png?auto=format,compress" alt="" />
                                <img src={chooseCard.imgs[0]} alt="" className="object-contain w-full h-[200px] lg:h-[400px] absolute lg:-top-8 lg:left-8 -top-4  left-4" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[380px] lg:ml-8 font-[500] flex flex-col justify-center">
                        <p className="text-[27px]">{chooseCard.name}</p>
                        <p>Type: {chooseCard.type}</p>
                        <p>Author: {chooseCard.author}</p>
                        <p>Price: {chooseCard.isFree ? 'Free' : 'Premium'}</p>
                        <Accordion type="multiple" className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Description</AccordionTrigger>
                                <AccordionContent>
                                    {chooseCard.description}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Color</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            chooseCard.color.map((item, index) => {
                                                return (
                                                    <Button key={index} varriant="secondary" className="">{item}</Button>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Tags</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            chooseCard.tags.map((item, index) => {
                                                return (
                                                    <Button key={index} varriant="secondary" className="">{item}</Button>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button varriant="secondary" className="w-full text-white bg-thirdColor hover:bg-[#18B071] active:bg-[#169D64] " >
                            Customize
                        </Button>


                    </div>
                </div>
                <div className="mx-3 sm:mx-8 lg:mx-16 mt-12">
                    <h2 className="text-[27px] font-[500] text-center mb-5">You might also like</h2>
                    <div className="flex gap-4">
                        {
                            isError ? <div className="text-center font-[20px]">Something went wrong</div> : relatedCards.map((card, index) => {
                                return (
                                    <CardItem key={index} data={card} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        ) : isLoading ? <Loading /> : isError ? <div>Something went wrong</div> : null



    )
}

export default PreviewCardPage;