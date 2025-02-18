import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Breadcrumb, Structure } from "@/components/Breadcrumb/Breadcrumb";
import HeadingBanner from "@/components/HeadingBanner/HeadingBanner";
import FilterContent from "@/components/Filter/FilterContent";
import { LiaSlidersHSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { getCards } from "@/apis/cardService";
import Pagination from "@/components/Pagination/Pagination";

import CardItem from "@/components/CardItem/CardItem";
import Loading from "@/components/Loading/Loading";
import { set } from "react-hook-form";
function ListCardPage({ title }) {
    console.log('re-render')
    const location = useLocation();
    const typeOfCard = location.pathname.split('/')[2];
    console.log(typeOfCard);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(false);
    const validField = ['color', 'price', 'sortBy', 'page'];
    const [filter, setFilter] = useState(
        () => validField.reduce((acc, field) => {
            if (searchParams.get(field)) {
                return {
                    ...acc,
                    [field]: searchParams.get(field)
                }
            }
            return acc;
        }, { type: typeOfCard, page: 1 })
    );
    console.log(filter);
    const copyFilter = useMemo(() => ({ ...filter }), [filter]);
    const [cards, setCards] = useState([]);
    const [pagination, setPagination] = useState({});

    const handlePageChange = (newPage) => {
        setFilter({
            ...filter,
            page: newPage
        })
    }
    const handleClickApply = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);
    const handleFetchData = () => {
        const { type, ...other } = filter;
        console.log("other", other);
        setIsLoading(true);
        getCards(filter).then(
            res => {
                setIsLoading(false);
                console.log(searchParams.keys());
                setSearchParams(other);

                setCards(res.data.cards);
                setPagination(res.data.pagination);
            }
        ).catch(err => (console.log(err)));

    };
    useEffect(() => {
        handleFetchData();
    }, [filter]);
    const handleBgTheme = (type) => {
        switch (type) {
            case 'birthday':
                return ['#fff4ee', '/images/cards/birthday/theme/banners/birthday-desktop.svg', '/images/cards/birthday/theme/banners/birthday-mobile.svg'];
            case 'anniversary':
                return ['#ffeef3', '/images/cards/anniversary/theme/banners/anniversary-desktop.svg', '/images/cards/anniversary/theme/banners/anniversary-mobile.svg'];
            case 'thank-you':
                return ['#e8f9f2', '/images/cards/thank-you/theme/banners/thankyou-desktop.svg', '/images/cards/thank-you/theme/banners/thankyou-mobile.svg'];
            case 'getwell':
                return ['#ffeef3', '/images/cards/getwell/theme/banners/getwell-desktop.svg', '/images/cards/getwell/theme/banners/getwell-mobile.svg'];
            case 'goodluck':
                return ['#f4eefd', '/images/cards/goodluck/theme/banners/goodluck-desktop.svg', '/images/cards/goodluck/theme/banners/goodluck-mobile.svg'];
            case 'love':
                return ['#ffeef3', '/images/cards/love-romance/theme/banners/love-romance-desktop.svg', '/images/cards/love-romance/theme/banners/love-romance-mobile.svg'];
            case 'baby':
                return ['#edf9fb', '/images/cards/newbaby/theme/banners/baby-desktop.svg', '/images/cards/newbaby/theme/banners/baby-mobile.svg'];
            case 'sympathy':
                return ['#ffeef3', '/images/cards/sympathy/theme/banners/sympathy-desktop.svg', '/images/cards/sympathy/theme/banners/sympathy-mobile.svg'];
            case 'valentine':
                return ['#ffeef3', '/images/cards/valentine/theme/banners/valentine-desktop.svg', '/images/cards/valentine/theme/banners/valentine-mobile.svg'];
            case 'wedding':
                return ['#ffeef3', '/images/cards/wedding/theme/banners/wedding-desktop.svg', '/images/cards/wedding/theme/banners/wedding-mobile.svg'];
        }
    }
    return (
        <div className="mx-4 lg:mx-8">
            <Breadcrumb items={[Structure['home'], Structure['cards'], { ...Structure['cards'].children[typeOfCard], active: false }]} />
            <HeadingBanner title={title} description="Choose a card to send to your loved ones" config={handleBgTheme(typeOfCard)} />
            <div className="relative">
                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 border rounded"
                    >
                        <LiaSlidersHSolid size={20} />
                        Bộ lọc
                    </button>
                </div>

                <div className="flex gap-6">
                    {/* Sidebar - Desktop: Static, Mobile: Sliding */}
                    <aside
                        className={`
            fixed lg:relative inset-y-0 left-0 w-80 lg:w-64 lg:h-fit
            lg:rounded-[24px] bg-gray-100
            transform lg:transform-none transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            z-50 lg:z-0
          `}
                    >
                        {/* Mobile Close Button */}
                        <div className="flex lg:hidden items-center justify-between p-4 border-b">
                            <h2 className="font-semibold">Bộ lọc</h2>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-1 hover:bg-gray-100 rounded"
                            >
                                <IoMdClose size={20} />
                            </button>
                        </div>

                        <FilterContent state={{ filter: copyFilter, onClick: handleClickApply }} />
                    </aside>

                    {/* Overlay for Mobile */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 lg:hidden z-[49]"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <main className="flex-1">
                        {
                            isLoading ? <Loading /> : (
                                <>
                                    <p className="mb-4">{pagination.total} designs</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                                        {/* Sample Product Cards */}
                                        {
                                            cards.map((card, index) => {
                                                return (
                                                    <div key={index} className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                                                        <CardItem data={card} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    {/* Pagination */}
                                    <Pagination pagination={pagination} onPageChange={handlePageChange} />
                                </>

                            )
                        }
                    </main>
                </div>
            </div>
        </div>
    );
}

export default ListCardPage;