// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        // {
        //     id: 'util-typography',
        //     title: 'Typography',
        //     type: 'item',
        //     url: '/typography',
        //     icon: icons.FontSizeOutlined
        // },
        // {
        //     id: 'util-color',
        //     title: 'Color',
        //     type: 'item',
        //     url: '/color',
        //     icon: icons.BgColorsOutlined
        // },
        // {
        //     id: 'util-shadow',
        //     title: 'Shadow',
        //     type: 'item',
        //     url: '/shadow',
        //     icon: icons.BarcodeOutlined
        // },
        // {
        //     id: 'ant-icons',
        //     title: 'Ant Icons',
        //     type: 'item',
        //     url: '/icons/ant',
        //     icon: icons.AntDesignOutlined,
        //     breadcrumbs: false
        // }
        {
            id: 'util-data-query',
            title: 'Data query',
            type: 'item',
            url: '/data-query',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-order',
            title: 'Order',
            type: 'item',
            url: '/order',
            icon: icons.FontSizeOutlined
        },

        {
            id: 'util-subscribe',
            title: 'Subscribe',
            type: 'item',
            url: '/subscribe',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-websocket',
            title: 'Websocket',
            type: 'item',
            url: '/websocket',
            icon: icons.FontSizeOutlined
        },
              {
            id: 'util-backtesting',
            title: 'Backtesting',
            type: 'item',
            url: '/backtesting',
            icon: icons.FontSizeOutlined
        },
    ]
};

export default utilities;
