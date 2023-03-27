import visa_card from "../assets/images/visa_card.png";
import PayPal_card from "../assets/images/PayPal_card.png";
import master_card from "../assets/images/master_card.png";
import { FaFacebookF, FaViber, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { BsPaypal } from 'react-icons/bs';
import { FaUserAlt, FaHandsHelping } from 'react-icons/fa';

export const cardsArr = [
  { cardPic: visa_card, note: "visa" },
  { cardPic: PayPal_card, note: "PayPal" },
  { cardPic: master_card, note: "mastercard" },
];

export const socialMediaIcons = [
  <FaFacebookF />,
  <FaYoutube />,
  <FaViber />,
  <FaTwitter />,
  <FaInstagram />,
];

export const contacts = [
  'Odesa, Ukraine',
  'Phone: 050 967 89 26',
  'e-mail: lytvynvalery@gmail.com',
];

export const profile = [
  { icon: <FaUserAlt />, label: 'my account' },
  { icon: <BsPaypal />, label: 'checkout' },
  { icon: <FaHandsHelping />, label: 'help & support' },
]