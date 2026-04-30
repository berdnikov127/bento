// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝ 
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'w1nkk',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'a27617d31b21a450c0b7c4b63eab1202', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	weatherLatitude: '55.0084',
	weatherLongitude: '82.9357',
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '55.0084',
	defaultLongitude: '82.9357',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
	
	firstButtonsContainer: [
	    {
	        id: '1',
	        name: 'YouTube',
	        icon: 'play-circle',
	        link: 'https://www.youtube.com/',
	    },
	    {
	        id: '2',
	        name: 'Gmail',
	        icon: 'mail',
	        link: 'https://mail.google.com/mail/u/0/#inbox',
	    },
	    {
	        id: '3',
	        name: 'GitHub',
	        icon: 'git-branch',
	        link: 'https://github.com/',
	    },
	    {
	        id: '4',
	        name: 'Интернетометр',
	        icon: 'gauge',
	        link: 'https://yandex.ru/internet/,
	    },
	    {
	        id: '5',
	        name: 'DeepSeek',
	        icon: 'brain',
	        link: 'https://chat.deepseek.com/',
	    },
	    {
	        id: '6',
	        name: 'Proxmox',
	        icon: 'server',
	        link: 'https://172.16.0.2:8006/#v1:0:18:4:::::::',
	    },
	],

	secondButtonsContainer: [
		{
		    id: '1',
		    name: 'Keenetic',
		    icon: 'router',
		    link: 'http://192.168.1.1',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
	    {
	        icon: 'router',
	        id: '1',
	        links: [
	            {
	                name: 'Keenetic',
	                link: 'http://192.168.1.1',
	            },
	            {
	                name: 'Proxmox',
	                link: 'https://172.16.0.2:8006/#v1:0:18:4:::::::',
	            },
	            {
	                name: 'Habr',
	                link: 'https://habr.com/ru/feed/',
	            },
	            {
	                name: 'GitHub',
	                link: 'https://github.com/',
	            },
	        ],
	    },
	    {
	        icon: 'shopping-cart',
	        id: '2',
	        links: [
	            {
	                name: 'Avito',
	                link: 'https://www.avito.ru/',
	            },
	            {
	                name: 'Ozon',
	                link: 'https://www.ozon.ru/',
	            },
	            {
	                name: 'Wildberries',
	                link: 'https://www.wildberries.ru/',
	            },
	            {
	                name: 'Rutracker',
	                link: 'https://rutracker.org/',
	            },
	        ],
	    },
	],
	
	secondListsContainer: [
	    {
	        icon: 'image',
	        id: '1',
	        links: [
	            {
	                name: 'Pinterest',
	                link: 'https://www.pinterest.com/',
	            },
	            {
	                name: 'Boosty',
	                link: 'https://boosty.to/',
	            },
	            {
	                name: 'YouTube',
	                link: 'https://www.youtube.com/',
	            },
	            {
	                name: 'Reddit',
	                link: 'https://www.reddit.com/',
	            },
	        ],
	    },
	    {
	        icon: 'newspaper',
	        id: '2',
	        links: [
	            {
	                name: 'Vc.ru',
	                link: 'https://vc.ru/',
	            },
	            {
	                name: 'DTF',
	                link: 'https://dtf.ru/',
	            },
	            {
	                name: 'Pikabu',
	                link: 'https://pikabu.ru/',
	            },
	            {
	                name: 'Kinopoisk',
	                link: 'https://www.kinopoisk.ru/',
	            },
	        ],
	    },
	],
};
