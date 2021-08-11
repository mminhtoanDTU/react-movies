import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
    Wrapper,
    Top,
    Title,
    TextSub,
    Content,
    Cards,
    Card,
    CardImage,
    Image,
    CardRate,
    CardTitle,
    CardCategory,
    CardIcon
} from './ShowListHome.element';
import Loadings from '../Loading';

function ShowListHome({ Data, TitleTop, LinkTo, Loading }) {
    const match = useRouteMatch();
    if (Loading) return <div><Loadings /></div>
    if (Data === undefined) return <></>
    return (
        <>
            <Wrapper>
                <Top>
                    <Title>{TitleTop}</Title>
                    <TextSub to={`${match.url}/${LinkTo}`}>Xem tất cả</TextSub>
                </Top>
                <Content>
                    <Cards>
                        {Data.slice(0, 8).map((item) => (
                            <Card>
                                <CardImage to={`/phim/${item.title}`}>
                                    <Image src={item.imageUrl} />
                                </CardImage>
                                <CardRate defaultValue={4} />
                                <CardTitle to={`/phim/${item.title}`}>{item.title}</CardTitle>
                                <CardCategory><CardIcon />{item.category}</CardCategory>
                            </Card>
                        ))}
                    </Cards>
                </Content>
            </Wrapper>
        </>
    );
}

export default ShowListHome;