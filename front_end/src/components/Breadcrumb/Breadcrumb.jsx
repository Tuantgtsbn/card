import { Link } from "react-router-dom";
import classNames from "classnames";
export const Structure = {
    'home': {
        name: 'Home',
        link: '/',
        active: true
    },
    'cards': {
        name: 'Cards',
        link: '/cards',
        active: true,
        children: {
            'birthday': {
                name: 'Birthday Cards',
                link: '/cards/birthday',
                active: true
            },
            'anniversary': {
                name: 'Anniversary Cards',
                link: '/cards/anniversary',
                active: true
            },
            'thank-you': {
                name: 'Thank You Cards',
                link: '/cards/thank-you',
                active: true
            },
            'getwell': {
                name: 'Get Well Cards',
                link: '/cards/getwell',
                active: true
            },
            'goodluck': {
                name: 'Good Luck Cards',
                link: '/cards/goodluck',
                active: true
            },
            'love-romance': {
                name: 'Love & Romance Cards',
                link: '/cards/love-romance',
                active: true
            },
            'newbaby': {
                name: 'New Baby Cards',
                link: '/cards/newbaby',
                active: true
            },
            'sympathy': {
                name: 'Sympathy Cards',
                link: '/cards/sympathy',
                active: true
            },
            'valentine': {
                name: 'Valentine Cards',
                link: '/cards/valentine',
                active: true
            },
            'wedding': {
                name: 'Wedding Cards',
                link: '/cards/wedding',
                active: true
            }
        }
    },
    'about': {
        name: 'About',
        link: '/about',
        active: true
    },
    'contact': {
        name: 'Contact',
        link: '/contact',
        active: true
    }
}

export const Breadcrumb = ({ items, className }) => {

    return (
        <div className={classNames("flex justify-between mb-5", className)}>
            <div className="flex ">
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className="flex">
                                {item.active ? <Link to={item.link} className="text-gray-500 hover:text-black">{item.name}</Link> : <span className="text-black font-semibold">{item.name}</span>}
                                {index < items.length - 1 && <span className="mx-2">&gt;</span>}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

