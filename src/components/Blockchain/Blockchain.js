import React, { useState } from 'react';
import Block from './Block';
import History from './History';

function BlockChain(props) {
    const [showHistory, setShowHistory] = useState(false); // show history or blockchain
    const {blocks, history} = props;

    function handleClick(){
        setShowHistory(!showHistory);
    }

    function showBlockFromEnd (blocks) {
        var elements = [];
        for(let i = blocks.length - 1; i >= 0; i--){
            elements.push(
                <Block 
                    key={blocks[i].id} 
                    name={blocks[i].name} 
                    hash={blocks[i].hash}
                    prevHash={blocks[i].prevHash}
                    data={blocks[i].data}
                />
            );
        }
        return elements;
    }

    function showHistoryFromEnd (history) {
        var elements = [];
        for(let i = history.length - 1; i >= 0; i--){
            elements.push(
                <History
                    key={history[i].id} 
                    from={history[i].from}
                    to={history[i].to}
                    coin={history[i].coin}
                    miner={history[i].miner}
                />
            );
        }
        return elements;
    }

    return (   
        <div style={{width: '100%'}}>
            <div className="card shadow" style={{marginBottom: '50px'}}>
                <div className="card-header-two">
                    <span className="txtFirst">BLOCKCHAIN</span>
                </div>
                
                <div className={"card-body"}> 
                    {showBlockFromEnd(blocks)}
                </div>
            </div>
            <div className="card shadow">
                <div className="card-header-two">
                    <span className="txtFirst">HISTORY</span>
                </div>
                {showHistoryFromEnd(history)}
            </div>
        </div>
    );
}

export default BlockChain;