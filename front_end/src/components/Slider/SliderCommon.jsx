
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import classNames from "classnames";
export default function SliderCommon({ data, className = '', variant = 'primary', renderFunc, ...props }) {
    const variantStyles = {
        primary: 'basis-full',
        secondary: 'basis-1/5'
    }
    return (
        <Carousel className="w-full group mb-3" opts={
            {
                loop: true,
                align: 'start',
            }
        }>
            <CarouselContent className={classNames({ '-ml-3': variant === 'secondary' })}>
                {
                    data.map((item, index) => (
                        <CarouselItem key={index} className={classNames(className, variantStyles[variant], {
                            'pl-0': variant === 'primary'
                        })}>
                            {renderFunc(item, index)}
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className='lg:h-10 lg:w-10' />
            <CarouselNext className='lg:h-10 lg:w-10' />
        </Carousel>
    )
}
