const { expect } = require('chai');

describe('Token contract', function () {
	it('Deployment should assign the total supply of tokens to the owner', async function () {
		this.timeout(60000);
		const [owner] = await ethers.getSigners();
		console.log('== Owner ==');
		console.log(owner);

		const Token = await ethers.getContractFactory('Token');
		console.log('== Token ==');
		console.log(Token);

		const hardhatToken = await Token.deploy();
		console.log('== HardHat Token ==');
		console.log(hardhatToken);

		const ownerBalance = await hardhatToken.balanceOf(owner.address);
		console.log('== Owner Balance ==');
		console.log(ownerBalance);

		expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
	});
});
