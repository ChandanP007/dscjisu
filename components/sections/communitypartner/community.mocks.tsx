import { ICommunity } from './community';

const base: ICommunity = {
    community: [{
        "id": 1,
        "name": "Code For Community",
        "description": "Code For Community is a non-profit organization that provides free online resources for developers to learn web development. Our mission is to help people learn to code for free.",
        "image": "https://avatars.githubusercontent.com/u/99553669?s=96&v=4",
        "link": "something"
    },
    {
        "id": 2,
        "name": "JIS University",
        "description": "JIS University is a private university located near Agarpara, West Bengal, India It was established in 2014 under JIS University Act, 2014",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/JIS_University.svg/1200px-JIS_University.svg.png",
        "link": "something"
    }
    ]
};

export const mockCommunityProps = {
    base,
};