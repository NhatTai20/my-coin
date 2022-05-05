import React, { useState } from 'react';
import './App.css';
import Wallet from "./components/Wallet/Wallet";
import BlockChain from "./components/Blockchain/Blockchain";
const SHA256 = require("crypto-js/sha256");

const difficulty = 2; // should be max at 4 to be fast
const miningReward = 1;
const hash = (index, prevHash, difficulty) =>{
  let nonce = 0;
  while (true){
    const time = Date.now();
    const hash = index + time + prevHash + nonce;
    const codeHash = SHA256(hash).toString();
    if (codeHash.substring(0, difficulty) === Array(difficulty + 1).join("0")) { 
      return codeHash;
    }
    nonce++;
  }
}

const findMiner = (from, to, max) =>{
  if (max <= 2 ){ 
    return -1;
  }
  while(true){ 
    const randomIndex = Math.floor(Math.random() * max);
    if (randomIndex !== from && randomIndex !== to){
      return randomIndex;
    }
  }
}

function App() {

  const [block, setBlock] = useState([
    { id: 0, data: 'Block genesised by system', prevHash: '0', hash: '0019123a23dd04e37bd41cb421c76ef6760477777c0034a16f329a7bf29468df', name: 'GENESIS BLOCK' }
  ]);

  const [wallets, setWallets] = useState([
    { id: 0, name: 'Tai', coin: 10, transfer: 0, recieved: 10}
  ])
  
  const [indexWalletActive, setIndexWalletActive] = useState(0);

  const [history, setHistory] = useState([]); 

  function formCreateWallet(value){
    const numberWalet = wallets.length;
    const nameValue = value.name; 
    const newWallet = {
      id: numberWalet,
      name: nameValue,
      coin: 0,
      transfer: 0,
      recieved: 0
    }
    let newListWallet = [...wallets];
    newListWallet.push(newWallet);
    setWallets(newListWallet);
    setIndexWalletActive(numberWalet); 
  }

  function getIdWallet(value){
    setIndexWalletActive(value.newId);
  }


  function removeDiv(clName){
    document.getElementsByClassName(clName)[0].classList.remove('xuathien');
  }

  function clearDataForm(id){
    document.getElementById(id).reset();
  }



  function sendCoinWallet(value){
    let newWallet = [...wallets];
    let mycoin = newWallet[indexWalletActive].coin;
    if (value.id === indexWalletActive || value.coin > mycoin || value.coin <= 0 || isNaN(value.coin) ){
      document.getElementsByClassName('txtinvalid')[0].classList.add('xuathientxtinvalid');
      clearDataForm('formsendcoin');
    }
    else{
      const newId = block.length;
      const iPrevHash = block[newId  - 1].hash;
      let newListBlock = [...block];
      const newData = `'${newWallet[indexWalletActive].name}' sent to '${newWallet[value.id].name}' ${value.coin} Coin`;
      let newBlock = {
        id: newId,
        data: newData,
        prevHash: iPrevHash,
        hash: hash(newId, iPrevHash, difficulty),
        name: "BLOCK NUMBER" + newId,
      }
      newListBlock.push(newBlock);
      setBlock(newListBlock);

      newWallet[indexWalletActive].coin = mycoin - value.coin;
      newWallet[indexWalletActive].transfer += value.coin;
      newWallet[value.id].coin = newWallet[value.id].coin + value.coin;
      newWallet[value.id].recieved += value.coin;

      const idMiner = findMiner(indexWalletActive, value.id, newWallet.length); 
      let nameMiner = "Not available";
      if (idMiner !== -1 ){
        nameMiner = newWallet[idMiner].name;
      
        newWallet[idMiner].coin += miningReward;
        newWallet[idMiner].recieved += miningReward;
      }
      const newHistory = {
        id: Date.now(),
        to: newWallet[value.id].name,
        from: newWallet[indexWalletActive].name,
        coin: value.coin,
        miner: nameMiner
      }
      let newListHistory = [...history];
      newListHistory.push(newHistory);
      setHistory(newListHistory);
      setWallets(newWallet);
      clearDataForm('formsendcoin');   
    }
  }

  return (
    <div className="App">
      <div>
        <h1 className="titleName mt-3 mb-4"><b>MY COIN</b></h1>
        <div className="container">
          <div className="row" style={{marginBottom: '50px'}}>
            <Wallet 
              myWallet={wallets[indexWalletActive]} 
              wallets={wallets}
              iWalletActive={indexWalletActive}
              formCreate={formCreateWallet}
              getIdChangeWallet={getIdWallet}
              sendCoin={sendCoinWallet}
            />
          </div>
          <div className="row">
            <BlockChain 
              blocks={block}
              history={history} 
            />
            
          </div>
        </div>
      </div>
    </div>
);
}

export default App;