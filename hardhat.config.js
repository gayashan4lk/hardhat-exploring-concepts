require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',

	networks: {
		hardHat: {
			url: 'http://127.0.0.1:8545/',
		},
	},
};
