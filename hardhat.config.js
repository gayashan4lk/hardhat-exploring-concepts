require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('hardhat-deploy');

const privateKey = process.env['PRIVATE_KEY'];
const infuraProjectId = process.env['INFURA_PROJECT_ID'];
const alchemyApiKey = process.env['ALCHEMY_API_KEY'];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',

	networks: {
		hardHat: {
			url: 'http://127.0.0.1:8545/',
		},
		goerliInfura: {
			url: `https://goerli.infura.io/v3/${infuraProjectId}`,
			accounts: [`0x${privateKey}`],
			gasPrice: 1000,
			saveDeployments: true,
			deploy: ['scripts/'],
		},
		goerliAlchemy: {
			url: `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
			accounts: [privateKey],
		},
	},
};
