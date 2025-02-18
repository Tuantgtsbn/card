import styles from "./CardItem.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import { FaRegHeart } from "react-icons/fa";
import { PiCrown } from "react-icons/pi";
import { likeCard } from "@/apis/cardService";
import { useContext, useState } from "react";
import { CardContext } from "@/contexts/CardProvider";
import { AppContext } from "@/contexts/AppProvider";
import { ToastContext } from "@/contexts/ToastContext";
import { useNavigate } from "react-router-dom";
function CardItem({ data, onClick, ...props }) {
    const navigate = useNavigate();
    const { likes, views, slug, name, isFree, imgs, _id, likedBy } = data;
    const { chooseCard, setChooseCard } = useContext(CardContext);
    const { isLogin, userInfor } = useContext(AppContext);
    const { toast } = useContext(ToastContext);
    const { cardItem, wrapper } = styles;
    const [isLiked, setIsLiked] = useState(() => {
        if (!isLogin) return false;
        return likedBy?.includes(userInfor._id);
    })
    const handleClickHeartIcon = (e) => {
        e.stopPropagation();
        likeCard(_id).then(res => {
            setIsLiked(res.data.hasLiked);
        }).catch(err => toast.error('Please login'));
    }
    const handleClickCard = () => {
        setChooseCard(data);
        navigate(`/preview/cards/${slug}/${_id}`);
    }
    return (
        <div className={classNames(wrapper)} onClick={handleClickCard}>
            <div className={classNames(cardItem, '')}>
                <img src={imgs[0]} alt="" className='rounded-lg w-full object-cover' />
                {!isFree && <Button varriant="secondary" className='absolute top-0 left-0 m-2 !p-2 2xl:!p-3 bg-purple-500' ><PiCrown /></Button>}
                <Button onClick={handleClickHeartIcon} varriant="secondary" className={classNames('absolute top-0 right-0 m-2 !p-2 2xl:!p-3 bg-gray-400 ', {
                    '!bg-red-600': Boolean(isLiked)
                })}>
                    <FaRegHeart />
                </Button>
            </div>
            <p className="py-2 px-1">{name}</p>
        </div>
    );
}

export default CardItem;