import React, { useEffect, useState } from 'react';
import {
    CardCategory, CardImg, CardItem, CardRate,
    CardTitle, Content, Icon, Image, ListCard, Paginations, Title
} from './ShowList.element';


function ShowList({ Data = [], TitleTop }) {
    const [show, setShow] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    useEffect(() => {
        function showCut() {
            let start = (page - 1) * pageSize;
            let end = page * pageSize;
            const listCuted = Data.slice(start, end);
            setShow(listCuted);
        }
        showCut();
    }, [page])

    const handleOnChange = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize);
    }

    return (
        <>
            <Title>{TitleTop}</Title>
            <Content>
                <ListCard>
                    {show.map((item) => (
                        <CardItem key={item.title}>
                            <CardImg to={`/phim/${item.title}`}>
                                <Image src={item.imageUrl} />
                            </CardImg>
                            <CardRate defaultValue={4} />
                            <CardTitle to={`/phim/${item.title}`}>{item.title}</CardTitle>
                            <CardCategory><Icon />{item.category}</CardCategory>
                        </CardItem>
                    ))}
                </ListCard>
            </Content>
            <Paginations
                showLessItems
                onChange={handleOnChange}
                showSizeChanger={false}
                pageSize={20}
                defaultCurrent={1}
                total={Data.length}
            />
        </>
    );
}

export default ShowList;