'use client';
import { useEstablishment } from '@/app/_helpers/web/hooks/useEstablishment';
import Prayers from '@/app/components/Prayers/Prayers';
import {
	Disclosure,
	Listbox,
	Menu,
	Transition,
} from '@headlessui/react';
import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
	BriefcaseIcon,
	CalendarIcon,
	CheckCircleIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	CurrencyDollarIcon,
	EnvelopeIcon,
	LinkIcon,
	MagnifyingGlassIcon,
	MapPinIcon,
	PencilIcon,
} from '@heroicons/react/20/solid';
import Loader from '@/app/components/Loader/Loader';
import Nav from '@/app/components/Nav/Nav';
import SideBarLayout from '@/app/components/__Layouts/homesidebar';
import { Toaster } from 'react-hot-toast';
import PrayersSidebar from '../something/PrayersSidebar';
import loading from './loading';
import React, {
	Fragment,
	useState,
} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import '@fontsource/poppins';
const people = [
	{
		name: 'btc',
		img: '/assets/admin/analytics-dashboard/btc.png',
		price: '$224,300.40',
		percentage: '7.2526',
		color: 'red',
	},
	{
		name: 'ust',
		img: '/assets/admin/analytics-dashboard/ust.png',
		price: '$13,400.20',
		percentage: '9.5256',
		color: 'green',
	},
	{
		name: 'eth',
		img: '/assets/admin/analytics-dashboard/eth.png',
		price: '$4,000.80',
		percentage: '8.4',
		color: 'green',
	},
	{
		name: 'car',
		img: '/assets/admin/analytics-dashboard/car.png',
		price: ' $1,900.1,',
		percentage: '8.4',
		color: 'red',
	},
];
const chartData = [
	{ name: 'Weekly' },
	{
		name: 'Monthly',
	},
	{ name: 'Yearly' },
];
const userList = [
	'/assets/admin/analytics-dashboard/user1.svg',
	'/assets/admin/analytics-dashboard/user2.svg',
	'/assets/admin/analytics-dashboard/user3.svg',
	'/assets/admin/analytics-dashboard/user4.svg',
	'/assets/admin/analytics-dashboard/user5.svg',
];
const options2 = {
	chart: {
		type: 'column',
		height: 400,
		width: 650,
	},
	xAxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
	},
	yAxis: {
		categories: null,
		title: {
			text: null,
		},
	},
	title: false,
	series: [
		{
			name: 'Bitcoin',
			data: [
				27500, 50000, 60000, 65000,
				40000, 50000, 27500, 50000,
				60000, 65000, 40000, 50000,
			],
			color: '#7851BD',
			borderRadius: 5,
		},
		{
			name: 'Ethereum',
			data: [
				18000, 30000, 37000, 37000,
				25000, 26000, 18000, 30000,
				37000, 37000, 25000, 26000,
			],
			color: '#4549D0',
			borderRadius: 5,
		},
	],
	exporting: {
		enabled: true,
	},
	credits: {
		enabled: false,
	},
};
const TableData = [
	{
		title: 'Insurance',
		description: 'Property Coverage',
		account: 'LTC Wallet',
		balance: '-$4.012',
		payment: 'Mon, 20 May - 01:10',
		image: '/assets/admin/analytics-dashboard/table-icon1.svg',
		color: 'red',
	},
	{
		title: 'Electricity',
		description: 'Utility Payment',
		account: 'BTC Wallet',
		balance: '-$2.092',
		payment: 'Mon, 20May - 01:10',
		image: '/assets/admin/analytics-dashboard/table-icon2.svg',
		color: 'red',
	},
	{
		title: 'Omar Griffith ',
		description: 'Utility Payment ',
		account: 'ETH Wallet ',
		balance: '+$1.089 ',
		payment: 'Mon, 28 Apr - 01:10 ',
		image: '/assets/admin/analytics-dashboard/table-icon3.svg',
		color: 'green',
	},
	{
		title: 'Electricity',
		description: 'Utility Payment ',
		account: 'BTC Wallet ',
		balance: ' -$833',
		payment: ' Mon, 28 Apr - 01:10',
		image: '/assets/admin/analytics-dashboard/table-icon4.svg',
		color: 'red',
	},
	{
		title: 'Insurance ',
		description: ' Property Coverage',
		account: 'BTC Wallet ',
		balance: '-$1.458 ',
		payment: 'Mon, 28 Apr - 01:10 ',
		image: '/assets/admin/analytics-dashboard/table-icon5.svg',
		color: 'red',
	},
	{
		title: 'Nettie Barnett ',
		description: 'Property Coverage ',
		account: 'LTC Wallet ',
		balance: ' +$1.089',
		payment: 'Mon, 18 Apr - 01:10 ',
		image: '/assets/admin/analytics-dashboard/table-icon6.svg',
		color: 'green',
	},
	{
		title: 'Junaid Horn ',
		description: ' Property Coverage',
		account: 'ETH Wallet',
		balance: '+$1.089 ',
		payment: 'Mon, 16 Apr - 01:10',
		image: '/assets/admin/analytics-dashboard/table-icon7.svg',
		color: 'red',
	},
];
const watchList = [
	{
		name: 'Bitcoin',
		graph: '/assets/admin/analytics-dashboard/graph1.svg',
		coinImage:
			'/assets/admin/analytics-dashboard/btclist.svg',
		coinName: '0.223245 BTC',
		price: '11,032,37 USD',
		percentage: '+12.05',
		arrow: '/assets/admin/analytics-dashboard/uparrow.svg',
		color: 'green',
	},
	{
		name: 'Ethereum',
		graph: '/assets/admin/analytics-dashboard/graph2.svg',
		coinImage:
			'/assets/admin/analytics-dashboard/etclist.svg',
		coinName: '0.93245 ETH',
		price: '9,047,32 USD',
		percentage: '+8.05',
		arrow: '/assets/admin/analytics-dashboard/uparrow.svg',
		color: 'green',
	},
	{
		name: 'Litecoin',
		graph: '/assets/admin/analytics-dashboard/graph3.svg',
		coinImage:
			'/assets/admin/analytics-dashboard/ltclist.svg',
		coinName: '0.64347 LTC',
		price: '3,059,02 USD',
		percentage: '+5.09',
		arrow: '/assets/admin/analytics-dashboard/uparrow.svg',
		color: 'green',
	},
	{
		name: 'Ripple',
		graph: '/assets/admin/analytics-dashboard/graph4.svg',
		coinImage:
			'/assets/admin/analytics-dashboard/riplist.svg',
		coinName: '0.53453 RIP',
		price: '1,082,19 USD',
		percentage: '+5.09',
		arrow: '/assets/admin/analytics-dashboard/downarrow.svg',
		color: 'red',
	},
];
const navigation = [
	{
		alt: 'dashbord',
		img: '/assets/admin/analytics-dashboard/dashbord.svg',
		name: 'Dashbord',
		svg: (
			<svg
				width='20'
				height='21'
				viewBox='0 0 20 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path d='M2.22222 20.5C1.61111 20.5 1.08778 20.2826 0.652222 19.8478C0.217407 19.4122 0 18.8889 0 18.2778V2.72222C0 2.11111 0.217407 1.58778 0.652222 1.15222C1.08778 0.717407 1.61111 0.5 2.22222 0.5H6.66667C7.27778 0.5 7.80111 0.717407 8.23667 1.15222C8.67148 1.58778 8.88889 2.11111 8.88889 2.72222V18.2778C8.88889 18.8889 8.67148 19.4122 8.23667 19.8478C7.80111 20.2826 7.27778 20.5 6.66667 20.5H2.22222ZM13.3333 8.27778C12.7222 8.27778 12.1993 8.06 11.7644 7.62444C11.3289 7.18963 11.1111 6.66667 11.1111 6.05556V2.72222C11.1111 2.11111 11.3289 1.58778 11.7644 1.15222C12.1993 0.717407 12.7222 0.5 13.3333 0.5H17.7778C18.3889 0.5 18.9122 0.717407 19.3478 1.15222C19.7826 1.58778 20 2.11111 20 2.72222V6.05556C20 6.66667 19.7826 7.18963 19.3478 7.62444C18.9122 8.06 18.3889 8.27778 17.7778 8.27778H13.3333ZM13.3333 20.5C12.7222 20.5 12.1993 20.2826 11.7644 19.8478C11.3289 19.4122 11.1111 18.8889 11.1111 18.2778V12.7222C11.1111 12.1111 11.3289 11.5878 11.7644 11.1522C12.1993 10.7174 12.7222 10.5 13.3333 10.5H17.7778C18.3889 10.5 18.9122 10.7174 19.3478 11.1522C19.7826 11.5878 20 12.1111 20 12.7222V18.2778C20 18.8889 19.7826 19.4122 19.3478 19.8478C18.9122 20.2826 18.3889 20.5 17.7778 20.5H13.3333Z' />
			</svg>
		),
	},
	{
		alt: 'market',
		img: '/assets/admin/analytics-dashboard/market.svg',
		name: 'Market',
		svg: (
			<svg
				width='20'
				height='19'
				viewBox='0 0 20 19'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path d='M20 18.775H0V0.775006H2V13.315L7.5 3.77501L14 7.55501L18.24 0.225006L19.97 1.22501L20 18.775Z' />
			</svg>
		),
	},
	{
		alt: 'wallet',
		img: '/assets/admin/analytics-dashboard/wallet.svg',
		name: 'Wallet',
		svg: (
			<svg
				width='19'
				height='17'
				viewBox='0 0 19 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M17.7333 15.0385V11.7692H18.278C18.4695 11.7692 18.6531 11.6907 18.7885 11.5509C18.9239 11.4111 19 11.2215 19 11.0238V5.97615C19 5.77847 18.9239 5.58887 18.7885 5.44909C18.6531 5.3093 18.4695 5.23077 18.278 5.23077H17.7333V1.96154C17.7333 1.44131 17.5332 0.942381 17.1768 0.574521C16.8205 0.206662 16.3372 0 15.8333 0H1.9C1.39609 0 0.912816 0.206662 0.556497 0.574521C0.200178 0.942381 0 1.44131 0 1.96154L0 15.0385C0 15.5587 0.200178 16.0576 0.556497 16.4255C0.912816 16.7933 1.39609 17 1.9 17H15.8333C16.3372 17 16.8205 16.7933 17.1768 16.4255C17.5332 16.0576 17.7333 15.5587 17.7333 15.0385ZM17.7333 6.53846V10.4615H12.0333C11.5294 10.4615 11.0461 10.2549 10.6898 9.88702C10.3335 9.51916 10.1333 9.02023 10.1333 8.5C10.1333 7.97977 10.3335 7.48084 10.6898 7.11298C11.0461 6.74512 11.5294 6.53846 12.0333 6.53846H17.7333Z'
				/>
			</svg>
		),
	},
	{
		alt: 'exchange',
		img: '/assets/admin/analytics-dashboard/exchange.svg',
		name: 'Exchange',
		svg: (
			<svg
				width='19'
				height='19'
				viewBox='0 0 19 19'
				fill='none'
				className='fill-[#233047] group-hover:fill-white'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M9.5 19C4.25315 19 0 14.7469 0 9.5C0 4.25315 4.25315 0 9.5 0C14.7469 0 19 4.25315 19 9.5C19 14.7469 14.7469 19 9.5 19ZM9.5 6.65H5.7V8.55H14.25L9.5 3.8V6.65ZM4.75 10.45L9.5 15.2V12.35H13.3V10.45H4.75Z' />
			</svg>
		),
	},
	{
		alt: 'community',
		img: '/assets/admin/analytics-dashboard/community.svg',
		name: 'Community',
		svg: (
			<svg
				width='20'
				height='21'
				viewBox='0 0 20 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path d='M3.77637 4.2766C3.77637 3.61355 4.03976 2.97767 4.5086 2.50883C4.97744 2.03999 5.61333 1.7766 6.27637 1.7766C6.93941 1.7766 7.57529 2.03999 8.04413 2.50883C8.51298 2.97767 8.77637 3.61355 8.77637 4.2766C8.77637 4.93964 8.51298 5.57552 8.04413 6.04436C7.57529 6.5132 6.93941 6.7766 6.27637 6.7766C5.61333 6.7766 4.97744 6.5132 4.5086 6.04436C4.03976 5.57552 3.77637 4.93964 3.77637 4.2766ZM12.2501 6.2566L12.3026 6.2966C12.833 6.68973 13.4973 6.85712 14.1506 6.76223C14.804 6.66735 15.3933 6.3179 15.7899 5.79014C16.1865 5.26238 16.3583 4.59916 16.2677 3.94522C16.1771 3.29128 15.8316 2.69971 15.3065 2.29961C14.7813 1.89951 14.1193 1.72337 13.4647 1.80962C12.8102 1.89587 12.2164 2.23751 11.8128 2.75999C11.4093 3.28247 11.2287 3.94336 11.3107 4.59844C11.3926 5.25352 11.7303 5.8496 12.2501 6.2566ZM7.86137 8.0266C8.01837 7.7293 8.23372 7.46673 8.49455 7.25458C8.75537 7.04244 9.05631 6.88509 9.37935 6.79193C9.70239 6.69878 10.0409 6.67174 10.3746 6.71244C10.7084 6.75313 11.0305 6.86072 11.3217 7.02878C11.6129 7.19683 11.8672 7.42189 12.0694 7.6905C12.2716 7.9591 12.4175 8.26573 12.4985 8.59205C12.5794 8.91836 12.5937 9.25765 12.5405 9.58962C12.4873 9.92159 12.3677 10.2394 12.1889 10.5241C11.8448 11.0718 11.3018 11.4647 10.674 11.6205C10.0463 11.7762 9.38259 11.6826 8.8224 11.3593C8.26221 11.036 7.84912 10.5082 7.66991 9.88674C7.4907 9.26527 7.55933 8.59853 7.86137 8.0266ZM3.15137 8.0266H6.48887C6.26671 8.66104 6.2184 9.34339 6.34897 10.0028C6.47953 10.6622 6.78421 11.2747 7.23137 11.7766H6.90137C6.25691 11.7765 5.62818 11.9756 5.10122 12.3466C4.57427 12.7176 4.17484 13.2424 3.95762 13.8491C3.53803 13.6805 3.14518 13.4519 2.79137 13.1703C1.85137 12.4141 1.27637 11.2966 1.27637 9.9016C1.27637 9.40432 1.47391 8.9274 1.82554 8.57577C2.17717 8.22414 2.65409 8.0266 3.15137 8.0266ZM13.1514 11.7766C13.7957 11.7766 14.4242 11.9757 14.9509 12.3467C15.4777 12.7177 15.8769 13.2425 16.0939 13.8491C16.5189 13.6753 16.9126 13.4491 17.2614 13.1703C18.2014 12.4141 18.7764 11.2966 18.7764 9.9016C18.7764 9.40432 18.5788 8.9274 18.2272 8.57577C17.8756 8.22414 17.3986 8.0266 16.9014 8.0266H13.5639C13.7014 8.41785 13.7764 8.8391 13.7764 9.2766C13.7775 10.1992 13.4374 11.0897 12.8214 11.7766H13.1514ZM14.8851 14.1866C14.9764 14.4066 15.0264 14.6491 15.0264 14.9016C15.0264 16.2966 14.4526 17.4141 13.5114 18.1703C12.5851 18.9141 11.3426 19.2766 10.0264 19.2766C8.71012 19.2766 7.46762 18.9141 6.54137 18.1703C5.60137 17.4141 5.02637 16.2966 5.02637 14.9016C5.02571 14.6552 5.07376 14.4111 5.16775 14.1833C5.26174 13.9555 5.39983 13.7485 5.57407 13.5743C5.74831 13.4001 5.95527 13.262 6.18306 13.168C6.41084 13.074 6.65495 13.0259 6.90137 13.0266H13.1514C13.5227 13.0265 13.8858 13.1367 14.1945 13.3432C14.5031 13.5498 14.7435 13.8433 14.8851 14.1866Z' />
			</svg>
		),
	},
	{
		alt: 'settings',
		img: '/assets/admin/analytics-dashboard/settings.svg',
		name: 'Settings',
		svg: (
			<svg
				width='20'
				height='21'
				viewBox='0 0 20 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path d='M11.5626 18.8333H8.43762C8.22928 18.8333 8.04873 18.7639 7.89595 18.625C7.74317 18.4861 7.6529 18.3125 7.62512 18.1042L7.37512 16.1667C7.19456 16.0972 7.02429 16.0139 6.86429 15.9167C6.70429 15.8195 6.54817 15.7153 6.39595 15.6042L4.58345 16.3542C4.38901 16.4236 4.19456 16.4306 4.00012 16.375C3.80567 16.3194 3.6529 16.2014 3.54178 16.0208L2.00012 13.3333C1.88901 13.1528 1.85429 12.9583 1.89595 12.75C1.93762 12.5417 2.04179 12.375 2.20845 12.25L3.77095 11.0625C3.75706 10.9653 3.75012 10.8714 3.75012 10.7808V10.2192C3.75012 10.1286 3.75706 10.0347 3.77095 9.93751L2.20845 8.75001C2.04179 8.62501 1.93762 8.45834 1.89595 8.25001C1.85429 8.04167 1.88901 7.84723 2.00012 7.66667L3.54178 4.97917C3.63901 4.78473 3.78817 4.66306 3.98929 4.61417C4.1904 4.56528 4.38845 4.57584 4.58345 4.64584L6.39595 5.39584C6.54873 5.28473 6.70845 5.18056 6.87512 5.08334C7.04178 4.98612 7.20845 4.90278 7.37512 4.83334L7.62512 2.89584C7.6529 2.68751 7.74317 2.51389 7.89595 2.37501C8.04873 2.23612 8.22928 2.16667 8.43762 2.16667H11.5626C11.771 2.16667 11.9515 2.23612 12.1043 2.37501C12.2571 2.51389 12.3473 2.68751 12.3751 2.89584L12.6251 4.83334C12.8057 4.90278 12.976 4.98612 13.136 5.08334C13.296 5.18056 13.4521 5.28473 13.6043 5.39584L15.4168 4.64584C15.6112 4.57639 15.8057 4.56945 16.0001 4.62501C16.1946 4.68056 16.3473 4.79862 16.4585 4.97917L18.0001 7.66667C18.1112 7.84723 18.146 8.04167 18.1043 8.25001C18.0626 8.45834 17.9585 8.62501 17.7918 8.75001L16.2293 9.93751C16.2432 10.0347 16.2501 10.1286 16.2501 10.2192V10.7808C16.2501 10.8714 16.2362 10.9653 16.2085 11.0625L17.771 12.25C17.9376 12.375 18.0418 12.5417 18.0835 12.75C18.1251 12.9583 18.0904 13.1528 17.9793 13.3333L16.4376 16C16.3265 16.1806 16.1701 16.3022 15.9685 16.365C15.7668 16.4278 15.569 16.4242 15.3751 16.3542L13.6043 15.6042C13.4515 15.7153 13.2918 15.8195 13.1251 15.9167C12.9585 16.0139 12.7918 16.0972 12.6251 16.1667L12.3751 18.1042C12.3473 18.3125 12.2571 18.4861 12.1043 18.625C11.9515 18.7639 11.771 18.8333 11.5626 18.8333ZM10.0418 13.4167C10.8473 13.4167 11.5348 13.132 12.1043 12.5625C12.6737 11.9931 12.9585 11.3056 12.9585 10.5C12.9585 9.69445 12.6737 9.00695 12.1043 8.43751C11.5348 7.86806 10.8473 7.58334 10.0418 7.58334C9.22234 7.58334 8.53123 7.86806 7.96845 8.43751C7.40567 9.00695 7.12456 9.69445 7.12512 10.5C7.12512 11.3056 7.40623 11.9931 7.96845 12.5625C8.53067 13.132 9.22179 13.4167 10.0418 13.4167Z' />
			</svg>
		),
	},
	{
		name: 'Support',
		svg: (
			<svg
				width='19'
				height='23'
				viewBox='0 0 19 23'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path d='M10.0588 22.5L9.77941 19.2H9.5C6.8549 19.2 4.61029 18.2925 2.76618 16.4775C0.922059 14.6625 0 12.4533 0 9.85C0 7.24667 0.922059 5.0375 2.76618 3.2225C4.61029 1.4075 6.8549 0.5 9.5 0.5C10.8225 0.5 12.0568 0.742733 13.2028 1.2282C14.3487 1.71367 15.3546 2.38283 16.2204 3.2357C17.0862 4.08857 17.7657 5.07857 18.259 6.2057C18.7523 7.33283 18.9993 8.5476 19 9.85C19 11.225 18.7716 12.545 18.3149 13.81C17.8581 15.075 17.2341 16.2483 16.4428 17.33C15.6515 18.4117 14.7108 19.3925 13.6208 20.2725C12.5307 21.1525 11.3434 21.895 10.0588 22.5ZM9.47206 15.8725C9.78873 15.8725 10.0588 15.7625 10.2824 15.5425C10.5059 15.3225 10.6176 15.0567 10.6176 14.745C10.6176 14.4333 10.5059 14.1675 10.2824 13.9475C10.0588 13.7275 9.78873 13.6175 9.47206 13.6175C9.15539 13.6175 8.88529 13.7275 8.66176 13.9475C8.43824 14.1675 8.32647 14.4333 8.32647 14.745C8.32647 15.0567 8.43824 15.3225 8.66176 15.5425C8.88529 15.7625 9.15539 15.8725 9.47206 15.8725ZM8.66176 12.38H10.3382C10.3382 11.83 10.3941 11.445 10.5059 11.225C10.6176 11.005 10.9716 10.6017 11.5676 10.015C11.9029 9.685 12.1824 9.3275 12.4059 8.9425C12.6294 8.5575 12.7412 8.145 12.7412 7.705C12.7412 6.77 12.4197 6.06857 11.7766 5.6007C11.1336 5.13283 10.3747 4.89927 9.5 4.9C8.68039 4.9 7.99118 5.12477 7.43235 5.5743C6.87353 6.02383 6.48235 6.56907 6.25882 7.21L7.82353 7.815C7.91667 7.50333 8.09363 7.19607 8.35441 6.8932C8.6152 6.59033 8.99706 6.43927 9.5 6.44C10.0029 6.44 10.38 6.5775 10.6311 6.8525C10.8822 7.1275 11.0081 7.43 11.0088 7.76C11.0088 8.07167 10.9157 8.35143 10.7294 8.5993C10.5431 8.84717 10.3196 9.09907 10.0588 9.355C9.40686 9.905 9.01084 10.3406 8.87076 10.6618C8.73069 10.983 8.66102 11.5557 8.66176 12.38Z' />
			</svg>
		),
	},
	{
		name: 'Feedback',
		svg: (
			<svg
				width='20'
				height='21'
				viewBox='0 0 20 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='fill-[#233047] group-hover:fill-white'
			>
				<path d='M18 0.5H2C0.9 0.5 0.00999999 1.4 0.00999999 2.5L0 20.5L4 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5C20 1.4 19.1 0.5 18 0.5ZM11 12.5H9V10.5H11V12.5ZM11 8.5H9V4.5H11V8.5Z' />
			</svg>
		),
	},
];
const crypto = [
	{
		name: 'btc',
		img: '/assets/admin/analytics-dashboard/btc.png',
		price: '$224,300.40',
		percentage: '7.2526',
		color: 'red',
	},
	{
		name: 'ust',
		img: '/assets/admin/analytics-dashboard/ust.png',
		price: '$13,400.20',
		percentage: '9.5256',
		color: 'green',
	},
	{
		name: 'eth',
		img: '/assets/admin/analytics-dashboard/eth.png',
		price: '$4,000.80',
		percentage: '8.4',
		color: 'green',
	},
	{
		name: 'car',
		img: '/assets/admin/analytics-dashboard/car.png',
		price: ' $1,900.1,',
		percentage: '8.4',
		color: 'red',
	},
];
const Example = () => {
	const [show, setShow] =
		useState(false);
	const [openSideBar, setSideBar] =
		useState(false);
	const openSidebar = () => {
		setShow(!show);
	};
	const expandSidebar = () => {
		console.log(openSideBar);
		setSideBar(!openSideBar);
	};
	return (
		<>
			<header className='bg-gray-50  p-8 rounded-full'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
					<div className='min-w-0 flex-1'>
						<h1 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
							Analytics
						</h1>
						<div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8'>
							<p className='mt-2 flex items-center text-sm text-gray-500'>
								{/* <BriefcaseIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/> */}
								A schedule of
								<b className=' text-blue-600 font-bold px-1'>
									obligatory
								</b>
								prayers
								conducted at the
								mosque.{' '}
							</p>
							{/* <div className='mt-2 flex items-center text-sm text-gray-500'>
								<MapPinIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								Remote
							</div> */}
							{/* <div className='mt-2 flex items-center text-sm text-gray-500'>
								<CurrencyDollarIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								$120k &ndash;
								$140k
							</div> */}
							{/* <div className='mt-2 flex items-center text-sm text-gray-500'>
								<CalendarIcon
									className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
									aria-hidden='true'
								/>
								Closing on
								January 9, 2020
							</div> */}
						</div>
					</div>
					<div className='mt-5 flex xl:ml-4 xl:mt-0'>
						<div className=' ml-3 inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
							<div className='inline-flex divide-x divide-purple-600 rounded-md shadow-sm'>
								<button
									// onClick={() => {
									// 	setShowAddScreen(
									// 		!showAddScreen
									// 	);
									// }}
									className='inline-flex items-center gap-x-1.5 rounded-md bg-purple-500 px-3 py-2 hover:bg-purple-600 text-white shadow-sm'
								>
									{/* <PlusIcon
										className='-ml-0.5 h-5 w-5'
										aria-hidden='true'
									/> */}
									<p className='text-sm font-semibold'>
										Add user
									</p>
								</button>
							</div>
						</div>

						{/* Dropdown */}
						<Menu
							as='div'
							className='relative ml-3 sm:hidden'
						>
							<Menu.Button className='inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400'>
								More
								<ChevronDownIcon
									className='-mr-1 h-5 w-5 text-gray-400'
									aria-hidden='true'
								/>
							</Menu.Button>

							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='transform opacity-0 scale-95'
								enterTo='transform opacity-100 scale-100'
								leave='transition ease-in duration-75'
								leaveFrom='transform opacity-100 scale-100'
								leaveTo='transform opacity-0 scale-95'
							>
								<Menu.Items className='absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
									<Menu.Item>
										{({
											active,
										}) => (
											<a
												href='#'
												className={classNames(
													active
														? 'bg-gray-100'
														: '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Edit
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({
											active,
										}) => (
											<a
												href='#'
												className={classNames(
													active
														? 'bg-gray-100'
														: '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												View
											</a>
										)}
									</Menu.Item>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</header>
			<div
				className={`w-full min-h-[100vh] admin-analytics  font-poppins sm:overflow-auto ${
					show
						? 'overflow-hidden h-screen'
						: 'overflow-auto'
				}`}
			>
				<div className='w-full flex'>
					<div className='flex flex-col w-full'>
						<div className='flex py-5 px-4 sm:px-7 w-full items-center justify-between sm:justify-end bg-white sm:gap-11'>
							<div
								className='cursor-pointer sm:hidden border border-[#E7E7E7] hover:border-blue-600 group rounded-md flex justify-center items-center'
								onClick={
									openSidebar
								}
							>
								<svg
									className='group-hover:text-blue-600 text-[#637381] w-10 h-10'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</div>
							<div className='flex sm:hidden gap-2 items-center'>
								<Logo />
								<span className='font-inter text-xl font-semibold text-[#233047] cursor-pointer'>
									infyToken
								</span>
							</div>
						</div>
						<div
							className={`py-7 px-7 flex w-full gap-7 transition-all duration-1000 ease-in-out ${
								openSideBar
									? 'sm:max-w-[calc(100vw_-_229px)] lg:max-w-[calc(100vw_-_286px)] '
									: 'sm:max-w-[calc(100vw_-_99px)] lg:max-w-[calc(100vw_-_110px)] xl:max-w-[calc(100vw_-_138px)]'
							}`}
						>
							<div
								className={`flex flex-col w-full gap-7 ${
									openSideBar
										? 'w-full lg:max-w-[calc(100%_-_320px)]'
										: 'md:max-w-[calc(100%_-_255px)] lg:max-w-[calc(100%_-_420px)]'
								} xl:max-w-[calc(100%_-_390px)]`}
							>
								<div className='bg-gradient-to-tl to-[#7851BD] from-[#4E4BCF] rounded-xl p-5 relative overflow-hidden'>
									<svg
										width='581'
										height='239'
										viewBox='0 0 581 239'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='absolute -top-14 -right-[27rem] sm:-right-64 lg:-top-28'
									>
										<path
											d='M527.607 1.7273C580.879 -33.0372 543.535 -81.6071 518.204 -101.546C439.881 -162.473 430.701 -91.4797 317.582 -143.722C204.463 -195.965 227.141 -159.2 83.8863 17.2559C-59.3679 193.712 128.456 191.653 151.46 157.066C174.465 122.48 215.973 138.631 267.533 191.898C319.093 245.165 448.712 151.23 426.229 94.617C403.746 38.0046 461.017 45.183 527.607 1.7273Z'
											stroke='white'
											strokeOpacity='0.13'
										/>
										<path
											d='M504.037 3.63866C552.037 -27.7193 518.379 -71.544 495.551 -89.5367C424.965 -144.515 416.703 -80.4656 314.764 -127.614C212.825 -174.762 233.264 -141.589 104.2 17.5917C-24.8647 176.773 144.384 174.939 165.109 143.738C185.834 112.537 223.239 127.114 269.707 175.178C316.175 223.243 432.963 138.51 412.696 87.4313C392.43 36.3523 444.038 42.836 504.037 3.63866Z'
											stroke='white'
											strokeOpacity='0.13'
										/>
										<path
											d='M485.755 5.0211C529.659 -23.6299 498.882 -63.6584 478.006 -80.0913C413.456 -130.304 405.891 -71.7948 312.664 -114.85C219.438 -157.906 238.127 -127.606 120.065 17.8189C2.00333 163.244 156.797 161.547 175.756 133.043C194.715 104.539 228.924 117.849 271.416 161.749C313.909 205.649 420.734 128.232 402.205 81.5755C383.675 34.9188 430.875 40.8348 485.755 5.0211Z'
											stroke='white'
											strokeOpacity='0.13'
										/>
										<path
											d='M468.499 6.88949C508.518 -19.2443 480.459 -55.7637 461.428 -70.7567C402.583 -116.569 395.692 -63.1941 310.707 -102.48C225.722 -141.766 242.761 -114.123 135.153 18.5341C27.5446 151.191 168.648 149.656 185.928 123.654C203.208 97.6522 234.392 109.798 273.13 149.85C311.868 189.902 409.239 119.286 392.344 76.721C375.45 34.1558 418.476 39.5567 468.499 6.88949Z'
											stroke='white'
											strokeOpacity='0.13'
										/>
										<path
											d='M449.738 8.32684C485.547 -15.0868 460.432 -47.8173 443.399 -61.2558C390.732 -102.319 384.573 -54.4882 308.515 -89.7062C232.456 -124.924 247.709 -100.15 151.43 18.7138C55.1508 137.577 181.423 136.222 196.883 112.923C212.343 89.6242 240.251 100.513 274.924 136.411C309.596 172.309 396.722 109.041 381.597 70.8944C366.473 32.7477 404.977 37.5939 449.738 8.32684Z'
											stroke='white'
											strokeOpacity='0.13'
										/>
										<path
											d='M430.012 9.82216C461.401 -10.6816 439.392 -39.336 424.464 -51.1002C378.306 -87.047 372.903 -45.1683 306.242 -75.9951C239.581 -106.822 252.947 -85.1321 168.546 18.9493C84.1452 123.031 194.822 121.83 208.375 101.429C221.928 81.0282 246.389 90.5588 276.775 121.985C307.161 153.412 383.533 98.0083 370.281 64.6106C357.028 31.213 390.777 35.4519 430.012 9.82216Z'
											stroke='white'
											strokeOpacity='0.13'
										/>
									</svg>
									<div className='flex gap-4 sm:flex-wrap ssm:gap-12 xl:gap-6 flex-col xl:flex-row xl:justify-between xl:items-end lg:h-fit'>
										<div className='flex flex-col gap-3'>
											<span className='text-lg font-semibold text-[#FDFDFF]'>
												Your
												Balance
											</span>
											<div className='flex gap-1 items-center'>
												<span className='font-medium text-sm text-white/80'>
													jkjnkjojfowvpoweut6187189784
												</span>
												<svg
													width='10'
													height='10'
													viewBox='0 0 10 10'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M8.90625 9.375H2.65625C2.53193 9.375 2.4127 9.32561 2.32479 9.23771C2.23689 9.1498 2.1875 9.03057 2.1875 8.90625V2.5C2.1875 2.41712 2.22042 2.33763 2.27903 2.27903C2.33763 2.22042 2.41712 2.1875 2.5 2.1875H8.90625C9.03057 2.1875 9.1498 2.23689 9.23771 2.32479C9.32561 2.4127 9.375 2.53193 9.375 2.65625V8.90625C9.375 9.03057 9.32561 9.1498 9.23771 9.23771C9.1498 9.32561 9.03057 9.375 8.90625 9.375Z'
														fill='white'
														fillOpacity='0.8'
													/>
													<path
														d='M2.1875 1.5625H7.8125V1.09375C7.8125 0.96943 7.76311 0.850201 7.67521 0.762294C7.5873 0.674386 7.46807 0.625 7.34375 0.625H1.17188C1.02683 0.625 0.887735 0.682617 0.785176 0.785176C0.682617 0.887735 0.625 1.02683 0.625 1.17188V7.34375C0.625 7.46807 0.674386 7.5873 0.762294 7.67521C0.850201 7.76311 0.96943 7.8125 1.09375 7.8125H1.5625V2.1875C1.5625 2.02174 1.62835 1.86277 1.74556 1.74556C1.86277 1.62835 2.02174 1.5625 2.1875 1.5625Z'
														fill='white'
														fillOpacity='0.8'
													/>
												</svg>
											</div>
											<span className='text-[22px] font-bold text-[#FDFDFF]'>
												$31,300.40
											</span>
											<span className='text-sm font-medium text-[#FDFDFF] tracking-[1.4px]'>
												28.6165489
												BTC
											</span>
										</div>
										<div className='flex gap-7 flex-col ssm:flex-row h-full sm:justify-start self-start ssm:self-auto z-10'>
											<div className='flex flex-col gap-3 h-fit'>
												<div className='flex flex-col pl-1'>
													<span className='text-sm font-semibold text-white/80 tracking-[1.5px]'>
														Income
													</span>
													<span className='text-lg font-semibold text-[#FDFDFF]'>
														$459.20
													</span>
												</div>
												<button className='py-2.5 rounded-[10px] font-semibold text-white text-center bg-[#f9f9f94d] min-w-[150px] text-lg hover:scale-105'>
													Receive
												</button>
											</div>
											<div className='flex flex-col gap-3 h-fit'>
												<div className='flex flex-col'>
													<span className='text-sm font-semibold text-white/80 tracking-[1.5px]'>
														Income
													</span>
													<span className='text-lg font-semibold text-[#FDFDFF]'>
														$250.40
													</span>
												</div>
												<button className='py-2.5 rounded-[10px] font-semibold text-white text-center bg-[#f9f9f94d] min-w-[150px] text-lg hover:scale-105'>
													Send
												</button>
											</div>
										</div>
									</div>
								</div>
								<div
									className={` block ${
										openSideBar
											? ' lg:hidden'
											: 'md:hidden'
									}`}
								>
									<CryptoCoin />
								</div>
								<div className='bg-[#FDFDFF] rounded-md '>
									<div className='p-5 flex flex-col overflow-hidden overflow-x-auto gap-5 scrollbar-thin !scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] rounded-xl'>
										<span className='text-[#212B36] text-lg font-semibold'>
											Watch
											list
										</span>
										<div className='flex flex-col sm:flex-row gap-5'>
											{watchList?.map(
												(
													data,
													index
												) => (
													<div
														className='flex flex-col gap-5 border border-[#7851bd33] p-5 rounded-xl w-full sm:max-w-xs'
														key={
															index
														}
													>
														<div className='flex justify-between w-full sm:min-w-[200px] items-center'>
															<span className='text-sm font-medium text-[#212B36] !capitalize'>
																{
																	data?.name
																}
															</span>
															<img
																src='/assets/admin/analytics-dashboard/dots.svg'
																alt='dots'
																className='cursor-pointer'
															/>
														</div>
														<div>
															<img
																src={
																	data?.graph
																}
																alt='graph'
																className='object-fill w-full'
															/>
														</div>
														<div className='flex justify-between flex-wrap sm:flex-nowrap'>
															<div className='flex gap-2.5'>
																<img
																	src={
																		data?.coinImage
																	}
																	alt='crypto image'
																	className='h-9 w-9'
																/>
																<div className='flex flex-col'>
																	<span className='text-sm font-medium text-[#212B36]'>
																		{
																			data?.coinName
																		}
																	</span>
																	<span className='text-xs font-medium text-[#637381]'>
																		{
																			data?.price
																		}
																	</span>
																</div>
															</div>
															<div className='flex items-center gap-1 self-end'>
																<img
																	src={
																		data?.arrow
																	}
																	alt='arrow'
																	className='h-2.5 w-2.5'
																/>
																<span
																	className={`font-inter text-xs font-medium ${
																		data?.color ==
																		'green'
																			? 'text-[#45CB85]'
																			: 'text-[#DC3545]'
																	}`}
																>
																	{
																		data?.percentage
																	}
																</span>
															</div>
														</div>
													</div>
												)
											)}
										</div>
									</div>
								</div>
								<div className='bg-[#FDFDFF] rounded-2xl block md:hidden'>
									<Chat />
								</div>
								<div className='overflow-hidden'>
									<div className='flex flex-col gap-4'>
										<span className='text-lg font-semibold text-[#212B36]'>
											Activity
										</span>
										<div className='w-full overflow-x-scroll scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin md:overflow-auto max-w-xl xs:max-w-xl sm:max-w-xl md:max-w-7xl 2xl:max-w-none mt-1'>
											<table className='table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-1.5'>
												<thead className='bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full'>
													<tr className=''>
														<th className='py-3 pl-3 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-l-lg'>
															Activity
														</th>
														<th className='py-3 pl-2 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap'>
															Account
														</th>
														<th className='py-3 pl-2 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap'>
															Last
															Payment
														</th>
														<th className='py-3 pl-2 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap  rounded-r-lg'>
															Balance
														</th>
													</tr>
												</thead>
												<tbody>
													{TableData.map(
														(
															data,
															index
														) => (
															<tr
																key={
																	index
																}
																className='drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]'
															>
																<td className='py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20'>
																	<div className='relative flex gap-3 items-center'>
																		<div className=''>
																			<img
																				src={
																					data?.image
																				}
																				alt='hepta-brown'
																				className='min-w-[42px] min-h-[42px]'
																			/>
																		</div>
																		<div className='flex flex-col whitespace-nowrap'>
																			<span className='text-xs md:text-sm text-[#212B36]'>
																				{
																					data?.title
																				}
																			</span>
																			<span className='text-xs md:text-sm text-[#637381] mt-1'>
																				{
																					data?.description
																				}
																			</span>
																		</div>
																	</div>
																</td>
																<td className='py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20'>
																	{
																		data.account
																	}
																</td>
																<td className='py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20'>
																	{
																		data.payment
																	}
																</td>
																<td
																	className={`py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20`}
																>
																	{
																		data.balance
																	}
																</td>
															</tr>
														)
													)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className='bg-white rounded-2xl block md:hidden'>
									<Chart />
								</div>
							</div>
							<div
								className={`flex-col gap-7 w-full max-w-[230px] ${
									openSideBar
										? ' lg:max-w-[336px]'
										: 'lg:max-w-[400px]'
								} xl:max-w-[390px] ${
									openSideBar
										? 'hidden lg:flex'
										: 'hidden sm:flex'
								}`}
							>
								<div className=''>
									<CryptoCoin />
								</div>
								<div className='bg-[#FDFDFF] rounded-2xl'>
									<Chat />
								</div>
								<div className='bg-white rounded-2xl'>
									<Chart />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export const CryptoCoin = () => {
	return (
		<div className='flex flex-col gap-3.5 w-ful justify-between h-full'>
			<div className='flex justify-between items-center'>
				<span className='text-lg font-semibold text-[#212B36]'>
					Assets
				</span>
				<span className='text-sm font-medium text-[#637381] cursor-pointer hover:text-[#7851BD] mr-2'>
					View All
				</span>
			</div>
			<div className='overflow-hidden overflow-x-auto flex gap-5 pb-2 scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin'>
				{crypto?.map?.(
					(data, index) => (
						<div
							className='py-5 px-3.5 flex gap-3.5 flex-col min-w-[183px] rounded-lg bg-white border border-[#7851bd33]'
							key={index}
						>
							<div className='flex gap-2.5 items-center'>
								<img
									src={
										data?.img
									}
								/>
								<span className='text-lg font-medium tracking-[1.8px] text-[#637381] uppercase'>
									{data?.name}
								</span>
							</div>
							<span className='text-lg font-semibold text-[#212B36] tracking-[1.8px]'>
								$224,300.40
							</span>
							<span
								className={`text-sm font-medium ${
									data?.color ==
									'red'
										? 'text-[#DA1818]'
										: 'text-[#32A953]'
								} `}
							>
								7.2526
							</span>
						</div>
					)
				)}
			</div>
		</div>
	);
};
export const Chat = () => {
	return (
		<div className='py-6 flex flex-col gap-5 '>
			<div className='flex flex-col gap-3 px-5'>
				<div className='flex justify-between md:flex-col gap-3 lg:flex-row lg:justify-between'>
					<span className='text-lg font-semibold text-[#212B36] whitespace-nowrap'>
						Send Money
					</span>
					<button className='px-5 py-1.5 text-[#637381] hover:bg-gradient-to-tl hover:to-[#7851BD] hover:from-[#4E4BCF] text-base tracking-[1.6px] bg-[#EDEDED] rounded-[40px] text-center h-fit w-fi hover:text-white whitespace-nowrap self-end'>
						View All
					</button>
				</div>
				<div className='flex justify-between flex-wrap gap-2 lg:gap-0 lg:flex-nowrap '>
					<div className='flex gap-7 flex-wrap'>
						{userList?.map(
							(data, index) => (
								<img
									src={data}
									alt='user'
									key={index}
									className='h-9 w-9'
								/>
							)
						)}
					</div>
				</div>
			</div>
			<div className='border-t border-[#7851bd33] px-5 pt-5 flex gap-7 flex-col'>
				<div className='flex flex-col gap-2 xl:flex-row xl:justify-between w-full'>
					<span className='font-semibold text-lg text-[#212B36] tracking-[1px]'>
						Operations
					</span>
					<div className='p-2 bg-[#EDEDED] rounded-lg flex flex-wrap'>
						<span className='bg-[#EDEDED] hover:bg-white text-sm px-2.5 py-1.5 rounded-md tracking-[1.5px] cursor-pointer hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'>
							Buy
						</span>
						<span className='bg-[#EDEDED] hover:bg-white text-sm px-2.5 py-1.5 rounded-md tracking-[1.5px] cursor-pointer hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'>
							Sell
						</span>
						<span className='bg-[#EDEDED] hover:bg-white text-sm px-2.5 py-1.5 rounded-md cursor-pointer tracking-[1.5px] hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'>
							Exchange
						</span>
					</div>
				</div>
				<div className=''>
					<div className=''>
						<span className='text-sm text-[#637381]'>
							You pay
						</span>
						<div className='py-2 pl-1.5 bg-[#EDEDED] flex justify-between flex-wrap gap-3 rounded-lg'>
							<DropDowns
								list={people}
								selectedIcon={
									people[1]
								}
								type='crypto'
								style='flex p-1.5 bg-[#FDFDFF] gap-2 items-center w-fit rounded-lg tracking-[1.4px] uppercase w-[95px]'
							/>
							<div className='flex gap-4 items-center mr-4 ml-1.5'>
								<span className='text-[#212B36] font-semibold text-sm tracking-[1.5px]'>
									$321.40
								</span>
								<button className='px-2 py-0.5 text-xs uppercase bg-[#7851BD] rounded-[20px] text-[#FDFDFF] font-bold tracking-[1px]'>
									Max
								</button>
							</div>
						</div>
					</div>
					<div className='mt-4'>
						<svg
							width='12'
							height='16'
							viewBox='0 0 12 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='mx-auto'
						>
							<path
								d='M8.32195 15.7694L11.7481 12.5688C11.828 12.4942 11.8913 12.4057 11.9345 12.3082C11.9778 12.2107 12 12.1062 12 12.0007C12 11.7876 11.9094 11.5833 11.7481 11.4326C11.5868 11.282 11.3681 11.1973 11.14 11.1973C10.9119 11.1973 10.6931 11.282 10.5318 11.4326L8.57034 13.273L8.57034 3.99927C8.57034 3.78706 8.4801 3.58354 8.31947 3.43349C8.15884 3.28343 7.94097 3.19913 7.71381 3.19913C7.48664 3.19913 7.26877 3.28343 7.10814 3.43349C6.94751 3.58354 6.85727 3.78706 6.85727 3.99927L6.85727 15.2013C6.85811 15.3593 6.90899 15.5135 7.0035 15.6445C7.098 15.7755 7.2319 15.8774 7.38832 15.9374C7.54431 15.9987 7.71622 16.0155 7.88238 15.9856C8.04854 15.9556 8.2015 15.8804 8.32195 15.7694ZM5.14419 12.0007L5.14419 0.798694C5.14335 0.640725 5.09247 0.486524 4.99796 0.355524C4.90346 0.224524 4.76956 0.122587 4.61314 0.0625601C4.45715 0.00128542 4.28524 -0.0154558 4.11908 0.014449C3.95292 0.0443537 3.79996 0.119564 3.67951 0.230591L0.253364 3.43117C0.173082 3.50556 0.109359 3.59405 0.0658735 3.69156C0.0223882 3.78906 3.81443e-07 3.89365 3.76826e-07 3.99927C3.72209e-07 4.1049 0.0223881 4.20949 0.0658734 4.30699C0.109359 4.4045 0.173082 4.49299 0.253364 4.56738C0.33299 4.64237 0.427723 4.7019 0.5321 4.74252C0.636477 4.78314 0.748431 4.80406 0.861505 4.80406C0.974578 4.80406 1.08653 4.78314 1.19091 4.74252C1.29529 4.7019 1.39002 4.64237 1.46965 4.56738L3.43112 2.72704L3.43112 12.0007C3.43112 12.2129 3.52136 12.4165 3.68199 12.5665C3.84262 12.7166 4.06049 12.8009 4.28766 12.8009C4.51482 12.8009 4.73269 12.7166 4.89332 12.5665C5.05395 12.4165 5.14419 12.2129 5.14419 12.0007Z'
								fill='#212B36'
							/>
						</svg>
					</div>
					<div className='mt-0.5'>
						<span className='text-sm text-[#637381]'>
							You get
						</span>
						<div className='py-2 pl-1.5 bg-[#EDEDED] flex justify-between flex-wrap gap-3 rounded-lg'>
							<DropDowns
								list={people}
								type='crypto'
								selectedIcon={
									people[0]
								}
								style={
									'flex p-1.5 bg-[#FDFDFF] gap-2 items-center w-fit rounded-lg tracking-[1.4px] uppercase w-[95px]'
								}
							/>
							<div className='flex gap-4 items-center mr-4 ml-1.5'>
								<span className='text-[#212B36] font-semibold text-sm tracking-[1.5px]'>
									0.05BTC
								</span>
								<button className='px-2 py-0.5 text-xs uppercase bg-[#7851BD] rounded-[20px] text-[#FDFDFF] font-bold tracking-[1px]'>
									min
								</button>
							</div>
						</div>
					</div>
				</div>
				<button className='px-5 py-5 bg-gradient-to-tl to-[#7851BD] from-[#4E4BCF] rounded-xl text-lg font-semibold mt-3 text-white hover:scale-105'>
					Buy Bitcoin
				</button>
			</div>
		</div>
	);
};
const DropDowns = ({
	list,
	selectedIcon,
	style,
	type,
}) => {
	const [selected, setSelected] =
		useState(selectedIcon);
	return (
		<Listbox
			value={selected}
			onChange={setSelected}
		>
			<div className='relative mt-1'>
				<Listbox.Button
					className={`${style}`}
				>
					{type == 'crypto' && (
						<img
							src={selected?.img}
							className='h-5 w-5'
						/>
					)}
					{selected?.name}
					{type == 'crypto' ? (
						<svg
							width='7'
							height='5'
							viewBox='0 0 7 5'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='h-2 w-1.5'
						>
							<path
								d='M0.420825 1.61555L2.84342 4.19964C3.19898 4.57891 3.80102 4.57891 4.15658 4.19964L6.57918 1.61555C7.11805 1.04075 6.71049 0.099999 5.92259 0.099999L1.07741 0.099999C0.289513 0.099999 -0.118049 1.04075 0.420825 1.61555Z'
								fill='#212B36'
							/>
						</svg>
					) : (
						<svg
							width='26'
							height='24'
							viewBox='0 0 26 24'
							fill='none'
							className='fill-[#363062] group-hover:fill-white'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.97904 9L13.0911 15L19.2031 9'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					)}
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options className='absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm min-w-[76px]'>
						{list?.map(
							(
								person,
								personId
							) => (
								<Listbox.Option
									key={
										personId
									}
									className={({
										active,
									}) =>
										`relative select-none py-2 pl-2 pr-4 cursor-pointer ${
											active
												? 'bg-[#F6F8FA] text-gray-900'
												: 'text-gray-900'
										}`
									}
									value={
										person
									}
								>
									{({
										selected,
									}) => (
										<div className='flex gap-2 '>
											{type ==
												'crypto' && (
												<img
													src={
														person?.img
													}
													alt='crypto'
													className='h-5 w-5'
												/>
											)}
											<span
												className={`block truncate tracking-[1px] ${
													selected
														? 'font-medium text-[#212B36]'
														: 'font-normal text-[#212B36]'
												} ${
													type ==
														'crypto' &&
													'uppercase'
												}`}
											>
												{
													person?.name
												}
											</span>
										</div>
									)}
								</Listbox.Option>
							)
						)}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};
export const Chart = () => {
	return (
		<div className='py-5 pl-5 pr-10 flex flex-col gap-5 overflow-hidden overflow-x-auto scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin'>
			<div className='flex gap-60'>
				<div className='flex flex-col gap-2.5 '>
					<span className='text-lg text-[#212B36 font-semibold'>
						Transactions
					</span>
					<span className='text-[#637381] text-xs font-medium whitespace-nowrap'>
						Lorem ipsum dolor sit
						amet, consectetur
					</span>
				</div>
				<div className=''>
					<DropDowns
						list={chartData}
						selectedIcon={
							chartData[1]
						}
						style='rounded-[40px] gap-10 border border-[#D5D5D8] text-[#000000] font-medium text-sm py-4 px-5 flex justify-center items-center'
						type='chart'
					/>
				</div>
			</div>
			<div className='flex gap-[21rem] justify-between pr-5'>
				<span className='text-sm font-medium text-[#212B36] whitespace-nowrap'>
					Last Month
					<span className='text-sm font-medium text-[#32A953]'>
						{' '}
						$42,443
					</span>
				</span>
				<div className='text-[#000000] font-semibold text-xl gap-2.5 flex items-start pl-1'>
					<span> $48,525.21</span>
					<span className='text-[#32A953] flex'>
						7%
						<svg
							width='26'
							height='24'
							viewBox='0 0 26 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g id='ic_chevron'>
								<path
									id='Vector'
									d='M7.03275 15L13.1448 9L19.2568 15'
									fill='#37D159'
								/>
							</g>
						</svg>
					</span>
				</div>
			</div>
			<div className='w-[630px]'>
				<HighchartsReact
					highcharts={Highcharts}
					options={options2}
				/>
			</div>
		</div>
	);
};
const Logo = () => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='cursor-pointer h-8 w-8'
		>
			<mask
				id='mask0_566_52282'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='28'
				height='28'
			>
				<rect
					width='28'
					height='28'
					rx='10'
					transform='matrix(-1 0 0 1 28 0)'
					fill='#D9D9D9'
				/>
			</mask>
			<g mask='url(#mask0_566_52282)'></g>
			<mask
				id='mask1_566_52282'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='28'
				height='28'
			>
				<rect
					width='28'
					height='28'
					rx='10'
					transform='matrix(-1 0 0 1 28 0)'
					fill='#D9D9D9'
				/>
			</mask>
			<g mask='url(#mask1_566_52282)'>
				<rect
					width='32.3855'
					height='31.7108'
					rx='10'
					transform='matrix(-1 0 0 1 30.0244 -2.02411)'
					fill='url(#pattern0)'
				/>
				<rect
					width='32.3855'
					height='31.7108'
					rx='10'
					transform='matrix(-1 0 0 1 30.0244 -2.02411)'
					fill='url(#paint0_linear_566_52282)'
					fillOpacity='0.8'
				/>
			</g>
			<mask
				id='mask2_566_52282'
				maskUnits='userSpaceOnUse'
				x='4'
				y='4'
				width='28'
				height='28'
			>
				<rect
					width='28'
					height='28'
					rx='10'
					transform='matrix(-1 0 0 1 32 4)'
					fill='#D9D9D9'
				/>
			</mask>
			<g mask='url(#mask2_566_52282)'>
				<rect
					width='32.3855'
					height='31.7108'
					rx='10'
					transform='matrix(-1 0 0 1 34.0244 1.97589)'
					fill='url(#pattern1)'
				/>
				<rect
					width='32.3855'
					height='31.7108'
					rx='10'
					transform='matrix(-1 0 0 1 34.0244 1.97589)'
					fill='url(#paint1_linear_566_52282)'
					fillOpacity='0.6'
				/>
			</g>
			<path
				d='M27.3149 15.132C26.9362 15.132 26.63 15.4401 26.63 15.8209V21.2811C26.63 21.8078 26.348 22.2578 25.8766 22.4847C25.4052 22.7117 24.8774 22.655 24.4705 22.3225L19.0958 17.9987L24.2368 13.6867C24.4182 13.5611 24.539 13.3545 24.539 13.1153C24.539 12.7344 24.2327 12.4264 23.8541 12.4264C23.713 12.4264 23.5801 12.4709 23.4713 12.5439C23.4552 12.552 23.4431 12.5642 23.4269 12.5764L17.9999 17.1151L12.3835 12.6008C11.5657 11.9402 10.4738 11.8146 9.53109 12.2725C8.58431 12.7264 8 13.6665 8 14.7201V21.2809C8 22.3346 8.58416 23.2707 9.53109 23.7286C10.4739 24.1824 11.5696 24.0569 12.3835 23.4002L17.9999 18.8818L23.6122 23.4002C24.1038 23.7974 24.696 24 25.2964 24C25.6912 24 26.094 23.9108 26.4689 23.7286C27.4157 23.2707 27.9998 22.3346 27.9998 21.2809V15.8209C27.9998 15.4401 27.6936 15.132 27.3149 15.132ZM11.5293 22.3225C11.1184 22.6548 10.5945 22.7117 10.1233 22.4847C9.65185 22.2578 9.36985 21.808 9.36985 21.2811V14.7203C9.36985 14.1935 9.65185 13.7396 10.1233 13.5127C10.3127 13.4235 10.51 13.379 10.7035 13.379C10.9976 13.379 11.2837 13.4763 11.5295 13.6748L16.904 17.9987L11.5293 22.3225ZM28 12.689C28 13.0694 27.6933 13.3779 27.3151 13.3779C26.9369 13.3779 26.6301 13.0694 26.6301 12.689C26.6301 12.3086 26.9369 12.0001 27.3151 12.0001C27.6934 12.0001 28 12.3084 28 12.689Z'
				fill='white'
			/>
			<defs>
				<pattern
					id='pattern0'
					patternContentUnits='objectBoundingBox'
					width='1'
					height='1'
				>
					<use
						xlinkHref='#image0_566_52282'
						transform='matrix(0.00492505 0 0 0.00505465 -4.83333 -7.94331)'
					/>
				</pattern>
				<pattern
					id='pattern1'
					patternContentUnits='objectBoundingBox'
					width='1'
					height='1'
				>
					<use
						xlinkHref='#image0_566_52282'
						transform='matrix(0.00492505 0 0 0.00505465 -4.83333 -7.94331)'
					/>
				</pattern>
				<linearGradient
					id='paint0_linear_566_52282'
					x1='28.5242'
					y1='16.0241'
					x2='2.02417'
					y2='21.5241'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#A5CCE2' />
					<stop
						offset='1'
						stopColor='#A5CCE2'
						stopOpacity='0'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_566_52282'
					x1='6.02417'
					y1='6.02411'
					x2='29.0242'
					y2='27.0241'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#9517AF' />
					<stop
						offset='1'
						stopColor='#3206D3'
					/>
				</linearGradient>
				<image
					id='image0_566_52282'
					width='1666'
					height='2500'
				/>
			</defs>
		</svg>
	);
};

export default function AnalyticsPage({
	data,
}: any) {
	const {
		currentEstablishment,
		publicEstablishmentId,
	} = useEstablishment();
	const [options, setOptions] =
		React.useState({
			page: 1,
			total: 0,
			limit: 25,
		});
	const [prayers, setPrayers] =
		React.useState(data);

	return (
		<SideBarLayout
			// sideBar={<PrayersSidebar />}
			currentEstablishment={
				currentEstablishment
			}
			loading={loading}
		>
			<>
				{!currentEstablishment && (
					<Loader />
				)}
				<Toaster />
				<div className=' min-h-screen'>
					{/* {prayers ? (
						<div className='page-wrapper'>
							<Prayers
								prayers={
									prayers
								}
								total={
									options.total
								} //@ts-ignore
								publicEstablishmentId={
									publicEstablishmentId
								}
								page={
									options.page
								}
								currentEstablishment={
									currentEstablishment
								}
								refetch={(
									page
								) => {
									setOptions({
										...options,
										page,
									});
								}}
							/>
						</div>
					) : null} */}
					<Example />
				</div>
			</>
		</SideBarLayout>
	);
}