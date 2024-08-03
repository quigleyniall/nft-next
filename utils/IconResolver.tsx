import { createElement } from 'react';

import {
    Home,
    BarChart,
    PieChart,
    LocalShipping,
    AccountCircle,
    Group,
    ShoppingBag,
    ShoppingCart,
    ReceiptSharp,
    MeetingRoom,
    Share,
    Feed,
    Assignment,
    Mail,
    Chat,
    DateRange,
    Lock,
    CreditCard,
    ShoppingCartCheckout,
    Drafts,
    AttachMoneyOutlined,
    Error
} from '@mui/icons-material';


const ICON_HASH = {
  'home': Home,
  'barchart': BarChart,
  'piechart': PieChart,
  'localshipping': LocalShipping,
  'accountcircle': AccountCircle,
  'group': Group,
  'dollar': AttachMoneyOutlined,
  'shoppingbag': ShoppingBag,
  'shoppingcart': ShoppingCart,
  'receipttax': ReceiptSharp,
  'meetingroom': MeetingRoom,
  'share': Share,
  'feed': Feed,
  'assignment': Assignment,
  'mail': Mail,
  'chat': Chat,
  'daterange': DateRange,
  'lock': Lock,
  'creditcard': CreditCard,
  'shoppingcartcheckout': ShoppingCartCheckout,
  'drafts': Drafts,
  'error': Error
};


export const IconResolver = ({ name = null, ...rest } : {name: any, style?: any}) => {
    if (typeof name != 'string') return null;
    const icon = ICON_HASH[name.toLowerCase()];
    return icon ? createElement(icon, rest) : null
};

export default IconResolver;