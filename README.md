# Exploring the concepts of Hardhat

`npm install`

select Node version v18.13.0

`nvs add 18.13.0`

`nvs use 18.13.0`

Compile:
`npx hardhat compile`

Run tests:
`npx hardhat test`

Open a new terminal and run
`npx hardhat node`. This will run a local blockchain on you machine at `http://127.0.0.1:8545/`

Deploy to Hardhat local blockchain:
`npx hardhat run scripts/deploy.js --network hardHat`

create a `.env` file in the root directory.
Add followings.
`PRIVATE_KEY=
INFURA_PROJECT_ID=
ALCHEMY_API_KEY=`
PRIVATE_KEY is the private key of your Ethereum Account.
INFURA_PROJECT_ID is the project Id of the Infura app.
ALCHEMY_API_KEY is the Api key of the Alchemy app.

Deploy to Goerli testnet on Alchemy
`npx hardhat run scripts/deploy.js --network goerliAlchemy`
Note: you should have created a project on Alchemy and provide the API KEY in .env file.

Deploy to Goerli testnet on Infura
`npx hardhat run scripts/deploy.js --network goerliInfura`
Note: you should have created a project on Alchemy and provide the PROJECT ID in .env file.
