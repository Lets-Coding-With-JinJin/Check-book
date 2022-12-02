import { async } from "@firebase/util";
import { dbService, useState } from "./fBase";
import React from "react";

const Nweet = ({nweetObj,isOwner})=>{
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick= async()=>{
        const ok=window.confirm("Are you sure you want to delete this nweet?");
        console.log(ok);
        if(ok){
            //delete nweet
            await dbService.doc(`nweets/&{nweetObj.id}`).delete();

        }

    };
    <div>
        <h4>{nweetObj.text}</h4>
        {isOwner && (
        <>
        <button onClick={onDeleteClick}>Delete Nweet</button>
        <button>Edit Nweet</button>
        </>
      )}
    </div>


        };

export default Nweet;