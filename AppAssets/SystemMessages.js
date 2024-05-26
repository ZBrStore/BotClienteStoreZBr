const UserData = require('./UserPatch.js');
module.exports = [
	// MessageData
	{
		id: '1000000000000000000',
		type: 0,
		channel_id: '1000000000000000000', // If you want to use it, must set ChannelId to 1000000000000000000
		author: UserData['1243253316641755269'], // Custom User Data here
		attachments: [],
		content: null,
		embeds: [
			{
				type: 'rich',
				description: `Obrigado por usar meu cliente!`,
				color: 16750296,
				timestamp: '2022-12-31T17:00:00+00:00',
				author: {
					name: 'ZBrStore',
					icon_url: 'https://imgur.com/a/iYEUaFf',
				},
				thumbnail: {
					url: 'https://cdn.discordapp.com/avatars/1243253316641755269/1cfe74f05e5e19a9e05ec3bade99fe53.png',
					width: 128,
					height: 128,
				},
				footer: {
					text: 'ZBrStore',
				},
			},
		], // Custom Embed Data here
		mentions: [],
		mention_roles: [],
		pinned: false,
		mention_everyone: false,
		tts: false,
		timestamp: new Date().toISOString(),
		edited_timestamp: null,
		flags: 16,
		components: [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 5,
						label: 'Suporte',
						emoji: {
							name: 'suporte',
							id: '1243349405365571594',
						},
						url: 'https://discord.gg/UER66Rj64G',
					},
				],
			},
		], // Custom Msg Components Data here
	},
];