const { expect } = require('chai');

describe('Token contract', function () {
	it('Deployment should assign the total supply of tokens to the owner', async function () {
		this.timeout(600000);
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

		const totalSupply = await await hardhatToken.totalSupply();
		console.log('== Total Supply ==');
		console.log(totalSupply);

		expect(totalSupply).to.equal(ownerBalance);
	});
});
