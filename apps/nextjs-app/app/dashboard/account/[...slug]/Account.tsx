'use client';
import { useEstablishment } from '@/app/_helpers/web/hooks/useEstablishment';
import Prayers from '@/app/components/Prayers/Prayers';

import Loader from '@/app/components/Loader/Loader';
import Nav from '@/app/components/Nav/Nav';
import SideBarLayout from '@/app/components/__Layouts/homesidebar';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import PrayersSidebar from '../something/PrayersSidebar';
import loading from './loading';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
	Fragment,
	useState,
} from 'react';
import {
	Dialog,
	Transition,
} from '@headlessui/react';
import {
	ChartBarSquareIcon,
	Cog6ToothIcon,
	FolderIcon,
	GlobeAltIcon,
	ServerIcon,
	SignalIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

const navigation = [
	{
		name: 'Projects',
		href: '#',
		icon: FolderIcon,
		current: false,
	},
	{
		name: 'Deployments',
		href: '#',
		icon: ServerIcon,
		current: false,
	},
	{
		name: 'Activity',
		href: '#',
		icon: SignalIcon,
		current: false,
	},
	{
		name: 'Domains',
		href: '#',
		icon: GlobeAltIcon,
		current: false,
	},
	{
		name: 'Usage',
		href: '#',
		icon: ChartBarSquareIcon,
		current: false,
	},
	{
		name: 'Settings',
		href: '#',
		icon: Cog6ToothIcon,
		current: true,
	},
];
const teams = [
	{
		id: 1,
		name: 'Planetaria',
		href: '#',
		initial: 'P',
		current: false,
	},
	{
		id: 2,
		name: 'Protocol',
		href: '#',
		initial: 'P',
		current: false,
	},
	{
		id: 3,
		name: 'Tailwind Labs',
		href: '#',
		initial: 'T',
		current: false,
	},
];
const secondaryNavigation = [
	{
		name: 'Account',
		href: '#',
		current: true,
	},
	{
		name: 'Mentions',
		href: '#',
		current: false,
	},

	{
		name: 'Teams',
		href: '#',
		current: false,
	},
];

function classNames(...classes) {
	return classes
		.filter(Boolean)
		.join(' ');
}

function Example() {
	const [sidebarOpen, setSidebarOpen] =
		useState(false);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
			<div>
				{/* Static sidebar for desktop */}

				<div>
					{/* Sticky search header */}
					<div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5  bg-white px-4 shadow-sm sm:px-6 lg:px-8'>
						<header className='border-b border-white/5'>
							{/* Secondary navigation */}
							<nav className='flex overflow-x-auto py-4'>
								<ul
									role='list'
									className='flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8'
								>
									{secondaryNavigation.map(
										(
											item
										) => (
											<li
												key={
													item.name
												}
											>
												<a
													href={
														item.href
													}
													className={
														item.current
															? 'text-indigo-400'
															: ''
													}
												>
													{
														item.name
													}
												</a>
											</li>
										)
									)}
								</ul>
							</nav>
						</header>
					</div>

					<main>
						{/* Settings forms */}
						<div className='divide-y divide-white/5'>
							<div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
								<div>
									<h2 className='text-base font-semibold leading-7 text-white'>
										Personal
										Information
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-400'>
										Use a
										permanent
										address
										where you
										can
										receive
										mail.
									</p>
								</div>

								<form className='md:col-span-2'>
									<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
										<div className='col-span-full flex items-center gap-x-8'>
											<img
												src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
												alt=''
												className='h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover'
											/>
											<div>
												<button
													type='button'
													className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
												>
													Change
													avatar
												</button>
												<p className='mt-2 text-xs leading-5 text-gray-400'>
													JPG,
													GIF
													or
													PNG.
													1MB
													max.
												</p>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='first-name'
												className='block text-sm font-medium leading-6 text-white'
											>
												First
												name
											</label>
											<div className='mt-2'>
												<input
													type='text'
													name='first-name'
													id='first-name'
													autoComplete='given-name'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='last-name'
												className='block text-sm font-medium leading-6 text-white'
											>
												Last
												name
											</label>
											<div className='mt-2'>
												<input
													type='text'
													name='last-name'
													id='last-name'
													autoComplete='family-name'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='email'
												className='block text-sm font-medium leading-6 text-white'
											>
												Email
												address
											</label>
											<div className='mt-2'>
												<input
													id='email'
													name='email'
													type='email'
													autoComplete='email'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='username'
												className='block text-sm font-medium leading-6 text-white'
											>
												Username
											</label>
											<div className='mt-2'>
												<div className='flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
													<span className='flex select-none items-center pl-3 text-gray-400 sm:text-sm'>
														example.com/
													</span>
													<input
														type='text'
														name='username'
														id='username'
														autoComplete='username'
														className='flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6'
														placeholder='janesmith'
													/>
												</div>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='timezone'
												className='block text-sm font-medium leading-6 text-white'
											>
												Timezone
											</label>
											<div className='mt-2'>
												<select
													id='timezone'
													name='timezone'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
												>
													<option>
														Pacific
														Standard
														Time
													</option>
													<option>
														Eastern
														Standard
														Time
													</option>
													<option>
														Greenwich
														Mean
														Time
													</option>
												</select>
											</div>
										</div>
									</div>

									<div className='mt-8 flex'>
										<button
											type='submit'
											className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
										>
											Save
										</button>
									</div>
								</form>
							</div>

							<div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
								<div>
									<h2 className='text-base font-semibold leading-7 text-white'>
										Change
										password
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-400'>
										Update
										your
										password
										associated
										with your
										account.
									</p>
								</div>

								<form className='md:col-span-2'>
									<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
										<div className='col-span-full'>
											<label
												htmlFor='current-password'
												className='block text-sm font-medium leading-6 text-white'
											>
												Current
												password
											</label>
											<div className='mt-2'>
												<input
													id='current-password'
													name='current_password'
													type='password'
													autoComplete='current-password'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='new-password'
												className='block text-sm font-medium leading-6 text-white'
											>
												New
												password
											</label>
											<div className='mt-2'>
												<input
													id='new-password'
													name='new_password'
													type='password'
													autoComplete='new-password'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='confirm-password'
												className='block text-sm font-medium leading-6 text-white'
											>
												Confirm
												password
											</label>
											<div className='mt-2'>
												<input
													id='confirm-password'
													name='confirm_password'
													type='password'
													autoComplete='new-password'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
									</div>

									<div className='mt-8 flex'>
										<button
											type='submit'
											className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
										>
											Save
										</button>
									</div>
								</form>
							</div>

							<div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
								<div>
									<h2 className='text-base font-semibold leading-7 text-white'>
										Log out
										other
										sessions
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-400'>
										Please
										enter your
										password
										to confirm
										you would
										like to
										log out of
										your other
										sessions
										across all
										of your
										devices.
									</p>
								</div>

								<form className='md:col-span-2'>
									<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
										<div className='col-span-full'>
											<label
												htmlFor='logout-password'
												className='block text-sm font-medium leading-6 text-white'
											>
												Your
												password
											</label>
											<div className='mt-2'>
												<input
													id='logout-password'
													name='password'
													type='password'
													autoComplete='current-password'
													className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
									</div>

									<div className='mt-8 flex'>
										<button
											type='submit'
											className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
										>
											Log out
											other
											sessions
										</button>
									</div>
								</form>
							</div>

							<div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
								<div>
									<h2 className='text-base font-semibold leading-7 text-white'>
										Delete
										account
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-400'>
										No longer
										want to
										use our
										service?
										You can
										delete
										your
										account
										here. This
										action is
										not
										reversible.
										All
										information
										related to
										this
										account
										will be
										deleted
										permanently.
									</p>
								</div>

								<form className='flex items-start md:col-span-2'>
									<button
										type='submit'
										className='rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400'
									>
										Yes,
										delete my
										account
									</button>
								</form>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default function AccountPage({
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
