// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //address of the marketplace that we want to allow our nft to be able to interact with
    //or vice versa
    //we want to allow our nft market to be able to change the ownership of nfts through a separate contarct
    address contractAddress;
    

    //when we deploy this contarct, we need to set the address of the actual marketplace
    constructor(address marketplaceAddress) ERC721("Metaverse Tokens","METT") {
    contractAddress=marketplaceAddress;
    
    }

    //function for minting new tokens
   function createToken(string memory tokenURI) public returns(uint){

    
       _tokenIds.increment();
       uint256 newItemId=_tokenIds.current();

        //mint new tokens, with msg.send as the creator and item id as the item id
       _mint(msg.sender,newItemId);
       _setTokenURI(newItemId,tokenURI);

       //gives the marketplace the permission to transact this token between users from any external contract
       setApprovalForAll(contractAddress,true);
       return newItemId;

   } 
}
