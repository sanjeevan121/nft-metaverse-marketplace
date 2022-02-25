const { expect } = require("chai");
const { promises } = require("stream");
describe("NFTMarket", function ()
{
    it("Should create and execute NFT market sales", async function(){
        const Market = await ethers.getContractFactory("NFTMarket")
        const market = await Market.deploy()

        await market.deployed()

        const marketAddress = market.address

        const NFT = await ethers.getContractFactory("NFT")
        const nft = await NFT.deploy(marketAddress)

        await nft.deployed()

        const nftContractAddress = nft.address

        let listingPrice= await market.getListingPrice()
        listingPrice = listingPrice.toString()

        const sellingPrice = ethers.utils.parseUnits('100','ether')
        await nft.createToken("https://www.randomurl1.com")
        await nft.createToken("https://www.randomurl2.com")

        await market.createMarketItem(nftContractAddress , 1 , sellingPrice , { value: listingPrice})
        await market.createMarketItem(nftContractAddress , 2 , sellingPrice , { value: listingPrice})
        
        const [_, buyerAddress]= await ethers.getSigners()
       
        await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, 
            { value : sellingPrice})

        let items = await market.fetchMarketitems()
        items=await Promise.all(items.map(async i => {

            const tokenURI =await nft.tokenURI(i.tokenId)
            let item ={
                price: i.price.toString(),
                tokenId: i.tokenId.toString(),
                seller: i.seller,
                owner: i.owner,
                tokenURI
            }
            return item
        }))
        console.log('items :', items)


    });
});